"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ConcernCard } from "@/components/concerns/concern-card";
import concerns from "@/data/concern";

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
    <main className="w-full bg-background py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <span className="text-center text-sm font-semibold uppercase tracking-[0.25em] text-primary font-heading">
            Name It, We'll Treat It
          </span>
          <h2 className="mt-3 text-center text-2xl font-bold tracking-tight text-forground sm:text-3xl lg:text-4xl font-heading">
            Whatever your skin is trying to tell you —
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-foreground/60">
            Every concern below is matched to a treatment plan Dr. Gandhi
            reviews personally, never a generic one-size-fits-all package.
          </p>
        </div>

        {/* Filter chips */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
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
