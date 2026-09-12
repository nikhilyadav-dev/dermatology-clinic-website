"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, CalendarCheck } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function Dermatologist({ dermatologist }) {
  if (!dermatologist) return null;

  return (
    <section
      id="dermatologist"
      className="relative overflow-hidden bg-background py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="mb-12 max-w-xl sm:mb-16"
        >
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            <span className="font-heading text-[10px] font-bold uppercase tracking-[0.25em] text-primary">
              {dermatologist.eyebrow}
            </span>
          </div>

          <h2 className="mt-5 font-heading text-4xl font-medium leading-[1.02] tracking-[-0.04em] text-foreground sm:text-5xl ">
            Meet the doctor behind{" "}
            <span className="font-serif italic text-primary">your care.</span>
          </h2>
        </motion.div>

        {/* Main */}
        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          {/* Doctor image */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
            className="relative mx-auto w-full max-w-[430px]"
          >
            <div className="absolute -bottom-5 -left-5 h-full w-full rounded-[2rem] border border-primary/20" />

            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-primary/5">
              {dermatologist.image ? (
                <Image
                  src={dermatologist.image}
                  alt={dermatologist.name}
                  fill
                  sizes="(max-width: 1024px) 90vw, 430px"
                  className="object-cover"
                />
              ) : (
                <div className="flex h-full items-center justify-center">
                  <span className="text-sm text-foreground/35">
                    Doctor image
                  </span>
                </div>
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>

            {/* Floating role */}
            <div className="absolute -bottom-6 right-5 rounded-2xl border border-black/5 bg-white/90 px-5 py-4 shadow-[0_15px_40px_rgba(60,40,30,0.10)] backdrop-blur-md">
              <p className="font-heading text-sm font-semibold text-foreground">
                {dermatologist.name}
              </p>

              <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.16em] text-primary">
                {dermatologist.role}
              </p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <p className="font-heading text-2xl font-medium tracking-[-0.025em] text-foreground sm:text-3xl">
              {dermatologist.name}
            </p>

            <p className="mt-2 text-xs font-medium uppercase tracking-[0.18em] text-primary/70">
              {dermatologist.role}
            </p>

            <p className="mt-6 max-w-xl text-[15px] leading-7 text-foreground/60">
              {dermatologist.introduction}
            </p>

            {/* Stats */}
            {dermatologist.stats?.length > 0 && (
              <div className="mt-9 grid max-w-xl grid-cols-3 border-y border-foreground/10 py-6">
                {dermatologist.stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className={`${
                      index !== 0
                        ? "border-l border-foreground/10 pl-4 sm:pl-6"
                        : ""
                    }`}
                  >
                    <p className="font-heading text-xl font-semibold tracking-[-0.02em] text-foreground sm:text-2xl">
                      {stat.value}
                    </p>

                    <p className="mt-1 text-[10px] leading-4 text-foreground/45 sm:text-[11px]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* CTAs */}
            <div className="mt-9 flex flex-wrap items-center gap-3">
              {dermatologist.links?.profile && (
                <a
                  href={dermatologist.links.profile.href}
                  className="group inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-white/50 px-6 py-3.5 font-heading text-sm font-bold text-foreground transition-all duration-300 hover:border-primary/25 hover:bg-white"
                >
                  {dermatologist.links.profile.label}

                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              )}

              {dermatologist.links?.consultation && (
                <a
                  href={dermatologist.links.consultation.href}
                  className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 font-heading text-sm font-bold text-white shadow-lg shadow-primary/15 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/20"
                >
                  <CalendarCheck className="h-4 w-4" />

                  {dermatologist.links.consultation.label}

                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
