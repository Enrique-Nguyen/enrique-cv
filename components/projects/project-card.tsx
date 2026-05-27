"use client";

import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { type Project } from "@/lib/data";
import { useLanguage } from "@/lib/language-context";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { t, language } = useLanguage();

  // Get translated description based on project title
  const getTranslatedDescription = () => {
    const descriptionMap: Record<string, string> = {
      "ClassPal Mobile App": t("projectDescriptions.classpal"),
      "Website bán hàng": t("projectDescriptions.ecommerce"),
      "Personal Portfolio": t("projectDescriptions.portfolio"),
      "Quản lí thư viện": t("projectDescriptions.library"),
      "Website thẻ học tập": t("projectDescriptions.flashcard"),
      "Hệ thống cảnh báo xâm nhập mặn": t(
        "projectDescriptions.salinityWarning",
      ),
    };
    return descriptionMap[project.title] || project.description;
  };
  return (
    <Card className="pt-0 group flex flex-col h-full overflow-hidden border transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      {/* Phần ảnh bìa dự án */}
      <div className="relative aspect-video w-full overflow-hidden bg-muted">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <CardHeader>
        <CardTitle className="line-clamp-1 text-xl">{project.title}</CardTitle>
      </CardHeader>

      <CardContent className="flex-1 space-y-4">
        <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed">
          {getTranslatedDescription()}
        </p>

        {/* Danh sách Tags công nghệ */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="font-normal text-xs"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="flex gap-2 pt-0 mt-auto">
        {project.repoUrl && (
          <Link
            href={project.repoUrl}
            target="_blank"
            className={project.demoUrl ? "flex-1" : "w-full"}
          >
            <Button variant="outline" className="w-full gap-2">
              <Github className="h-4 w-4" />{" "}
              {language === "vi"
                ? "Mã nguồn"
                : language === "ja"
                  ? "コード"
                  : "Code"}
            </Button>
          </Link>
        )}

        {project.demoUrl && (
          <Link
            href={project.demoUrl}
            target="_blank"
            className={project.repoUrl ? "flex-1" : "w-full"}
          >
            <Button className="w-full gap-2">
              <ExternalLink className="h-4 w-4" />{" "}
              {language === "vi" ? "Xem" : language === "ja" ? "デモ" : "Demo"}
            </Button>
          </Link>
        )}

        {/* Hiển thị khi không có cả repoUrl và demoUrl */}
        {!project.repoUrl && !project.demoUrl && (
          <Button variant="secondary" className="w-full" disabled>
            {language === "vi"
              ? "Đang cập nhật"
              : language === "ja"
                ? "更新中"
                : "Coming soon"}
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
