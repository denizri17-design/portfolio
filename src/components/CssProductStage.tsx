"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { asset } from "@/lib/asset";
import { cn } from "@/lib/utils";
import { ProjectIcon } from "./ProjectIcon";

export function CssProductStage({
  images,
  alt,
  kind,
  icon,
  gradient,
}: {
  images: string[];
  alt: string;
  kind: "phone" | "screen";
  icon: string;
  gradient: string;
}) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;
    const id = window.setInterval(() => {
      setActive((n) => (n + 1) % images.length);
    }, 4200);
    return () => window.clearInterval(id);
  }, [images.length]);

  return (
    <div className="product-stage">
      <div className={cn("absolute inset-0 bg-gradient-to-br opacity-70", gradient)} />
      <div className="product-orb product-orb-a" />
      <div className="product-orb product-orb-b" />

      <div className="product-perspective">
        {images.length === 0 ? (
          <div className="grid h-24 w-24 place-items-center rounded-2xl bg-black/40 ring-1 ring-white/10 backdrop-blur">
            <ProjectIcon name={icon} size={36} className="text-white" />
          </div>
        ) : kind === "phone" ? (
          <div className="phone-3d">
            {images.map((src, i) => (
              <Image
                key={src}
                src={asset(src)}
                alt={`${alt} ${i + 1}`}
                fill
                sizes="240px"
                className={cn(
                  "object-cover transition-opacity duration-700",
                  i === active ? "opacity-100" : "opacity-0",
                )}
                priority={i === 0}
              />
            ))}
          </div>
        ) : (
          <div className="screen-3d">
            {images.map((src, i) => (
              <Image
                key={src}
                src={asset(src)}
                alt={`${alt} ${i + 1}`}
                fill
                sizes="(min-width: 1024px) 560px, 90vw"
                className={cn(
                  "object-cover object-top transition-opacity duration-700",
                  i === active ? "opacity-100" : "opacity-0",
                )}
                priority={i === 0}
              />
            ))}
          </div>
        )}
      </div>

      {images.length > 1 && (
        <div className="absolute inset-x-0 bottom-4 z-10 flex justify-center gap-1.5">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Show screenshot ${i + 1}`}
              onClick={() => setActive(i)}
              className={cn(
                "h-1.5 rounded-full transition-all",
                i === active ? "w-6 bg-white" : "w-1.5 bg-white/35 hover:bg-white/60",
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}
