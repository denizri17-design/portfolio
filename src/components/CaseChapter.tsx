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

function phoneShots(project: Project) {
  if (project.images?.length) return project.images.slice(0, 3);
  return project.image ? [project.image] : [];
}

function PhoneBezel({
  src,
  alt,
  className,
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative aspect-[9/19.5] overflow-hidden rounded-[2rem] border-[5px] border-[#1c1e24] bg-black shadow-[0_28px_50px_-18px_rgba(0,0,0,0.85)]",
        className,
      )}
    >
      <Image
        src={asset(src)}
        alt={alt}
        fill
        sizes="280px"
        className="object-cover"
        priority={priority}
      />
    </div>
  );
}

function PhoneStage({
  images,
  alt,
  priority = false,
}: {
  images: string[];
  alt: string;
  priority?: boolean;
}) {
  if (images.length === 0) return null;

  if (images.length === 1) {
    return (
      <div className="flex justify-center">
        <PhoneBezel
          src={images[0]}
          alt={alt}
          className="h-[min(68svh,580px)] w-auto"
          priority={priority}
        />
      </div>
    );
  }

  return (
    <div className="relative mx-auto h-[min(72svh,640px)] w-full max-w-[760px]">
      {images[1] ? (
        <PhoneBezel
          src={images[1]}
          alt={`${alt} screen 2`}
          className="absolute left-[2%] top-[14%] z-10 h-[72%] w-auto -rotate-[9deg]"
        />
      ) : null}
      {images[2] ? (
        <PhoneBezel
          src={images[2]}
          alt={`${alt} screen 3`}
          className="absolute right-[2%] top-[14%] z-10 h-[72%] w-auto rotate-[9deg]"
        />
      ) : null}
      <PhoneBezel
        src={images[0]}
        alt={alt}
        className="absolute left-1/2 top-[3%] z-20 h-[94%] w-auto -translate-x-1/2"
        priority={priority}
      />
    </div>
  );
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
  const flip = index % 2 === 1;
  const n = String(index + 1).padStart(2, "0");

  return (
    <section
      id={index === 0 ? "work" : project.slug}
      className="chapter relative grid items-center gap-8 px-5 py-24 sm:px-10 lg:grid-cols-12 lg:gap-10 lg:py-0"
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
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.75 }}
        className={cn(
          "relative lg:col-span-7",
          flip ? "lg:order-1 lg:col-start-1" : "lg:col-start-6",
        )}
      >
        {project.imageFit === "contain" ? (
          <PhoneStage
            images={phoneShots(project)}
            alt={`${project.name} app`}
            priority={index < 2}
          />
        ) : cover ? (
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[28px] border border-white/10 bg-[#111216] shadow-[0_40px_90px_-40px_rgba(0,0,0,0.8)]">
            <Image
              src={asset(cover)}
              alt={`${project.name} live product`}
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-contain"
              priority={index < 2}
            />
          </div>
        ) : null}
      </motion.div>
    </section>
  );
}
