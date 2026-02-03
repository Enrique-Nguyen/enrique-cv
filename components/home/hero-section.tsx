import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="container flex flex-col md:flex-row items-center justify-between py-20 md:py-32 gap-10">
      
      {/* Cột trái: Nội dung text */}
      <div className="flex-1 space-y-6 text-center md:text-left">
        <div className="space-y-2">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Xin chào, mình là
          </p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Nguyễn Phú Nguyên
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-primary">
            Full-stack Developer
          </h2>
        </div>

        <p className="text-muted-foreground max-w-150 md:text-lg leading-relaxed mx-auto md:mx-0">
          Sinh viên năm 3 chuyên ngành CNTT. Đam mê xây dựng các ứng dụng web hiệu năng cao với Next.js và hệ sinh thái JavaScript. Đang tìm kiếm cơ hội thực tập/làm việc tại môi trường Nhật Bản.
        </p>

        {/* Nút hành động */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <Link href="#contact">
            <Button size="lg" className="w-full sm:w-auto group">
              Liên hệ ngay
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
          <Link href="/resume.pdf" target="_blank">
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              Tải xuống CV
            </Button>
          </Link>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 justify-center md:justify-start pt-4">
          <Link href="https://github.com/yourusername" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
            <Github className="h-6 w-6" />
          </Link>
          <Link href="https://linkedin.com/in/yourusername" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="h-6 w-6" />
          </Link>
          <Link href="mailto:your.email@example.com" className="text-muted-foreground hover:text-primary transition-colors">
            <Mail className="h-6 w-6" />
          </Link>
        </div>
      </div>

      {/* Cột phải: Ảnh đại diện */}
      <div className="flex-1 flex justify-center md:justify-end">
        <div className="relative w-64 h-64 md:w-80 md:h-80">
          {/* Hiệu ứng vòng tròn mờ phía sau */}
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl scale-110 animate-pulse" />
          
          {/* Ảnh chính */}
          <div className="relative w-full h-full rounded-full border-4 border-background shadow-xl overflow-hidden">
            {/* Bạn nhớ thay file ảnh vào thư mục public/images/avatar.jpg nhé */}
            <Image
              src="/images/avatar.jpg" 
              alt="Portrait"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}