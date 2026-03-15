"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { ArrowLeft, Calendar, Clock, Share2, Link2, Facebook, Twitter, Linkedin, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { type BlogPost } from "@/lib/data";
import { useLanguage } from "@/lib/language-context";
import { BlogCard } from "@/components/blog/blog-card";

interface BlogPostContentProps {
  post: BlogPost;
  relatedPosts?: BlogPost[];
}

export function BlogPostContent({ post, relatedPosts = [] }: BlogPostContentProps) {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("vi-VN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const readTime = Math.ceil(post.content.split(/\s+/).length / 200);

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareTitle = post.title;

  const shareToFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank');
  };

  const shareToTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`, '_blank');
  };

  const shareToLinkedin = () => {
    window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareTitle)}`, '_blank');
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
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{readTime} {t("blog.minRead")}</span>
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
        <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-img:rounded-lg prose-img:shadow-md prose-code:bg-muted prose-code:px-1 prose-code:rounded prose-blockquote:border-l-primary">
          <ReactMarkdown
            components={{
              a: ({ href, children }) => {
                const safeHref = href ?? "#";
                const isExternal = /^https?:\/\//i.test(safeHref);

                return (
                  <a
                    href={safeHref}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className="text-primary underline underline-offset-4 hover:text-primary/80"
                  >
                    {children}
                  </a>
                );
              },
              img: ({ src, alt }) => {
                if (typeof src !== "string" || src.length === 0) {
                  return null;
                }

                return (
                  <Image
                    src={src}
                    alt={alt ?? ""}
                    width={1200}
                    height={675}
                    unoptimized
                    className="my-6 h-auto w-full rounded-lg shadow-md"
                  />
                );
              },
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>

        {/* Share Buttons */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <Share2 className="h-5 w-5" />
            {t("blog.share")}:
          </h3>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={copyLink} className="gap-2">
              {copied ? <Check className="h-4 w-4 text-green-500" /> : <Link2 className="h-4 w-4" />}
              {copied ? t("blog.linkCopied") : t("blog.copyLink")}
            </Button>
            <Button variant="outline" size="icon" onClick={shareToTwitter}>
              <Twitter className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={shareToFacebook}>
              <Facebook className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={shareToLinkedin}>
              <Linkedin className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-16 pt-8 border-t border-border">
            <h3 className="text-2xl font-bold tracking-tight mb-8">
              {t("blog.relatedPosts")}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <BlogCard key={relatedPost.slug} post={relatedPost} />
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
