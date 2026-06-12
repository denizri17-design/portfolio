"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { ArrowUpRight, ExternalLink, Github, Lock } from "lucide-react";
import { useLang } from "@/lib/i18n/LangProvider";
import { cn } from "@/lib/utils";
import { ProjectIcon } from "./ProjectIcon";
import type { Project } from "@/data/projects";

const statusLabel: Record<Project["status"], { en: string; ru: string }> = {
  shipped: { en: "Shipped", ru: "Выпущено" },
  "in-production": { en: "In production", ru: "В проде" },
  live: { en: "Live", ru: "В работе" },
};

export function ProjectCard({
  project,
  index,
  featured = false,
}: {
  project: Project;
  index: number;
  featured?: boolean;
}) {
  const { lang, t } = useLang();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const spotlight = useMotionTemplate`radial-gradient(420px circle at ${mouseX}px ${mouseY}px, rgba(255,255,255,0.07), transparent 60%)`;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay: Math.min(index * 0.05, 0.4) }}
      onMouseMove={onMove}
      className={cn(
        "group relative isolate flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-[var(--color-surface)]/60 backdrop-blur-md transition-all duration-500 hover:border-white/20 hover:-translate-y-1",
        featured && "lg:col-span-2",
      )}
    >
      <motion.div
        aria-hidden
        style={{ background: spotlight }}
        className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />

      {/* Cover */}
      <div
        className={cn(
          "relative h-44 overflow-hidden sm:h-52",
          "bg-gradient-to-br",
          project.cover.gradient,
        )}
      >
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.18),transparent_60%)]" />

        <div className="absolute left-5 top-5 flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-black/40 px-2.5 py-1 text-[11px] font-medium text-white/85 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            {statusLabel[project.status][lang]}
          </span>
          <span className="inline-flex items-center rounded-full border border-white/10 bg-black/30 px-2.5 py-1 font-mono text-[11px] tracking-wider text-white/70 backdrop-blur">
            {project.year}
          </span>
        </div>

        {project.isPrivate && (
          <div className="absolute right-5 top-5 inline-flex items-center gap-1 rounded-full border border-white/10 bg-black/40 px-2.5 py-1 text-[11px] text-white/70 backdrop-blur">
            <Lock size={11} />
            Private
          </div>
        )}

        <motion.div
          className={cn(
            "absolute inset-x-0 bottom-0 flex items-end justify-center pb-7",
          )}
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <div
            className={cn(
              "grid h-20 w-20 place-items-center rounded-2xl bg-black/40 ring-1 backdrop-blur-md",
              project.cover.accent,
            )}
          >
            <ProjectIcon
              name={project.cover.icon}
              size={36}
              className="text-white"
            />
          </div>
        </motion.div>
      </div>

      <div className="relative z-10 flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="font-display text-2xl font-semibold tracking-tight text-white">
          {project.name}
        </h3>
        <p className="mt-1.5 text-sm text-white/55">
          {project.tagline[lang]}
        </p>

        <p className="mt-4 text-[15px] leading-relaxed text-white/75">
          {project.description[lang]}
        </p>

        <ul className="mt-5 space-y-1.5 text-[13.5px] text-white/65">
          {project.bullets[lang].slice(0, 4).map((b) => (
            <li key={b} className="flex gap-2 leading-snug">
              <span className="mt-2 inline-block h-1 w-1 flex-shrink-0 rounded-full bg-white/40" />
              <span>{b}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-1.5">
          {project.stack.slice(0, 7).map((s) => (
            <span
              key={s}
              className="rounded-full border border-white/10 bg-white/[0.03] px-2 py-0.5 text-[11px] text-white/65"
            >
              {s}
            </span>
          ))}
          {project.stack.length > 7 && (
            <span className="rounded-full border border-white/10 bg-white/[0.02] px-2 py-0.5 text-[11px] text-white/45">
              +{project.stack.length - 7}
            </span>
          )}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-2">
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-2 text-xs font-medium text-black transition hover:bg-white/90"
            >
              <ExternalLink size={13} />
              {t.work.live}
              <ArrowUpRight
                size={13}
                className="transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5"
              />
            </a>
          )}
          {project.links.repo && (
            <a
              href={project.links.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.03] px-3.5 py-2 text-xs font-medium text-white/80 transition hover:border-white/30 hover:text-white"
            >
              <Github size={13} />
              {project.isPrivate ? t.work.privateRepo : t.work.repo}
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
