import HeroSection from "@/components/home/hero-section";
import TechStack from "@/components/home/tech-stack";

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <HeroSection />
      <TechStack />
      
      {/* Chỗ này sau này mình sẽ để component Projects và Skills */}
      <section className="container h-[50vh] flex items-center justify-center border-t border-dashed">
        <p className="text-muted-foreground">Phần Skills & Projects sẽ nằm ở đây...</p>
      </section>
    </div>
  );
}