"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function ViewAllCard({
  remainingCount,
  href,
  label = "View all concerns",
}) {
  return (
    <motion.a
      href={href}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group flex h-full  flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-primary/25 bg-accent p-4 text-center transition-colors duration-300 hover:border-primary/50 hover:bg-primary/10"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white transition-transform duration-300 group-hover:scale-110">
        <ArrowRight className="h-5 w-5" />
      </div>
      <div>
        <p className="text-sm font-bold text-primary font-heading ">{label}</p>
        {typeof remainingCount === "number" && (
          <p className="mt-0.5 text-xs text-primary/60">
            +{remainingCount} more
          </p>
        )}
      </div>
    </motion.a>
  );
}
