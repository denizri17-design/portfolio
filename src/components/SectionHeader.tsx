"use client";

import { motion } from "framer-motion";

export function SectionHeader({
  kicker,
  title,
  subtitle,
}: {
  kicker: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-12 max-w-3xl sm:mb-16">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
        className="mb-3 inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-white/50"
      >
        <span className="h-px w-8 bg-white/30" />
        {kicker}
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="font-display text-[clamp(1.8rem,4vw,3rem)] font-semibold leading-tight tracking-[-0.02em] text-white"
      >
        {title}
      </motion.h2>
      {subtitle ? (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 max-w-2xl text-base text-white/60"
        >
          {subtitle}
        </motion.p>
      ) : null}
    </div>
  );
}
