"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback } from "@/components/ui/avtar";

function TestimonialCard({ testimonial }) {
  const { quote, name, treatment, rating } = testimonial;
  return (
    <motion.figure
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="w-72 shrink-0 rounded-3xl border border-muted bg-background p-6 shadow-md shadow-foreground)]/5 transition-shadow hover:shadow-lg hover:shadow-primary/10"
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
                  : "fill-muted text-muted",
              )}
            />
          ))}
        </div>
      </div>

      <blockquote className="mt-4 text-sm leading-relaxed text-foreground/80">
        {quote}
      </blockquote>

      <figcaption className="mt-5 flex items-center justify-between gap-2 border-t border-muted pt-4">
        <div className="flex items-center gap-2">
          <Avatar className="size-8">
            <AvatarFallback className="bg-primary/10 text-xs font-semibold text-primary">
              {name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <cite className="text-sm font-medium not-italic tracking-tight text-foreground">
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

export default TestimonialCard;
