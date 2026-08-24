"use client";

import { Suspense, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, Float, RoundedBox, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { asset } from "@/lib/asset";

const PHONE_SLOTS: {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: number;
}[] = [
  { position: [-1.08, 0.04, -0.18], rotation: [0.1, 0.5, -0.08], scale: 0.88 },
  { position: [0, 0.16, 0.28], rotation: [0.08, -0.06, 0], scale: 1 },
  { position: [1.08, -0.02, -0.12], rotation: [0.1, -0.52, 0.08], scale: 0.88 },
];

const SCREEN_SLOTS: {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: number;
}[] = [
  { position: [-1.55, 0.02, -0.28], rotation: [0.1, 0.42, -0.04], scale: 0.72 },
  { position: [0.05, 0.12, 0.22], rotation: [0.08, -0.12, 0], scale: 1 },
  { position: [1.55, -0.04, -0.22], rotation: [0.1, -0.44, 0.04], scale: 0.72 },
];

function padUrls(urls: string[], count: number) {
  if (urls.length === 0) return [];
  return Array.from({ length: count }, (_, i) => urls[i % urls.length]);
}

function ScreenMap({ url, w, h }: { url: string; w: number; h: number }) {
  const texture = useTexture(asset(url));
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 8;
  return (
    <mesh position={[0, 0, 0.039]}>
      <planeGeometry args={[w, h]} />
      <meshStandardMaterial map={texture} roughness={0.35} metalness={0.05} />
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
    <Float speed={1.35} rotationIntensity={0.14} floatIntensity={0.42}>
      <group position={position} rotation={rotation} scale={scale}>
        <RoundedBox args={[0.78, 1.62, 0.07]} radius={0.07} smoothness={4} castShadow>
          <meshStandardMaterial color="#111318" metalness={0.82} roughness={0.22} />
        </RoundedBox>
        <ScreenMap url={url} w={0.7} h={1.5} />
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
    <Float speed={1.15} rotationIntensity={0.1} floatIntensity={0.32}>
      <group position={position} rotation={rotation} scale={scale}>
        <RoundedBox args={[2.05, 1.28, 0.06]} radius={0.045} smoothness={4} castShadow>
          <meshStandardMaterial color="#12141a" metalness={0.8} roughness={0.24} />
        </RoundedBox>
        <ScreenMap url={url} w={1.92} h={1.16} />
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
      pointer.current.x * 0.22,
      0.06,
    );
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      pointer.current.y * 0.1,
      0.06,
    );
  });

  return <group ref={group}>{children}</group>;
}

function Scene({
  urls,
  kind,
}: {
  urls: string[];
  kind: "phone" | "screen";
}) {
  const slots = kind === "phone" ? PHONE_SLOTS : SCREEN_SLOTS;
  const framed = useMemo(() => padUrls(urls, slots.length), [urls, slots.length]);

  return (
    <>
      <ambientLight intensity={0.35} />
      <directionalLight position={[3, 5, 4]} intensity={1.55} color="#f2f5ff" />
      <pointLight position={[-2.4, 1.4, 2]} intensity={10} color="#6ef3c5" distance={10} />
      <pointLight position={[2.6, -0.6, 2]} intensity={8} color="#8b9cff" distance={10} />
      <Rig>
        {framed.map((url, i) =>
          kind === "phone" ? (
            <Phone key={`${url}-${i}`} url={url} {...slots[i]} />
          ) : (
            <Monitor key={`${url}-${i}`} url={url} {...slots[i]} />
          ),
        )}
      </Rig>
      <ContactShadows position={[0, -1.45, 0]} opacity={0.4} scale={10} blur={2.8} far={4} />
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
      { threshold: 0.12, rootMargin: "80px" },
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={host} className="h-full w-full">
      {visible ? (
        <Canvas
          className="h-full w-full"
          gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
          dpr={[1, 1.4]}
          camera={{ position: [0, 0.2, 5.4], fov: 34 }}
        >
          <Suspense fallback={null}>
            <Scene urls={urls} kind={kind} />
          </Suspense>
        </Canvas>
      ) : null}
    </div>
  );
}
