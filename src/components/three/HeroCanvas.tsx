"use client";

import { Component, Suspense, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sparkles } from "@react-three/drei";
import { useReducedMotion } from "framer-motion";
import * as THREE from "three";

function samplePositions(geometry: THREE.BufferGeometry, count: number) {
  const src = geometry.getAttribute("position");
  const out = new Float32Array(count * 3);
  const n = src.count;
  for (let i = 0; i < count; i++) {
    const idx = (i * 17) % n;
    out[i * 3] = src.getX(idx);
    out[i * 3 + 1] = src.getY(idx);
    out[i * 3 + 2] = src.getZ(idx);
  }
  geometry.dispose();
  return out;
}

function ParticleFigure({ count }: { count: number }) {
  const material = useRef<THREE.ShaderMaterial>(null);
  const pointer = useRef(new THREE.Vector2());

  const geometry = useMemo(() => {
    const a = samplePositions(new THREE.IcosahedronGeometry(1.45, 4), count);
    const b = samplePositions(new THREE.SphereGeometry(1.28, 48, 32), count);
    const c = samplePositions(new THREE.TorusKnotGeometry(0.88, 0.3, 160, 12), count);
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(a, 3));
    geo.setAttribute("aB", new THREE.BufferAttribute(b, 3));
    geo.setAttribute("aC", new THREE.BufferAttribute(c, 3));
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
    material.current.uniforms.uMouse.value.lerp(pointer.current, 0.08);
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
          attribute vec3 aB;
          attribute vec3 aC;
          uniform float uTime;
          uniform vec2 uMouse;
          varying float vMix;
          void main() {
            float phase = fract(uTime * 0.07);
            vec3 p = mix(position, aB, smoothstep(0.0, 0.28, phase));
            p = mix(p, aC, smoothstep(0.28, 0.58, phase));
            p = mix(p, position, smoothstep(0.58, 1.0, phase));
            p += sin(uTime * 1.6 + p.y * 5.0) * 0.035;
            p += vec3(uMouse.x, uMouse.y, 0.0) * 0.22;
            vMix = phase;
            vec4 mv = modelViewMatrix * vec4(p, 1.0);
            gl_PointSize = (2.6 + sin(uTime + p.x * 8.0) * 0.8) * (5.5 / -mv.z);
            gl_Position = projectionMatrix * mv;
          }
        `}
        fragmentShader={`
          varying float vMix;
          void main() {
            vec2 uv = gl_PointCoord - 0.5;
            float d = length(uv);
            if (d > 0.5) discard;
            vec3 mint = vec3(0.43, 0.95, 0.77);
            vec3 iris = vec3(0.55, 0.61, 1.0);
            vec3 col = mix(mint, iris, vMix);
            float alpha = smoothstep(0.5, 0.08, d);
            gl_FragColor = vec4(col, alpha * 0.85);
          }
        `}
      />
    </points>
  );
}

function Core({ lite }: { lite: boolean }) {
  const group = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.22;
    group.current.rotation.x += delta * 0.05;
  });

  return (
    <group ref={group}>
      <mesh>
        <icosahedronGeometry args={[1.05, lite ? 0 : 1]} />
        <MeshDistortMaterial
          color="#8b9cff"
          emissive="#1c2260"
          emissiveIntensity={0.35}
          distort={lite ? 0.28 : 0.48}
          speed={2.4}
          roughness={0.08}
          metalness={0.18}
          transmission={lite ? 0.15 : 0.55}
          thickness={1.1}
          iridescence={1}
          iridescenceIOR={1.3}
        />
      </mesh>
      <mesh>
        <icosahedronGeometry args={[1.18, 1]} />
        <meshBasicMaterial
          color="#6ef3c5"
          wireframe
          transparent
          opacity={0.22}
        />
      </mesh>
    </group>
  );
}

function Shards({ count }: { count: number }) {
  const ring = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (!ring.current) return;
    ring.current.rotation.y += delta * 0.2;
    ring.current.rotation.z += delta * 0.04;
  });

  return (
    <group ref={ring}>
      {Array.from({ length: count }, (_, i) => {
        const a = (i / count) * Math.PI * 2;
        const r = 2.15;
        return (
          <Float key={i} speed={1.6 + i * 0.04} floatIntensity={0.55} rotationIntensity={0.8}>
            <mesh
              position={[Math.cos(a) * r, Math.sin(a * 2) * 0.42, Math.sin(a) * r]}
              rotation={[a, a * 0.6, 0]}
            >
              <octahedronGeometry args={[0.085, 0]} />
              <meshStandardMaterial
                color={i % 2 ? "#6ef3c5" : "#8b9cff"}
                metalness={0.95}
                roughness={0.15}
                emissive={i % 2 ? "#0d3d30" : "#1a1f66"}
                emissiveIntensity={0.8}
              />
            </mesh>
          </Float>
        );
      })}
    </group>
  );
}

function Scene({ mobile }: { mobile: boolean }) {
  return (
    <>
      <ambientLight intensity={0.28} />
      <directionalLight position={[4, 6, 5]} intensity={1.5} color="#e8eeff" />
      <pointLight position={[-3, 2, 2]} intensity={18} color="#6ef3c5" distance={16} />
      <pointLight position={[3, -1, 3]} intensity={16} color="#8b9cff" distance={16} />

      <group position={mobile ? [0, 0.15, 0] : [1.35, 0.05, 0]} scale={mobile ? 0.78 : 1}>
        <ParticleFigure count={mobile ? 1600 : 5200} />
        <Core lite={mobile} />
        <Shards count={mobile ? 8 : 16} />
        <Sparkles
          count={mobile ? 28 : 70}
          scale={5.2}
          size={2.4}
          speed={0.55}
          color="#d7fff2"
          opacity={0.55}
        />
      </group>
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
        dpr={[1, mobile ? 1.2 : 1.6]}
        camera={{ position: [0, 0.15, 5.6], fov: 40 }}
      >
        <Suspense fallback={null}>
          <Scene mobile={mobile} />
        </Suspense>
      </Canvas>
    </CanvasErrorBoundary>
  );
}
