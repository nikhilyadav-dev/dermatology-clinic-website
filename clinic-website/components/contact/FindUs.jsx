"use client";

import { ArrowUpRight, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export function FindUs({ findUs }) {
  if (!findUs) return null;

  const hasMap = Boolean(findUs.map?.embedUrl);
  const hasDirections = Boolean(findUs.cta?.href || findUs.map?.directionsUrl);

  const directionsUrl = findUs.cta?.href || findUs.map?.directionsUrl || "#";

  return (
    <section id={findUs.id} className="relative overflow-hidden bg-muted/20">
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-primary/[0.045] blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 md:py-24 lg:px-12 lg:py-32">
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="font-mono text-xs text-foreground/30">01</span>

            <span className="h-px w-8 bg-primary/60" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-primary">
              {findUs.eyebrow}
            </span>
          </div>

          <h2 className="font-heading text-4xl font-medium leading-[1.05] tracking-[-0.05em] text-foreground sm:text-5xl lg:text-6xl">
            {findUs.title}
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-foreground/55 sm:text-base">
            {findUs.description}
          </p>
        </motion.div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative mt-12 sm:mt-16"
        >
          <div className="relative h-[420px] overflow-hidden rounded-[2rem] border border-foreground/[0.08] bg-background shadow-[0_20px_70px_rgba(0,0,0,0.06)] sm:h-[500px] lg:h-[560px]">
            {hasMap ? (
              <iframe
                src={findUs.map.embedUrl}
                title={`Map showing ${findUs.location.name}`}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full border-0 grayscale-[0.15]"
              />
            ) : (
              /* Empty map state while embedUrl is not configured */
              <div className="absolute inset-0 flex items-center justify-center bg-[#e8e6dc]">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage: `
                      linear-gradient(
                        30deg,
                        transparent 48%,
                        rgba(70, 80, 60, 0.12) 49%,
                        rgba(70, 80, 60, 0.12) 51%,
                        transparent 52%
                      ),
                      linear-gradient(
                        120deg,
                        transparent 48%,
                        rgba(70, 80, 60, 0.08) 49%,
                        rgba(70, 80, 60, 0.08) 51%,
                        transparent 52%
                      )
                    `,
                    backgroundSize: "90px 90px",
                  }}
                />

                <div className="relative flex flex-col items-center text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-background shadow-xl">
                    <MapPin size={22} strokeWidth={1.6} />
                  </div>

                  <p className="mt-4 text-sm font-medium text-foreground">
                    {findUs.location.name}
                  </p>

                  <p className="mt-1 text-xs text-foreground/45">
                    Map location will appear here
                  </p>
                </div>
              </div>
            )}

            {/* Floating location card */}
            <div className="absolute bottom-5 left-5 right-5 sm:bottom-7 sm:left-7 sm:right-auto">
              <div className="w-full rounded-2xl border border-white/50 bg-background/95 p-4 shadow-2xl backdrop-blur-xl sm:min-w-[320px] sm:p-5">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/[0.09] text-primary">
                    <MapPin size={18} strokeWidth={1.6} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground/40">
                      Our Location
                    </p>

                    <p className="mt-1.5 text-sm font-semibold text-foreground">
                      {findUs.location.name}
                    </p>

                    {findUs.location.address && (
                      <p className="mt-1 text-xs leading-5 text-foreground/50">
                        {findUs.location.address}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Small map label */}
            <div className="absolute right-5 top-5 hidden sm:block">
              <div className="rounded-full border border-white/50 bg-background/90 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground/50 shadow-lg backdrop-blur-md">
                Shine Skin Clinic
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 flex justify-center"
        >
          {hasDirections ? (
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-background transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/20"
            >
              <span>{findUs.cta.label}</span>

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-background/15">
                <ArrowUpRight
                  size={15}
                  strokeWidth={1.7}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </span>
            </a>
          ) : null}
        </motion.div>
      </div>
    </section>
  );
}
