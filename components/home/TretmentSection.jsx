"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Droplet,
  Grid3x3,
  FlaskConical,
  Zap,
  Syringe,
  Droplets,
  ArrowUpToLine,
} from "lucide-react";
import { TreatmentCard } from "@/components/ui/tretment-card";
import { ViewAllCard } from "@/components/ui/Viewallcard";

const TOTAL_TREATMENTS = 12;

const treatments = [
  {
    icon: Sparkles,
    image:
      "https://i.pinimg.com/736x/f4/a3/e5/f4a3e504fe9ef8e20ab8e79752a7f016.jpg",
    category: "Lasers",
    name: "Fractional Resurfacing",
    description:
      "Smooths texture and softens fine lines with a calibrated resurfacing session.",
    duration: "45 min",
    href: "/treatments/fractional-resurfacing",
  },
  {
    icon: Droplet,
    image:
      "https://i.pinimg.com/1200x/7f/82/0e/7f820ec06aa27f90513829b015b073e6.jpg",
    category: "Injectables",
    name: "Anti-Wrinkle Injections",
    description:
      "Softens expression lines for a naturally rested look, no frozen feel.",
    duration: "30 min",
    href: "/treatments/anti-wrinkle",
  },
  {
    icon: Grid3x3,
    image:
      "https://i.pinimg.com/736x/b9/4d/95/b94d9518515101ac8574ddc292b13391.jpg",
    category: "Skin Rejuvenation",
    name: "Microneedling",
    description:
      "Triggers your skin's own collagen response for a firmer, more even surface.",
    duration: "60 min",
    href: "/treatments/microneedling",
  },
  {
    icon: FlaskConical,
    image:
      "https://i.pinimg.com/1200x/50/00/33/500033c8611b24dc64a9d2ff353cf4fb.jpg",
    category: "Peels",
    name: "Chemical Peel",
    description:
      "Clears dull buildup and evens tone, tailored to your skin's sensitivity.",
    duration: "30 min",
    href: "/treatments/chemical-peel",
  },
  {
    icon: Zap,
    image:
      "https://i.pinimg.com/1200x/3c/6a/dc/3c6adcefbe04e486d4499b7552ed905c.jpg",
    category: "Lasers",
    name: "Laser Hair Reduction",
    description:
      "A progressive plan for long-term hair reduction, calibrated to your skin.",
    duration: "30–45 min",
    href: "/treatments/laser-hair-reduction",
  },
  {
    icon: Syringe,
    image:
      "https://i.pinimg.com/1200x/80/67/e6/8067e66bf41f4fcd30e5c1eaaa9aecc8.jpg",
    category: "Hair Treatments",
    name: "PRP Hair Therapy",
    description:
      "Uses your own platelet-rich plasma to support natural regrowth over time.",
    duration: "60 min",
    href: "/treatments/prp-hair-therapy",
  },
  {
    icon: Droplets,
    image:
      "https://i.pinimg.com/736x/13/90/c7/1390c730eef36b9fa0891fc74d9bdd6d.jpg",
    category: "Facials",
    name: "Hydra Facial",
    description:
      "Deep cleansing and hydration in one session, for an immediate healthy glow.",
    duration: "45 min",
    href: "/treatments/hydrafacial",
  },
  {
    icon: ArrowUpToLine,
    image:
      "https://i.pinimg.com/736x/15/05/d2/1505d290f9c238c20a67abc13f5c15fd.jpg",
    category: "Skin Lifting",
    name: "Thread Lift",
    description:
      "A subtle, non-surgical lift for sagging skin, with a natural-looking contour.",
    duration: "60 min",
    href: "/treatments/thread-lift",
  },
];

export function TreatmentsSection() {
  return (
    <section className="w-full bg-[var(--background)] py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Treatments
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[var(--foreground)] md:text-4xl">
            Care built around your skin
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[var(--foreground)]/60 md:text-base">
            Every treatment is reviewed for your skin specifically — nothing
            here is a one-size-fits-all package.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 pt-4 sm:grid-cols-2 lg:grid-cols-4">
          {treatments.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: (i % 4) * 0.06 }}
            >
              <TreatmentCard {...t} />
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.35,
              delay: (treatments.length % 4) * 0.06,
            }}
          >
            <ViewAllCard
              remainingCount={TOTAL_TREATMENTS - treatments.length}
              label="View all treatments"
              href="/treatments"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default TreatmentsSection;
