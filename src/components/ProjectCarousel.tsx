"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { asset } from "@/lib/asset";
import { cn } from "@/lib/utils";

type Variant = "cover" | "phone";

export function ProjectCarousel({
  images,
  alt,
  variant,
  cardIndex,
  autoplayMs = 5500,
}: {
  images: string[];
  alt: string;
  variant: Variant;
  cardIndex: number;
  autoplayMs?: number;
}) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState(false);

  const go = useCallback(
    (i: number) => {
      const el = scrollerRef.current;
      if (!el) return;
      const target = ((i % images.length) + images.length) % images.length;
      const slide = el.children[target] as HTMLElement | undefined;
      if (!slide) return;
      el.scrollTo({ left: slide.offsetLeft, behavior: "smooth" });
      setActive(target);
    },
    [images.length],
  );

  // Track which slide is most visible
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const slides = Array.from(el.children) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        const top = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (top) {
          const i = slides.indexOf(top.target as HTMLElement);
          if (i >= 0) setActive(i);
        }
      },
      { root: el, threshold: [0.5, 0.75, 1] },
    );
    slides.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [images.length]);

  // Auto-advance, paused on hover and when window is offscreen
  useEffect(() => {
    if (hovered || images.length < 2) return;
    const id = window.setInterval(() => {
      const el = scrollerRef.current;
      if (!el || document.hidden) return;
      go(active + 1);
    }, autoplayMs);
    return () => window.clearInterval(id);
  }, [active, autoplayMs, go, hovered, images.length]);

  return (
    <div
      className="relative h-full w-full"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        ref={scrollerRef}
        className={cn(
          "no-scrollbar flex h-full w-full snap-x snap-mandatory overflow-x-auto",
          variant === "phone" && "items-center justify-start",
        )}
      >
        {images.map((src, i) => (
          <div
            key={src}
            className="relative h-full w-full flex-shrink-0 snap-center"
          >
            {variant === "phone" ? (
              <div className="relative h-full grid place-items-center py-4">
                <div className="relative h-full aspect-[9/19.5] rounded-[28px] border-4 border-black/70 bg-black shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)] overflow-hidden">
                  <Image
                    src={asset(src)}
                    alt={`${alt} screenshot ${i + 1}`}
                    fill
                    sizes="(min-width: 1024px) 240px, 200px"
                    className="object-cover"
                    priority={cardIndex < 2 && i === 0}
                  />
                </div>
              </div>
            ) : (
              <>
                <Image
                  src={asset(src)}
                  alt={`${alt} screenshot ${i + 1}`}
                  fill
                  sizes="(min-width: 1024px) 600px, 100vw"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                  priority={cardIndex < 2 && i === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/0 to-black/30" />
              </>
            )}
          </div>
        ))}
      </div>

      {/* Pagination dots */}
      {images.length > 1 && (
        <div className="pointer-events-auto absolute inset-x-0 bottom-3 z-20 flex justify-center gap-1.5">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={(e) => {
                e.stopPropagation();
                go(i);
              }}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                i === active
                  ? "w-6 bg-white"
                  : "w-1.5 bg-white/40 hover:bg-white/70",
              )}
            />
          ))}
        </div>
      )}

      {/* Prev / next arrows (desktop only, mobile swipes natively) */}
      {images.length > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous"
            onClick={(e) => {
              e.stopPropagation();
              go(active - 1);
            }}
            className="absolute left-2 top-1/2 z-20 hidden -translate-y-1/2 rounded-full bg-black/40 p-1.5 text-white/80 ring-1 ring-white/10 backdrop-blur transition hover:bg-black/60 hover:text-white group-hover:flex"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            type="button"
            aria-label="Next"
            onClick={(e) => {
              e.stopPropagation();
              go(active + 1);
            }}
            className="absolute right-2 top-1/2 z-20 hidden -translate-y-1/2 rounded-full bg-black/40 p-1.5 text-white/80 ring-1 ring-white/10 backdrop-blur transition hover:bg-black/60 hover:text-white group-hover:flex"
          >
            <ChevronRight size={16} />
          </button>
        </>
      )}
    </div>
  );
}
