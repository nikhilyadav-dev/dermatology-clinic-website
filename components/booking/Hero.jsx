"use client";

import { Clock3 } from "lucide-react";
import { motion } from "framer-motion";

export function BookingHero({ hero }) {
  if (!hero) return null;

  return (
    <section className="relative overflow-hidden bg-background">
      <div className="mx-auto max-w-5xl px-6 py-24 text-center sm:px-8 md:py-28 lg:py-32">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-3"
        >
          <span className="h-px w-7 bg-primary/50" />

          <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-primary">
            {hero.eyebrow}
          </span>

          <span className="h-px w-7 bg-primary/50" />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="mx-auto mt-7 max-w-3xl font-heading text-4xl font-medium leading-[1.05] tracking-[-0.05em] text-foreground sm:text-5xl lg:text-6xl"
        >
          {hero.title}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.16 }}
          className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-foreground/55 sm:text-base"
        >
          {hero.description}
        </motion.p>

        {/* Reassurance */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.24 }}
          className="mt-7 inline-flex items-center gap-2 text-xs text-foreground/45"
        >
          <Clock3 size={14} strokeWidth={1.6} className="text-primary" />

          <span>{hero.reassurance}</span>
        </motion.div>
      </div>
    </section>
  );
}
