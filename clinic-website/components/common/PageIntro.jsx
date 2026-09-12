import { ArrowDownRight } from "lucide-react";

export function PageIntro({ eyebrow, title, description, label = "Explore" }) {
  return (
    <section className="relative overflow-hidden border-b border-foreground/10">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-10">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.65fr] lg:items-end">
          {/* Main Heading */}
          <div>
            <div className="mb-7 flex items-center gap-4">
              <span className="h-px w-10 bg-primary" />

              <span className="text-xs font-medium uppercase tracking-[0.28em] text-primary">
                {eyebrow}
              </span>
            </div>

            <h1 className="max-w-4xl font-heading text-5xl font-medium leading-[0.98] tracking-[-0.035em] text-foreground sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
              {title}
            </h1>
          </div>

          {/* Supporting Content */}
          <div className="lg:pb-2">
            <div className="mb-6 flex items-center justify-between border-b border-foreground/10 pb-4">
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-foreground/45">
                {label}
              </span>

              <ArrowDownRight
                size={18}
                strokeWidth={1.5}
                className="text-primary"
              />
            </div>

            <p className="max-w-md text-base leading-7 text-foreground/60 sm:text-lg">
              {description}
            </p>
          </div>
        </div>

        {/* Decorative bottom element */}
        <div className="mt-16 flex items-center gap-3">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          <span className="h-px w-24 bg-foreground/15" />
          <span className="h-px w-8 bg-primary/50" />
        </div>
      </div>

      {/* Very subtle background detail */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full border border-primary/10"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full border border-primary/10"
      />
    </section>
  );
}
