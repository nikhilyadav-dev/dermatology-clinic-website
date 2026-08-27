"use client";

import {
  Stethoscope,
  MapPin,
  Clock,
  CalendarCheck,
  ClipboardList,
  ShieldCheck,
} from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqs = [
  {
    icon: Stethoscope,
    question: "What treatments does Shine Skin Clinic offer?",
    answer:
      "We treat a wide range of skin, hair, and aesthetic concerns — from acne and pigmentation to anti-ageing and hair loss. Every plan starts with a consultation so treatment is matched to your actual skin, not a generic package.",
  },
  {
    icon: MapPin,
    question: "Where is the clinic located?",
    answer:
      "The clinic is located in [area/city] — see the Clinic & Location section below for the full address and a map.",
  },
  {
    icon: CalendarCheck,
    question: "How do I book an appointment?",
    answer:
      'You can book directly through the "Book Appointment" button on this site, or call/WhatsApp the clinic and we\'ll find a slot that works for you.',
  },
  {
    icon: Clock,
    question: "What are your clinic timings?",
    answer:
      "We're open Monday to Saturday, with specific hours varying by day. Check the Consultation Timings section for the current schedule.",
  },
  {
    icon: ClipboardList,
    question: "What should I bring to my first visit?",
    answer:
      "Any past treatment records, a list of medications or skincare products you're currently using, and a note of anything that's changed recently about your skin or hair helps us give you better guidance from the first visit.",
  },
  {
    icon: ShieldCheck,
    question: "Do you accept insurance or offer package pricing?",
    answer:
      "Coverage depends on the treatment and your provider — ask during booking or your first consultation and we'll confirm what applies to your case.",
  },
];

export function FAQSection() {
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

        <div className="mt-10">
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, i) => {
              const Icon = faq.icon;
              return (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="overflow-hidden rounded-xl border border-muted bg-surface shadow-sm transition-shadow duration-200"
                >
                  <AccordionTrigger className="group p-0 px-5 py-4 font-medium hover:bg-accent/40 hover:no-underline ">
                    <span className="flex flex-1 items-start gap-3 pr-4 text-left">
                      {/* <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors duration-200 group-aria-expanded/accordion-trigger:bg-primary group-aria-expanded/accordion-trigger:text-white">
                        <Icon className="h-4 w-4" />
                      </span> */}
                      <span className="text-base font-semibold leading-snug text-foreground md:text-lg font-heading ">
                        {faq.question}
                      </span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-5 [&_p]:mb-0 bg-background">
                    <p className="pl-11 pr-4 text-sm leading-relaxed text-foreground/65 ">
                      {faq.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
