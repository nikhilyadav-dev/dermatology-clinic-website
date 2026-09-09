"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function Journey({ journey }) {
  if (!journey) return null;
  return (
    <section
      id={journey.id}
      className="relative overflow-hidden bg-background-2"
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
              {journey.eyebrow}
            </p>
          </div>

          <h2 className="mt-3 font-heading text-3xl font-medium tracking-[-0.035em] text-foreground sm:text-4xl md:text-5xl">
            {journey.title}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-foreground/55 sm:text-base">
            {journey.description}
          </p>
        </motion.div>

        <div className="mt-20 grid gap-14 lg:mt-24 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div
              aria-hidden="true"
              className="
                absolute -left-8 -top-8
                h-32 w-32
                rounded-full
                bg-primary/[0.07]
                sm:-left-10 sm:-top-10
                sm:h-40 sm:w-40
            "
            />

            <div
              aria-hidden="true"
              className="
                absolute -bottom-7 -left-7
                h-24 w-24
                rounded-bl-[2rem]
                border-b border-l border-primary/15
            "
            />

            <div
              className="
                relative z-10
                aspect-[4/4.5]
                overflow-hidden
                rounded-[2rem]
                bg-primary/[0.04]
            "
            >
              {journey.image?.src ? (
                <Image
                  src={journey.image.src}
                  alt={journey.image.alt}
                  fill
                  className="
                    object-cover
                    transition-transform duration-700
                    hover:scale-[1.025]
                  "
                  sizes="
                    (max-width: 1024px) 100vw,
                    50vw
                  "
                />
              ) : (
                <div className="flex h-full items-center justify-center">
                  <span className="text-xs uppercase tracking-[0.2em] text-foreground/25">
                    Journey Image
                  </span>
                </div>
              )}
            </div>
          </motion.div>

          <div className="relative">
            <div
              aria-hidden="true"
              className="
                absolute bottom-5 left-[5px] top-5
                w-px bg-foreground/10
            "
            />

            <div className="space-y-10">
              {journey.milestones.map((milestone, index) => (
                <motion.article
                  key={`${milestone.year}-${milestone.title}`}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.1,
                  }}
                  className="relative grid grid-cols-[12px_1fr] gap-6"
                >
                  <div className="relative z-10 mt-1.5 flex justify-center">
                    <span
                      className="
                        h-2.5 w-2.5
                        rounded-full
                        bg-primary
                        ring-4 ring-background
                    "
                    />
                  </div>

                  <div>
                    <div className="flex flex-wrap items-baseline gap-x-5 gap-y-1">
                      <span
                        className="
                          text-xs font-semibold
                          uppercase tracking-[0.2em]
                          text-primary
                      "
                      >
                        {milestone.year}
                      </span>

                      <h3
                        className="
                          font-heading text-xl font-medium
                          tracking-[-0.025em]
                          text-foreground
                          sm:text-2xl
                      "
                      >
                        {milestone.title}
                      </h3>
                    </div>

                    <p
                      className="
                        mt-3 max-w-xl
                        text-sm leading-6
                        text-foreground/55
                        sm:text-[15px] sm:leading-7
                    "
                    >
                      {milestone.description}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute -right-48 top-1/2
          h-[30rem] w-[30rem]
          rounded-full
          border border-primary/[0.045]
        "
      />
    </section>
  );
}
