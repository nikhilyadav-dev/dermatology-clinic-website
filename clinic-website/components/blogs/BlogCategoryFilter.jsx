"use client";

import { useMemo, useState } from "react";
import BlogGrid from "./BlogGrid";

import BlogEmptyState from "./BlogEmptyState";

const BLOGS_PER_PAGE = 6;

export default function BlogCategoryFilter({ blogs }) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [visibleCount, setVisibleCount] = useState(BLOGS_PER_PAGE);

  const categories = useMemo(() => {
    const uniqueCategories = blogs.reduce((acc, blog) => {
      const category = blog.category;

      if (!acc.some((item) => item.slug === category.slug)) {
        acc.push(category);
      }

      return acc;
    }, []);

    return uniqueCategories;
  }, [blogs]);

  const filteredBlogs =
    selectedCategory === "all"
      ? blogs
      : blogs.filter((blog) => blog.category.slug === selectedCategory);

  const visibleBlogs = filteredBlogs.slice(0, visibleCount);

  const hasMore = visibleCount < filteredBlogs.length;

  const handleCategoryChange = (categorySlug) => {
    setSelectedCategory(categorySlug);
    setVisibleCount(BLOGS_PER_PAGE);
  };

  const handleShowMore = () => {
    setVisibleCount((current) => current + BLOGS_PER_PAGE);
  };

  return (
    <div>
      <div className="mb-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        <button
          type="button"
          onClick={() => handleCategoryChange("all")}
          className={`rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
            selectedCategory === "all"
              ? "bg-[#ec4899] text-white"
              : "bg-[#fff4f8] text-[#241c24] hover:bg-[#fce7f3]"
          }`}
        >
          All
        </button>

        {categories.map((category) => (
          <button
            key={category.id}
            type="button"
            onClick={() => handleCategoryChange(category.slug)}
            className={`rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
              selectedCategory === category.slug
                ? "bg-[#ec4899] text-white"
                : "bg-[#fff4f8] text-[#241c24] hover:bg-[#fce7f3]"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {visibleBlogs.length > 0 ? (
        <BlogGrid blogs={visibleBlogs} />
      ) : (
        <BlogEmptyState message="We couldn't find any blogs in this category." />
      )}

      {hasMore && (
        <div className="mt-12 flex justify-center">
          <button
            type="button"
            onClick={handleShowMore}
            className="rounded-full border border-[#ec4899] px-7 py-3 text-sm font-medium text-[#ec4899] transition-colors hover:bg-[#ec4899] hover:text-white"
          >
            Show More Blogs
          </button>
        </div>
      )}
    </div>
  );
}
