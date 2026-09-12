"use client";

import { useEffect, useState } from "react";
import { Star, ArrowUpRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/Carousel";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avtar";

function initials(name) {
  return name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function PatientReviewsSection({ reviews: section }) {
  console.log("working");
  if (!section) return null;

  const [api, setApi] = useState(null);

  // Autoplay — reads the carousel's own current index via api.selectedScrollSnap()
  // instead of tracking a separate `current` state, which is what caused the
  // stale-closure risk in the reference implementation.
  useEffect(() => {
    if (!api) return;
    const interval = setInterval(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        api.scrollTo(0);
      } else {
        api.scrollNext();
      }
    }, 4500);
    return () => clearInterval(interval);
  }, [api]);

  return (
    <section
      id={section.id}
      className="relative w-full overflow-hidden bg-background-2 py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Header + rating summary side by side */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              {section.eyebrow}
            </span>
            <h2 className="mt-5 font-heading text-3xl font-medium leading-[1.1] tracking-[-0.02em] text-foreground sm:text-4xl">
              {section.title}
            </h2>
            <p className="mt-5 text-[15px] leading-7 text-foreground/60">
              {section.description}
            </p>
          </div>

          {section.rating && (
            <div className="flex flex-shrink-0 items-center gap-4 rounded-2xl border border-muted bg-surface p-5">
              <div className="text-center">
                <p className="font-heading text-3xl font-semibold text-foreground">
                  {section.rating.value.toFixed(1)}
                </p>
                <div className="mt-1 flex gap-0.5">
                  {Array.from({ length: section.rating.max }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-3 w-3 ${
                        i < Math.round(section.rating.value)
                          ? "fill-primary text-primary"
                          : "fill-muted text-muted"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <div className="border-l border-muted pl-4 text-xs text-foreground/55">
                <p className="font-semibold text-foreground">
                  {section.rating.label}
                </p>
                <p className="mt-0.5">
                  {section.rating.reviewCount.toLocaleString()} reviews
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Carousel */}
        <div className="relative mt-14">
          <Carousel setApi={setApi} opts={{ loop: true }} className="w-full">
            <CarouselContent>
              {section.reviews.map((review) => (
                <CarouselItem
                  key={review.id}
                  className="sm:basis-1/2 lg:basis-1/3"
                >
                  <div className="flex h-full flex-col justify-between rounded-2xl border border-muted bg-surface p-6">
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3.5 w-3.5 ${
                            i < review.rating
                              ? "fill-primary text-primary"
                              : "fill-muted text-muted"
                          }`}
                        />
                      ))}
                    </div>

                    <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground/70">
                      {review.text}
                    </p>

                    <div className="mt-6 flex items-center justify-between border-t border-muted pt-4">
                      <div className="flex items-center gap-2.5">
                        <Avatar className="h-8 w-8">
                          {/* Only render AvatarImage when a real photo exists —
                              these reviewers have none, so it's initials only. */}
                          {review.author.image && (
                            <AvatarImage
                              src={review.author.image}
                              alt={review.author.name}
                            />
                          )}
                          <AvatarFallback className="bg-primary/10 text-[11px] font-semibold text-primary">
                            {initials(review.author.name)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-semibold text-foreground">
                            {review.author.name}
                          </p>
                          <p className="text-[11px] text-foreground/45">
                            {review.date}
                          </p>
                        </div>
                      </div>
                      <span className="rounded-full bg-primary/10 px-2.5 py-1 text-[10px] font-semibold text-primary">
                        {review.source}
                      </span>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {section.cta && (
          <div className="mt-10 text-center">
            <a
              href={section.cta.href || "#"}
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              {section.cta.label}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
