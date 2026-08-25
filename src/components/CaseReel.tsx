"use client";

import { useMemo } from "react";
import { projects } from "@/data/projects";
import { CaseChapter } from "./CaseChapter";
import { MoreWork } from "./MoreWork";

const flagshipOrder = ["runkoda", "ourfit", "skallix-crm", "nextstep"];

export function CaseReel() {
  const { flagship, rest } = useMemo(() => {
    const featured = projects.filter((project) => project.featured);
    const ordered = [...featured].sort((a, b) => {
      return flagshipOrder.indexOf(a.slug) - flagshipOrder.indexOf(b.slug);
    });
    const more = projects.filter((project) => !project.featured);
    return { flagship: ordered, rest: more };
  }, []);

  return (
    <div>
      {flagship.map((project, index) => (
        <CaseChapter
          key={project.slug}
          project={project}
          index={index}
          total={flagship.length}
        />
      ))}
      <MoreWork projects={rest} />
    </div>
  );
}
