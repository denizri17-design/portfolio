"use client";

import Image from "next/image";
import { Apple, ArrowUpRight } from "lucide-react";
import { asset } from "@/lib/asset";
import { t } from "@/lib/i18n/dict";
import type { Project } from "@/data/projects";

function coverOf(project: Project) {
  if (project.images?.length) return project.images[0];
  return project.image;
}

export function MoreWork({ projects }: { projects: Project[] }) {
  return (
    <section
      id="more-work"
      className="chapter relative flex flex-col justify-center px-5 py-24 sm:px-10"
    >
      <p className="label">{t.work.moreKicker}</p>
      <h2 className="mt-4 font-display text-[clamp(2.2rem,5vw,4rem)] font-semibold leading-[0.95] tracking-[-0.04em]">
        {t.work.more}
      </h2>
      <p className="mt-4 max-w-lg text-sm text-white/45">
        Live products, store apps, and client systems that sit next to the
        flagships.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => {
          const cover = coverOf(project);
          return (
            <article
              key={project.slug}
              className="group overflow-hidden rounded-[22px] border border-white/10 bg-[#111216]"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-black">
                {cover ? (
                  <Image
                    src={asset(cover)}
                    alt={project.name}
                    fill
                    sizes="(min-width: 1280px) 28vw, (min-width: 640px) 44vw, 100vw"
                    className={
                      project.imageFit === "contain"
                        ? "object-contain"
                        : "object-cover object-top transition duration-700 group-hover:scale-[1.03]"
                    }
                  />
                ) : null}
              </div>
              <div className="p-5">
                <p className="label text-white/35">
                  {project.year} / {project.category.join(" / ")}
                </p>
                <h3 className="mt-2 font-display text-xl font-semibold tracking-tight">
                  {project.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/50">
                  {project.tagline}
                </p>
                {project.metrics?.length ? (
                  <p className="label mt-3 text-white/35">
                    {project.metrics.slice(0, 3).join("  /  ")}
                  </p>
                ) : null}
                <div className="mt-4 flex flex-wrap gap-3">
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-white"
                    >
                      {t.work.live} <ArrowUpRight size={13} />
                    </a>
                  )}
                  {project.links.appStore && (
                    <a
                      href={project.links.appStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-white/65"
                    >
                      <Apple size={12} /> App Store
                    </a>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
