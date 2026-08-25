import { AtmosphereStage } from "@/components/three/AtmosphereStage";
import { SiteNav } from "@/components/SiteNav";
import { Intro } from "@/components/Intro";
import { CaseReel } from "@/components/CaseReel";
import { Close } from "@/components/Close";

export default function HomePage() {
  return (
    <main className="reel relative">
      <AtmosphereStage />
      <SiteNav />
      <Intro />
      <CaseReel />
      <Close />
    </main>
  );
}
