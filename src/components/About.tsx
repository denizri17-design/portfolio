"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { t } from "@/lib/i18n/dict";
import { SectionHeader } from "./SectionHeader";

export function About() {
  return (
    <section id="about" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="container-page">
        <SectionHeader kicker={t.about.kicker} title={t.about.title} />

        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-5 text-lg leading-relaxed text-white/75">
            {t.about.body.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                {p}
              </motion.p>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="glass rounded-2xl p-6"
          >
            <ul className="space-y-3 text-sm">
              {t.about.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-white/75">
                  <span className="mt-0.5 grid h-5 w-5 flex-shrink-0 place-items-center rounded-full bg-gradient-to-br from-violet-500/30 to-cyan-400/30 ring-1 ring-white/10">
                    <Check size={12} className="text-white" />
                  </span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
