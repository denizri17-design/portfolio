"use client";

import { motion } from "framer-motion";

export function AnimatedBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[var(--color-bg)]" />
      <div className="absolute inset-0 bg-grid opacity-70" />

      <motion.div
        className="blob absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, rgba(124,92,255,0.45), transparent 70%)",
        }}
        animate={{ x: [0, 60, -20, 0], y: [0, 30, -10, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="blob absolute top-1/3 -right-40 h-[600px] w-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, rgba(0,212,255,0.35), transparent 70%)",
        }}
        animate={{ x: [0, -50, 30, 0], y: [0, 40, -20, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="blob absolute bottom-0 left-1/3 h-[500px] w-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, rgba(255,94,219,0.25), transparent 70%)",
        }}
        animate={{ x: [0, 40, -30, 0], y: [0, -30, 20, 0] }}
        transition={{ duration: 32, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="absolute inset-0 bg-noise" />
      <div
        className="absolute inset-x-0 top-0 h-40"
        style={{
          background:
            "linear-gradient(to bottom, rgba(10,10,15,0.9), transparent)",
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-40"
        style={{
          background:
            "linear-gradient(to top, rgba(10,10,15,0.9), transparent)",
        }}
      />
    </div>
  );
}
