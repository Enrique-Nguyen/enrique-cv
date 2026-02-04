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
  repoUrl: string; // Link GitHub
  demoUrl?: string; // Link chạy thử (nếu có)
}

export const projects: Project[] = [
  {
    title: "ClassPal Mobile App",
    description: "Ứng dụng di động quản lý lớp học và điểm danh, giúp giảng viên và sinh viên kết nối hiệu quả hơn.",
    tags: ["Flutter", "Dart", "Firebase", "GetX"],
    imageUrl: "/images/project-classpal.jpg", // Bạn nhớ tạo ảnh này
    repoUrl: "https://github.com/username/classpal",
    demoUrl: "https://play.google.com/store/apps/details?id=...",
  },
  {
    title: "Website bán hàng",
    description: "Website thương mại điện tử, phục vụ cho hoạt động khởi nghiệp của bản thân.",
    tags: ["Vite", "React", "TypeScript", "shadcn/ui", "axios"],
    imageUrl: "/images/hnv.jpg",
    repoUrl: "https://hnvstories.com",
    demoUrl: "https://hnvstories.com",
  },
  {
    title: "Personal Portfolio",
    description: "Website cá nhân giới thiệu bản thân, tích hợp chế độ tối và đa ngôn ngữ.",
    tags: ["Next.js 16", "TypeScript", "Tailwind", "Shadcn/ui"],
    imageUrl: "/images/project-portfolio.jpg",
    repoUrl: "https://github.com/username/portfolio",
    demoUrl: "https://my-portfolio.com",
  },
  // Thêm các dự án khác của bạn vào đây...
];