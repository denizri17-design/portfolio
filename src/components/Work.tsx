"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/lib/i18n/LangProvider";
import { projects, type ProjectCategory } from "@/data/projects";
import { SectionHeader } from "./SectionHeader";
import { ProjectCard } from "./ProjectCard";
import { cn } from "@/lib/utils";

type FilterKey = "all" | ProjectCategory;

export function Work() {
  const { t } = useLang();
  const [filter, setFilter] = useState<FilterKey>("all");

  const filters: { key: FilterKey; label: string }[] = [
    { key: "all", label: t.work.filterAll },
    { key: "saas", label: t.work.filterSaas },
    { key: "crm", label: t.work.filterCrm },
    { key: "mobile", label: t.work.filterMobile },
    { key: "web", label: t.work.filterWeb },
    { key: "game", label: t.work.filterGame },
  ];

  const visible = useMemo(() => {
    if (filter === "all") return projects;
    return projects.filter((p) => p.category.includes(filter));
  }, [filter]);

  return (
    <section id="work" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="container-page">
        <SectionHeader
          kicker={t.work.kicker}
          title={t.work.title}
          subtitle={t.work.subtitle}
        />

        <div className="mb-10 flex flex-wrap items-center gap-2">
          {filters.map((f) => {
            const active = filter === f.key;
            const count =
              f.key === "all"
                ? projects.length
                : projects.filter((p) =>
                    p.category.includes(f.key as ProjectCategory),
                  ).length;
            return (
              <button
                key={f.key}
                type="button"
                onClick={() => setFilter(f.key)}
                className={cn(
                  "group inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-sm transition",
                  active
                    ? "border-white bg-white text-black"
                    : "border-white/10 bg-white/[0.02] text-white/70 hover:border-white/25 hover:text-white",
                )}
              >
                {f.label}
                <span
                  className={cn(
                    "rounded-full px-1.5 text-[11px] font-mono",
                    active
                      ? "bg-black/10 text-black/70"
                      : "bg-white/10 text-white/55",
                  )}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="popLayout">
          <motion.div
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-6"
          >
            {visible.map((p, i) => (
              <ProjectCard
                key={p.slug}
                project={p}
                index={i}
                featured={p.slug === "nextstep" && filter === "all"}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
