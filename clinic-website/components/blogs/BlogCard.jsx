import Link from "next/link";

export default function BlogCard({ blog }) {
  const formattedDate = new Date(blog.publishedAt).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <article className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <Link
        href={`/blogs/${blog.slug}`}
        className="block overflow-hidden aspect-[16/10]"
      >
        <img
          src={blog.featuredImage}
          alt={blog.imageAlt || blog.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>

      <div className="p-5 sm:p-6">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#ec4899]">
          {blog.category.name}
        </p>

        <Link href={`/blogs/${blog.slug}`}>
          <h2 className="line-clamp-2 text-lg font-semibold leading-7 text-[#241c24] transition-colors duration-200 group-hover:text-[#ec4899]">
            {blog.title}
          </h2>
        </Link>

        <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-600">
          {blog.excerpt}
        </p>

        <div className="mt-5 flex items-center justify-between gap-4">
          <time dateTime={blog.publishedAt} className="text-xs text-gray-500">
            {formattedDate}
          </time>

          <Link
            href={`/blogs/${blog.slug}`}
            className="text-sm font-medium text-[#ec4899] transition-colors hover:text-[#db2777]"
          >
            Read Article →
          </Link>
        </div>
      </div>
    </article>
  );
}
