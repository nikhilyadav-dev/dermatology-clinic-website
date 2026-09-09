"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

export function WhoIsItFor({ whoIsItFor }) {
  if (!whoIsItFor) return null;

  const points = whoIsItFor.points?.filter(Boolean) ?? [];

  return (
    <section className="relative overflow-hidden bg-background-2 py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
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
                {whoIsItFor.eyebrow}
              </p>
            </div>

            {whoIsItFor.title && (
              <h2 className="mt-4  font-heading text-4xl font-medium leading-[1.05] tracking-[-0.04em] text-foreground sm:text-5xl">
                {whoIsItFor.title.split(" ").slice(0, -2).join(" ")}{" "}
                <span className="font-serif italic text-primary">
                  {whoIsItFor.title.split(" ").slice(-2).join(" ")}
                </span>
              </h2>
            )}

            <p className="mt-4 max-w-md  text-sm leading-7 text-foreground/70">
              {whoIsItFor.description}
            </p>
          </div>
        </motion.div>

        {/* Points */}
        {points.length > 0 && (
          <div className="mx-auto mt-14 max-w-5xl">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {points.map((point, index) => (
                <motion.div
                  key={point}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.07,
                  }}
                  className="group relative overflow-hidden rounded-2xl border border-foreground/8 bg-background px-5 py-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-[0_15px_40px_rgba(60,40,30,0.06)]"
                >
                  {/* Number */}
                  <span className="absolute right-4 top-3 font-heading text-4xl font-medium text-primary/20">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="relative">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                      <Check className="h-4 w-4" />
                    </div>

                    <p className="mt-5 max-w-[230px] font-heading text-sm font-medium leading-6 text-foreground sm:text-[15px]">
                      {point}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-10 flex max-w-2xl items-center justify-center gap-3"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />

          <p className="text-center text-[11px] leading-5 text-foreground/80">
            Suitability is assessed during your consultation based on your
            individual features and treatment goals.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
