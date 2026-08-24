"use client";

import { motion } from "framer-motion";
import { Apple, ArrowUpRight, ExternalLink, Github, Lock, Play } from "lucide-react";
import { t } from "@/lib/i18n/dict";
import { cn } from "@/lib/utils";
import { CssProductStage } from "./CssProductStage";
import { DeviceStage } from "./three/DeviceStage";
import type { Project } from "@/data/projects";

const statusLabel: Record<Project["status"], string> = {
  shipped: "Shipped",
  "in-production": "In production",
  live: "Live",
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
  const images = project.images ?? (project.image ? [project.image] : []);
  const isPhone = project.imageFit === "contain";
  const kind = isPhone ? "phone" : "screen";
  const useWebGL = featured && images.length > 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: Math.min(index * 0.05, 0.4) }}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0a0c12]/80 shadow-[0_24px_60px_-28px_rgba(0,0,0,0.85)] backdrop-blur-md",
        featured && "lg:col-span-2",
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden",
          featured ? "h-[22rem] sm:h-[28rem]" : "h-72 sm:h-80",
        )}
      >
        {useWebGL ? (
          <DeviceStage urls={images.slice(0, 2)} kind={kind} />
        ) : (
          <CssProductStage
            images={images}
            alt={project.name}
            kind={kind}
            icon={project.cover.icon}
            gradient={project.cover.gradient}
          />
        )}

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0a0c12] to-transparent" />

        <div className="absolute left-4 top-4 z-20 flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-black/55 px-2.5 py-1 text-[11px] font-medium text-white/90 ring-1 ring-white/10 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-[#6ef3c5]" />
            {statusLabel[project.status]}
          </span>
          <span className="inline-flex items-center rounded-full bg-black/55 px-2.5 py-1 font-mono text-[11px] tracking-wider text-white/70 ring-1 ring-white/10 backdrop-blur">
            {project.year}
          </span>
        </div>

        {project.isPrivate && (
          <div className="absolute right-4 top-4 z-20 inline-flex items-center gap-1 rounded-full bg-black/55 px-2.5 py-1 text-[11px] text-white/80 ring-1 ring-white/10 backdrop-blur">
            <Lock size={11} />
            Private
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="font-display text-2xl font-semibold tracking-tight text-white">
          {project.name}
        </h3>
        <p className="mt-1.5 text-sm text-white/55">{project.tagline}</p>

        <p className="mt-4 text-[15px] leading-relaxed text-white/72">
          {project.description}
        </p>

        <ul className="mt-5 space-y-1.5 text-[13.5px] text-white/62">
          {project.bullets.slice(0, 4).map((b) => (
            <li key={b} className="flex gap-2 leading-snug">
              <span className="mt-2 inline-block h-1 w-1 flex-shrink-0 rounded-full bg-[#6ef3c5]" />
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
              className="group/btn inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-2 text-xs font-medium text-black transition hover:bg-[#d7fff2]"
            >
              <ExternalLink size={13} />
              {t.work.live}
              <ArrowUpRight
                size={13}
                className="transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5"
              />
            </a>
          )}
          {project.links.appStore && (
            <a
              href={project.links.appStore}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "group/btn inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-xs font-medium transition",
                project.links.live
                  ? "border border-white/15 bg-white/[0.03] text-white/80 hover:border-white/30 hover:text-white"
                  : "bg-white text-black hover:bg-[#d7fff2]",
              )}
            >
              <Apple size={13} />
              App Store
              <ArrowUpRight
                size={13}
                className="transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5"
              />
            </a>
          )}
          {project.links.googlePlay && (
            <a
              href={project.links.googlePlay}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.03] px-3.5 py-2 text-xs font-medium text-white/80 transition hover:border-white/30 hover:text-white"
            >
              <Play size={13} />
              Google Play
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
