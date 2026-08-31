"use client";

import { motion } from "framer-motion";

import { TreatmentCard } from "@/components/tratments/tretment-card";
import { getTreatmentGroups } from "@/lib/content";

const treatmentGroups = getTreatmentGroups();

export default function AllTreatmentsPage() {
  return (
    <main className="w-full bg-background">
      {/* Page header */}
      {/* <div className="mx-auto max-w-3xl px-6 pb-14 pt-16 text-center md:pt-20">
        <span className="inline-block rounded-full border border-[var(--muted)] bg-[var(--surface)] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[var(--foreground)]/60">
          Treatment Portfolio
        </span>
        <h1 className="mt-5 text-3xl font-extrabold leading-tight text-[var(--foreground)] md:text-5xl">
          Care for every concern,
          <br />
          <span className="text-primary">reviewed by one dermatologist</span>
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[var(--foreground)]/60 md:text-base">
          Every treatment below is matched to your skin specifically — browse by
          category to find what's right for you.
        </p>
      </div> */}

      <div className="mx-auto pb-14 pt-16 max-w-4xl text-center">
        <span className="text-center text-sm font-semibold uppercase tracking-[0.25em] text-primary font-heading">
          Treatment Portfolio
        </span>
        <h2 className="mt-3 text-center text-2xl font-bold tracking-tight text-forground sm:text-3xl lg:text-4xl font-heading">
          Care for every concern reviewed by one dermatologist
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-foreground/60">
          Every treatment below is matched to your skin specifically — browse by
          category to find what's right for you.
        </p>
      </div>

      {treatmentGroups.map((group, groupIndex) => (
        <section
          key={group.title}
          className="w-full py-14"
          style={{
            backgroundColor:
              groupIndex % 2 === 0
                ? "var(--background)"
                : "var(--background-2)",
          }}
        >
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-8 flex items-start gap-4 border-l-4 border-primary pl-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-primary">
                  Category {String(groupIndex + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-1 text-2xl font-extrabold text-foreground md:text-3xl">
                  {group.title}
                </h2>
                <p className="mt-2 max-w-2xl text-sm text-foreground/60">
                  {group.description}
                </p>
              </div>
            </div>

            <div className=" pt-4 sm:grid-cols-2  grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
              {group.items.map((t, i) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: (i % 4) * 0.06 }}
                >
                  <TreatmentCard {...t} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </main>
  );
}
