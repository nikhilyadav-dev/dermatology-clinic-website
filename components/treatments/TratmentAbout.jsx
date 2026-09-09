"use client";

import { motion } from "framer-motion";

export function TreatmentAbout({ about }) {
  if (!about) return null;

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-background-2 py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="flex gap-5">
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />

                  <p className="font-heading text-[10px] font-bold uppercase tracking-[0.25em] text-primary">
                    About the treatment
                  </p>
                </div>

                <h2 className="mt-6  font-heading text-4xl font-medium leading-[1.05] tracking-[-0.04em] text-foreground sm:text-5xl">
                  {about.title.split(" ").slice(0, -2).join(" ")}{" "}
                  <span className="font-serif italic text-primary">
                    {about.title.split(" ").slice(-1).join(" ")}
                  </span>
                </h2>
              </div>
            </div>

            {/* Decorative number */}
            <span className="pointer-events-none absolute -bottom-10 left-6 select-none font-heading text-[13rem] font-medium leading-none text-primary/7">
              01
            </span>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col justify-center"
          >
            <p className="max-w-2xl  leading-8 text-foreground/95 sm:text-lg sm:leading-9">
              {about.description}
            </p>

            {/* Bottom visual divider */}
            <div className="mt-10 flex items-center gap-4">
              <span className="h-px w-16 bg-primary" />

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/85 font-heading">
                Individual treatment planning
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
