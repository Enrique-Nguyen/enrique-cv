"use client";

import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowRight } from "lucide-react";

import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { type BlogPost } from "@/lib/data";
import { useLanguage } from "@/lib/language-context";

interface FeaturedBlogCardProps {
  post: BlogPost;
}

export function FeaturedBlogCard({ post }: FeaturedBlogCardProps) {
  const { t } = useLanguage();

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
    <Link href={`/blogposts/${post.slug}`} className="block group">
      <Card className="overflow-hidden border-0 bg-gradient-to-br from-card/80 to-card/30 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 relative">
        <div className="flex flex-col md:flex-row h-full">
          {/* Cover Image */}
          {post.cover_image && (
            <div className="relative aspect-video md:aspect-auto w-full md:w-[55%] overflow-hidden bg-muted">
              <Image
                src={post.cover_image}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 55vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/60 via-transparent to-transparent md:from-black/40 opacity-60 md:opacity-30"></div>
            </div>
          )}

          <CardContent className="flex flex-col justify-center flex-1 p-6 md:p-8 lg:p-12 space-y-6">
            {/* Tags */}
            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {post.tags.slice(0, 3).map((tag) => (
                  <Badge key={tag} className="font-medium text-xs bg-primary/10 text-primary hover:bg-primary/20 border-0">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}

            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold line-clamp-3 mb-4 group-hover:text-primary transition-colors duration-300 tracking-tight">
                {post.title}
              </h2>
              
              {post.summary && (
                <p className="text-muted-foreground text-base md:text-lg line-clamp-3 leading-relaxed">
                  {post.summary}
                </p>
              )}
            </div>

            {/* Meta */}
            <div className="flex items-center gap-6 text-sm text-muted-foreground mt-auto pt-4 border-t border-border/50">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-primary" />
                <span className="font-medium">{formatDate(post.created_at)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <span className="font-medium">{readTime} {t("blog.minRead")}</span>
              </div>
            </div>

            <div className="flex items-center text-primary font-semibold mt-2 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
              {t("blog.readMore")} <ArrowRight className="ml-2 h-4 w-4" />
            </div>
          </CardContent>
        </div>
      </Card>
    </Link>
  );
}
