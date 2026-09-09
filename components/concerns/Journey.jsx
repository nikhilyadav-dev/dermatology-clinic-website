"use client";
import { motion } from "framer-motion";

export function TreatmentJourney({ journey }) {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
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
                {journey.eyebrow}
              </p>
            </div>

            {journey.title && (
              <h2 className="mt-4  font-heading text-4xl font-medium leading-[1.05] tracking-[-0.04em] text-foreground sm:text-5xl">
                {journey.title.split(" ").slice(0, -2).join(" ")}{" "}
                <span className="font-serif italic text-primary">
                  {journey.title.split(" ").slice(-2).join(" ")}
                </span>
              </h2>
            )}

            <p className="mt-4 max-w-2xl text-sm leading-7 text-foreground/70">
              {journey.description}
            </p>
          </div>
        </motion.div>

        {/* Journey */}
        <div className="relative mt-16">
          {/* Desktop connecting line */}
          <div className="absolute left-[0%] right-[12.5%] top-[19px] hidden h-px bg-[var(--muted)] lg:block" />

          <div className="grid gap-10 lg:grid-cols-4 lg:gap-6">
            {journey.steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="group relative"
              >
                {/* Mobile connecting line */}
                {index !== journey.steps.length - 1 && (
                  <div className="absolute left-[19px] top-10 h-[calc(100%+2.5rem)] w-px bg-[var(--muted)] lg:hidden" />
                )}

                {/* Number */}
                <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 bg-[var(--surface)] transition-all duration-300 group-hover:border-primary group-hover:bg-primary">
                  <span className="text-[10px] font-bold tracking-wider text-primary transition-colors duration-300 group-hover:text-white">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="ml-16 -mt-10 lg:ml-0 lg:mt-7">
                  <h3 className="font-heading text-lg font-semibold tracking-tight text-[var(--foreground)] transition-colors duration-300 group-hover:text-primary sm:text-xl">
                    {step.title}
                  </h3>

                  <p className="mt-3 max-w-xs text-sm leading-6 text-[var(--foreground)]/75">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
