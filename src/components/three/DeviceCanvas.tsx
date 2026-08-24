"use client";

import { Suspense, useEffect, useRef, useState, type ReactNode } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, Float, RoundedBox, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { asset } from "@/lib/asset";

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

function Phone({ url, position, rotation }: { url: string; position: [number, number, number]; rotation: [number, number, number] }) {
  return (
    <Float speed={1.5} rotationIntensity={0.18} floatIntensity={0.55}>
      <group position={position} rotation={rotation}>
        <RoundedBox args={[0.78, 1.62, 0.07]} radius={0.07} smoothness={4} castShadow>
          <meshStandardMaterial color="#111318" metalness={0.82} roughness={0.22} />
        </RoundedBox>
        <ScreenMap url={url} w={0.7} h={1.5} />
      </group>
    </Float>
  );
}

function Monitor({ url }: { url: string }) {
  return (
    <Float speed={1.25} rotationIntensity={0.12} floatIntensity={0.4}>
      <group rotation={[0.12, -0.38, 0.02]}>
        <RoundedBox args={[2.35, 1.48, 0.06]} radius={0.05} smoothness={4} castShadow>
          <meshStandardMaterial color="#12141a" metalness={0.8} roughness={0.24} />
        </RoundedBox>
        <ScreenMap url={url} w={2.2} h={1.34} />
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
      pointer.current.x * 0.28,
      0.06,
    );
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      pointer.current.y * 0.12,
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
  return (
    <>
      <ambientLight intensity={0.35} />
      <directionalLight position={[3, 5, 4]} intensity={1.6} color="#f2f5ff" />
      <pointLight position={[-2.4, 1.4, 2]} intensity={10} color="#6ef3c5" distance={10} />
      <pointLight position={[2.6, -0.6, 2]} intensity={8} color="#8b9cff" distance={10} />
      <Rig>
        {kind === "phone" ? (
          urls.length > 1 ? (
            <>
              <Phone url={urls[0]} position={[-0.62, 0.08, 0.15]} rotation={[0.12, 0.42, -0.06]} />
              <Phone url={urls[1]} position={[0.62, -0.04, -0.05]} rotation={[0.1, -0.46, 0.05]} />
            </>
          ) : (
            <Phone url={urls[0]} position={[0, 0.05, 0]} rotation={[0.14, -0.42, 0.04]} />
          )
        ) : (
          <Monitor url={urls[0]} />
        )}
      </Rig>
      <ContactShadows position={[0, -1.35, 0]} opacity={0.45} scale={8} blur={2.6} far={3.5} />
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
      { threshold: 0.12 },
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
          dpr={[1, 1.5]}
          camera={{ position: [0, 0.15, 4.2], fov: 32 }}
        >
          <Suspense fallback={null}>
            <Scene urls={urls} kind={kind} />
          </Suspense>
        </Canvas>
      ) : null}
    </div>
  );
}
