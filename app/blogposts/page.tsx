import { getBlogPosts } from "@/lib/data";
import { BlogList } from "@/components/blog/blog-list";

export default async function BlogPostsPage() {
  const posts = await getBlogPosts();

  return (
    <div>
      <BlogList posts={posts} />
    </div>
  );
}
