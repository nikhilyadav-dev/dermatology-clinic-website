"use client";

import { ArrowRight } from "lucide-react";
import { TreatmentCard } from "@/components/treatments/tretment-card";
import { getTreatmentsByConcern } from "@/lib/content";
import { motion } from "framer-motion";

export function RelatedTreatments({ treatments, slug }) {
  const related = getTreatmentsByConcern(slug);

  return (
    <section className="relative w-full overflow-hidden bg-background-2 ">
      <div className="relative mx-auto grid max-w-7xl items-center gap-2 px-6 pb-6 pt-14 lg:gap-8 lg:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-1 flex-col">
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />

              <p className="font-heading text-[10px] font-bold uppercase tracking-[0.25em] text-primary">
                {treatments.eyebrow}
              </p>
            </div>

            {treatments.title && (
              <h2 className="mt-4  font-heading text-4xl font-medium leading-[1.05] tracking-[-0.04em] text-foreground sm:text-5xl">
                {treatments.title.split(" ").slice(0, -2).join(" ")}{" "}
                <span className="font-serif italic text-primary">
                  {treatments.title.split(" ").slice(-2).join(" ")}
                </span>
              </h2>
            )}

            <p className="mt-4 max-w-xl text-sm leading-7 text-foreground/70">
              {treatments.description}
            </p>
          </div>
        </motion.div>
        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {related.slice(0, 3).map((t) => (
            <TreatmentCard key={t.slug} {...t} />
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href="/treatments"
            className="group inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-5 py-2.5 text-sm font-semibold text-primary transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:bg-primary/10 hover:shadow-md hover:shadow-primary/10"
          >
            View All Treatments
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white transition-transform duration-300 group-hover:translate-x-0.5">
              <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
