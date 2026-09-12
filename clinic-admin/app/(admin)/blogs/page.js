"use client";

import { useEffect, useMemo, useState } from "react";
import { getBlogs, deleteBlog } from "./actions";
import { useRouter } from "next/navigation";

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
  const router = useRouter();

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
          onClick={() => router.push("/blogs/new")}
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
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const [isLoading, setIsLoading] = useState(true);

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function loadBlogs() {
      const result = await getBlogs();

      if (result.success) {
        setBlogs(
          result.blogs.map((blog) => ({
            id: blog.id,
            title: blog.title,
            category: blog.category.name,
            status: blog.status === "PUBLISHED" ? "Published" : "Draft",
            date: new Date(
              blog.publishedAt || blog.createdAt,
            ).toLocaleDateString("en-IN", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            }),
            author: blog.author.name,
          })),
        );
      } else {
        console.error("Failed to load blogs:", result.error);
      }

      setIsLoading(false);
    }

    loadBlogs();
  }, []);

  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) => {
      const matchesSearch = blog.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesStatus =
        statusFilter === "All" || blog.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [blogs, search, statusFilter]);
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

  async function handleDelete(id) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this blog?",
    );

    if (!confirmed) return;

    const result = await deleteBlog(id);

    if (!result.success) {
      alert(result.error || "Failed to delete blog.");
      return;
    }

    setBlogs((prev) => prev.filter((blog) => blog.id !== id));
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
          onClick={() => router.push("/blogs/new")}
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
                            onClick={() =>
                              router.push(`/blogs/${blog.id}/edit`)
                            }
                          >
                            Edit
                          </button>

                          <button
                            type="button"
                            className="rounded-md px-3 py-1.5 text-xs font-medium text-red-500 hover:bg-red-50"
                            onClick={() => handleDelete(blog.id)}
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
                      onClick={() => router.push(`/blogs/${blog.id}/edit`)}
                    >
                      Edit
                    </button>

                    <button
                      type="button"
                      className="rounded-md px-2.5 py-1.5 text-xs font-medium text-red-500 hover:bg-red-50"
                      onClick={() => handleDelete(blog.id)}
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
