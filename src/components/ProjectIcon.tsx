"use client";

import {
  Sparkles,
  Building2,
  MapPin,
  Database,
  ShieldCheck,
  Car,
  Trees,
  Spline,
  Gamepad2,
  Smartphone,
  type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  Sparkles,
  Building2,
  MapPin,
  Database,
  ShieldCheck,
  Car,
  Trees,
  Spline,
  Gamepad2,
  Smartphone,
};

export function ProjectIcon({
  name,
  className,
  size = 28,
}: {
  name: string;
  className?: string;
  size?: number;
}) {
  const Icon = map[name] ?? Sparkles;
  return <Icon size={size} className={className} aria-hidden />;
}
