import HeroSection from "@/components/home/hero-section";
import Biography from "@/components/home/biography";
import TechStack from "@/components/home/tech-stack";

export default function Home() {
  return (
    <div className="flex flex-col gap-6">
      <HeroSection />
      <Biography />
      <TechStack />
    </div>
  );
}