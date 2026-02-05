export const skills = [
  { name: "React", icon: "react" },
  { name: "Next.js", icon: "nextdotjs" },
  { name: "TypeScript", icon: "typescript" },
  { name: "Tailwind CSS", icon: "tailwindcss" },
  { name: "Bun", icon: "bun" },
  { name: "Node.js", icon: "nodedotjs" },
  { name: "PostgreSQL", icon: "postgresql" },
  { name: "Docker", icon: "docker" },
  { name: "Git", icon: "git" },
  { name: "Prisma", icon: "prisma" },
  { name: "Figma", icon: "figma" },
  { name: "Linux", icon: "linux" },
];

export interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  repoUrl?: string; 
  demoUrl?: string; 
}

export const projects: Project[] = [
  {
    title: "ClassPal Mobile App",
    description: "Bài tập lớn môn Phát triển ứng dụng di động - Ứng dụng quản lý học tập cho sinh viên.",
    tags: ["Flutter", "Dart", "Firebase"],
    imageUrl: "/images/mobile_classpal.jpg", 
    repoUrl: "https://github.com/Enrique-Nguyen/mobile_classpal",
  },
  {
    title: "Website bán hàng",
    description: "Website thương mại điện tử, phục vụ cho hoạt động khởi nghiệp của bản thân.",
    tags: ["Vite", "React", "TypeScript", "shadcn/ui", "axios"],
    imageUrl: "/images/hnv.jpg",
    demoUrl: "https://hnvstories.com",
  },
  {
    title: "Personal Portfolio",
    description: "Website cá nhân giới thiệu bản thân, tích hợp chế độ tối và đa ngôn ngữ.",
    tags: ["Next.js 16", "TypeScript", "Tailwind", "Shadcn/ui"],
    imageUrl: "/images/anh_tam.jpg",
    repoUrl: "https://github.com/Enrique-Nguyen/enrique-cv",
    demoUrl: "/",
  },
  {
    title: "Quản lí thư viện",
    description: "Bài tập lớn môn học Lập trình Windows, sử dụng C# và WPF.",
    tags: ["C#", "WPF", "SQLServer"],
    imageUrl: "/images/anh_tam.jpg",
    repoUrl: "https://github.com/cloodei/librun",
  },
  {
    title: "Website thẻ học tập",
    description: "Website học tập bằng flashcard tương tự Anki, bài tập lớn môn học Công nghệ phần mềm.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    imageUrl: "/images/anh_tam.jpg",
    repoUrl: "https://github.com/cloodei/btl-cnpm",
    demoUrl: "https://btl-cnpm.vercel.app/",
  },
];