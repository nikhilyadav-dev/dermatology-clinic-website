"use client";

import { motion } from "framer-motion";
import { Check, Clock3 } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function WhatToExpect({ whatToExpect }) {
  if (!whatToExpect) return null;
  const phases = [
    {
      number: "01",
      label: "Before",
      items: whatToExpect.before,
    },
    {
      number: "02",
      label: "During",
      items: whatToExpect.during,
    },
    {
      number: "03",
      label: "After",
      items: whatToExpect.after,
    },
  ];

  return (
    <section
      id="what-to-expect"
      className="relative overflow-hidden bg-background-2 py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          {/* Left heading */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.55 }}
            className="lg:sticky lg:top-24 lg:self-start"
          >
            <div>
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />

                <p className="font-heading text-[10px] font-bold uppercase tracking-[0.25em] text-primary">
                  Your Treatment Journey
                </p>
              </div>

              <h2 className="mt-6  font-heading text-4xl font-medium leading-[1.05] tracking-[-0.04em] text-foreground sm:text-5xl">
                What You Can{" "}
                <span className="font-serif italic text-primary">Expect.</span>
              </h2>

              <p className="mt-6 max-w-sm text-sm leading-7 text-foreground/70">
                A clear overview of what happens before, during and after your
                treatment, so you know what to expect at every stage.
              </p>
            </div>

            {/* Small visual detail */}
            <div className="mt-10 hidden items-center gap-4 lg:flex">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/20 bg-primary/5">
                <Clock3 className="h-4 w-4 text-primary" />
              </div>

              <div>
                <p className="font-heading text-xs font-bold text-foreground">
                  Simple & personalised
                </p>

                <p className="mt-1 text-[11px] text-foreground/45">
                  Guidance throughout your journey
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right content */}
          <div>
            <div className="divide-y divide-foreground/10 border-y border-foreground/10">
              {phases.map((phase, index) => (
                <motion.div
                  key={phase.label}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.15 }}
                  variants={fadeUp}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="group py-8 sm:py-10"
                >
                  <div className="grid gap-6 sm:grid-cols-[100px_1fr]">
                    {/* Number */}
                    <div>
                      <span className="font-heading text-sm font-medium tracking-[0.08em] text-primary/70">
                        {phase.number}
                      </span>

                      <p className="mt-2 font-heading text-xs font-bold uppercase tracking-[0.16em] text-foreground/70">
                        {phase.label}
                      </p>
                    </div>

                    {/* Items */}
                    <div className="space-y-4">
                      {phase.items.map((item) => (
                        <div key={item} className="flex items-start gap-3">
                          <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                            <Check className="h-3 w-3 text-primary" />
                          </div>

                          <p className="max-w-xl text-sm leading-6 text-foreground/85 sm:text-[15px]">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Results */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="relative mt-10 overflow-hidden rounded-[2rem] bg-primary px-7 py-8 text-white sm:px-9 sm:py-10"
            >
              <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full border border-white/10" />
              <div className="absolute -right-5 -top-5 h-20 w-20 rounded-full border border-white/10" />

              <div className="relative z-10 max-w-2xl">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                    <Clock3 className="h-4 w-4" />
                  </span>

                  <span className="font-heading text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">
                    Results timeline
                  </span>
                </div>

                <h3 className="mt-5 font-heading text-2xl font-medium tracking-[-0.02em] sm:text-3xl">
                  {whatToExpect.results.title}
                </h3>

                <p className="mt-4 max-w-xl text-sm leading-7 text-white/80">
                  {whatToExpect.results.description}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
