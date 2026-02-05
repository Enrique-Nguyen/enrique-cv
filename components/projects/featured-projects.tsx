import { projects } from "@/lib/data";
import { ProjectCard } from "@/components/projects/project-card";

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 mb-12 md:mb-16 text-center">
          <p className="text-sm font-medium text-primary uppercase tracking-widest">
            Portfolio
          </p>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Dự án tiêu biểu
          </h2>
          <p className="text-muted-foreground max-w-2xl text-base md:text-lg">
            Dưới đây là một số dự án cá nhân và bài tập lớn mình đã thực hiện trong quá trình học tập và nghiên cứu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
