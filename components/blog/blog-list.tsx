"use client";

import { BlogPost } from "@/lib/data";
import { BlogCard } from "@/components/blog/blog-card";
import { useLanguage } from "@/lib/language-context";

interface BlogListProps {
  posts: BlogPost[];
}

export function BlogList({ posts }: BlogListProps) {
  const { t } = useLanguage();

  return (
    <section id="blog" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 mb-12 md:mb-16 text-center">
          <p className="text-sm font-medium text-primary uppercase tracking-widest">
            {t("blog.badge")}
          </p>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            {t("blog.title")}
          </h2>
          <p className="text-muted-foreground max-w-2xl text-base md:text-lg">
            {t("blog.description")}
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="text-center text-muted-foreground py-12">
            {t("blog.noPosts")}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
