"use client";

import Image from "next/image";
import { asset } from "@/lib/asset";
import { cn } from "@/lib/utils";
import { ProjectIcon } from "./ProjectIcon";

function padImages(images: string[], count: number) {
  if (images.length === 0) return [];
  return Array.from({ length: count }, (_, i) => images[i % images.length]);
}

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
  const framed = padImages(images, 3);

  return (
    <div className="product-stage">
      <div className={cn("absolute inset-0 bg-gradient-to-br opacity-70", gradient)} />
      <div className="product-orb product-orb-a" />
      <div className="product-orb product-orb-b" />

      <div className="product-perspective">
        {framed.length === 0 ? (
          <div className="grid h-24 w-24 place-items-center rounded-2xl bg-black/40 ring-1 ring-white/10 backdrop-blur">
            <ProjectIcon name={icon} size={36} className="text-white" />
          </div>
        ) : (
          <div className={cn("device-fan", kind === "phone" ? "device-fan-phone" : "device-fan-screen")}>
            {framed.map((src, i) => (
              <div key={`${src}-${i}`} className={cn("fan-device", `fan-device-${i}`, kind === "phone" ? "fan-phone" : "fan-screen")}>
                <Image
                  src={asset(src)}
                  alt={`${alt} screen ${i + 1}`}
                  fill
                  sizes={kind === "phone" ? "200px" : "360px"}
                  className={cn("object-cover", kind === "screen" && "object-top")}
                  priority={i === 1}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
