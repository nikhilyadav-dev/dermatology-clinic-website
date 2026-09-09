"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Flame,
  CalendarCheck,
  Users,
  ShieldCheck,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

const status = [
  {
    icon: Users,
    number: "12K+",
    text: "Happy patients",
  },
  {
    icon: ShieldCheck,
    number: "Dermatologist Led",
    text: "Personalised treatment plans",
  },
  {
    icon: Flame,
    number: "98%",
    text: "Treatment Success",
  },
];

export function ConcernHero({ hero }) {
  if (!hero) return null;
  return (
    <section className="relative w-full overflow-hidden bg-background-2">
      <div className="pointer-events-none absolute right-24 top-10 hidden h-32 w-32 opacity-40 [background-image:radial-gradient(var(--muted)_1.5px,transparent_1.5px)] [background-size:14px_14px] lg:block" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 pb-6 pt-14 lg:grid-cols-2 lg:gap-8 lg:pt-20">
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="relative z-10 pb-10 lg:pb-0"
        >
          {/* Eyebrow */}
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

          {/* Decorative line */}
          <div className="mt-6 flex items-center gap-3">
            <span className="h-px w-12 bg-primary" />
            <span className="h-1.5 w-1.5 rounded-full bg-primary/40" />
          </div>

          {/* Description */}
          <p className="mt-6 max-w-lg text-[15px] leading-7 text-foreground/65">
            {hero.description}
          </p>

          {/* CTA */}
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={hero.primaryCta.href}
              className="group flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm  text-white shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/25 font-heading font-bold"
            >
              <CalendarCheck className="h-4 w-4" />

              {hero.primaryCta.label}

              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <a
              href={hero.secondaryCta.href}
              className="flex items-center gap-2 rounded-full border border-foreground/15 bg-white/40 px-6 py-3.5 text-sm text-foreground backdrop-blur-sm transition-all duration-300 hover:bg-white font-heading font-bold"
            >
              {/* <Sparkles className="h-4 w-4 text-primary" /> */}

              {hero.secondaryCta.label}
            </a>
          </div>

          {/* Creative stats card */}
          <div className="mt-9 flex items-center">
            <div className="relative w-full max-w-[340px] rounded-2xl border border-black/5 bg-white/70 p-4 shadow-[0_15px_40px_rgba(60,40,30,0.08)] backdrop-blur-md">
              {status.map((data, index) => {
                const Icon = data.icon;
                return (
                  <div key={index}>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Icon className="h-4 w-4" />
                      </div>

                      <div>
                        <p className="text-sm font-bold text-foreground font-heading">
                          {data.number}
                        </p>

                        <p className="text-[11px] text-foreground/55">
                          {data.text}
                        </p>
                      </div>
                    </div>

                    {index !== status.length - 1 && (
                      <div className="my-3 h-px bg-black/5" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto w-full max-w-md pb-10 lg:max-w-none lg:pb-0"
        >
          <div className="relative mx-auto h-[430px] w-full max-w-[480px] lg:h-[500px]">
            {/* Decorative circle */}
            <div className="absolute -left-10 top-24 h-40 w-40 rounded-full bg-primary/10" />

            {/* Decorative dots */}
            <div className="absolute -right-5 -top-5 z-0 grid grid-cols-5 gap-2">
              {Array.from({ length: 25 }).map((_, i) => (
                <span key={i} className="h-1 w-1 rounded-full bg-primary/30" />
              ))}
            </div>

            {/* Image */}
            <div className="relative z-10 h-full w-full overflow-hidden rounded-[2rem]">
              <Image
                src={hero.image.src}
                alt={hero.image.alt}
                fill
                sizes="(max-width: 1024px) 90vw, 480px"
                priority
                className="object-cover"
              />
            </div>

            {/* Concern card */}
            <div className="absolute bottom-5 left-5 z-20 rounded-2xl bg-white/90 px-5 py-4 shadow-[0_15px_40px_rgba(60,40,30,0.12)] backdrop-blur-md">
              <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-primary">
                Focus area
              </p>

              <p className="mt-1 text-sm font-semibold text-foreground font-heading">
                {hero.focusArea}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
