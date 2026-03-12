"use client";

import { useState } from "react";
import { BlogPost } from "@/lib/data";
import { BlogCard } from "@/components/blog/blog-card";
import { FeaturedBlogCard } from "@/components/blog/featured-blog-card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/lib/language-context";

interface BlogListProps {
  posts: BlogPost[];
}

export function BlogList({ posts }: BlogListProps) {
  const { t } = useLanguage();
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const allTags = Array.from(new Set(posts.flatMap((p) => p.tags)));
  const filteredPosts = selectedTag ? posts.filter((p) => p.tags.includes(selectedTag)) : posts;
  
  const featuredPost = filteredPosts[0];
  const regularPosts = filteredPosts.slice(1);

  return (
    <section id="blog" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
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

        {/* Filters */}
        {allTags.length > 0 && (
          <div className="flex flex-col items-center mb-12">
            <span className="text-sm text-muted-foreground mb-4 font-medium uppercase tracking-wider">{t("blog.filterByTag")}</span>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl">
              <Badge 
                variant={selectedTag === null ? "default" : "outline"} 
                className="cursor-pointer hover:bg-primary/90 transition-colors text-sm py-1.5 px-4"
                onClick={() => setSelectedTag(null)}
              >
                {t("blog.allTags")}
              </Badge>
              {allTags.map((tag) => (
                <Badge 
                  key={tag} 
                  variant={selectedTag === tag ? "default" : "outline"} 
                  className="cursor-pointer hover:bg-primary/90 transition-colors text-sm py-1.5 px-4"
                  onClick={() => setSelectedTag(tag)}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {filteredPosts.length === 0 ? (
          <div className="text-center text-muted-foreground py-12 border-2 border-dashed rounded-xl">
            {t("blog.noPosts")}
          </div>
        ) : (
          <div className="flex flex-col gap-12 md:gap-16">
            {/* Featured Post */}
            {featuredPost && (
              <div className="w-full">
                <FeaturedBlogCard post={featuredPost} />
              </div>
            )}
            
            {/* Regular Posts Grid */}
            {regularPosts.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {regularPosts.map((post) => (
                  <BlogCard key={post.slug} post={post} />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
