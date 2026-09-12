"use client";

import { Clock3, HeartPulse, Repeat2, Syringe } from "lucide-react";

const snapshotItems = [
  {
    key: "duration",
    label: "Treatment time",
    icon: Clock3,
  },
  {
    key: "downtime",
    label: "Downtime",
    icon: HeartPulse,
  },
  {
    key: "sessions",
    label: "Sessions",
    icon: Repeat2,
  },
  {
    key: "procedureType",
    label: "Procedure type",
    icon: Syringe,
  },
];

export function TreatmentSnapshot({ snapshot }) {
  if (!snapshot) return null;

  const items = snapshotItems.filter((item) => snapshot[item.key]);
  if (!items.length) return null;

  return (
    <section className="relative bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className=" border-foreground/10 py-10 sm:py-15">
          {/* Heading */}
          <div className="mb-7 flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />

            <p className="font-heading text-[10px] font-bold uppercase tracking-[0.25em] text-foreground/75">
              Treatment details
            </p>

            <span className="h-px flex-1 bg-foreground/20" />
          </div>

          {/* Details */}
          <div
            className={`grid ${
              items.length === 1
                ? "grid-cols-1"
                : items.length === 2
                  ? "grid-cols-2"
                  : items.length === 3
                    ? "grid-cols-1 sm:grid-cols-3"
                    : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
            }`}
          >
            {items.map((item, index) => {
              const Icon = item.icon;
              const value = snapshot[item.key];

              return (
                <div
                  key={item.key}
                  className={`
                    group relative flex items-start gap-4 px-0 py-4
                    sm:px-6 sm:py-2
                    ${
                      index !== 0
                        ? "border-t border-foreground/10 sm:border-l sm:border-t-0"
                        : ""
                    }
                  `}
                >
                  {/* Icon */}
                  <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/8 text-primary transition-transform duration-300 group-hover:scale-105">
                    <Icon className="h-4 w-4" strokeWidth={1.7} />
                  </div>

                  <div className="min-w-0">
                    <p className="font-heading text-[10px] font-bold uppercase tracking-[0.16em] text-foreground/65">
                      {item.label}
                    </p>

                    <p className="mt-1.5 text-base font-medium tracking-tight text-foreground sm:text-lg">
                      {value}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
