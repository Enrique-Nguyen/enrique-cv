import { skills } from "@/lib/data";

export default function TechStack() {
  return (
    <section className="py-16 md:py-24 border-y bg-muted/30">
      <div className="container px-4 md:px-6 mb-12 text-center">
        {/* <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">
          Tech Stack
        </p> */}
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
          Tech stack
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          Những công nghệ mình thường xuyên sử dụng trong các dự án
        </p>
      </div>

      {/* Container chứa hiệu ứng Marquee */}
      <div className="relative w-full overflow-hidden group">
        
        {/* Layer làm mờ 2 bên cạnh */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 md:w-32 bg-linear-to-r from-muted/30 via-muted/30 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 md:w-32 bg-linear-to-l from-muted/30 via-muted/30 to-transparent z-10" />

        {/* Wrapper chuyển động - cần 2 wrapper giống nhau để tạo infinite loop */}
        <div className="flex w-max animate-marquee">
          {/* Lần 1 */}
          <div className="flex items-center gap-6 md:gap-10 px-3 md:px-5">
            {skills.map((skill) => (
              <SkillItem key={skill.name} name={skill.name} icon={skill.icon} />
            ))}
          </div>
          {/* Lần 2 (duplicate để tạo seamless loop) */}
          <div className="flex items-center gap-6 md:gap-10 px-3 md:px-5">
            {skills.map((skill) => (
              <SkillItem key={`${skill.name}-dup`} name={skill.name} icon={skill.icon} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Component con hiển thị từng icon
function SkillItem({ name, icon }: { name: string; icon: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 cursor-pointer group/item">
      <div className="relative h-14 w-14 md:h-16 md:w-16 p-3 md:p-3.5 rounded-2xl bg-background border-2 border-transparent shadow-sm transition-all duration-300 group-hover/item:-translate-y-2 group-hover/item:shadow-xl group-hover/item:border-primary/50 group-hover/item:bg-primary/5">
        <img
          src={`https://cdn.simpleicons.org/${icon}`}
          alt={name}
          className="h-full w-full object-contain opacity-60 group-hover/item:opacity-100 transition-all duration-300 dark:invert"
        />
      </div>
      <span className="text-xs md:text-sm font-medium text-muted-foreground group-hover/item:text-primary transition-colors duration-300">
        {name}
      </span>
    </div>
  );
}