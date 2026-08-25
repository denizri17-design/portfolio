"use client";

import { motion } from "framer-motion";

export function Intro() {
  return (
    <section
      id="top"
      className="chapter relative flex flex-col justify-end px-5 pb-16 pt-28 sm:px-10 sm:pb-20"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[var(--color-bg)] via-[var(--color-bg)]/55 to-transparent" />
      <div className="relative z-10 max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="label mb-6"
        >
          Selected work / 2024-2026
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.7 }}
          className="font-display text-[clamp(3.4rem,12vw,9.5rem)] font-semibold leading-[0.88] tracking-[-0.05em]"
        >
          Ri Abba
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-8 max-w-xl text-base text-white/55 sm:text-lg"
        >
          Fullstack products that ship: AI SaaS, multi-tenant CRMs, native
          iOS/Android, and indie games.
        </motion.p>
        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          href="#work"
          className="label mt-12 inline-block text-white/70"
        >
          Scroll the reel
        </motion.a>
      </div>
    </section>
  );
}
