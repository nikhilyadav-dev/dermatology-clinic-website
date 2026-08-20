"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { Avatar, AvatarFallback } from "@/components/ui/avtar";

// PLACEHOLDER CONTENT — fictional examples to preview the layout only.
// Replace every entry with real, consented patient reviews before launch.
// Do not publish fabricated testimonials.
const testimonials = [
  {
    quote:
      "My acne scars have visibly faded after just a few sessions. The whole process felt genuinely personalized.",
    name: "Priya S.",
    treatment: "Acne Treatment",
    rating: 5,
  },
  {
    quote:
      "Finally a dermatologist who explains what's actually happening with my skin, not just what to buy.",
    name: "Rohan M.",
    treatment: "Pigmentation",
    rating: 5,
  },
  {
    quote:
      "The clinic itself is spotless and calm — made a nervous first visit really easy.",
    name: "Ananya K.",
    treatment: "Anti-Ageing",
    rating: 4,
  },
  {
    quote:
      "I was skeptical about hair fall treatments, but the results after 3 months convinced me.",
    name: "Karan T.",
    treatment: "Hair Loss",
    rating: 5,
  },
  {
    quote: "Every question I had was answered without rushing me out the door.",
    name: "Meera J.",
    treatment: "Consultation",
    rating: 5,
  },
  {
    quote:
      "Booking was easy and the follow-up care has been consistent every time.",
    name: "Aditya R.",
    treatment: "Laser Treatment",
    rating: 4,
  },
  {
    quote:
      "Honest advice, no upselling — told me what I actually needed, nothing more.",
    name: "Simran D.",
    treatment: "Skin Consultation",
    rating: 5,
  },
  {
    quote:
      "The improvement in my pigmentation after a month genuinely surprised me.",
    name: "Farhan A.",
    treatment: "Pigmentation",
    rating: 5,
  },
  {
    quote:
      "Felt cared for at every step, not just another appointment on the schedule.",
    name: "Neha P.",
    treatment: "Anti-Ageing",
    rating: 4,
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-[var(--background)] py-20">
      {/* soft brand-colored glow, purely decorative */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-4">
        <div className="mx-auto flex max-w-sm flex-col items-center justify-center gap-4 text-center">
          <div className="rounded-full border border-primary/20 bg-[var(--accent)] px-4 py-1.5 text-sm font-medium text-primary">
            Patient Stories
          </div>
          <h2 className="font-bold text-3xl tracking-tight text-[var(--foreground)] lg:text-4xl">
            What our patients say
          </h2>
          <p className="text-sm text-[var(--foreground)]/60">
            Real experiences from people who trusted us with their skin.
          </p>
        </div>

        <div
          className={cn(
            "mt-12 flex h-[560px] justify-center gap-6",
            "[mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)]",
          )}
        >
          <InfiniteSlider
            direction="vertical"
            gap={24}
            duration={28}
            durationOnHover={80}
            className="h-full"
          >
            {firstColumn.map((t) => (
              <TestimonialCard key={t.name} testimonial={t} />
            ))}
          </InfiniteSlider>

          <InfiniteSlider
            direction="vertical"
            gap={24}
            duration={34}
            durationOnHover={90}
            reverse
            className="hidden h-full md:block"
          >
            {secondColumn.map((t) => (
              <TestimonialCard key={t.name} testimonial={t} />
            ))}
          </InfiniteSlider>

          <InfiniteSlider
            direction="vertical"
            gap={24}
            duration={30}
            durationOnHover={85}
            className="hidden h-full lg:block"
          >
            {thirdColumn.map((t) => (
              <TestimonialCard key={t.name} testimonial={t} />
            ))}
          </InfiniteSlider>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }) {
  const { quote, name, treatment, rating } = testimonial;
  return (
    <motion.figure
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="w-72 shrink-0 rounded-3xl border border-[var(--muted)] bg-[var(--surface)] p-6 shadow-md shadow-[var(--foreground)]/5 transition-shadow hover:shadow-lg hover:shadow-primary/10"
    >
      <div className="flex items-center justify-between">
        <Quote className="h-6 w-6 fill-primary/15 text-primary/40" />
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={cn(
                "h-3.5 w-3.5",
                i < rating
                  ? "fill-primary text-primary"
                  : "fill-[var(--muted)] text-[var(--muted)]",
              )}
            />
          ))}
        </div>
      </div>

      <blockquote className="mt-4 text-sm leading-relaxed text-[var(--foreground)]/80">
        {quote}
      </blockquote>

      <figcaption className="mt-5 flex items-center justify-between gap-2 border-t border-[var(--muted)] pt-4">
        <div className="flex items-center gap-2">
          <Avatar className="size-8">
            <AvatarFallback className="bg-primary/10 text-xs font-semibold text-primary">
              {name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <cite className="text-sm font-medium not-italic tracking-tight text-[var(--foreground)]">
            {name}
          </cite>
        </div>
        <span className="rounded-full bg-primary/5 px-2.5 py-1 text-[11px] font-medium text-primary">
          {treatment}
        </span>
      </figcaption>
    </motion.figure>
  );
}

export default TestimonialsSection;
