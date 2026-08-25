"use client";

import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useReducedMotion } from "framer-motion";
import * as THREE from "three";

function Field({ count }: { count: number }) {
  const material = useRef<THREE.ShaderMaterial>(null);
  const pointer = useRef(new THREE.Vector2());

  const geometry = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 16;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return geo;
  }, [count]);

  useEffect(() => {
    const onMove = (event: PointerEvent) => {
      pointer.current.set(
        (event.clientX / window.innerWidth) * 2 - 1,
        -(event.clientY / window.innerHeight) * 2 + 1,
      );
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  useFrame((state) => {
    if (!material.current) return;
    material.current.uniforms.uTime.value = state.clock.elapsedTime;
    material.current.uniforms.uMouse.value.lerp(pointer.current, 0.06);
  });

  return (
    <points geometry={geometry}>
      <shaderMaterial
        ref={material}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        uniforms={{
          uTime: { value: 0 },
          uMouse: { value: new THREE.Vector2() },
        }}
        vertexShader={`
          uniform float uTime;
          uniform vec2 uMouse;
          void main() {
            vec3 p = position;
            p.x += sin(uTime * 0.15 + position.y * 0.4) * 0.18;
            p.y += cos(uTime * 0.12 + position.x * 0.3) * 0.12;
            p += vec3(uMouse.x, uMouse.y, 0.0) * 0.35;
            vec4 mv = modelViewMatrix * vec4(p, 1.0);
            gl_PointSize = 1.8 * (6.0 / -mv.z);
            gl_Position = projectionMatrix * mv;
          }
        `}
        fragmentShader={`
          void main() {
            float d = length(gl_PointCoord - 0.5);
            if (d > 0.5) discard;
            gl_FragColor = vec4(0.86, 0.88, 0.92, (1.0 - d * 2.0) * 0.22);
          }
        `}
      />
    </points>
  );
}

function Sculpture() {
  const knot = useRef<THREE.Mesh>(null);
  const ringA = useRef<THREE.Mesh>(null);
  const ringB = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (knot.current) {
      knot.current.rotation.y += delta * 0.22;
      knot.current.rotation.x += delta * 0.06;
    }
    if (ringA.current) ringA.current.rotation.z += delta * 0.18;
    if (ringB.current) ringB.current.rotation.x -= delta * 0.14;
  });

  return (
    <Float speed={1.1} rotationIntensity={0.12} floatIntensity={0.28}>
      <group position={[2.15, 0.1, -0.2]}>
        <mesh ref={knot}>
          <torusKnotGeometry args={[0.82, 0.24, 220, 36]} />
          <meshPhysicalMaterial
            color="#f3f6fb"
            roughness={0.04}
            metalness={0.12}
            transmission={0.86}
            thickness={1.35}
            ior={1.48}
            iridescence={1}
            iridescenceIOR={1.25}
            iridescenceThicknessRange={[80, 420]}
            clearcoat={1}
            clearcoatRoughness={0.08}
          />
        </mesh>
        <mesh ref={ringA} rotation={[Math.PI / 2.2, 0.2, 0]}>
          <torusGeometry args={[1.55, 0.01, 12, 96]} />
          <meshBasicMaterial color="#e8eef8" transparent opacity={0.55} />
        </mesh>
        <mesh ref={ringB} rotation={[0.4, Math.PI / 2.4, 0.3]}>
          <torusGeometry args={[1.28, 0.008, 12, 96]} />
          <meshBasicMaterial color="#c5d0e4" transparent opacity={0.4} />
        </mesh>
      </group>
    </Float>
  );
}

export function Atmosphere() {
  const reduce = useReducedMotion();
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const sync = () => setMobile(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  if (reduce) return null;

  return (
    <Canvas
      className="h-full w-full"
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      dpr={[1, mobile ? 1.2 : 1.5]}
      camera={{ position: [0, 0, 7], fov: 42 }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.55} />
        <directionalLight position={[4, 5, 6]} intensity={1.6} color="#f4f7ff" />
        <pointLight position={[-2, 1, 3]} intensity={8} color="#9eb0d4" distance={12} />
        <Field count={mobile ? 900 : 2800} />
        {!mobile && <Sculpture />}
      </Suspense>
    </Canvas>
  );
}
