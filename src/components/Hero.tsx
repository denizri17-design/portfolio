"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Github, Sparkles } from "lucide-react";
import { t } from "@/lib/i18n/dict";
import { Magnetic } from "./Magnetic";
import { Counter } from "./Counter";

function parseStatNumber(s: string): { num: number; suffix: string } | null {
  const m = s.match(/^(\d+)(.*)$/);
  if (!m) return null;
  return { num: Number(m[1]), suffix: m[2] };
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-center pt-32 pb-20"
    >
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/70"
        >
          <span className="relative grid h-1.5 w-1.5">
            <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/70" />
            <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </span>
          {t.hero.eyebrow}
        </motion.div>

        <h1 className="font-display text-[clamp(2.4rem,7.5vw,5.8rem)] font-semibold leading-[1.02] tracking-[-0.03em]">
          <motion.span
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="block text-white/90"
          >
            {t.hero.titleA}{" "}
            <span className="gradient-text-brand">{t.hero.titleB}</span>
            {t.hero.titleC}
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="block text-white/90"
          >
            {t.hero.titleD}
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="block text-white/50"
          >
            {t.hero.titleE}
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-8 max-w-2xl text-base text-white/65 sm:text-lg"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <Magnetic strength={10}>
            <a
              href="#work"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-5 py-3 text-sm font-medium text-black shadow-[0_10px_40px_-10px_rgba(255,255,255,0.55)] transition hover:bg-white/95"
            >
              <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-black/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <Sparkles size={16} />
              {t.hero.ctaWork}
              <ArrowDown
                size={16}
                className="transition-transform group-hover:translate-y-0.5"
              />
            </a>
          </Magnetic>
          <Magnetic strength={8}>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-5 py-3 text-sm font-medium text-white transition hover:border-white/30 hover:bg-white/[0.06]"
            >
              {t.hero.ctaContact}
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </Magnetic>
          <a
            href="https://github.com/denizri17-design"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-3 text-sm text-white/70 transition hover:border-white/20 hover:text-white"
          >
            <Github size={16} />
            github.com/denizri17-design
          </a>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] sm:grid-cols-3"
        >
          {t.hero.stats.map((s) => {
            const parsed = parseStatNumber(s.k);
            return (
              <div
                key={s.v}
                className="group relative overflow-hidden bg-[var(--color-bg)]/40 px-6 py-5 transition-colors sm:py-7 hover:bg-[var(--color-bg)]/60"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(380px circle at 30% 30%, rgba(124,92,255,0.15), transparent 70%)",
                  }}
                />
                <dt className="relative font-display text-3xl font-semibold text-white sm:text-4xl">
                  {parsed ? (
                    <>
                      <Counter to={parsed.num} />
                      {parsed.suffix}
                    </>
                  ) : (
                    s.k
                  )}
                </dt>
                <dd className="relative mt-1 text-sm text-white/55">{s.v}</dd>
              </div>
            );
          })}
        </motion.dl>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="container-page mt-16 flex items-center justify-center sm:mt-24"
      >
        <a
          href="#work"
          className="flex flex-col items-center gap-2 text-xs text-white/40 transition hover:text-white/70"
        >
          <span className="font-mono uppercase tracking-[0.25em]">scroll</span>
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={14} />
          </motion.span>
        </a>
      </motion.div>
    </section>
  );
}
