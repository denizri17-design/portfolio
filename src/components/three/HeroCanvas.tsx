"use client";

import { Component, Suspense, useEffect, useRef, useState, type ReactNode } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { ContactShadows, Float, useTexture } from "@react-three/drei";
import { useReducedMotion } from "framer-motion";
import * as THREE from "three";
import { asset } from "@/lib/asset";

const ART = [
  {
    url: "/projects/ourfit-phone.webp",
    position: [-1.55, 0.38, 0.2] as [number, number, number],
    rotation: [0.05, 0.46, -0.05] as [number, number, number],
    w: 1.12,
    h: 1.68,
  },
  {
    url: "/projects/local-adjuster-overview.webp",
    position: [1.48, 0.22, -0.1] as [number, number, number],
    rotation: [0.03, -0.4, 0.04] as [number, number, number],
    w: 1.62,
    h: 1.16,
  },
  {
    url: "/projects/nextstep-hero.webp",
    position: [0.12, -0.92, -0.9] as [number, number, number],
    rotation: [-0.1, 0.1, 0.02] as [number, number, number],
    w: 1.78,
    h: 1.08,
  },
];

function Painting({
  url,
  position,
  rotation,
  w,
  h,
}: {
  url: string;
  position: [number, number, number];
  rotation: [number, number, number];
  w: number;
  h: number;
}) {
  const texture = useTexture(asset(url));
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 8;

  return (
    <Float speed={1.15} rotationIntensity={0.16} floatIntensity={0.42}>
      <group position={position} rotation={rotation}>
        <mesh castShadow>
          <boxGeometry args={[w + 0.14, h + 0.14, 0.09]} />
          <meshStandardMaterial color="#14171d" metalness={0.88} roughness={0.26} />
        </mesh>
        <mesh position={[0, 0, 0.048]}>
          <boxGeometry args={[w + 0.05, h + 0.05, 0.012]} />
          <meshStandardMaterial color="#3d4454" metalness={0.92} roughness={0.18} />
        </mesh>
        <mesh position={[0, 0, 0.056]}>
          <planeGeometry args={[w, h]} />
          <meshStandardMaterial map={texture} roughness={0.42} metalness={0.04} />
        </mesh>
      </group>
    </Float>
  );
}

function Knot({ lite }: { lite: boolean }) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.28;
    ref.current.rotation.x += delta * 0.07;
  });

  return (
    <Float speed={1.8} floatIntensity={0.32} rotationIntensity={0.22}>
      <mesh ref={ref} position={[0.08, 0.58, 0.62]} castShadow>
        <torusKnotGeometry args={[0.4, 0.135, lite ? 90 : 200, lite ? 16 : 32]} />
        <meshPhysicalMaterial
          color="#9aa6ff"
          emissive="#1b2266"
          emissiveIntensity={0.18}
          roughness={0.1}
          metalness={lite ? 0.55 : 0.12}
          transmission={lite ? 0 : 0.82}
          thickness={1.05}
          ior={1.48}
          iridescence={1}
          iridescenceIOR={1.3}
          iridescenceThicknessRange={[120, 740]}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </mesh>
    </Float>
  );
}

function CameraRig() {
  const { camera } = useThree();
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
    camera.position.x = THREE.MathUtils.lerp(
      camera.position.x,
      pointer.current.x * 0.5,
      0.045,
    );
    camera.position.y = THREE.MathUtils.lerp(
      camera.position.y,
      0.18 + pointer.current.y * 0.2,
      0.045,
    );
    camera.lookAt(0.35, 0.08, 0);
  });

  return null;
}

function Scene({ mobile }: { mobile: boolean }) {
  return (
    <>
      <ambientLight intensity={0.32} />
      <directionalLight position={[4.2, 6.2, 4]} intensity={1.35} color="#e8eeff" />
      <pointLight position={[-3.2, 2.2, 2.4]} intensity={14} color="#6ef3c5" distance={14} />
      <pointLight position={[3.4, -1.1, 3]} intensity={12} color="#8b9cff" distance={14} />
      <fog attach="fog" args={["#05060a", 7.5, 16]} />

      <group
        position={mobile ? [0, 0.15, 0] : [1.45, 0.08, 0]}
        scale={mobile ? 0.68 : 1}
      >
        {ART.map((piece) => (
          <Painting key={piece.url} {...piece} />
        ))}
        <Knot lite={mobile} />
      </group>

      <ContactShadows
        position={[0, -1.85, 0]}
        opacity={0.38}
        scale={14}
        blur={2.4}
        far={5}
      />
      <CameraRig />
    </>
  );
}

class CanvasErrorBoundary extends Component<
  { children: ReactNode; fallback: ReactNode },
  { failed: boolean }
> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  render() {
    if (this.state.failed) return this.props.fallback;
    return this.props.children;
  }
}

function FallbackWash() {
  return (
    <div
      aria-hidden
      className="absolute inset-0"
      style={{
        background:
          "radial-gradient(ellipse 50% 45% at 72% 42%, rgba(110,243,197,0.16), transparent 58%), radial-gradient(ellipse 45% 40% at 30% 70%, rgba(139,156,255,0.14), transparent 55%)",
      }}
    />
  );
}

export function HeroCanvas() {
  const reduceMotion = useReducedMotion();
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const sync = () => setMobile(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  if (reduceMotion) return <FallbackWash />;

  return (
    <CanvasErrorBoundary fallback={<FallbackWash />}>
      <Canvas
        className="h-full w-full"
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        dpr={[1, mobile ? 1.25 : 1.6]}
        camera={{ position: [0, 0.2, 6.4], fov: 36 }}
      >
        <Suspense fallback={null}>
          <Scene mobile={mobile} />
        </Suspense>
      </Canvas>
    </CanvasErrorBoundary>
  );
}
