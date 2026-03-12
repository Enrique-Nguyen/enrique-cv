"use client";

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

export function BlogCardSkeleton() {
  return (
    <Card className="pt-0 flex flex-col h-full overflow-hidden border-0 bg-gradient-to-b from-card to-card/50 shadow-sm">
      {/* Cover Image Skeleton */}
      <div className="relative aspect-video w-full rounded-none bg-muted animate-pulse" />

      <CardHeader>
        {/* Title Skeleton */}
        <div className="h-6 w-3/4 mb-2 bg-muted animate-pulse rounded" />
        <div className="h-6 w-1/2 bg-muted animate-pulse rounded" />
      </CardHeader>

      <CardContent className="flex-1 space-y-4">
        {/* Date and Read Time Skeleton */}
        <div className="flex items-center gap-4">
          <div className="h-4 w-24 bg-muted animate-pulse rounded" />
          <div className="h-4 w-20 bg-muted animate-pulse rounded" />
        </div>

        {/* Summary Skeleton */}
        <div className="space-y-2">
          <div className="h-4 w-full bg-muted animate-pulse rounded" />
          <div className="h-4 w-full bg-muted animate-pulse rounded" />
          <div className="h-4 w-2/3 bg-muted animate-pulse rounded" />
        </div>

        {/* Tags Skeleton */}
        <div className="flex flex-wrap gap-2">
          <div className="h-5 w-16 bg-muted animate-pulse rounded-full" />
          <div className="h-5 w-12 bg-muted animate-pulse rounded-full" />
          <div className="h-5 w-20 bg-muted animate-pulse rounded-full" />
        </div>
      </CardContent>

      <CardFooter className="pt-0 mt-auto">
        <div className="h-10 w-full bg-muted animate-pulse rounded-md" />
      </CardFooter>
    </Card>
  );
}

export function BlogListSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto w-full">
      {Array.from({ length: 6 }).map((_, i) => (
        <BlogCardSkeleton key={i} />
      ))}
    </div>
  );
}
