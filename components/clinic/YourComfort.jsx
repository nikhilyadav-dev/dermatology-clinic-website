"use client";

import {
  Heart,
  Sparkles,
  MessageCircle,
  Smile,
  ArrowUpRight,
} from "lucide-react";

const iconMap = {
  heart: Heart,
  sparkles: Sparkles,
  "message-circle": MessageCircle,
  smile: Smile,
};

export default function YourComfort({ comfort }) {
  return (
    <section
      id={comfort.id}
      className="relative overflow-hidden bg-[#f9fafb] py-20 sm:py-24 lg:py-28"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="absolute -left-32 top-1/4 h-64 w-64 rounded-full bg-primary/[0.035]"
      />

      <div
        aria-hidden="true"
        className="absolute -bottom-32 -right-32 h-72 w-72 rounded-full border-[45px] border-primary/[0.035]"
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            {comfort.eyebrow}
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {comfort.title}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
            {comfort.description}
          </p>
        </div>

        {/* Features */}
        <div className="mt-14 grid gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
          {comfort.features.map((feature) => {
            const Icon = iconMap[feature.icon] || Sparkles;

            return (
              <article
                key={feature.id}
                className="group relative rounded-3xl border border-gray-200/80 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-[0_16px_40px_rgba(36,28,36,0.06)] sm:p-7"
              >
                {/* Number */}
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/[0.08] text-primary">
                    <Icon className="h-5 w-5" strokeWidth={1.8} />
                  </div>

                  <span className="text-xs font-semibold tracking-[0.15em] text-gray-300">
                    {feature.number}
                  </span>
                </div>

                {/* Content */}
                <h3 className="mt-7 text-lg font-semibold tracking-tight text-foreground">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  {feature.description}
                </p>

                {/* Hover arrow */}
                <div className="mt-6 flex h-8 w-8 items-center justify-center rounded-full bg-gray-50 text-gray-400 transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    strokeWidth={1.8}
                  />
                </div>
              </article>
            );
          })}
        </div>

        {/* Closing statement */}
        <div className="mx-auto mt-12 max-w-xl text-center sm:mt-14">
          <div className="mx-auto mb-5 h-px w-12 bg-primary/30" />

          <p className="text-sm italic leading-7 text-gray-500 sm:text-base">
            {comfort.closingText}
          </p>
        </div>
      </div>
    </section>
  );
}
