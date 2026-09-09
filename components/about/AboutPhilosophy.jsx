"use client";

import { motion } from "framer-motion";

export function PhilosophySection({ philosophy }) {
  if (!philosophy) return null;

  return (
    <section
      id={philosophy.id}
      className="relative w-full overflow-hidden bg-background-2 py-20 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="relative"
          >
            <span className="pointer-events-none absolute -left-4 -top-10 select-none font-heading text-8xl font-semibold text-primary/[0.06] sm:text-9xl">
              “
            </span>

            <span className="relative flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              {philosophy.eyebrow}
            </span>

            <h2 className="relative mt-5 font-heading text-3xl font-medium leading-[1.08] tracking-[-0.02em] text-foreground sm:text-4xl lg:text-[2.6rem]">
              {philosophy.title}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.1 }}
            className="border-l-2 border-primary/25 pl-6 lg:mt-3 lg:pl-8"
          >
            <p className="text-[15px] leading-7 text-foreground/65 sm:text-base sm:leading-8">
              {philosophy.description}
            </p>
          </motion.div>
        </div>

        <div className="mt-20 grid grid-cols-1 divide-y divide-foreground/10 sm:grid-cols-3 sm:divide-y-0 sm:divide-x">
          {philosophy.principles.map((p, i) => (
            <motion.div
              key={p.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative px-2 py-8 sm:px-8 sm:py-2 lg:px-10"
            >
              <span className="pointer-events-none absolute -right-1 -top-4 font-heading text-6xl font-semibold text-primary/[0.06] sm:text-7xl">
                {p.number}
              </span>

              <p className="relative text-xs font-bold uppercase tracking-[0.2em] text-primary">
                {p.number}
              </p>

              <h3 className="relative mt-3 font-heading text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                {p.title}
              </h3>

              <p className="relative mt-3 font-heading text-base italic leading-snug text-primary/80">
                {p.shortTitle}
              </p>

              <p className="relative mt-4 text-sm leading-relaxed text-foreground/60">
                {p.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
