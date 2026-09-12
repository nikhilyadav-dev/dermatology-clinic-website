"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function WhenToSeekCare({ considerations }) {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 80%", "start 20%"],
  });
  const ruleHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  if (!considerations?.points?.length) return null;

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-background py-24 lg:py-32"
    >
      <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-[340px_1fr] lg:gap-20 lg:px-8">
        {/* Left: intro, sticky on desktop */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl"
          >
            <div className="mb-5 flex  gap-1 flex-col">
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />

                <p className="font-heading text-[10px] font-bold uppercase tracking-[0.25em] text-primary">
                  {considerations.eyebrow}
                </p>
              </div>

              {considerations.title && (
                <h2 className="mt-4  font-heading text-4xl font-medium leading-[1.05] tracking-[-0.04em] text-foreground sm:text-5xl">
                  {considerations.title.split(" ").slice(0, -2).join(" ")}{" "}
                  <span className="font-serif italic text-primary">
                    {considerations.title.split(" ").slice(-2).join(" ")}
                  </span>
                </h2>
              )}

              <p className="mt-4 max-w-2xl text-sm leading-7 text-foreground/70">
                {considerations.description}
              </p>
            </div>
          </motion.div>

          <div className="mt-8 flex items-start gap-3 border-t border-[#D9D5C9] pt-6 text-sm leading-6 text-[#1E231F]/50">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              className="mt-1 shrink-0 text-primary"
            >
              <path
                d="M12 2v20M2 12h20"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
            <span>
              A professional assessment can help guide your next step.
            </span>
          </div>
        </div>

        {/* Right: the list, single rule-draw reveal */}
        <div className="relative">
          <div className="absolute left-0 top-0 h-full w-px bg-[#D9D5C9]" />
          <motion.div
            style={{ height: ruleHeight }}
            className="absolute left-0 top-0 w-px bg-primary"
          />

          <ul>
            {considerations.points.map((point) => (
              <li
                key={point}
                className="group border-b border-[#D9D5C9] py-7 pl-8 last:border-b-0 sm:py-8"
              >
                <div className="flex items-start gap-4">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1E231F]/20 transition-colors duration-300 group-hover:bg-primary" />
                  <p className="max-w-2xl text-xl font-normal leading-snug text-[#1E231F] transition-transform duration-300 group-hover:translate-x-1.5 sm:text-2xl">
                    {point}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
