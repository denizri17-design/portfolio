"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Copy, Check, Github, Mail } from "lucide-react";
import { t } from "@/lib/i18n/dict";
import { SectionHeader } from "./SectionHeader";

const EMAIL = "hello@riabba.dev";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // ignore
    }
  };

  return (
    <section id="contact" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="container-page">
        <SectionHeader
          kicker={t.contact.kicker}
          title={t.contact.title}
          subtitle={t.contact.subtitle}
        />

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-violet-600/20 via-fuchsia-500/10 to-cyan-500/20 p-8 sm:p-12"
        >
          <div className="absolute inset-0 bg-grid opacity-40" />
          <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-violet-500/30 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <a
                href={`mailto:${EMAIL}`}
                className="group inline-flex items-center gap-2 font-display text-3xl font-semibold tracking-tight text-white transition hover:text-white sm:text-4xl"
              >
                {EMAIL}
                <ArrowUpRight
                  size={22}
                  className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-white/90"
                >
                  <Mail size={15} />
                  {t.contact.emailCta}
                </a>
                <button
                  type="button"
                  onClick={copy}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-medium text-white transition hover:border-white/30"
                >
                  {copied ? <Check size={15} /> : <Copy size={15} />}
                  {copied ? t.contact.copied : t.contact.copyEmail}
                </button>
                <a
                  href="https://github.com/denizri17-design"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-medium text-white/80 transition hover:border-white/25 hover:text-white"
                >
                  <Github size={15} />
                  {t.contact.ghCta}
                </a>
              </div>
            </div>

            <ul className="grid grid-cols-1 gap-2 text-sm text-white/75 sm:grid-cols-2">
              <li className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/40">
                  Timezone
                </div>
                <div className="mt-1 text-base text-white">PST · UTC-8</div>
              </li>
              <li className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/40">
                  Response
                </div>
                <div className="mt-1 text-base text-white">&lt; 24h</div>
              </li>
              <li className="col-span-full rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/40">
                  Good fit
                </div>
                <div className="mt-1 text-sm text-white/80">
                  AI SaaS · Multi-tenant CRMs · iOS/Android native · Marketing
                  sites with motion
                </div>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
