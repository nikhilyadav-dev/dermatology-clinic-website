"use client";
import { FAQLayout } from "@/components/common/FaqLayout";

export function FAQSection({ faqs }) {
  return (
    <section className="w-full border-t borde-muted bg-background-2 py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.25em] text-primary font-heading">
          Common questions
        </p>
        <h2 className="mt-3 text-center text-2xl font-bold tracking-tight text-forground sm:text-3xl lg:text-4xl font-heading">
          Frequently asked questions
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-foreground/60">
          Quick answers about appointments, treatments, and what to expect at
          Shine Skin Clinic.
        </p>

        <FAQLayout faqs={faqs} />
      </div>
    </section>
  );
}
