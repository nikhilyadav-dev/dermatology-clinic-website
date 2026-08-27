"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Treatment card — image on top with a small circular icon badge
 * overlapping its bottom-left corner, content block below. Fully
 * prop-driven so this can be swapped out later without touching
 * TreatmentsSection.
 */
export function TreatmentCard({
  icon: Icon,
  image,
  category,
  name,
  description,
  duration,
  href,
  className,
}) {
  return (
    <motion.a
      href={href}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className={cn(
        "group block overflow-visible rounded-3xl border border-[var(--muted)] bg-[var(--surface)] shadow-sm transition-shadow duration-300 hover:shadow-lg hover:shadow-primary/10",
        className,
      )}
    >
      {/* Photo */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-t-3xl">
        <img
          src={image}
          alt=""
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105  p-3 rounded-3xl"
        />
      </div>

      {/* Icon badge, overlapping the photo's bottom-left corner */}
      <div className="relative px-5">
        <div className="absolute -top-5 flex h-11 w-11 items-center justify-center rounded-full border border-[var(--muted)] bg-[var(--surface)] text-primary shadow-md">
          {Icon && <Icon className="h-5 w-5" />}
        </div>
      </div>

      {/* Content */}
      <div className="px-5 pb-5 pt-8">
        {category && (
          <p className="text-[11px] font-bold uppercase tracking-wider text-primary">
            {category}
          </p>
        )}
        <h3 className="mt-1 text-lg font-bold text-[var(--foreground)]">
          {name}
        </h3>
        {description && (
          <p className="mt-1.5 text-sm leading-relaxed text-[var(--foreground)]/60">
            {description}
          </p>
        )}

        <div className="mt-4 flex items-center justify-between border-t border-[var(--muted)] pt-3.5">
          {duration ? (
            <span className="flex items-center gap-1.5 text-xs text-[var(--foreground)]/50">
              <Clock className="h-3.5 w-3.5" />
              {duration}
            </span>
          ) : (
            <span />
          )}
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-primary/25 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
            <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </motion.a>
  );
}
