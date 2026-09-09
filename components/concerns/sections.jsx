// components/concern/sections.jsx
// One component per concernDetails schema key. Each is intentionally
// "dumb" — it renders whatever data it's given, no fetching, no per-concern
// special-casing. Swap content by changing the data files, not these files.
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  ArrowRight,
  Activity,
  Droplet,
  CircleDot,
  Sparkles,
  Flame,
  CalendarCheck,
  Users,
  ShieldCheck,
  Heart,
} from "lucide-react";
import { TreatmentCard } from "@/components/treatments/tretment-card";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

// Small string->icon lookup for contributingFactors.items[].icon
const ICONS = { Activity, Droplet, CircleDot, Sparkles };

// Shared trust row shown under the hero CTAs on every concern page unless
// a specific concern's data overrides `hero.trustPoints`.
const defaultTrustPoints = [
  { icon: Users, title: "Dermatologist", subtitle: "Led Care" },
  { icon: ShieldCheck, title: "Safe &", subtitle: "Effective" },
  { icon: Heart, title: "Personalized", subtitle: "for You" },
];

// Shared floating badge on the hero photo unless overridden per concern.
const defaultHeroBadge = {
  icon: Sparkles,
  title: "Expert Care",
  description: "Advanced solutions for healthier, clearer skin.",
};

