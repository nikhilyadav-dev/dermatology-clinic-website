"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CalendarCheck } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

export function TreatmentHero({ hero }) {
  if (!hero) return null;
  return (
    <section className="relative w-full overflow-hidden bg-background-2">
      {/* Decorative background detail */}
      <div className="pointer-events-none absolute -left-24 top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-14 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-20">
        {/* Left Part */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ duration: 0.55 }}
          className="relative z-10 max-w-2xl"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />

            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary font-heading">
              {hero.eyebrow}
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-heading text-5xl font-medium leading-[0.95] tracking-[-0.045em] text-foreground sm:text-6xl lg:text-[4.8rem] ">
            {hero.title}
          </h1>

          {/* Decorative accent */}
          <div className="mt-7 flex items-center gap-2">
            <span className="h-0.5 w-14 rounded-full bg-primary" />
            <span className="h-1.5 w-1.5 rounded-full bg-primary/40" />
            <span className="h-px w-8 bg-primary/20" />
          </div>

          {/* Description */}
          <p className="mt-6 max-w-lg text-[15px] leading-7 text-foreground/65">
            {hero.description}
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            {hero.primaryCta?.href && (
              <a
                href={hero.primaryCta.href}
                className="group flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm  text-white shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/25 font-heading font-bold"
              >
                <CalendarCheck className="h-4 w-4" />

                {hero.primaryCta.label}

                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            )}

            {hero.secondaryCta?.href && (
              <a
                href={hero.secondaryCta.href}
                className="group inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-white/50 px-6 py-3.5 font-heading text-sm font-bold text-foreground backdrop-blur-sm transition-all duration-300 hover:border-primary/25 hover:bg-white font"
              >
                {hero.secondaryCta.label}

                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform duration-300 group-hover:translate-y-0.5">
                  ↓
                </span>
              </a>
            )}
          </div>

          {/* Bottom treatment statement */}
          <div className="mt-10 flex max-w-md items-start gap-3 border-t border-foreground/10 pt-5">
            <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10">
              <span className="h-2 w-2 rounded-full bg-primary" />
            </div>

            <p className="text-xs leading-5 text-foreground/75">
              Treatment plans are tailored to your individual features, concerns
              and desired outcome.
            </p>
          </div>
        </motion.div>

        {/* Right Part */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-[430px] lg:ml-auto"
        >
          {/* Large soft organic shape */}
          <div className="absolute -right-8 top-8 h-72 w-72 rounded-full bg-primary/7 blur-[1px]" />

          {/* Decorative ring */}
          <div className="absolute -right-5 -top-5 h-20 w-20 rounded-full border border-primary/20" />

          {/* Image frame */}
          <div className="relative ml-5 mr-4">
            {/* Offset border/frame */}
            <div className="absolute -bottom-4 -left-4 h-full w-full rounded-[2rem] border border-primary/20" />

            {/* Image */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-primary/10">
              {hero.image.src ? (
                <Image
                  src={hero.image.src}
                  alt={hero.image.alt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 85vw, 430px"
                  className="object-cover"
                />
              ) : (
                <div className="flex h-full items-center justify-center">
                  <span className="text-sm text-foreground/40">
                    Treatment image
                  </span>
                </div>
              )}

              {/* Very subtle image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
            </div>

            {/* Floating treatment label */}
            <div className="absolute -bottom-7 -left-7 hidden h-32 w-32 items-center justify-center rounded-full bg-primary text-white shadow-xl shadow-primary/20 sm:flex">
              <div className="text-center">
                <p className="font-heading text-[9px] font-bold uppercase tracking-[0.18em]">
                  Personalised
                </p>

                <p className="mt-1 text-[10px] text-white/85">
                  Skin & Hair Care
                </p>
              </div>
            </div>

            {/* Vertical label */}
            <div className="absolute -right-25 top-1/2 hidden -translate-y-1/2 rotate-90 sm:block">
              <span className="font-heading text-[9px] font-bold uppercase tracking-[0.3em] text-white/50">
                Dermatology • Hair • Aesthetics
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
