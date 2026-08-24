"use client";

import { motion } from "framer-motion";

export function AnimatedBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[var(--color-bg)]" />
      <div className="absolute inset-0 bg-grid opacity-80" />

      <motion.div
        className="blob absolute -top-48 left-[-10%] h-[560px] w-[560px] rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, rgba(212,165,116,0.22), transparent 70%)",
        }}
        animate={{ x: [0, 40, -16, 0], y: [0, 24, -8, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="blob absolute top-[38%] -right-40 h-[520px] w-[520px] rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, rgba(224,122,95,0.16), transparent 70%)",
        }}
        animate={{ x: [0, -36, 20, 0], y: [0, 28, -16, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="blob absolute -bottom-20 left-1/3 h-[420px] w-[420px] rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, rgba(240,217,181,0.1), transparent 70%)",
        }}
        animate={{ x: [0, 24, -20, 0], y: [0, -20, 14, 0] }}
        transition={{ duration: 34, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="absolute inset-0 bg-noise" />
      <div
        className="absolute inset-x-0 top-0 h-40"
        style={{
          background: "linear-gradient(to bottom, rgba(11,10,9,0.92), transparent)",
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-40"
        style={{
          background: "linear-gradient(to top, rgba(11,10,9,0.92), transparent)",
        }}
      />
    </div>
  );
}
