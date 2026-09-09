"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, Circle } from "lucide-react";

export function ConcernOverview({ overview }) {
  if (!overview) return null;

  const spectrum = overview.spectrum;

  return (
    <section className="relative w-full overflow-hidden bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="grid items-stretch gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Main content — unchanged */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-[2.5rem] border border-muted bg-surface px-7 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-16"
          >
            <span className="pointer-events-none absolute -right-4 -top-12 font-heading text-[180px] font-semibold leading-none text-primary/[0.035] sm:text-[220px]">
              01
            </span>

            <div className="relative z-10 flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                {overview.eyebrow}
              </span>
            </div>

            <h2 className="relative z-10 mt-7 max-w-3xl font-heading text-4xl font-semibold leading-[1.02] tracking-[-0.04em] text-foreground sm:text-5xl lg:text-5xl">
              {overview.title}
            </h2>

            <div className="relative z-10 mt-8 flex items-center gap-2">
              <span className="h-px w-14 bg-primary" />
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            </div>

            <p className="relative z-10 mt-7 max-w-2xl text-base leading-8 text-foreground/65 sm:text-lg">
              {overview.description}
            </p>

            <div className="relative z-10 mt-12 flex items-center gap-4 border-t border-muted pt-6">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/[0.07]">
                <Circle className="h-3.5 w-3.5 fill-primary text-primary" />
              </div>
              <p className="text-xs font-medium leading-5 text-foreground/50 sm:text-sm">
                Understanding the concern is the first step toward choosing the
                right approach.
              </p>
            </div>
          </motion.div>

          {/* Right panel — mild-to-severe spectrum, works for any concern */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative flex min-h-[420px] flex-col overflow-hidden rounded-[2.5rem] bg-primary p-8 text-primary-foreground sm:p-10"
          >
            {/* Background rings — decorative only */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/10" />
            <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full border border-white/10" />
            <div className="pointer-events-none absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-white/[0.04]" />

            {/* Top label */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
                {spectrum?.label || overview.eyebrow || "How It Can Range"}
              </span>
              <ArrowDownRight className="h-5 w-5 text-white/50" />
            </div>

            {spectrum?.levels?.length > 0 ? (
              <>
                {/* Severity meter — segments filling progressively */}
                <div className="relative z-10 mt-8 flex gap-1.5">
                  {spectrum.levels.map((_, i) => (
                    <span
                      key={i}
                      className="h-1.5 flex-1 rounded-full"
                      style={{
                        backgroundColor: `rgba(255,255,255,${0.25 + i * 0.25})`,
                      }}
                    />
                  ))}
                </div>

                {/* Level list */}
                <div className="relative z-10 mt-8 flex flex-1 flex-col justify-center gap-4">
                  {spectrum.levels.map((lvl, i) => (
                    <motion.div
                      key={lvl.level}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.15 + i * 0.1 }}
                      className="flex items-start gap-3.5 rounded-2xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur-sm"
                    >
                      <span
                        className="mt-1.5 flex-shrink-0 rounded-full bg-white"
                        style={{
                          width: `${8 + i * 4}px`,
                          height: `${8 + i * 4}px`,
                          opacity: 0.5 + i * 0.25,
                        }}
                      />
                      <div>
                        <p className="text-sm font-semibold text-white">
                          {lvl.level}
                        </p>
                        <p className="mt-0.5 text-xs leading-relaxed text-white/90">
                          {lvl.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </>
            ) : (
              // Graceful fallback if a concern hasn't defined `spectrum` yet
              <div className="relative z-10 flex flex-1 items-center">
                <p className="text-sm leading-relaxed text-white/90">
                  {overview.description}
                </p>
              </div>
            )}

            <p className="relative z-10 mt-8 border-t border-white/10 pt-5 text-xs leading-5 text-white/50">
              Your dermatologist will assess where you fall on this range during
              consultation.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
