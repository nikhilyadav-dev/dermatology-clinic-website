"use client";

import { useMemo, useState } from "react";

const blogs = [
  {
    id: 1,
    title: "5 Things You Should Know About Acne",
    category: "Acne",
    status: "Published",
    date: "10 Sep 2026",
    author: "Admin",
  },
  {
    id: 2,
    title: "Understanding Hair Loss in Women",
    category: "Hair Care",
    status: "Published",
    date: "07 Sep 2026",
    author: "Admin",
  },
  {
    id: 3,
    title: "Complete Guide to Chemical Peels",
    category: "Skin Treatments",
    status: "Draft",
    date: "05 Sep 2026",
    author: "Admin",
  },
  {
    id: 4,
    title: "How to Protect Your Skin From Sun Damage",
    category: "Skin Care",
    status: "Published",
    date: "02 Sep 2026",
    author: "Admin",
  },
  {
    id: 5,
    title: "A Beginner's Guide to Skin Hydration",
    category: "Skin Care",
    status: "Draft",
    date: "30 Aug 2026",
    author: "Admin",
  },
  {
    id: 6,
    title: "When Should You See a Dermatologist?",
    category: "Skin Care",
    status: "Published",
    date: "27 Aug 2026",
    author: "Admin",
  },
  {
    id: 7,
    title: "Understanding Different Types of Acne",
    category: "Acne",
    status: "Published",
    date: "24 Aug 2026",
    author: "Admin",
  },
  {
    id: 8,
    title: "PRP Treatment for Hair Loss",
    category: "Hair Care",
    status: "Draft",
    date: "21 Aug 2026",
    author: "Admin",
  },
  {
    id: 9,
    title: "Daily Skincare Routine for Healthy Skin",
    category: "Skin Care",
    status: "Published",
    date: "18 Aug 2026",
    author: "Admin",
  },
  {
    id: 10,
    title: "What Causes Facial Pigmentation?",
    category: "Pigmentation",
    status: "Published",
    date: "15 Aug 2026",
    author: "Admin",
  },
];

const ITEMS_PER_PAGE = 5;

