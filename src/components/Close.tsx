"use client";

import { useState } from "react";
import { Check, Copy, Github, Mail } from "lucide-react";
import { t } from "@/lib/i18n/dict";

const EMAIL = "info@abbaristudio.com";

export function Close() {
  const [copied, setCopied] = useState(false);
  const year = new Date().getFullYear();

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // ignore
    }
  };

  return (
    <>
      <section
        id="about"
        className="chapter relative flex flex-col justify-center px-5 py-24 sm:px-10"
      >
        <p className="label">{t.about.kicker}</p>
        <h2 className="mt-4 max-w-4xl font-display text-[clamp(2rem,5vw,4.2rem)] font-semibold leading-[1.02] tracking-[-0.04em]">
          {t.about.title}
        </h2>
        <div className="mt-8 max-w-2xl space-y-4 text-base leading-relaxed text-white/55">
          {t.about.body.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="chapter relative flex flex-col justify-center px-5 py-24 sm:px-10"
      >
        <p className="label">{t.contact.kicker}</p>
        <h2 className="mt-4 font-display text-[clamp(2.2rem,6vw,5rem)] font-semibold leading-[0.95] tracking-[-0.04em]">
          {t.contact.title}
        </h2>
        <p className="mt-6 max-w-lg text-white/50">{t.contact.subtitle}</p>
        <a
          href={`mailto:${EMAIL}`}
          className="mt-10 font-display text-2xl tracking-tight text-white sm:text-4xl"
        >
          {EMAIL}
        </a>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm text-black"
          >
            <Mail size={14} />
            {t.contact.emailCta}
          </a>
          <button
            type="button"
            onClick={copy}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm text-white/80"
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
            {copied ? t.contact.copied : t.contact.copyEmail}
          </button>
          <a
            href="https://github.com/denizri17-design"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm text-white/80"
          >
            <Github size={14} />
            {t.contact.ghCta}
          </a>
        </div>
        <p className="label mt-20 text-white/30">
          {year} / {t.footer.built}
        </p>
      </section>
    </>
  );
}
