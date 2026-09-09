"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export function ConcernCta({ cta }) {
  return (
    <section className="px-6 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2rem] bg-[var(--surface)] px-6 py-16 text-center sm:px-12 lg:px-20 lg:py-24"
        >
          {/* Decorative circle - top right */}
          <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-primary/5" />

          {/* Decorative circle - bottom left */}
          <div className="absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-primary/5" />

          {/* Small decorative dots */}
          <div className="absolute right-8 top-8 hidden grid-cols-4 gap-2 opacity-40 sm:grid">
            {Array.from({ length: 16 }).map((_, i) => (
              <span key={i} className="h-1 w-1 rounded-full bg-primary" />
            ))}
          </div>

          {/* Content */}
          <div className="relative z-10 mx-auto max-w-3xl">
            {/* Eyebrow */}
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-primary/50" />

              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                {cta.eyebrow}
              </span>

              <span className="h-px w-8 bg-primary/50" />
            </div>

            {/* Icon */}
            <div className="mx-auto mt-6 flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Sparkles className="h-4 w-4" />
            </div>

            {/* Title */}
            <h2 className="mt-6 font-heading text-3xl font-semibold leading-tight tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl">
              {cta.title}
            </h2>

            {/* Description */}
            <p className="mx-auto mt-5 max-w-xl text-[15px] leading-7 text-[var(--foreground)]/55">
              {cta.description}
            </p>

            {/* CTA */}
            <div className="mt-8">
              <a
                href={cta.button.href}
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/25"
              >
                {cta.button.label}

                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
