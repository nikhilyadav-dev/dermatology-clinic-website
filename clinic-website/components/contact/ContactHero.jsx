"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, MessageCircle, Phone } from "lucide-react";

export function ContactHero({ hero }) {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="mx-auto max-w-7xl px-6 pb-20 pt-10 sm:px-8 sm:pb-24 lg:px-12 lg:pb-28 lg:pt-14">
        <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative z-10"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary font-heading">
                {hero.eyebrow}
              </span>
            </div>

            <h1 className="mt-7 max-w-2xl font-heading text-5xl font-medium leading-[0.98] tracking-[-0.055em] text-foreground sm:text-6xl lg:text-[5.5rem]">
              {hero.title}
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-foreground/55 sm:text-lg">
              {hero.description}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              {hero.primaryCta && (
                <Link
                  href={hero.primaryCta.href}
                  className="group inline-flex h-13 items-center justify-center gap-3 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/20"
                >
                  {hero.primaryCta.label}

                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary-foreground/10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    <ArrowUpRight size={15} strokeWidth={1.7} />
                  </span>
                </Link>
              )}

              {hero.secondaryCta && (
                <Link
                  href={hero.secondaryCta.href}
                  className="inline-flex h-13 items-center justify-center gap-2 rounded-full border border-foreground/10 bg-background px-6 text-sm font-medium text-foreground transition-all duration-300 hover:border-primary/25 hover:bg-primary/[0.03]"
                >
                  <MessageCircle size={17} strokeWidth={1.5} />

                  {hero.secondaryCta.label}
                </Link>
              )}
            </div>

            {hero.reassurance && (
              <div className="mt-10 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/15 bg-primary/[0.04]">
                  <Phone size={15} strokeWidth={1.5} className="text-primary" />
                </div>

                <p className="text-xs leading-5 text-foreground/45">
                  {hero.reassurance}
                </p>
              </div>
            )}

            <div className="mt-12 flex items-center gap-4 border-t border-foreground/10 pt-5">
              <span className="text-[10px] uppercase tracking-[0.24em] text-foreground/30">
                Shine Skin Clinic
              </span>

              <span className="h-px w-8 bg-foreground/15" />

              <span className="text-[10px] uppercase tracking-[0.2em] text-foreground/25">
                Skin · Hair · Aesthetics
              </span>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative"
          >
            {/* circle */}
            <div
              aria-hidden="true"
              className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-primary/[0.055] sm:-right-14 sm:-top-14 sm:h-48 sm:w-48"
            />

            {/* corner */}
            <div
              aria-hidden="true"
              className="absolute -bottom-7 -left-7 h-28 w-28 rounded-bl-[2rem] border-b border-l border-primary/20"
            />

            <div className="relative z-10 aspect-[4/4.6] overflow-hidden rounded-[2rem] bg-primary/[0.04]">
              {hero.image?.src ? (
                <Image
                  src={hero.image.src}
                  alt={hero.image.alt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-700 hover:scale-[1.015]"
                />
              ) : (
                <div className="flex h-full items-center justify-center">
                  <div className="text-center">
                    <span className="font-heading text-7xl tracking-[-0.06em] text-primary/[0.08] sm:text-9xl">
                      CARE
                    </span>

                    <p className="mt-3 text-[10px] uppercase tracking-[0.25em] text-foreground/25">
                      Consultation Image
                    </p>
                  </div>
                </div>
              )}

              {/*  overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between sm:bottom-7 sm:left-7 sm:right-7">
                <div>
                  <p className="text-[9px] font-medium uppercase tracking-[0.25em] text-white/70">
                    Shine Skin Clinic
                  </p>

                  <p className="mt-1 text-sm font-medium text-white">
                    Personalised dermatology care
                  </p>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/10 backdrop-blur-sm">
                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.5}
                    className="text-white"
                  />
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-5 flex items-center gap-3 px-1">
              <span className="h-px w-8 bg-primary/40" />

              <span className="text-[10px] uppercase tracking-[0.22em] text-foreground/35">
                A comfortable place to begin
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-48 -left-48 h-[30rem] w-[30rem] rounded-full border border-primary/[0.045]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-8rem] top-1/2 h-64 w-64 rounded-full border border-primary/[0.035]"
      />
    </section>
  );
}
