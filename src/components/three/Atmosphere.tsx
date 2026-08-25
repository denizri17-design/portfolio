"use client";

import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
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

function Crystal() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.08;
    ref.current.rotation.x += delta * 0.03;
  });
  return (
    <mesh ref={ref} position={[2.4, 0.1, -1.2]}>
      <icosahedronGeometry args={[1.6, 0]} />
      <meshPhysicalMaterial
        color="#cfd6e2"
        roughness={0.08}
        metalness={0.05}
        transmission={0.72}
        thickness={1.4}
        ior={1.45}
        transparent
        opacity={0.9}
      />
    </mesh>
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
        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 4, 5]} intensity={1.2} color="#e8eef8" />
        <Field count={mobile ? 900 : 2800} />
        {!mobile && <Crystal />}
      </Suspense>
    </Canvas>
  );
}
