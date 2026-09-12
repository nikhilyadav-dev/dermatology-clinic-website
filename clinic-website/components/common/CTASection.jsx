"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

export function CTASection({ cta }) {
  if (!cta) return null;
  return (
    <section className="w-full px-4 py-16 md:py-20">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-linear-to-br from-primary via-primary to-primary-hover px-6 py-16 text-center shadow-xl shadow-primary/20 md:px-12 md:py-20">
        {/* soft decorative glows, purely visual */}
        <div className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -right-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <span className="inline-block rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary-foreground font-heading">
            {cta.eyebrow}
          </span>

          <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-extrabold leading-tight text-primary-foreground md:text-4xl lg:text-5xl font-heading">
            {cta.title}
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-primary-foreground/85 md:text-base">
            {cta.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#book"
              className="group flex items-center gap-2 rounded-full bg-background px-7 py-3.5 text-sm font-bold text-primary shadow-lg transition-transform hover:scale-[1.03] font-heading"
            >
              Book Appointment
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="/treatments"
              className="flex items-center gap-2 rounded-full border border-white/40 px-7 py-3.5 text-sm  text-primary-foreground transition-colors hover:bg-white/10 font-heading font-bold"
            >
              View Treatments
            </a>
          </div>

          <a
            href="tel:+9162327 34454"
            className="mt-6 flex items-center justify-center gap-2 text-sm text-primary-foreground/70 transition-colors hover:text-white font-heading font-bold"
          >
            <Phone className="h-3.5 w-3.5" />
            +91 62327 34454
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default CTASection;
