"use client";

import { motion } from "framer-motion";
import { ConcernCard } from "@/components/concerns/concern-card";
import { ViewAllCard } from "@/components/ui/Viewallcard";
import { getHomepageConcerns } from "@/lib/content";

const TOTAL_CONCERNS = 25;
const concerns = getHomepageConcerns();

export function ConcernsSection() {
  return (
    <section className="w-full bg-background-2 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <span className="text-center text-sm font-semibold uppercase tracking-[0.25em] text-primary font-heading">
            Your concerns
          </span>
          <h2 className="mt-3 text-center text-2xl font-bold tracking-tight text-forground sm:text-3xl lg:text-4xl font-heading">
            Care designed around your skin concerns.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-foreground/60">
            From acne and pigmentation to hair loss and ageing, discover
            personalized treatments designed around your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mt-2">
          {concerns.map((concern, i) => (
            <motion.div
              key={concern.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: (i % 4) * 0.06 }}
            >
              <ConcernCard {...concern} />
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: (concerns.length % 4) * 0.06 }}
          >
            <ViewAllCard
              remainingCount={TOTAL_CONCERNS - concerns.length}
              href="/concerns"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ConcernsSection;
