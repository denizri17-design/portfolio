"use client";

import { motion } from "framer-motion";
import { t } from "@/lib/i18n/dict";
import { SectionHeader } from "./SectionHeader";

const groups = [
  {
    label: "Frontend",
    items: [
      "Next.js 15/16",
      "React 19",
      "TypeScript",
      "Tailwind v4",
      "Framer Motion",
      "GSAP",
      "shadcn/ui",
      "Radix",
    ],
  },
  {
    label: "Mobile & Games",
    items: [
      "React Native",
      "Expo SDK 54",
      "Unity",
      "C#",
      "expo-router",
      "Mapbox",
      "expo-iap",
      "AdMob",
      "EAS Build",
    ],
  },
  {
    label: "Backend",
    items: [
      "Node.js",
      "Express",
      "FastAPI",
      "Python 3.12+",
      "Laravel 11",
      "PHP",
      "REST",
      "WebSockets",
    ],
  },
  {
    label: "Data & Auth",
    items: [
      "PostgreSQL",
      "Supabase",
      "Drizzle ORM",
      "MySQL",
      "Vercel Postgres",
      "Vercel Blob",
      "Stripe",
      "JWT + RBAC",
    ],
  },
  {
    label: "AI",
    items: [
      "OpenAI",
      "Multi-judge LLM",
      "Versioned prompts",
      "Embeddings",
      "Streaming",
      "Function calling",
    ],
  },
  {
    label: "DevOps",
    items: [
      "Vercel",
      "Hetzner / Forge",
      "Turborepo",
      "pnpm workspaces",
      "GitHub Actions",
      "Sentry",
    ],
  },
];

const marqueeRow = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind",
  "Framer Motion",
  "Expo",
  "React Native",
  "Unity",
  "C#",
  "FastAPI",
  "Python",
  "Node.js",
  "Laravel",
  "Postgres",
  "Supabase",
  "Drizzle",
  "Stripe",
  "OpenAI",
  "Mapbox",
  "Turborepo",
  "Vercel",
];

export function Stack() {
  return (
    <section id="stack" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="container-page">
        <SectionHeader
          kicker={t.stack.kicker}
          title={t.stack.title}
          subtitle={t.stack.subtitle}
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((g, i) => (
            <motion.div
              key={g.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="glass rounded-2xl p-5"
            >
              <h3 className="mb-3 font-mono text-[11px] uppercase tracking-[0.25em] text-white/45">
                {g.label}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {g.items.map((it) => (
                  <span
                    key={it}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[12px] text-white/75"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="relative mt-16 overflow-hidden border-y border-white/10 bg-white/[0.015] py-5">
        <div className="marquee flex w-max items-center gap-12 whitespace-nowrap">
          {[...marqueeRow, ...marqueeRow].map((s, i) => (
            <span
              key={`${s}-${i}`}
              className="font-display text-2xl font-medium text-white/35 sm:text-3xl"
            >
              {s}
              <span className="ml-12 text-white/15">★</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
