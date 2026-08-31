"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

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
        "group overflow-visible rounded-3xl border border-muted bg-(--surface) shadow-sm transition-shadow duration-300 hover:shadow-lg hover:shadow-primary/10 group flex h-full flex-col",
        className,
      )}
    >
      <div className="relative aspect-4/3 overflow-hidden rounded-t-3xl">
        <Image
          src={image}
          alt=""
          className=" object-cover transition-transform duration-500 group-hover:scale-105  p-3 rounded-4xl"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col px-5 pb-5 pt-8">
        {category && (
          <p className="text-[11px] font-bold uppercase tracking-wider text-primary">
            {category}
          </p>
        )}
        <h3 className="mt-1 text-lg font-bold text-foreground font-heading">
          {name}
        </h3>
        {description && (
          <p className="mt-1.5 text-sm leading-relaxed text-foreground/60">
            {description}
          </p>
        )}

        <div className=" mt-auto  flex items-center justify-between border-t border-muted pt-3.5 font-heading">
          {duration ? (
            <span className="flex items-center gap-1.5 text-xs text-foreground">
              <Clock className="h-3.5 w-3.5 " />
              {duration}
            </span>
          ) : (
            <span className="flex items-center gap-1.5 text-xs text-foreground">
              <Clock className="h-3.5 w-3.5 " />
              {"Consult"}
            </span>
          )}
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-primary/25 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
            <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </motion.a>
  );
}
