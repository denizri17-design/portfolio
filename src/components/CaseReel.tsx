"use client";

import { useMemo } from "react";
import { projects } from "@/data/projects";
import { CaseChapter } from "./CaseChapter";

const lead = ["runkoda", "ourfit", "local-adjuster-mobile", "nextstep"];

export function CaseReel() {
  const reel = useMemo(() => {
    const list = [...projects];
    return list.sort((a, b) => {
      const ai = lead.indexOf(a.slug);
      const bi = lead.indexOf(b.slug);
      if (ai === -1 && bi === -1) return 0;
      if (ai === -1) return 1;
      if (bi === -1) return -1;
      return ai - bi;
    });
  }, []);

  return (
    <div>
      {reel.map((project, index) => (
        <CaseChapter
          key={project.slug}
          project={project}
          index={index}
          total={reel.length}
        />
      ))}
    </div>
  );
}