export function ConcernHero({ hero }) {
  const trustPoints = hero.trustPoints || defaultTrustPoints;
  const floatingBadge = hero.floatingBadge || defaultHeroBadge;
  const FloatingIcon = floatingBadge.icon || Sparkles;

  return (
    <section className="relative w-full overflow-hidden bg-[var(--accent)]">
      {/* decorative dot grid, upper area — hidden on small screens to avoid clutter */}
      <div className="pointer-events-none absolute right-24 top-10 hidden h-32 w-32 opacity-40 [background-image:radial-gradient(var(--muted)_1.5px,transparent_1.5px)] [background-size:14px_14px] lg:block" />
      {/* decorative petal motif, bottom-left — same brand motif used elsewhere */}
      <PetalMotif className="pointer-events-none absolute -bottom-10 -left-16 hidden h-56 w-56 text-primary/[0.07] sm:block" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 pb-0 pt-14 lg:grid-cols-2 lg:gap-8 lg:pt-20">
        {/* Left — copy */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="relative z-10 pb-14 lg:pb-24"
        >
          <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {hero.eyebrow}
          </span>

          <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-tight text-[var(--foreground)] sm:text-5xl lg:text-6xl">
            {hero.title.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="text-primary">
              {hero.title.split(" ").slice(-1)}
            </span>
          </h1>
          <span className="mt-4 block h-1 w-14 rounded-full bg-primary" />

          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-[var(--foreground)]/65">
            {hero.description}
          </p>

          {hero.badge && (
            <span className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              <Flame className="h-4 w-4" />
              {hero.badge}
            </span>
          )}

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={hero.primaryCta.href}
              className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-hover px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-transform hover:scale-[1.02]"
            >
              <CalendarCheck className="h-4 w-4" />
              {hero.primaryCta.label}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={hero.secondaryCta.href}
              className="flex items-center gap-2 rounded-full border border-[var(--muted)] bg-[var(--surface)] px-6 py-3.5 text-sm font-semibold text-[var(--foreground)] transition-colors hover:bg-white"
            >
              <Sparkles className="h-4 w-4 text-primary" />
              {hero.secondaryCta.label}
            </a>
          </div>

          {/* Trust row — wraps naturally on narrow screens instead of overflowing */}
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-4">
            {trustPoints.map((point) => {
              const Icon = point.icon;
              return (
                <div key={point.title} className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-4 w-4" />
                  </div>
                  <p className="text-xs font-medium leading-tight text-[var(--foreground)]/70">
                    {point.title}
                    <br />
                    {point.subtitle}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Right — blob-shaped photo with floating badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto w-full max-w-md pb-10 lg:max-w-none lg:pb-0"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl sm:rounded-[50px_24px_24px_24px] lg:rounded-[120px_24px_0px_24px]">
            <Image
              src={hero.image.src}
              alt={hero.image.alt}
              fill
              sizes="(max-width: 1024px) 90vw, 45vw"
              priority
              className="object-cover"
            />
          </div>

          {/* Floating badge — stays inside the section's bounds on mobile
              instead of overflowing off-screen */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="absolute bottom-2 right-2 flex max-w-[240px] items-start gap-3 rounded-2xl border border-[var(--muted)] bg-[var(--surface)] p-4 shadow-xl sm:-bottom-6 sm:-right-6"
          >
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
              <FloatingIcon className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-[var(--foreground)]">
                {floatingBadge.title}
              </p>
              <p className="mt-0.5 text-xs leading-snug text-[var(--foreground)]/55">
                {floatingBadge.description}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Same petal/lotus silhouette used across the site's hero sections.
function PetalMotif({ className }) {
  return (
    <svg viewBox="0 0 200 200" className={className} fill="currentColor">
      <path
        d="M100 20 C130 50 140 90 100 120 C60 90 70 50 100 20Z"
        opacity="0.9"
      />
      <path
        d="M40 70 C75 75 95 100 80 140 C40 140 25 105 40 70Z"
        opacity="0.7"
      />
      <path
        d="M160 70 C125 75 105 100 120 140 C160 140 175 105 160 70Z"
        opacity="0.7"
      />
      <path
        d="M100 110 C140 120 160 155 130 180 C90 180 70 145 100 110Z"
        opacity="0.85"
      />
    </svg>
  );
}

export function ConcernIntroduction({ introduction }) {
  return (
    <Section
      eyebrow={introduction.eyebrow}
      title={introduction.title}
      description={introduction.description}
    >
      <div className="mt-8 grid items-center gap-10 lg:grid-cols-2">
        <div className="space-y-4">
          {introduction.paragraphs.map((p, i) => (
            <p
              key={i}
              className="text-sm leading-relaxed text-[var(--foreground)]/70"
            >
              {p}
            </p>
          ))}
        </div>
        {introduction.image && (
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image
              src={introduction.image.src}
              alt={introduction.image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        )}
      </div>
    </Section>
  );
}

export function ConcernTypes({ types }) {
  return (
    <Section
      eyebrow={types.eyebrow}
      title={types.title}
      description={types.description}
    >
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {types.items.map((item, i) => (
          <motion.div
            key={item.title}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ delay: i * 0.06 }}
            className="overflow-hidden rounded-2xl border border-[var(--muted)] bg-[var(--surface)]"
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={item.image.src}
                alt={item.image.alt}
                fill
                sizes="25vw"
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <p className="text-sm font-semibold text-[var(--foreground)]">
                {item.title}
              </p>
              <p className="mt-1 text-xs leading-relaxed text-[var(--foreground)]/55">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

export function ContributingFactors({ contributingFactors }) {
  return (
    <Section
      eyebrow={contributingFactors.eyebrow}
      title={contributingFactors.title}
      description={contributingFactors.description}
      tinted
    >
      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {contributingFactors.items.map((item) => {
          const Icon = ICONS[item.icon] || Sparkles;
          return (
            <div
              key={item.title}
              className="rounded-2xl border border-[var(--muted)] bg-[var(--surface)] p-5"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent)] text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <p className="mt-3 text-sm font-semibold text-[var(--foreground)]">
                {item.title}
              </p>
              <p className="mt-1 text-xs leading-relaxed text-[var(--foreground)]/55">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

export function Considerations({ considerations }) {
  return (
    <Section
      eyebrow={considerations.eyebrow}
      title={considerations.title}
      description={considerations.description}
    >
      <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {considerations.points.map((point) => (
          <li
            key={point}
            className="flex items-start gap-2.5 rounded-xl border border-[var(--muted)] bg-[var(--surface)] p-4 text-sm text-[var(--foreground)]/75"
          >
            <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
            {point}
          </li>
        ))}
      </ul>
    </Section>
  );
}

// Filters treatments.js by concern slug — this is the only place the
// concern/treatment relationship is resolved, per the required data flow.
export function RelatedTreatments({ treatments, allTreatments, slug }) {
  const related = allTreatments.filter((t) => t.concerns.includes(slug));
  if (related.length === 0) return null;

  return (
    <Section
      eyebrow={treatments.eyebrow}
      title={treatments.title}
      description={treatments.description}
      tinted
      id={treatments.id}
    >
      <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {related.map((t) => (
          <TreatmentCard key={t.slug} {...t} icon={ICONS[t.icon]} />
        ))}
      </div>
      {treatments.sectionCta && (
        <div className="mt-8 text-center">
          <a
            href={treatments.sectionCta.href}
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            {treatments.sectionCta.label} <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      )}
    </Section>
  );
}

export function TreatmentApproach({ treatmentApproach }) {
  return (
    <Section
      eyebrow={treatmentApproach.eyebrow}
      title={treatmentApproach.title}
      description={treatmentApproach.description}
    >
      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {treatmentApproach.factors.map((f, i) => (
          <div
            key={f.title}
            className="rounded-2xl border border-[var(--muted)] bg-[var(--surface)] p-5"
          >
            <span className="text-2xl font-extrabold text-primary/25">
              {String(i + 1).padStart(2, "0")}
            </span>
            <p className="mt-2 text-sm font-semibold text-[var(--foreground)]">
              {f.title}
            </p>
            <p className="mt-1 text-xs leading-relaxed text-[var(--foreground)]/55">
              {f.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function Outcomes({ outcomes }) {
  return (
    <Section
      eyebrow={outcomes.eyebrow}
      title={outcomes.title}
      description={outcomes.description}
      tinted
    >
      <div
        className={`mt-8 grid gap-8 ${outcomes.image ? "lg:grid-cols-2" : ""}`}
      >
        <ul className="space-y-3">
          {outcomes.items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2.5 text-sm text-[var(--foreground)]/75"
            >
              <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
              {item}
            </li>
          ))}
        </ul>
        {outcomes.image && (
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image
              src={outcomes.image.src}
              alt={outcomes.image.alt}
              fill
              sizes="50vw"
              className="object-cover"
            />
          </div>
        )}
      </div>
      {outcomes.note && (
        <p className="mt-6 text-xs italic text-[var(--foreground)]/45">
          {outcomes.note}
        </p>
      )}
    </Section>
  );
}

export function Journey({ journey }) {
  return (
    <Section
      eyebrow={journey.eyebrow}
      title={journey.title}
      description={journey.description}
    >
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {journey.steps.map((step, i) => (
          <div
            key={step.title}
            className="relative rounded-2xl border border-[var(--muted)] bg-[var(--surface)] p-5"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
              {i + 1}
            </span>
            <p className="mt-3 text-sm font-semibold text-[var(--foreground)]">
              {step.title}
            </p>
            <p className="mt-1 text-xs leading-relaxed text-[var(--foreground)]/55">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function ConcernFAQs({ faqs }) {
  return (
    <Section
      eyebrow={faqs.eyebrow}
      title={faqs.title}
      description={faqs.description}
      tinted
    >
      <div className="mx-auto mt-8 max-w-2xl space-y-3">
        {faqs.items.map((faq, i) => (
          <details
            key={i}
            className="group rounded-xl border border-[var(--muted)] bg-[var(--surface)] p-5"
          >
            <summary className="cursor-pointer text-sm font-semibold text-[var(--foreground)] marker:content-none">
              {faq.question}
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-[var(--foreground)]/65">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </Section>
  );
}

export function ConcernCTA({ cta }) {
  return (
    <section className="w-full px-4 py-16">
      <div className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-br from-primary to-primary-hover px-8 py-12 text-center text-white">
        <p className="text-xs font-bold uppercase tracking-widest text-white/70">
          {cta.eyebrow}
        </p>
        <h2 className="mt-2 text-2xl font-extrabold md:text-3xl">
          {cta.title}
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm text-white/80">
          {cta.description}
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a
            href={cta.primaryCta.href}
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary"
          >
            {cta.primaryCta.label}
          </a>
          <a
            href={cta.secondaryCta.href}
            className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white"
          >
            {cta.secondaryCta.label}
          </a>
        </div>
      </div>
    </section>
  );
}

// Shared section wrapper — every section follows the same
// eyebrow/title/description header pattern, so it lives in one place.
function Section({
  eyebrow,
  title,
  description,
  children,
  tinted = false,
  id,
}) {
  return (
    <section
      id={id}
      className="w-full px-4 py-14"
      style={{
        backgroundColor: tinted ? "var(--background-2)" : "var(--background)",
      }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">
            {eyebrow}
          </p>
          <h2 className="mt-2 text-2xl font-extrabold text-[var(--foreground)] md:text-3xl">
            {title}
          </h2>
          {description && (
            <p className="mt-2 text-sm text-[var(--foreground)]/60">
              {description}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
