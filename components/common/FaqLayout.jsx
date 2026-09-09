"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export function FAQLayout({ faqs }) {
  return (
    <div className="mt-10">
      <Accordion type="single" className="space-y-2">
        {faqs.map((faq, i) => {
          return (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="overflow-hidden rounded-xl border border-muted bg-surface shadow-sm transition-shadow duration-200"
            >
              <AccordionTrigger className="group p-0 px-5 py-4 font-medium hover:bg-accent/40 hover:no-underline ">
                <span className="flex flex-1 items-start gap-3 pr-4 text-left">
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
  );
}
