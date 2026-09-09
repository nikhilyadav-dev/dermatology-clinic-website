"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};

export function HowItWorks({ howItWorks }) {
  if (!howItWorks) return null;
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-background py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 flex items-center justify-center gap-1 flex-col">
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />

              <p className="font-heading text-[10px] font-bold uppercase tracking-[0.25em] text-primary">
                {howItWorks.eyebrow}
              </p>
            </div>

            <h2 className="mt-4  font-heading text-4xl font-medium leading-[1.05] tracking-[-0.04em] text-foreground sm:text-5xl">
              {howItWorks.title.split(" ").slice(0, -2).join(" ")}{" "}
              <span className="font-serif italic text-primary">
                {howItWorks.title.split(" ").slice(-2).join(" ")}
              </span>
            </h2>

            <p className="mt-4 max-w-md text-sm leading-7 text-foreground/70">
              {howItWorks.description}
            </p>
          </div>
        </div>

        {/* Process */}
        <div className="relative mt-16 sm:mt-20 lg:mt-24">
          {/* Connecting line - desktop */}
          <div className="absolute left-0 right-0 top-[27px] hidden h-px bg-foreground/10 lg:block" />

          <div className="grid gap-10 lg:grid-cols-4 lg:gap-6">
            {howItWorks.steps.map((step, index) => (
              <motion.article
                key={step.title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="group relative "
              >
                {/* Step number */}
                <div className="relative z-10 flex items-center">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-background-2 transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                    <span className="font-heading text-xs font-bold">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Arrow */}
                  {index !== howItWorks.steps.length - 1 && (
                    <div className="ml-auto flex h-8 w-8 items-center justify-center text-primary/80 lg:hidden">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="mt-6 max-w-xs">
                  <p className="font-heading text-[10px] font-bold uppercase tracking-[0.18em] text-primary/60">
                    Step {index + 1}
                  </p>

                  <h3 className="mt-2 font-heading text-xl font-medium tracking-[-0.02em] text-foreground">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-foreground/55">
                    {step.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 border-t border-foreground/10 pt-6"
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs leading-5 text-foreground/80">
              Each treatment is planned around your individual anatomy, goals
              and desired outcome.
            </p>

            <span className="shrink-0 font-heading text-[9px] font-bold uppercase tracking-[0.2em] text-primary">
              Personalised approach
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
