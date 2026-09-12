"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function ClinicHero({ hero }) {
  if (!hero) return null;

  return (
    <section id={hero.id} className="relative overflow-hidden bg-background">
      <div className="mx-auto max-w-7xl px-6 pb-16 pt-24 sm:px-8 md:pb-20 md:pt-28 lg:px-12 lg:pb-24 lg:pt-32">
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />

            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary font-heading">
              {hero.eyebrow}
            </span>
          </div>

          <h1 className="font-heading text-4xl font-medium leading-[1.05] tracking-[-0.055em] text-foreground sm:text-5xl lg:text-6xl xl:text-[4.4rem]">
            {hero.title}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-foreground/55 sm:text-base">
            {hero.description}
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            {hero.primaryCta?.href && (
              <a
                href={hero.primaryCta.href}
                className="group flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm  text-white shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/25 font-heading font-bold"
              >
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
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mt-14 sm:mt-16 lg:mt-20"
        >
          <div className="relative aspect-[3/2] overflow-hidden rounded-[2rem] sm:aspect-[16/8.5] lg:aspect-[16/7.5]">
            <Image
              src={hero.image.src}
              alt={hero.image.alt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 1200px"
              className="object-cover transition-transform duration-700 hover:scale-[1.015]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
            =
            <div className="absolute bottom-5 left-5 sm:bottom-7 sm:left-7">
              <div className="flex items-center gap-3 rounded-full border border-white/25 bg-black/20 px-4 py-2.5 backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-white" />

                <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white">
                  Shine Skin Clinic
                </span>
              </div>
            </div>
            <div className="absolute bottom-5 right-5 hidden sm:block">
              <a
                href="#clinic-gallery"
                aria-label="Explore clinic experience"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-black/15 text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-foreground"
              >
                <ArrowDown size={16} strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </motion.div>

        {hero.highlights?.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 border-y border-foreground/[0.08]"
          >
            <div className="grid sm:grid-cols-3">
              {hero.highlights.map((highlight, index) => (
                <div
                  key={highlight.id}
                  className={`flex items-center gap-3 py-4 text-sm text-foreground/55 sm:justify-center sm:py-5 ${
                    index !== 0
                      ? "border-t border-foreground/[0.08] sm:border-l sm:border-t-0"
                      : ""
                  }`}
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/[0.08] text-primary">
                    <Check size={11} strokeWidth={2} />
                  </span>

                  <span>{highlight.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
