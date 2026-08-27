"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { ImageSlider } from "@/components/ui/image-slider";

const DOCTOR_IMAGES = [
  {
    src: "https://i.pinimg.com/736x/14/7c/d7/147cd7d99cae27d70b0af754e5b69f4e.jpg",
    alt: "Dr. Sugandh Gandhi",
  },
  {
    src: "https://i.pinimg.com/1200x/c9/45/80/c94580837354b77a265ae8e009dfeae9.jpg",
    alt: "Consultation in progress",
  },
  {
    src: "https://i.pinimg.com/1200x/de/b7/2f/deb72f0490f4711ffc31693264468e5e.jpg",
    alt: "Treatment session",
  },
];

export function AboutDoctorSection() {
  return (
    <section className="relative overflow-hidden bg-background-2 py-20">
      <div className="mx-auto grid max-w-5xl items-center gap-16 px-4 lg:grid-cols-2">
        <div className="relative z-10">
          <h2 className="text-4xl font-bold tracking-tight text-primary lg:text-5xl font-heading">
            Dr. Sugandh Gandhi
          </h2>
          <p className="mt-2 text-foreground font-semibold  font-heading">
            MD (Dermatology), DNB — Dermatologist &amp; Aesthetic Physician
          </p>

          <p className="mt-6 text-lg leading-relaxed text-foreground">
            <span className="font-bold text-primary font-heading">
              Let your skin speak.
            </span>{" "}
            Every treatment plan starts with listening — understanding your
            skin's history before recommending what comes next. Dr. Gandhi
            blends evidence-based dermatology with a calm, unhurried approach,
            so care always feels personal, never rushed.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-8 flex max-w-sm items-start gap-3 rounded-2xl border border-muted bg-surface p-4 shadow-md"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
              SG
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-1.5">
                <p className="text-sm  text-foreground font-heading font-bold">
                  Dr. Sugandh Gandhi
                </p>
                <FaLinkedin className="h-3.5 w-3.5 text-primary" />
              </div>
              <p className="text-xs text-foreground/70">
                Founder, Shine Skin Clinic
              </p>

              <p className="mt-1 text-xs text-foreground/70">
                Dermatologist &amp; Aesthetic Physician
              </p>
            </div>
          </motion.div>
        </div>

        <div className="relative">
          <svg
            viewBox="0 0 400 500"
            className="pointer-events-none absolute -inset-10 h-[calc(100%+80px)] w-[calc(100%+80px)] text-primary/25"
            fill="none"
          >
            <path
              d="M30 40 C 120 10, 160 90, 90 140 S 40 260, 140 280 S 340 250, 330 380 S 250 480, 380 460"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="6 8"
              strokeLinecap="round"
            />
          </svg>

          <div className="relative mx-auto max-w-sm">
            <ImageSlider images={DOCTOR_IMAGES} autoAdvance={4500} />

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="absolute -bottom-7 left-2 z-20 -translate-x-1/2 sm:left-4 sm:translate-x-0"
            >
              <div className=" items-center gap-2 rounded-full border border-muted bg-(--surface) px-4 py-2.5 shadow-lg hidden sm:flex">
                <Star className="h-4 w-4 fill-primary text-primary" />
                <span className="text-sm font-semibold text-foreground">
                  Dermatologist-Led Care
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
              className="absolute -right-4 -top-4 z-20 hidden rounded-2xl border border-muted bg-(--surface) p-3 shadow-lg sm:block"
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {["N", "I", "K"].map((initial, i) => (
                    <div
                      key={i}
                      className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-surface bg-primary/15 text-[10px] font-bold text-primary"
                    >
                      {initial}
                    </div>
                  ))}
                </div>

                <span className="text-sm font-bold text-foreground font-heading">
                  1,000+
                </span>
              </div>
              <p className="mt-0.5 text-[11px] text-foreground/50">
                Happy Patients
              </p>
              <div className="mt-1 flex items-center gap-1">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-3 w-3 fill-primary text-primary"
                    />
                  ))}
                </div>

                <span className="text-[11px] text-foreground/50">(5.0)</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutDoctorSection;
