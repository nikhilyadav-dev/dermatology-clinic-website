"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export function Expertise({ expertise }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeArea = expertise.areas[activeIndex];

  if (!expertise.areas?.length) return null;

  return (
    <section
      id={expertise.id}
      className="relative overflow-hidden bg-background"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 md:py-28 lg:px-12 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <div className=" flex place-content-center items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />

            <p className="font-heading text-[10px] font-bold uppercase tracking-[0.25em] text-primary">
              {expertise.eyebrow}
            </p>
          </div>

          <h2 className="mt-3 font-heading text-3xl font-medium tracking-[-0.035em] text-foreground sm:text-4xl md:text-5xl">
            {expertise.title}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-foreground/55 sm:text-base">
            {expertise.description}
          </p>
        </motion.div>

        <div className="mt-16 overflow-hidden rounded-[2rem] border border-foreground/10 bg-background lg:mt-20">
          <div className="grid lg:grid-cols-[0.78fr_1.22fr]">
            <div className="border-b border-foreground/10 lg:border-b-0 lg:border-r">
              <div className="p-5 sm:p-7">
                <p className="mb-5 px-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-foreground/35">
                  Areas of care
                </p>

                <div className="space-y-1">
                  {expertise.areas.map((area, index) => {
                    const isActive = index === activeIndex;

                    return (
                      <button
                        key={area.number}
                        type="button"
                        onClick={() => setActiveIndex(index)}
                        className={`
                          group relative w-full rounded-xl
                          px-4 py-5 text-left
                          transition-all duration-300
                          ${
                            isActive
                              ? "bg-primary/[0.06]"
                              : "hover:bg-foreground/[0.025]"
                          }
                        `}
                      >
                        <div className="flex items-center gap-4">
                          {/* Number */}
                          <span
                            className={`
                              w-8 shrink-0
                              text-xs font-medium
                              transition-colors duration-300
                              ${
                                isActive ? "text-primary" : "text-foreground/25"
                              }
                            `}
                          >
                            {area.number}
                          </span>

                          {/* Title */}
                          <span
                            className={`
                              flex-1
                              font-heading text-lg font-medium
                              tracking-[-0.025em]
                              transition-colors duration-300
                              sm:text-xl
                              ${
                                isActive
                                  ? "text-foreground"
                                  : "text-foreground/55 group-hover:text-foreground"
                              }
                            `}
                          >
                            {area.title}
                          </span>

                          <span
                            className={`
                              flex h-9 w-9 shrink-0
                              items-center justify-center
                              rounded-full border
                              transition-all duration-300
                              ${
                                isActive
                                  ? "border-primary/25 bg-primary text-primary-foreground"
                                  : "border-foreground/10 text-foreground/30 group-hover:border-primary/20 group-hover:text-primary"
                              }
                            `}
                          >
                            <ArrowUpRight size={15} strokeWidth={1.5} />
                          </span>
                        </div>

                        <span
                          className={`
                            absolute bottom-0 left-4 h-px
                            bg-primary
                            transition-all duration-300
                            ${isActive ? "right-4" : "right-full"}
                          `}
                        />
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="relative min-h-[520px] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeArea.number}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35 }}
                  className="grid h-full lg:grid-cols-[1fr_0.8fr]"
                >
                  <div className="flex flex-col p-7 sm:p-10 lg:p-12">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-semibold tracking-[0.2em] text-primary">
                        {activeArea.number}
                      </span>

                      <span className="h-px w-8 bg-primary/30" />

                      <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-foreground/30">
                        Expertise
                      </span>
                    </div>

                    <div className="mt-10">
                      <h3 className="max-w-lg font-heading text-3xl font-medium leading-[1.05] tracking-[-0.04em] text-foreground sm:text-4xl lg:text-5xl">
                        {activeArea.title}
                      </h3>

                      <p className="mt-6 max-w-lg text-sm leading-7 text-foreground/55 sm:text-base">
                        {activeArea.description}
                      </p>
                    </div>

                    <div className="mt-auto pt-12">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-foreground/35">
                        Common Treatments
                      </p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {activeArea.treatments.map((concern) => (
                          <span
                            key={concern}
                            className="
                              rounded-full
                              border border-foreground/10
                              px-3.5 py-2
                              text-xs text-foreground/60
                            "
                          >
                            {concern}
                          </span>
                        ))}
                      </div>

                      <div className="mt-10">
                        <Link
                          href={`/treatments#${activeArea.treatmentGroupId}`}
                          className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
                        >
                          Explore Treatments
                          <ArrowUpRight size={16} strokeWidth={1.5} />
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="relative min-h-[280px] overflow-hidden bg-primary/[0.04] lg:min-h-full">
                    {activeArea.image?.src ? (
                      <>
                        <Image
                          src={activeArea.image.src}
                          alt={activeArea.image.alt}
                          fill
                          sizes="(max-width: 1024px) 100vw, 35vw"
                          className="object-cover"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent" />
                      </>
                    ) : (
                      <div className="flex h-full min-h-[280px] items-center justify-center">
                        <div className="text-center">
                          <span className="font-heading text-6xl text-primary/[0.08]">
                            {activeArea.number}
                          </span>

                          <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-foreground/25">
                            Expertise Image
                          </p>
                        </div>
                      </div>
                    )}

                    <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                      <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-white/70">
                        Shine Skin Clinic
                      </span>

                      <span className="h-px w-10 bg-white/50" />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* =====================================================
            FOOTNOTE
        ===================================================== */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 flex items-center justify-between border-t border-foreground/10 pt-5"
        >
          <span className="text-[10px] uppercase tracking-[0.22em] text-foreground/30">
            Personalised care
          </span>

          <span className="text-[10px] uppercase tracking-[0.22em] text-foreground/30">
            Skin · Hair · Aesthetics
          </span>
        </motion.div>
      </div>
    </section>
  );
}
