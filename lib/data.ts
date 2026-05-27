export const skills = [
  { name: "React", icon: "react" },
  { name: "Next.js", icon: "nextdotjs" },
  { name: "TypeScript", icon: "typescript" },
  { name: "Tailwind CSS", icon: "tailwindcss" },
  { name: "Bun", icon: "bun" },
  { name: "Node.js", icon: "nodedotjs" },
  { name: "SQL", icon: "mysql" },
  { name: "NoSQL", icon: "mongodb" },
  { name: "Flutter", icon: "flutter" },
  { name: "Docker", icon: "docker" },
  { name: "Git", icon: "git" },
  { name: "Figma", icon: "figma" },
  { name: "Linux", icon: "linux" },
];

// Blog Post Types
export interface BlogPost {
  title: string;
  slug: string;
  summary?: string;
  content: string;
  tags: string[];
  cover_image?: string;
  is_published: boolean;
  created_at: string;
}

// API Base URL
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

// Fetch all blog posts
export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/posts`, {
      next: { revalidate: 60 }, // Revalidate every 60 seconds
    });
    if (!res.ok) return [];
    return res.json();
  } catch (error) {
    console.error("Failed to fetch blog posts:", error);
    return [];
  }
}

// Fetch single blog post by slug
export async function getBlogPostBySlug(
  slug: string,
): Promise<BlogPost | null> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/posts/${slug}`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return null;
    return res.json();
  } catch (error) {
    console.error("Failed to fetch blog post:", error);
    return null;
  }
}

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
    description:
      "Bài tập lớn môn Phát triển ứng dụng di động - Ứng dụng quản lý học tập cho sinh viên.",
    tags: ["Flutter", "Dart", "Firebase"],
    imageUrl: "/images/mobile_classpal.jpg",
    repoUrl: "https://github.com/Enrique-Nguyen/mobile_classpal",
  },
  {
    title: "Website bán hàng",
    description:
      "Website thương mại điện tử, phục vụ cho hoạt động khởi nghiệp của bản thân.",
    tags: ["Vite", "React", "TypeScript", "shadcn/ui", "axios"],
    imageUrl: "/images/hnv.jpg",
    demoUrl: "https://hnvstories.com",
  },
  {
    title: "Personal Portfolio",
    description:
      "Website cá nhân giới thiệu bản thân, tích hợp chế độ tối và đa ngôn ngữ.",
    tags: ["Next.js 16", "TypeScript", "Tailwind", "Shadcn/ui"],
    imageUrl: "/images/anh-tam.jpg",
    repoUrl: "https://github.com/Enrique-Nguyen/enrique-cv",
    demoUrl: "/",
  },
  {
    title: "Quản lí thư viện",
    description: "Bài tập lớn môn học Lập trình Windows, sử dụng C# và WPF.",
    tags: ["C#", "WPF", "SQLServer"],
    imageUrl: "/images/anh-tam.jpg",
    repoUrl: "https://github.com/cloodei/librun",
  },
  {
    title: "Website thẻ học tập",
    description:
      "Website học tập bằng flashcard tương tự Anki, bài tập lớn môn học Công nghệ phần mềm.",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    imageUrl: "/images/anh-tam.jpg",
    repoUrl: "https://github.com/cloodei/btl-cnpm",
    demoUrl: "https://btl-cnpm.vercel.app/",
  },
  {
    title: "Hệ thống cảnh báo xâm nhập mặn",
    description:
      "Dự án nghiên cứu khoa học cấp trường, xây dựng cơ sở dữ liệu và ứng dụng WebGIS để hiển thị dữ liệu.",
    tags: ["Python", "Docker", "PostgreSQL", "Leaflet.js"],
    imageUrl: "/images/xam-nhap-man.png",
    repoUrl: "https://github.com/Enrique-Nguyen/mekong-salinity-webgis",
  },
];
