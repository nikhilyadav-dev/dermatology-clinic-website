"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { cn } from "@/lib/utils";

export function ImageSlider({
  images, // [{ src, alt }]
  testimonial, // { quote, name } — optional bottom-left floating card
  rating, // { value: 5, label: "Patient Rating" } — optional top-right floating card
  autoAdvance = 5000, // ms, set to 0/false to disable
  className,
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!autoAdvance) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, autoAdvance);
    return () => clearInterval(timer);
  }, [autoAdvance, images.length]);

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);

  return (
    <div className={cn("relative", className)}>
      <div className="relative aspect-[5/7] overflow-hidden rounded-3xl bg-[var(--muted)] shadow-2xl">
        <AnimatePresence mode="sync">
          <motion.img
            key={index}
            src={images[index].src}
            alt={images[index].alt}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatePresence>

        {/* subtle top-down darkening so the dot indicators stay legible on any photo */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

        <button
          onClick={prev}
          aria-label="Previous slide"
          className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/50 text-[var(--foreground)] shadow-lg backdrop-blur-sm transition-colors hover:bg-white/80"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={next}
          aria-label="Next slide"
          className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/50 text-[var(--foreground)] shadow-lg backdrop-blur-sm transition-colors hover:bg-white/80"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={cn(
                "h-2 rounded-full transition-all duration-200",
                i === index ? "w-6 bg-white" : "w-2 bg-white/30",
              )}
            />
          ))}
        </div>
      </div>

      {/* Floating testimonial card — bottom-left */}
      {testimonial && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="absolute -bottom-6 -left-6 z-10 hidden max-w-xs rounded-2xl border border-[var(--muted)] bg-[var(--surface)] p-4 shadow-xl sm:block"
        >
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/60">
              <Star className="h-5 w-5 fill-white text-white" />
            </div>
            <div>
              <p className="line-clamp-3 text-sm font-medium text-[var(--foreground)]/80">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <p className="mt-1 text-xs text-[var(--foreground)]/50">
                — {testimonial.name}
              </p>
            </div>
          </div>
        </motion.div>
      )}

      {/* Floating rating card — top-right */}
      {rating && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="absolute -right-6 -top-6 hidden rounded-2xl bg-gradient-to-r from-primary to-primary-hover p-4 text-white shadow-xl sm:block"
        >
          <div className="text-center">
            <div className="text-2xl font-bold">{rating.value}</div>
            <div className="text-xs opacity-90">{rating.label}</div>
            <div className="mt-1 flex justify-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3 w-3 fill-current" />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
