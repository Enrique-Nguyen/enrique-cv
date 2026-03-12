"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { type BlogPost } from "@/lib/data";
import { useLanguage } from "@/lib/language-context";

interface BlogPostContentProps {
  post: BlogPost;
}

export function BlogPostContent({ post }: BlogPostContentProps) {
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

  return (
    <article className="py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
        {/* Back button */}
        <Link href="/blogposts">
          <Button variant="ghost" className="mb-6 gap-2">
            <ArrowLeft className="h-4 w-4" />
            {t("blog.backToList")}
          </Button>
        </Link>

        {/* Cover Image */}
        {post.cover_image && (
          <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-muted mb-8">
            <Image
              src={post.cover_image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            {post.title}
          </h1>

          {/* Meta info */}
          <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>
                {t("blog.publishedOn")} {formatDate(post.created_at)}
              </span>
            </div>
          </div>

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </header>

        {/* Summary */}
        {post.summary && (
          <p className="text-lg text-muted-foreground mb-8 italic border-l-4 border-primary pl-4">
            {post.summary}
          </p>
        )}

        {/* Content - Render as Markdown */}
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <div
            className="whitespace-pre-wrap leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: formatMarkdown(post.content),
            }}
          />
        </div>
      </div>
    </article>
  );
}

// Simple markdown formatter
function formatMarkdown(content: string): string {
  return content
    // Headers
    .replace(/^### (.*$)/gim, '<h3 class="text-xl font-semibold mt-6 mb-3">$1</h3>')
    .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold mt-8 mb-4">$1</h2>')
    .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold mt-8 mb-4">$1</h1>')
    // Bold and italic
    .replace(/\*\*\*(.*?)\*\*\*/gim, '<strong><em>$1</em></strong>')
    .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/gim, '<em>$1</em>')
    // Code blocks
    .replace(/```([\s\S]*?)```/gim, '<pre class="bg-muted p-4 rounded-lg overflow-x-auto my-4"><code>$1</code></pre>')
    // Inline code
    .replace(/`(.*?)`/gim, '<code class="bg-muted px-1.5 py-0.5 rounded text-sm">$1</code>')
    // Links
    .replace(/\[([^\]]+)\]\(([^)]+)\)/gim, '<a href="$2" class="text-primary underline underline-offset-4 hover:text-primary/80" target="_blank" rel="noopener noreferrer">$1</a>')
    // Line breaks
    .replace(/\n/gim, '<br />');
}
