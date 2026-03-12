"use client";

import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock } from "lucide-react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { type BlogPost } from "@/lib/data";
import { useLanguage } from "@/lib/language-context";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  const { t } = useLanguage();

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("vi-VN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const readTime = Math.ceil(post.content.split(/\s+/).length / 200);

  return (
    <Card className="pt-0 group flex flex-col h-full overflow-hidden border-0 bg-gradient-to-b from-card to-card/50 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-primary/20">
      {/* Cover Image */}
      {post.cover_image && (
        <div className="relative aspect-video w-full overflow-hidden bg-muted">
          <Image
            src={post.cover_image}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}

      <CardHeader>
        <CardTitle className="line-clamp-2 text-xl">{post.title}</CardTitle>
      </CardHeader>

      <CardContent className="flex-1 space-y-4">
        {/* Date */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Calendar className="h-4 w-4" />
            <span>{formatDate(post.created_at)}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="h-4 w-4" />
            <span>{readTime} {t("blog.minRead")}</span>
          </div>
        </div>

        {/* Summary */}
        {post.summary && (
          <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed">
            {post.summary}
          </p>
        )}

        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="font-normal text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>

      <CardFooter className="pt-0 mt-auto">
        <Link href={`/blogposts/${post.slug}`} className="w-full">
          <Button variant="outline" className="w-full">
            {t("blog.readMore")}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
