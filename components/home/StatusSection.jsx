"use client";

import { motion } from "framer-motion";
import { Award, CalendarCheck, Users, ShieldCheck } from "lucide-react";

const stats = [
  {
    icon: Award,
    label: "Experience",
    value: "10+",
    description: "Years of Dermatological Practice........",
  },
  {
    icon: CalendarCheck,
    label: "Treatments",
    value: "20+",
    description: "Advanced Skin & Hair Treatments Offered",
  },
  {
    icon: Users,
    label: "Patients Served",
    value: "5,000+",
    description: "Patients Treated With Personalized Care",
  },
  {
    icon: ShieldCheck,
    label: "Approach",
    value: "Derma",
    description: "Every Plan Reviewed & Personally Overseen",
  },
];

export function StatsSection() {
  return (
    <section className="w-full bg-background py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group relative flex flex-col rounded-2xl border border-muted bg-background p-7 shadow-[0_1px_2px_rgba(15,37,64,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_22px_44px_-24px_rgba(219,39,119,0.35)]"
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-foreground/40">
                    {stat.label}
                  </span>
                  <div className="rounded-xl bg-primary/10 p-2.5 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>

                <div className="mt-auto">
                  <span className="text-3xl font-extrabold tracking-tight text-primary md:text-4xl font-heading">
                    {stat.value}
                  </span>
                  <p className="mt-2 text-sm leading-snug text-foreground/60">
                    {stat.description}
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 h-1 w-0 rounded-full bg-primary transition-all duration-500 group-hover:w-full" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
