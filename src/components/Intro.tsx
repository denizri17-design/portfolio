"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const proof = [
  "13+ shipped products",
  "Web + iOS + Android",
  "AI / SaaS / CRM",
  "Los Angeles",
];

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
          Available for freelance & contract work
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

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.32 }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <a
            href="#work"
            className="inline-flex items-center rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:bg-[#d7dde8]"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium text-white transition hover:border-white/45"
          >
            Have a project? Let's talk
            <ArrowRight size={14} />
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.48 }}
          className="label mt-10 max-w-2xl text-white/40"
        >
          {proof.join("  ·  ")}
        </motion.p>
      </div>
    </section>
  );
}
