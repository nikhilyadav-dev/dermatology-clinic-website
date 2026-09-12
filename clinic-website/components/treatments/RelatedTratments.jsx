"use client";

import { ArrowRight } from "lucide-react";
import { TreatmentCard } from "@/components/treatments/tretment-card";
import { getTreatmentBySlug } from "@/lib/content";

export function RelatedTreatments({ relatedTreatments }) {
  if (!relatedTreatments || relatedTreatments.length === 0) {
    return null;
  }

  const related = relatedTreatments
    .map((slug) => {
      return getTreatmentBySlug(slug);
    })
    .filter(Boolean);

  return (
    <section className="relative w-full overflow-hidden bg-background-2 py-15 ">
      <div className="relative mx-auto grid max-w-7xl items-center gap-2 px-6 pb-6 pt-14 lg:gap-8 lg:pt-20">
        <div className="mb-5 flex items-center justify-center gap-1 flex-col">
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />

            <p className="font-heading text-[10px] font-bold uppercase tracking-[0.25em] text-primary">
              You May Also Like
            </p>
          </div>

          <h2 className="mt-6  font-heading text-4xl font-medium leading-[1.05] tracking-[-0.04em] text-foreground sm:text-5xl">
            Explore Other{" "}
            <span className="font-serif italic text-primary"> Treatments</span>
          </h2>

          <p className="mt-4 max-w-lg text-sm leading-7 text-foreground/70 text-center">
            Depending on your concerns and goals, your dermatologist may
            recommend other treatments that can complement your results.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {related.slice(0, 3).map((t) => (
            <TreatmentCard key={t.slug} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}
