import Link from "next/link";
import { getDashboardStats } from "./actions";

function StatusBadge({ status }) {
  const styles = {
    NEW: "bg-primary/10 text-primary",
    CONTACTED: "bg-blue-50 text-blue-600",
    CONFIRMED: "bg-green-50 text-green-600",
    COMPLETED: "bg-gray-100 text-gray-600",
    CANCELLED: "bg-red-50 text-red-600",
    PUBLISHED: "bg-green-50 text-green-600",
    DRAFT: "bg-gray-100 text-gray-600",
  };

  const labels = {
    NEW: "New",
    CONTACTED: "Contacted",
    CONFIRMED: "Confirmed",
    COMPLETED: "Completed",
    CANCELLED: "Cancelled",
    PUBLISHED: "Published",
    DRAFT: "Draft",
  };

  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${
        styles[status] || "bg-gray-100 text-gray-600"
      }`}
    >
      {labels[status] || status}{" "}
    </span>
  );
}

function formatDate(date) {
  if (!date) return "-";

  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(date));
}

export default async function DashboardPage() {
  const result = await getDashboardStats();

  const stats = [
    {
      title: "Total Blogs",
      value: result.stats.totalBlogs,
      description: "All blog posts",
    },
    {
      title: "Published",
      value: result.stats.publishedBlogs,
      description: "Live on website",
    },
    {
      title: "Drafts",
      value: result.stats.draftBlogs,
      description: "Waiting to publish",
    },
    {
      title: "New Consultations",
      value: result.stats.newConsultations,
      description: "Needs attention",
    },
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      {/* Header */}{" "}
      <div className="mb-6 sm:mb-8">
        {" "}
        <h1 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
          Dashboard{" "}
        </h1>
        ```
        <p className="mt-1 text-sm text-muted">
          Overview of your clinic website and recent activity.
        </p>
      </div>
      {/* Error */}
      {!result.success && (
        <div className="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
          {result.error}
        </div>
      )}
      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="rounded-xl border border-border bg-surface p-5"
          >
            <p className="text-sm font-medium text-muted">{stat.title}</p>

            <p className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              {stat.value}
            </p>

            <p className="mt-1 text-xs text-muted">{stat.description}</p>
          </div>
        ))}
      </div>
      {/* Recent Activity */}
      <div className="mt-6 grid gap-6 xl:grid-cols-2">
        {/* Consultations */}
        <section className="rounded-xl border border-border bg-surface">
          <div className="flex items-center justify-between border-b border-border px-5 py-4 sm:px-6">
            <div>
              <h2 className="font-semibold text-foreground">
                Recent Consultations
              </h2>

              <p className="mt-1 text-xs text-muted">
                Latest consultation requests
              </p>
            </div>

            <Link
              href="/consultations"
              className="text-sm font-medium text-primary hover:text-primary-hover"
            >
              View all
            </Link>
          </div>

          <div className="divide-y divide-border">
            {result.recentConsultations.length > 0 ? (
              result.recentConsultations.map((consultation) => (
                <div
                  key={consultation.id}
                  className="flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6"
                >
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium text-foreground">
                      {consultation.name}
                    </p>

                    <p className="mt-1 truncate text-xs text-muted">
                      {consultation.concern || "General Consultation"}
                    </p>
                  </div>

                  <div className="flex items-center justify-between gap-4 sm:justify-end">
                    <span className="text-xs text-muted">
                      {formatDate(consultation.createdAt)}
                    </span>

                    <StatusBadge status={consultation.status} />
                  </div>
                </div>
              ))
            ) : (
              <div className="px-5 py-10 text-center sm:px-6">
                <p className="text-sm text-muted">No consultations yet.</p>
              </div>
            )}
          </div>
        </section>

        {/* Blogs */}
        <section className="rounded-xl border border-border bg-surface">
          <div className="flex items-center justify-between border-b border-border px-5 py-4 sm:px-6">
            <div>
              <h2 className="font-semibold text-foreground">Recent Blogs</h2>

              <p className="mt-1 text-xs text-muted">Latest blog activity</p>
            </div>

            <Link
              href="/blogs"
              className="text-sm font-medium text-primary hover:text-primary-hover"
            >
              View all
            </Link>
          </div>

          <div className="divide-y divide-border">
            {result.recentBlogs.length > 0 ? (
              result.recentBlogs.map((blog) => (
                <div
                  key={blog.id}
                  className="flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6"
                >
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium text-foreground">
                      {blog.title}
                    </p>

                    <p className="mt-1 text-xs text-muted">
                      {formatDate(blog.createdAt)}
                    </p>
                  </div>

                  <StatusBadge status={blog.status} />
                </div>
              ))
            ) : (
              <div className="px-5 py-10 text-center sm:px-6">
                <p className="text-sm text-muted">No blogs yet.</p>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
