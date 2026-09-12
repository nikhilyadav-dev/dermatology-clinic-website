"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function ConcernTypes({ types }) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!types?.items?.length) return null;

  const activeItem = types.items[activeIndex];

  return (
    <section className="w-full bg-background-2">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-1 flex-col">
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />

              <p className="font-heading text-[10px] font-bold uppercase tracking-[0.25em] text-primary">
                {types.eyebrow}
              </p>
            </div>

            {types.title && (
              <h2 className="mt-4  font-heading text-4xl font-medium leading-[1.05] tracking-[-0.04em] text-foreground sm:text-5xl">
                {types.title.split(" ").slice(0, -2).join(" ")}{" "}
                <span className="font-serif italic text-primary">
                  {types.title.split(" ").slice(-2).join(" ")}
                </span>
              </h2>
            )}

            <p className="mt-4 max-w-2xl text-sm leading-7 text-foreground/70">
              {types.description}
            </p>
          </div>
        </motion.div>

        {/* Explorer */}
        <div className="mt-16 grid overflow-hidden rounded-[2rem] border border-muted bg-background lg:grid-cols-[0.85fr_1.15fr]">
          {/* Type list */}
          <div className="border-b border-muted lg:border-b-0 lg:border-r">
            {types.items.map((item, index) => {
              const active = index === activeIndex;

              return (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`group relative flex w-full items-start gap-5 border-b border-muted p-6 text-left transition-all duration-300 last:border-b-0 sm:p-7 ${
                    active ? "bg-primary/[0.06]" : "hover:bg-primary/[0.025]"
                  }`}
                >
                  {/* Active indicator */}
                  <span
                    className={`absolute left-0 top-0 h-full w-1 transition-all duration-300 ${
                      active ? "bg-primary" : "bg-transparent"
                    }`}
                  />

                  <span
                    className={`mt-1 font-heading text-xs font-semibold tracking-[0.2em] ${
                      active ? "text-primary" : "text-foreground/25"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="min-w-0 flex-1">
                    <h3
                      className={`font-heading text-lg font-medium tracking-tight transition-colors sm:text-xl ${
                        active
                          ? "text-foreground"
                          : "text-foreground/65 group-hover:text-foreground"
                      }`}
                    >
                      {item.title}
                    </h3>

                    <p className="mt-2 max-w-sm text-sm leading-6 text-foreground/50">
                      {item.shortDescription}
                    </p>
                  </div>

                  <ArrowUpRight
                    className={`mt-1 h-4 w-4 shrink-0 transition-all duration-300 ${
                      active
                        ? "translate-x-0.5 -translate-y-0.5 text-primary"
                        : "text-foreground/20"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Active content */}
          <div className="relative min-h-[380px] overflow-hidden p-8 sm:p-10 lg:p-14">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem.title}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex h-full flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                      Type {String(activeIndex + 1).padStart(2, "0")}
                    </span>

                    <span className="text-sm text-foreground/25">
                      {String(activeIndex + 1).padStart(2, "0")} /{" "}
                      {String(types.items.length).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="mt-12 max-w-xl font-heading text-3xl font-medium leading-tight tracking-[-0.03em] text-foreground sm:text-4xl">
                    {activeItem.title}
                  </h3>

                  <div className="mt-6 h-px w-12 bg-primary/50" />

                  <p className="mt-6 max-w-xl text-[15px] leading-7 text-foreground/65">
                    {activeItem.description}
                  </p>
                </div>

                <div className="mt-12 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-foreground/35">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Understanding the concern
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Decorative number */}
            <span className="pointer-events-none absolute -bottom-12 -right-4 select-none font-heading text-[180px] font-semibold leading-none text-primary/[0.035]">
              {String(activeIndex + 1).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
