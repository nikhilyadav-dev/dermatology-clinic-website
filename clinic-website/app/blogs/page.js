import BlogCategoryFilter from "@/components/blogs/BlogCategoryFilter";
import { blogs } from "@/data/blogs";

export default function BlogsPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="px-4 pb-12 pt-20 sm:px-6 lg:px-8 lg:pb-16 lg:pt-28">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#ec4899]">
            From Our Clinic
          </p>

          <h1 className="text-4xl font-semibold tracking-tight text-[#241c24] sm:text-5xl lg:text-6xl">
            Insights for Healthier Skin & Hair
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            Discover expert tips, treatment insights, and practical advice for
            taking better care of your skin and hair.
          </p>
        </div>
      </section>

      {/* Blogs */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
        <div className="mx-auto max-w-7xl">
          <BlogCategoryFilter blogs={blogs} />
        </div>
      </section>
    </main>
  );
}
