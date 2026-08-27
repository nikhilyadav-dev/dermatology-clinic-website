"use client";

import { cn } from "@/lib/utils";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import TestimonialCard from "@/components/ui/testimonials-card";

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
    <section className="relative overflow-hidden bg-background-2 py-20">
      <div className="relative mx-auto max-w-8xl px-4">
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <span className="text-center text-sm font-semibold uppercase tracking-[0.25em] text-primary font-heading">
            Patient stories
          </span>
          <h2 className="mt-3 text-center text-2xl font-bold tracking-tight text-forground sm:text-3xl lg:text-4xl font-heading">
            In their own words.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-foreground/60">
            Every patient has a different concern, journey and goal. Here are a
            few experiences shared by people who trusted us with their care.
          </p>
        </div>

        <div
          className={cn(
            "mt-12 flex h-140 justify-center gap-6",
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
