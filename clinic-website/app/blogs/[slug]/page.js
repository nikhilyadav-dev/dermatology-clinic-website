import Link from "next/link";
import { notFound } from "next/navigation";

import BlogContent from "@/components/blogs/BlogContent";
import { getPublishedBlogBySlug } from "@/lib/blog";

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const blog = await getPublishedBlogBySlug(slug);

  if (!blog) {
    return {
      title: "Blog Not Found | Shine Skin Care",
      description: "The requested blog could not be found.",
    };
  }

  const canonicalUrl =
    blog.canonicalUrl || `https://www.shineskincare.com/blogs/${blog.slug}`;

  return {
    title: blog.seoTitle || `${blog.title} | Shine Skin Care`,
    description: blog.metaDescription || blog.excerpt,

    keywords: blog.keywords || undefined,

    alternates: {
      canonical: canonicalUrl,
    },

    openGraph: {
      title: blog.ogTitle || blog.title,
      description: blog.ogDescription || blog.excerpt,
      url: canonicalUrl,
      type: "article",

      images: blog.ogImage
        ? [
            {
              url: blog.ogImage,
              alt: blog.imageAlt || blog.title,
            },
          ]
        : blog.featuredImage
          ? [
              {
                url: blog.featuredImage,
                alt: blog.imageAlt || blog.title,
              },
            ]
          : [],
    },
  };
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;

  const blog = await getPublishedBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  return (
    <main className="bg-white">
      {/* Blog Header */}
      <section className="px-4 pb-12 pt-16 sm:px-6 lg:px-8 lg:pb-16 lg:pt-24">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ec4899]">
            {blog.category.name}
          </p>

          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-[#241c24] sm:text-4xl lg:text-5xl">
            {blog.title}
          </h1>

          <p className="text-lg leading-8 text-gray-600 mt-5">{blog.excerpt}</p>

          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500">
            <span>By {blog.author.name}</span>

            <span className="hidden sm:inline">•</span>

            <time dateTime={blog.publishedAt?.toISOString()}>
              {new Date(blog.publishedAt).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      {blog.featuredImage && (
        <section className="px-4 sm:px-6 lg:px-8">
          <div className="mx-auto aspect-16/14 sm:aspect-16/9 max-w-4xl overflow-hidden rounded-2xl">
            <img
              src={blog.featuredImage}
              alt={blog.imageAlt || blog.title}
              className="h-auto w-full object-cover"
            />
          </div>
        </section>
      )}

      {/* Blog Content */}
      <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <article className="mx-auto max-w-4xl">
          <div className="mt-8">
            <BlogContent content={blog.content} />
          </div>

          <div className="mt-12 border-t border-gray-200 pt-6">
            <Link
              href="/blogs"
              className="text-sm font-medium text-[#ec4899] hover:text-[#db2777]"
            >
              ← Back to Blogs
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
}
