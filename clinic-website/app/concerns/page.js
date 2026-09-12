"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ConcernCard } from "@/components/concerns/concern-card";
import concerns from "@/data/concern";

import { PageIntro } from "@/components/common/PageIntro";

const filters = [
  "All",
  "Skin Concerns",
  "Pigmentation",
  "Aging & Rejuvenation",
  "Hair & Scalp",
  "Body & Hair Removal",
  "Medical & Surgical Dermatology",
];

export default function AllConcernsPage() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? concerns : concerns.filter((c) => c.category === active);

  return (
    <main className="w-full bg-background py-5 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <section className="bg-backgroung-2">
          <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:items-end">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">
                  Concerns
                </span>

                <div className="mt-5 h-px w-16 bg-primary" />
              </div>

              <div>
                <h1 className="font-heading text-5xl font-medium leading-[1] tracking-[-0.04em] text-foreground sm:text-6xl lg:text-8xl">
                  Understand your skin,
                  <br />
                  <span className="text-foreground/40">
                    before treating it.
                  </span>
                </h1>

                <p className="mt-8 max-w-2xl text-base leading-7 text-foreground/60 sm:text-lg">
                  Explore common skin, hair and body concerns and learn how
                  professional dermatological care can help.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
            <div className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-4 -top-14 font-heading text-[10rem] font-medium leading-none text-primary/[0.07] sm:text-[14rem]"
              >
                02
              </span>

              <div className="relative">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                  Concerns
                </p>

                <h1 className="mt-6 max-w-4xl font-heading text-5xl font-medium leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
                  Every concern
                  <br />
                  <span className="text-primary">deserves context.</span>
                </h1>

                <div className="mt-10 flex max-w-2xl items-start gap-5">
                  <span className="mt-3 h-px w-12 shrink-0 bg-primary" />

                  <p className="text-base leading-7 text-foreground/60 sm:text-lg">
                    Learn more about common skin, hair and body concerns and the
                    factors that may influence how they develop and respond to
                    care.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* Filter chips */}
        <div className="m-10 flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
                active === f
                  ? "bg-primary text-white"
                  : "bg-surface text-foreground/60 hover:bg-accent hover:text-primary"
              }`}
            >
              {f}
              <span className="ml-1.5 text-xs opacity-60">
                {f === "All"
                  ? concerns.length
                  : concerns.filter((c) => c.category === f).length}
              </span>
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((concern, i) => (
              <motion.div
                key={concern.name}
                layout
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: (i % 4) * 0.05 }}
              >
                <ConcernCard {...concern} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
