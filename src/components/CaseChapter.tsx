"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Apple, ArrowUpRight, Github, Play } from "lucide-react";
import { asset } from "@/lib/asset";
import { t } from "@/lib/i18n/dict";
import { cn } from "@/lib/utils";
import type { Project } from "@/data/projects";

function coverOf(project: Project) {
  if (project.images?.length) return project.images[0];
  return project.image;
}

export function CaseChapter({
  project,
  index,
  total,
}: {
  project: Project;
  index: number;
  total: number;
}) {
  const cover = coverOf(project);
  const phone = project.imageFit === "contain";
  const flip = index % 2 === 1;
  const n = String(index + 1).padStart(2, "0");

  return (
    <section
      id={index === 0 ? "work" : project.slug}
      className="chapter relative grid items-center gap-10 px-5 py-24 sm:px-10 lg:grid-cols-12 lg:gap-8 lg:py-0"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.7 }}
        className={cn(
          "relative z-10 lg:col-span-5",
          flip ? "lg:order-2 lg:col-start-8" : "lg:col-start-1",
        )}
      >
        <p className="label">
          {n} / {String(total).padStart(2, "0")}
        </p>
        <p className="label mt-4 text-white/40">
          {project.year} / {project.category.join(" / ")}
        </p>
        <h2 className="mt-4 font-display text-[clamp(2.6rem,6vw,5.4rem)] font-semibold leading-[0.92] tracking-[-0.04em]">
          {project.name}
        </h2>
        <p className="mt-5 max-w-md text-lg text-white/70">{project.tagline}</p>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-white/45">
          {project.description}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.slice(0, 5).map((s) => (
            <span
              key={s}
              className="label rounded-full border border-white/10 px-2.5 py-1"
            >
              {s}
            </span>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-white"
            >
              {t.work.live} <ArrowUpRight size={14} />
            </a>
          )}
          {project.links.appStore && (
            <a
              href={project.links.appStore}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-white/70"
            >
              <Apple size={13} /> App Store
            </a>
          )}
          {project.links.googlePlay && (
            <a
              href={project.links.googlePlay}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-white/70"
            >
              <Play size={13} /> Play
            </a>
          )}
          {project.links.repo && (
            <a
              href={project.links.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-white/55"
            >
              <Github size={13} />
              {project.isPrivate ? t.work.privateRepo : t.work.repo}
            </a>
          )}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.05 }}
        className={cn(
          "relative flex min-h-[52vh] items-center justify-center lg:col-span-7 lg:min-h-[100svh]",
          flip ? "lg:order-1 lg:col-start-1" : "lg:col-start-6",
        )}
      >
        {cover ? (
          <div className={cn("plate", phone ? "phone-plate" : "screen-plate")}>
            <Image
              src={asset(cover)}
              alt={project.name}
              fill
              sizes={phone ? "380px" : "(min-width: 1024px) 60vw, 100vw"}
              className={cn("object-cover", !phone && "object-top")}
              priority={index < 2}
            />
          </div>
        ) : null}
      </motion.div>
    </section>
  );
}
