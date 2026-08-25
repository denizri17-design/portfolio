"use client";

import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import { t } from "@/lib/i18n/dict";

const EMAIL = "info@abbaristudio.com";

const kinds = ["Web App", "Mobile App", "AI", "CRM", "Other"] as const;
const budgets = ["$500-1k", "$1-3k", "$3-10k", "$10k+"] as const;
const timelines = ["ASAP", "2-4 weeks", "1-3 months", "Flexible"] as const;

export function LeadForm() {
  const [kind, setKind] = useState<(typeof kinds)[number]>("Web App");
  const [budget, setBudget] = useState<(typeof budgets)[number]>("$3-10k");
  const [timeline, setTimeline] = useState<(typeof timelines)[number]>("1-3 months");
  const [about, setAbout] = useState("");

  const href = useMemo(() => {
    const subject = `Project inquiry - ${kind} - ${budget}`;
    const body = [
      `What I'm building: ${kind}`,
      `Budget: ${budget}`,
      `Timeline: ${timeline}`,
      "",
      about.trim() || "(no extra notes)",
    ].join("\n");
    return `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [kind, budget, timeline, about]);

  return (
    <form
      className="mt-10 max-w-xl space-y-6"
      onSubmit={(event) => {
        event.preventDefault();
        window.location.href = href;
      }}
    >
      <fieldset>
        <legend className="label">{t.contact.formKind}</legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {kinds.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setKind(option)}
              className={`rounded-full border px-3.5 py-1.5 text-sm transition ${
                kind === option
                  ? "border-white bg-white text-black"
                  : "border-white/15 text-white/70 hover:border-white/35"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend className="label">{t.contact.formBudget}</legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {budgets.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setBudget(option)}
              className={`rounded-full border px-3.5 py-1.5 text-sm transition ${
                budget === option
                  ? "border-white bg-white text-black"
                  : "border-white/15 text-white/70 hover:border-white/35"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend className="label">{t.contact.formTimeline}</legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {timelines.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setTimeline(option)}
              className={`rounded-full border px-3.5 py-1.5 text-sm transition ${
                timeline === option
                  ? "border-white bg-white text-black"
                  : "border-white/15 text-white/70 hover:border-white/35"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </fieldset>

      <label className="block">
        <span className="label">{t.contact.formAbout}</span>
        <textarea
          value={about}
          onChange={(event) => setAbout(event.target.value)}
          rows={4}
          placeholder="What should this product do for the first users?"
          className="mt-3 w-full resize-none rounded-2xl border border-white/12 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none placeholder:text-white/25 focus:border-white/35"
        />
      </label>

      <button
        type="submit"
        className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-[#d7dde8]"
      >
        {t.contact.start}
        <ArrowRight size={15} />
      </button>
      <p className="label text-white/30">{t.contact.formHint}</p>
    </form>
  );
}
