"use client";

import { motion } from "framer-motion";

import { TreatmentCard } from "@/components/treatments/tretment-card";
import { ViewAllCard } from "@/components/ui/Viewallcard";
import { getHomepageTreatments } from "@/lib/content";

const TOTAL_TREATMENTS = 12;

const treatments = getHomepageTreatments();

export function TreatmentsSection() {
  return (
    <section className="w-full bg-background py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <span className="text-center text-sm font-semibold uppercase tracking-[0.25em] text-primary font-heading">
            Treatments
          </span>
          <h2 className="mt-3 text-center text-2xl font-bold tracking-tight text-forground sm:text-3xl lg:text-4xl font-heading">
            Care built around your skin
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-foreground/60">
            Every treatment is reviewed for your skin specifically — nothing
            here is a one-size-fits-all package.
          </p>
        </div>

        <div className=" pt-4 sm:grid-cols-2  grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3  ">
          {treatments.map((t, i) => (
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

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.35,
              delay: (treatments.length % 4) * 0.06,
            }}
          >
            <ViewAllCard
              remainingCount={TOTAL_TREATMENTS - treatments.length}
              label="View all treatments"
              href="/treatments"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default TreatmentsSection;
