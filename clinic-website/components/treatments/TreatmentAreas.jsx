"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function TreatmentAreas({ treatmentAreas }) {
  if (!treatmentAreas?.length) return null;

  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
          {/* Intro */}
          <div>
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />

              <p className="font-heading text-[10px] font-bold uppercase tracking-[0.25em] text-primary">
                Treatment areas
              </p>
            </div>

            <h2 className="mt-6  font-heading text-4xl font-medium leading-[1.05] tracking-[-0.04em] text-foreground sm:text-5xl">
              Where treatment
              <span className="font-serif italic text-primary"> may help.</span>
            </h2>

            <p className="mt-6  text-sm leading-7 text-foreground/70">
              Explore the areas that may be treated depending on your concerns,
              facial structure and treatment goals.
            </p>
          </div>

          {/* Areas */}
          <div className="border-t border-foreground/10">
            {treatmentAreas.map((area, index) => (
              <motion.div
                key={area}
                initial={{ opacity: 0, x: 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.06,
                }}
                className="group flex items-center gap-5 border-b border-foreground/10 py-5 sm:py-6"
              >
                {/* Number */}
                <span className="w-8 shrink-0 font-heading text-[11px] font-bold tracking-wider text-foreground/25 transition-colors duration-300 group-hover:text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Area */}
                <p className="flex-1 font-heading text-lg font-medium tracking-tight text-foreground transition-transform duration-300 group-hover:translate-x-1 sm:text-xl">
                  {area}
                </p>

                {/* Arrow */}
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-foreground/10 text-foreground/30 transition-all duration-300 group-hover:border-primary/20 group-hover:bg-primary group-hover:text-white">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
