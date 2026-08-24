"use client";

import { Suspense, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { ContactShadows, Float, RoundedBox, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { asset } from "@/lib/asset";

function padUrls(urls: string[], count: number) {
  if (urls.length === 0) return [];
  return Array.from({ length: count }, (_, i) => urls[i % urls.length]);
}

function ScreenMap({ url, w, h }: { url: string; w: number; h: number }) {
  const texture = useTexture(asset(url));
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 8;
  return (
    <mesh position={[0, 0, 0.041]}>
      <planeGeometry args={[w, h]} />
      <meshBasicMaterial map={texture} toneMapped={false} />
    </mesh>
  );
}

function Phone({
  url,
  position,
  rotation,
  scale,
}: {
  url: string;
  position: [number, number, number];
  rotation: [number, number, number];
  scale: number;
}) {
  return (
    <Float speed={1.1} rotationIntensity={0.06} floatIntensity={0.18}>
      <group position={position} rotation={rotation} scale={scale}>
        <RoundedBox args={[0.82, 1.7, 0.07]} radius={0.07} smoothness={4}>
          <meshStandardMaterial color="#1c1f28" metalness={0.55} roughness={0.35} />
        </RoundedBox>
        <ScreenMap url={url} w={0.74} h={1.58} />
      </group>
    </Float>
  );
}

function Monitor({
  url,
  position,
  rotation,
  scale,
}: {
  url: string;
  position: [number, number, number];
  rotation: [number, number, number];
  scale: number;
}) {
  return (
    <Float speed={1} rotationIntensity={0.05} floatIntensity={0.14}>
      <group position={position} rotation={rotation} scale={scale}>
        <RoundedBox args={[2.15, 1.34, 0.06]} radius={0.045} smoothness={4}>
          <meshStandardMaterial color="#1c1f28" metalness={0.55} roughness={0.35} />
        </RoundedBox>
        <ScreenMap url={url} w={2.02} h={1.22} />
      </group>
    </Float>
  );
}

function Rig({ children }: { children: ReactNode }) {
  const group = useRef<THREE.Group>(null);
  const pointer = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (event: PointerEvent) => {
      pointer.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = (event.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  useFrame(() => {
    if (!group.current) return;
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      pointer.current.x * 0.08,
      0.06,
    );
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      pointer.current.y * 0.04,
      0.06,
    );
  });

  return <group ref={group}>{children}</group>;
}

function SpreadDevices({
  urls,
  kind,
}: {
  urls: string[];
  kind: "phone" | "screen";
}) {
  const { viewport } = useThree();
  const framed = useMemo(() => padUrls(urls, 3), [urls]);
  const isPhone = kind === "phone";
  const baseW = isPhone ? 0.82 : 2.15;
  const baseH = isPhone ? 1.7 : 1.34;

  const scale = Math.min(
    (viewport.height * 0.86) / baseH,
    (viewport.width * 0.3) / baseW,
  );
  const half = baseW * scale * 0.5;
  const x = Math.max(viewport.width * 0.5 - half - 0.12, scale * 0.9);

  const slots = [
    {
      position: [-x, 0, 0] as [number, number, number],
      rotation: [0.03, 0.12, -0.02] as [number, number, number],
      scale: scale * 0.94,
    },
    {
      position: [0, 0.03, 0.08] as [number, number, number],
      rotation: [0.02, 0, 0] as [number, number, number],
      scale,
    },
    {
      position: [x, 0, 0] as [number, number, number],
      rotation: [0.03, -0.12, 0.02] as [number, number, number],
      scale: scale * 0.94,
    },
  ];

  return (
    <Rig>
      {framed.map((url, i) =>
        isPhone ? (
          <Phone key={`${url}-${i}`} url={url} {...slots[i]} />
        ) : (
          <Monitor key={`${url}-${i}`} url={url} {...slots[i]} />
        ),
      )}
    </Rig>
  );
}

function Scene({
  urls,
  kind,
}: {
  urls: string[];
  kind: "phone" | "screen";
}) {
  return (
    <>
      <ambientLight intensity={1.15} />
      <directionalLight position={[0, 2.4, 6]} intensity={1.8} color="#ffffff" />
      <SpreadDevices urls={urls} kind={kind} />
      <ContactShadows position={[0, -1.55, 0]} opacity={0.28} scale={14} blur={3.2} far={4} />
    </>
  );
}

export function DeviceCanvas({
  urls,
  kind,
}: {
  urls: string[];
  kind: "phone" | "screen";
}) {
  const host = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = host.current;
    if (!node) return;
    const io = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.08, rootMargin: "80px" },
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={host} className="h-full w-full">
      {visible ? (
        <Canvas
          className="h-full w-full"
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: "high-performance",
            toneMapping: THREE.NoToneMapping,
            outputColorSpace: THREE.SRGBColorSpace,
          }}
          dpr={[1, 1.6]}
          camera={{ position: [0, 0.05, 5], fov: 36 }}
        >
          <Suspense fallback={null}>
            <Scene urls={urls} kind={kind} />
          </Suspense>
        </Canvas>
      ) : null}
    </div>
  );
}
