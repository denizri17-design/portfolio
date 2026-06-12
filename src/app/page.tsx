import { AnimatedBackground } from "@/components/AnimatedBackground";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Stack } from "@/components/Stack";
import { Work } from "@/components/Work";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";

export default function HomePage() {
  return (
    <main className="relative min-h-screen">
      <AnimatedBackground />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Work />
      <About />
      <Stack />
      <Contact />
      <Footer />
    </main>
  );
}
