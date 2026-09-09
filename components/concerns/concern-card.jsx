"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function ConcernCard({
  image,
  badge,
  name,
  treatments = [],
  href,
  className,
}) {
  return (
    <motion.a
      href={href}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className={cn(
        "group flex flex-col overflow-hidden rounded-2xl border border-[var(--muted)] bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg hover:shadow-primary/10",
        className,
      )}
    >
      {/* Photo */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt="concern image"
          fill
          priority
          sizes="(max-width: 1024px) 85vw, 430px"
          className="object-cover"
        />

        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/35 via-transparent to-transparent" />

        {badge && (
          <span className="absolute right-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-primary shadow-sm backdrop-blur-sm">
            {badge}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-[15px] font-semibold leading-snug text-foreground font-heading">
            {name}
          </h3>
          <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 -translate-x-1 text-foreground/25 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:text-primary group-hover:opacity-100" />
        </div>

        {treatments.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {treatments.slice(0, 2).map((t) => (
              <span
                key={t}
                className="rounded-full bg-accent px-2.5 py-1 text-[11px] font-medium text-primary"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.a>
  );
}
