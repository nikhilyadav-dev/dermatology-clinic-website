import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";

export function AboutHero({ hero }) {
  if (!hero) return null;
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:px-12 lg:py-20">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="relative mx-auto w-full max-w-[500px] lg:mx-0">
            <div
              aria-hidden="true"
              className="absolute -left-8 -top-8 h-28 w-28 rounded-full border border-primary/15"
            />

            <div
              aria-hidden="true"
              className="absolute -bottom-8 -right-8 h-40 w-40 rounded-full bg-primary/[0.06] inset-10"
            />

            {/* Image */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] ">
              {hero.image?.src && (
                <Image
                  src={hero.image.src}
                  alt={
                    hero.image.alt || `${hero.doctor.name}, ${hero.doctor.role}`
                  }
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 42vw"
                  className="object-cover"
                />
              )}
            </div>

            <div className="absolute -right-4 top-10 rounded-2xl border border-foreground/10 bg-background px-5 py-4 shadow-[0_12px_40px_rgba(0,0,0,0.07)] sm:-right-7">
              <p className="font-heading text-2xl font-medium tracking-tight text-foreground">
                MD
              </p>

              <p className="mt-0.5 text-[10px] uppercase tracking-[0.18em] text-foreground/45">
                Dermatology
              </p>
            </div>

            <div className="absolute -bottom-5 left-5 max-w-[210px] rounded-2xl bg-primary px-5 py-4 text-primary-foreground shadow-[0_15px_40px_rgba(0,0,0,0.12)] sm:left-8">
              <p className="text-xs uppercase tracking-[0.18em] text-primary-foreground/60">
                Our Approach
              </p>

              <p className="mt-1.5 font-heading text-lg font-medium leading-tight">
                Personalised care, grounded in understanding.
              </p>
            </div>
          </div>

          <div className="max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary font-heading">
                {hero.eyebrow}
              </span>
            </div>

            <p className="text-sm font-medium uppercase tracking-[0.18em] text-foreground/50">
              Meet your dermatologist
            </p>

            <h1 className="mt-4 font-heading text-4xl font-medium leading-[1.02] tracking-[-0.04em] text-foreground sm:text-5xl lg:text-[4.5rem]">
              {hero.doctor.name}
            </h1>

            <p className="mt-4 text-base font-medium text-primary">
              {hero.doctor.role}
            </p>

            <p className="mt-1 text-sm text-foreground/45">
              {hero.doctor.qualifications}
            </p>

            <div className="mt-8 border-l-2 border-primary/30 pl-5">
              <p className="max-w-xl font-heading text-xl font-medium leading-snug tracking-[-0.02em] text-foreground sm:text-2xl">
                “{hero.statement}”
              </p>
            </div>

            <p className="mt-8 max-w-xl text-base leading-7 text-foreground/60 sm:text-lg">
              {hero.description}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={hero.primaryCta.href}
                className="group flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm  text-white shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/25 font-heading font-bold"
              >
                {hero.primaryCta.label}

                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href={hero.secondaryCta.href}
                className="flex items-center gap-2 rounded-full border border-foreground/15 bg-white/40 px-6 py-3.5 text-sm text-foreground backdrop-blur-sm transition-all duration-300 hover:bg-white font-heading font-bold"
              >
                {hero.secondaryCta.label}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 grid border-t border-foreground/10 pt-6 sm:grid-cols-3">
          <div>
            <p className="text-[10px] uppercase tracking-[0.22em] text-foreground/35">
              Specialisation
            </p>

            <p className="mt-2 text-sm text-foreground/70">
              Medical & Aesthetic Dermatology
            </p>
          </div>

          <div className="mt-5 sm:mt-0 sm:border-l sm:border-foreground/10 sm:pl-8">
            <p className="text-[10px] uppercase tracking-[0.22em] text-foreground/35">
              Philosophy
            </p>

            <p className="mt-2 text-sm text-foreground/70">
              Understand first. Treat thoughtfully.
            </p>
          </div>

          <div className="mt-5 sm:mt-0 sm:border-l sm:border-foreground/10 sm:pl-8">
            <p className="text-[10px] uppercase tracking-[0.22em] text-foreground/35">
              Care
            </p>

            <p className="mt-2 text-sm text-foreground/70">
              Personalised treatment plans
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
