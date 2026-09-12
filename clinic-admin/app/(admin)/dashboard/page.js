const stats = [
  {
    title: "Total Blogs",
    value: "24",
    description: "All blog posts",
  },
  {
    title: "Published",
    value: "18",
    description: "Live on website",
  },
  {
    title: "Drafts",
    value: "6",
    description: "Waiting to publish",
  },
  {
    title: "New Consultations",
    value: "8",
    description: "Needs attention",
  },
];

const recentConsultations = [
  {
    name: "Priya Sharma",
    concern: "Acne & Acne Scars",
    date: "12 Sep 2026",
    status: "New",
  },
  {
    name: "Rahul Verma",
    concern: "Hair Loss",
    date: "11 Sep 2026",
    status: "Contacted",
  },
  {
    name: "Ananya Singh",
    concern: "Pigmentation",
    date: "10 Sep 2026",
    status: "Confirmed",
  },
];

const recentBlogs = [
  {
    title: "5 Things You Should Know About Acne",
    status: "Published",
    date: "10 Sep 2026",
  },
  {
    title: "Understanding Hair Loss in Women",
    status: "Published",
    date: "07 Sep 2026",
  },
  {
    title: "Complete Guide to Chemical Peels",
    status: "Draft",
    date: "05 Sep 2026",
  },
];

function StatusBadge({ status }) {
  const styles = {
    New: "bg-primary/10 text-primary",
    Contacted: "bg-blue-50 text-blue-600",
    Confirmed: "bg-green-50 text-green-600",
    Published: "bg-green-50 text-green-600",
    Draft: "bg-gray-100 text-gray-600",
  };

  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${
        styles[status] || "bg-gray-100 text-gray-600"
      }`}
    >
      {status}
    </span>
  );
}

export default function DashboardPage() {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="mb-6 sm:mb-8">
        <h1 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
          Dashboard
        </h1>

        <p className="mt-1 text-sm text-muted">
          Overview of your clinic website and recent activity.
        </p>
      </div>

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

            <a
              href="/consultations"
              className="text-sm font-medium text-primary hover:text-primary-hover"
            >
              View all
            </a>
          </div>

          <div className="divide-y divide-border">
            {recentConsultations.map((consultation) => (
              <div
                key={`${consultation.name}-${consultation.date}`}
                className="flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6"
              >
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-foreground">
                    {consultation.name}
                  </p>

                  <p className="mt-1 text-xs text-muted">
                    {consultation.concern}
                  </p>
                </div>

                <div className="flex items-center justify-between gap-4 sm:justify-end">
                  <span className="text-xs text-muted">
                    {consultation.date}
                  </span>

                  <StatusBadge status={consultation.status} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Blogs */}
        <section className="rounded-xl border border-border bg-surface">
          <div className="flex items-center justify-between border-b border-border px-5 py-4 sm:px-6">
            <div>
              <h2 className="font-semibold text-foreground">Recent Blogs</h2>

              <p className="mt-1 text-xs text-muted">Latest blog activity</p>
            </div>

            <a
              href="/blogs"
              className="text-sm font-medium text-primary hover:text-primary-hover"
            >
              View all
            </a>
          </div>

          <div className="divide-y divide-border">
            {recentBlogs.map((blog) => (
              <div
                key={blog.title}
                className="flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6"
              >
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-foreground">
                    {blog.title}
                  </p>

                  <p className="mt-1 text-xs text-muted">{blog.date}</p>
                </div>

                <StatusBadge status={blog.status} />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
