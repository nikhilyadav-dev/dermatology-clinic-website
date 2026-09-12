"use client";
import { FAQLayout } from "@/components/common/FaqLayout";

export function FAQSection({ faqs }) {
  if (!faqs || faqs.length === 0) {
    return null;
  }
  return (
    <section className="w-full border-t borde-muted bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="mb-5 flex items-center justify-center gap-1 flex-col">
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />

            <p className="font-heading text-[10px] font-bold uppercase tracking-[0.25em] text-primary">
              Common questions
            </p>
          </div>

          <h2 className="mt-6  font-heading text-4xl font-medium leading-[1.05] tracking-[-0.04em] text-foreground sm:text-5xl">
            Frequently asked
            <span className="font-serif italic text-primary"> questions</span>
          </h2>

          <p className="mt-4 max-w-lg text-sm leading-7 text-foreground/70 text-center">
            Quick answers to common questions about treatments, appointments,
            and your care.
          </p>
        </div>

        <FAQLayout faqs={faqs} />
      </div>
    </section>
  );
}
