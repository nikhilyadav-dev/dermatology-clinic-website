"use client";

import { motion } from "framer-motion";

import { TreatmentCard } from "@/components/treatments/tretment-card";
import { getTreatmentGroups } from "@/lib/content";

const treatmentGroups = getTreatmentGroups();

export default function AllTreatmentsPage() {
  return (
    <main className="w-full bg-background">
      {/* <section className="bg-primary/[0.04]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:items-end">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">
                Treatments
              </span>

              <div className="mt-5 h-px w-16 bg-primary" />
            </div>

            <div>
              <h1 className="font-heading text-5xl font-medium leading-[1] tracking-[-0.04em] text-foreground sm:text-6xl lg:text-8xl">
                Modern dermatology,
                <br />
                <span className="text-foreground/40">
                  thoughtfully delivered.
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-base leading-7 text-foreground/60 sm:text-lg">
                From medical dermatology to aesthetic treatments, discover
                carefully considered options designed around your individual
                needs.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      <section className="overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-4 -top-14 font-heading text-[10rem] font-medium leading-none text-primary/[0.07] sm:text-[14rem]"
            >
              01
            </span>

            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                Treatments
              </p>

              <h1 className="mt-6 max-w-4xl font-heading text-5xl font-medium leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
                The right treatment
                <br />
                <span className="text-primary">
                  starts with the right plan.
                </span>
              </h1>

              <div className="mt-10 flex max-w-2xl items-start gap-5">
                <span className="mt-3 h-px w-12 shrink-0 bg-primary" />

                <p className="text-base leading-7 text-foreground/60 sm:text-lg">
                  Explore treatments designed to address specific concerns with
                  clinical judgement, precision and personalised care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {treatmentGroups.map((group, groupIndex) => (
        <section
          key={group.title}
          id={group.id}
          className="w-full py-14 scroll-mt-24"
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
