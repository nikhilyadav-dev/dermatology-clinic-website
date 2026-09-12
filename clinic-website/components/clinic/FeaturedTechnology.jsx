"use client";

import Image from "next/image";
import {
  CircleDot,
  HeartPulse,
  ScanFace,
  Sparkles,
  Target,
} from "lucide-react";

const iconMap = {
  sparkles: Sparkles,
  "scan-face": ScanFace,
  target: Target,
  "heart-pulse": HeartPulse,
  "circle-dot": CircleDot,
};

function FeatureItem({ feature, side }) {
  const Icon = iconMap[feature.icon] || Sparkles;

  return (
    <div
      className={`relative flex items-start gap-4 ${
        side === "right" ? "lg:flex-row" : "lg:flex-row-reverse"
      }`}
    >
      {/* Content */}
      <div
        className={`flex-1 ${
          side === "right" ? "lg:text-left" : "lg:text-right"
        }`}
      >
        <h3 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
          {feature.title}
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-500 sm:text-[15px]">
          {feature.description}
        </p>
      </div>

      {/* Icon */}
      <div className="relative z-20 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/[0.08] text-primary ring-8 ring-white">
        <Icon className="h-5 w-5" strokeWidth={1.8} />
      </div>
    </div>
  );
}

function Connector({ side }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute top-1/2 hidden w-28 -translate-y-1/2 lg:block ${
        side === "left" ? "-right-28" : "-left-28"
      }`}
    >
      <div
        className={`relative h-12 w-full ${
          side === "left" ? "" : "scale-x-[-1]"
        }`}
      >
        <svg
          viewBox="0 0 120 50"
          fill="none"
          className="absolute inset-0 h-full w-full overflow-visible"
        >
          <path
            d="M2 25 C38 25 42 25 65 25 C82 25 88 8 112 8"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-primary/60"
          />

          <circle cx="2" cy="25" r="2.5" className="fill-primary" />

          <circle cx="112" cy="8" r="3" className="fill-primary" />
        </svg>
      </div>
    </div>
  );
}

export default function FeaturedTechnology({ technology }) {
  const leftFeatures = technology.features.filter(
    (feature) => feature.position === "left",
  );

  const rightFeatures = technology.features.filter(
    (feature) => feature.position === "right",
  );

  return (
    <section
      id={technology.id}
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="absolute -left-32 -top-32 h-72 w-72 rounded-full bg-primary/[0.045]"
      />

      <div
        aria-hidden="true"
        className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full border-[50px] border-primary/[0.035]"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
            <span className="h-px w-8 bg-primary/50" />

            {technology.eyebrow}

            <span className="h-px w-8 bg-primary/50" />
          </div>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {technology.title}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
            {technology.description}
          </p>
        </div>

        {/* Main technology layout */}
        <div className="mt-16 grid items-center gap-12 lg:grid-cols-[1fr_360px_1fr] lg:gap-8 xl:grid-cols-[1fr_420px_1fr]">
          {/* Left features */}
          <div className="order-2 flex flex-col gap-12 lg:order-1 lg:gap-16">
            {leftFeatures.map((feature) => (
              <div key={feature.id} className="relative">
                <FeatureItem feature={feature} side="left" />
                <Connector side="left" />
              </div>
            ))}
          </div>

          {/* Center machine */}
          <div className="relative order-1 flex justify-center lg:order-2">
            {/* Glow */}
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.045] sm:h-80 sm:w-80"
            />

            {/* Soft circle */}
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/[0.08] sm:h-72 sm:w-72"
            />

            <div className="relative z-10 h-[380px] w-[280px] sm:h-[440px] sm:w-[330px]">
              <Image
                src={technology.image.src}
                alt={technology.image.alt}
                fill
                priority={false}
                sizes="(max-width: 768px) 280px, 330px"
                className="object-contain"
              />
            </div>
          </div>

          {/* Right features */}
          <div className="order-3 flex flex-col gap-12 lg:gap-16">
            {rightFeatures.map((feature) => (
              <div key={feature.id} className="relative">
                <FeatureItem feature={feature} side="right" />
                <Connector side="right" />
              </div>
            ))}
          </div>
        </div>

        {/* Badge */}
        <div className="mt-12 flex justify-center sm:mt-16">
          <div className="flex items-center gap-4 rounded-full bg-primary/[0.06] px-7 py-4 sm:px-9">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-primary shadow-sm">
              <Sparkles className="h-5 w-5" strokeWidth={1.8} />
            </div>

            <div className="border-l border-primary/20 pl-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
                {technology.badge.eyebrow}
              </p>

              <p className="mt-0.5 text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                {technology.badge.title}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