function StatusBadge({ status }) {
  const isPublished = status === "Published";

  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${
        isPublished ? "bg-green-50 text-green-600" : "bg-gray-100 text-gray-600"
      }`}
    >
      {status}
    </span>
  );
}

function EmptyState({ search, statusFilter }) {
  const hasFilters = search || statusFilter !== "All";

  return (
    <div className="rounded-xl border border-border bg-surface px-5 py-12 text-center">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-background text-xl">
        ✎
      </div>

      <h2 className="mt-4 text-sm font-semibold text-foreground">
        {hasFilters ? "No blogs found" : "No blogs yet"}
      </h2>

      <p className="mx-auto mt-1 max-w-sm text-sm text-muted">
        {hasFilters
          ? "Try changing your search or filter to find what you're looking for."
          : "Create your first blog post to start publishing content on your website."}
      </p>

      {!hasFilters && (
        <button
          type="button"
          className="mt-5 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-white hover:bg-primary-hover"
        >
          + Add Blog
        </button>
      )}
    </div>
  );
}

function LoadingState() {
  return (
    <div className="rounded-xl border border-border bg-surface p-5">
      <div className="animate-pulse space-y-5">
        {[1, 2, 3, 4, 5].map((item) => (
          <div key={item} className="flex items-center gap-4">
            <div className="h-10 flex-1 rounded-lg bg-background" />
            <div className="hidden h-8 w-24 rounded-lg bg-background sm:block" />
            <div className="h-8 w-16 rounded-lg bg-background" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function BlogsPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading] = useState(false);

  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) => {
      const searchTerm = search.trim().toLowerCase();

      const matchesSearch =
        !searchTerm ||
        blog.title.toLowerCase().includes(searchTerm) ||
        blog.category.toLowerCase().includes(searchTerm);

      const matchesStatus =
        statusFilter === "All" || blog.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [search, statusFilter]);

  const totalPages = Math.ceil(filteredBlogs.length / ITEMS_PER_PAGE);

  const paginatedBlogs = filteredBlogs.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  function handleSearch(value) {
    setSearch(value);
    setCurrentPage(1);
  }

  function handleStatusChange(value) {
    setStatusFilter(value);
    setCurrentPage(1);
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            Blogs
          </h1>

          <p className="mt-1 text-sm text-muted">
            Create and manage your clinic blog posts.
          </p>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-hover"
        >
          + Add Blog
        </button>
      </div>

      {/* Filters */}
      <div className="mb-5 rounded-xl border border-border bg-surface p-4">
        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="flex-1">
            <label htmlFor="blog-search" className="sr-only">
              Search blogs
            </label>

            <input
              id="blog-search"
              type="search"
              value={search}
              onChange={(event) => handleSearch(event.target.value)}
              placeholder="Search blogs..."
              className="h-10 w-full rounded-lg border border-border bg-background px-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
            />
          </div>

          <div className="sm:w-44">
            <label htmlFor="status-filter" className="sr-only">
              Filter by status
            </label>

            <select
              id="status-filter"
              value={statusFilter}
              onChange={(event) => handleStatusChange(event.target.value)}
              className="h-10 w-full rounded-lg border border-border bg-background px-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
            >
              <option value="All">All Status</option>
              <option value="Published">Published</option>
              <option value="Draft">Draft</option>
            </select>
          </div>
        </div>
      </div>

      {/* Loading */}
      {isLoading && <LoadingState />}

      {/* Empty */}
      {!isLoading && filteredBlogs.length === 0 && (
        <EmptyState search={search} statusFilter={statusFilter} />
      )}

      {/* Blog list */}
      {!isLoading && filteredBlogs.length > 0 && (
        <>
          {/* Desktop */}
          <div className="hidden overflow-hidden rounded-xl border border-border bg-surface md:block">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[700px] text-left">
                <thead className="border-b border-border bg-background">
                  <tr>
                    <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-muted">
                      Blog
                    </th>

                    <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-muted">
                      Category
                    </th>

                    <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-muted">
                      Status
                    </th>

                    <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-muted">
                      Date
                    </th>

                    <th className="px-5 py-3 text-right text-xs font-semibold uppercase tracking-wide text-muted">
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-border">
                  {paginatedBlogs.map((blog) => (
                    <tr key={blog.id} className="hover:bg-background/60">
                      <td className="max-w-md px-5 py-4">
                        <p className="truncate text-sm font-medium text-foreground">
                          {blog.title}
                        </p>

                        <p className="mt-1 text-xs text-muted">
                          By {blog.author}
                        </p>
                      </td>

                      <td className="px-5 py-4 text-sm text-muted">
                        {blog.category}
                      </td>

                      <td className="px-5 py-4">
                        <StatusBadge status={blog.status} />
                      </td>

                      <td className="px-5 py-4 text-sm text-muted">
                        {blog.date}
                      </td>

                      <td className="px-5 py-4">
                        <div className="flex justify-end gap-2">
                          <button
                            type="button"
                            className="rounded-md px-3 py-1.5 text-xs font-medium text-muted hover:bg-background hover:text-foreground"
                          >
                            Edit
                          </button>

                          <button
                            type="button"
                            className="rounded-md px-3 py-1.5 text-xs font-medium text-red-500 hover:bg-red-50"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile */}
          <div className="space-y-3 md:hidden">
            {paginatedBlogs.map((blog) => (
              <div
                key={blog.id}
                className="rounded-xl border border-border bg-surface p-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h2 className="text-sm font-semibold text-foreground">
                      {blog.title}
                    </h2>

                    <p className="mt-1 text-xs text-muted">By {blog.author}</p>
                  </div>

                  <StatusBadge status={blog.status} />
                </div>

                <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
                  <div>
                    <p className="text-xs text-muted">{blog.category}</p>

                    <p className="mt-1 text-xs text-muted">{blog.date}</p>
                  </div>

                  <div className="flex gap-2">
                    <button
                      type="button"
                      className="rounded-md px-2.5 py-1.5 text-xs font-medium text-muted hover:bg-background hover:text-foreground"
                    >
                      Edit
                    </button>

                    <button
                      type="button"
                      className="rounded-md px-2.5 py-1.5 text-xs font-medium text-red-500 hover:bg-red-50"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-muted">
                Showing{" "}
                <span className="font-medium text-foreground">
                  {(currentPage - 1) * ITEMS_PER_PAGE + 1}
                </span>{" "}
                to{" "}
                <span className="font-medium text-foreground">
                  {Math.min(currentPage * ITEMS_PER_PAGE, filteredBlogs.length)}
                </span>{" "}
                of{" "}
                <span className="font-medium text-foreground">
                  {filteredBlogs.length}
                </span>{" "}
                blogs
              </p>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((page) => page - 1)}
                  className="rounded-lg border border-border bg-surface px-3 py-2 text-sm font-medium text-muted transition hover:bg-background hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Previous
                </button>

                <span className="px-2 text-sm text-muted">
                  {currentPage} / {totalPages}
                </span>

                <button
                  type="button"
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage((page) => page + 1)}
                  className="rounded-lg border border-border bg-surface px-3 py-2 text-sm font-medium text-muted transition hover:bg-background hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
