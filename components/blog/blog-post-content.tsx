"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { ArrowLeft, Calendar, Clock, Share2, Link2, Facebook, Twitter, Linkedin, Check, Copy } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { type BlogPost } from "@/lib/data";
import { useLanguage } from "@/lib/language-context";
import { BlogCard } from "@/components/blog/blog-card";

interface BlogPostContentProps {
  post: BlogPost;
  relatedPosts?: BlogPost[];
}

// Separate component so useState hook usage is valid
function CodeBlock({ className, children }: { className?: string; children: React.ReactNode }) {
  const [codeCopied, setCodeCopied] = useState(false);
  const language = className?.replace("language-", "") ?? "code";

  const handleCopy = () => {
    navigator.clipboard.writeText(String(children).replace(/\n$/, ""));
    setCodeCopied(true);
    setTimeout(() => setCodeCopied(false), 2000);
  };

  return (
    <div className="my-6 rounded-lg overflow-hidden border border-border bg-[#0d1117]">
      <div className="flex items-center justify-between px-4 py-2 bg-muted/60 border-b border-border">
        <span className="text-xs font-mono font-semibold text-muted-foreground uppercase tracking-widest">
          {language}
        </span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          {codeCopied ? (
            <><Check className="h-3.5 w-3.5 text-green-500" /> Đã sao chép</>
          ) : (
            <><Copy className="h-3.5 w-3.5" /> Sao chép</>
          )}
        </button>
      </div>
      <pre className="overflow-x-auto p-4 text-sm font-mono leading-relaxed text-[#e6edf3]">
        <code>{children}</code>
      </pre>
    </div>
  );
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
        <div className="max-w-none text-foreground text-base md:text-lg leading-relaxed">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={{
              /* ── Headings ─────────────────────────────────────────── */
              h1: ({ node, className, children, ...props }) => (
                <h1 className={`mt-10 mb-4 text-3xl md:text-4xl font-bold tracking-tight border-b border-border pb-2 ${className || ""}`} {...props}>
                  {children}
                </h1>
              ),
              h2: ({ node, className, children, ...props }) => (
                <h2 className={`mt-8 mb-3 text-2xl md:text-3xl font-bold tracking-tight ${className || ""}`} {...props}>
                  {children}
                </h2>
              ),
              h3: ({ node, className, children, ...props }) => (
                <h3 className={`mt-6 mb-2 text-xl md:text-2xl font-semibold ${className || ""}`} {...props}>
                  {children}
                </h3>
              ),
              h4: ({ node, className, children, ...props }) => (
                <h4 className={`mt-4 mb-2 text-lg font-semibold text-muted-foreground ${className || ""}`} {...props}>
                  {children}
                </h4>
              ),

              /* ── Paragraph ────────────────────────────────────────── */
              p: ({ node, className, children, ...props }) => (
                <p className={`mb-4 leading-7 ${className || ""}`} {...props}>
                  {children}
                </p>
              ),

              /* ── Bold / Italic / HTML ─────────────────────────────── */
              strong: ({ node, className, children, ...props }) => (
                <strong className={`font-bold text-foreground ${className || ""}`} {...props}>{children}</strong>
              ),
              b: ({ node, className, children, ...props }) => (
                <b className={`font-bold text-foreground ${className || ""}`} {...props}>{children}</b>
              ),
              em: ({ node, className, children, ...props }) => (
                <em className={`italic text-foreground/85 ${className || ""}`} {...props}>{children}</em>
              ),
              i: ({ node, className, children, ...props }) => (
                <i className={`italic text-foreground/85 ${className || ""}`} {...props}>{children}</i>
              ),
              div: ({ node, className, children, ...props }) => (
                <div className={className} {...props}>{children}</div>
              ),
              span: ({ node, className, children, ...props }) => (
                <span className={className} {...props}>{children}</span>
              ),

              /* ── Blockquote ───────────────────────────────────────── */
              blockquote: ({ children }) => (
                <blockquote className="my-6 border-l-4 border-primary bg-muted/50 rounded-r-lg px-5 py-3 italic text-muted-foreground">
                  {children}
                </blockquote>
              ),

              /* ── Inline code & Code block ─────────────────────────── */
              code: ({ className, children, ...props }) => {
                if (className) {
                  return <CodeBlock className={className}>{children}</CodeBlock>;
                }
                return (
                  <code
                    className="mx-0.5 rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-primary"
                    {...props}
                  >
                    {children}
                  </code>
                );
              },

              /* ── Lists ────────────────────────────────────────────── */
              ul: ({ children }) => (
                <ul className="mb-4 ml-6 list-disc space-y-1.5 [&>li]:pl-1">{children}</ul>
              ),
              ol: ({ children }) => (
                <ol className="mb-4 ml-6 list-decimal space-y-1.5 [&>li]:pl-1">{children}</ol>
              ),
              li: ({ children }) => (
                <li className="leading-7">{children}</li>
              ),

              /* ── Links ────────────────────────────────────────────── */
              a: ({ href, children }) => {
                const safeHref = href ?? "#";
                const isExternal = /^https?:\/\//i.test(safeHref);
                return (
                  <a
                    href={safeHref}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className="text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"
                  >
                    {children}
                  </a>
                );
              },

              /* ── Horizontal Rule ──────────────────────────────────── */
              hr: () => (
                <hr className="my-8 border-border" />
              ),

              /* ── Table (GFM) ──────────────────────────────────────── */
              table: ({ children }) => (
                <div className="my-6 overflow-x-auto rounded-lg border border-border">
                  <table className="w-full text-sm">{children}</table>
                </div>
              ),
              thead: ({ children }) => (
                <thead className="bg-muted text-muted-foreground font-semibold">{children}</thead>
              ),
              tr: ({ children }) => (
                <tr className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors">{children}</tr>
              ),
              th: ({ children }) => (
                <th className="px-4 py-2 text-left">{children}</th>
              ),
              td: ({ children }) => (
                <td className="px-4 py-2">{children}</td>
              ),

              /* ── Images ───────────────────────────────────────────── */
              img: ({ src, alt }) => {
                if (typeof src !== "string" || src.length === 0) return null;
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
