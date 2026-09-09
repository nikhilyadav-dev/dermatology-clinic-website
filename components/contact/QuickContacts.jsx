"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MessageCircle, Phone } from "lucide-react";

const iconMap = {
  call: Phone,
  whatsapp: MessageCircle,
  email: Mail,
};

export function QuickContact({ contact }) {
  if (!contact.options?.length) return null;

  return (
    <section id={contact.id} className="relative overflow-hidden bg-background">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 md:py-28 lg:px-12 lg:py-32">
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="flex items-center justify-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              {contact.eyebrow}
            </span>
          </div>

          <h2 className="mt-6 font-heading text-4xl font-medium leading-[1.04] tracking-[-0.05em] text-foreground sm:text-5xl lg:text-6xl">
            {contact.title}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-foreground/55 sm:text-base">
            {contact.description}
          </p>
        </motion.div>

        {/* Contact Options */}
        <div className="mt-14 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:gap-5">
          {contact.options.map((option, index) => {
            const Icon = iconMap[option.id] ?? ArrowUpRight;

            return (
              <motion.div
                key={option.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.1,
                }}
              >
                <Link
                  href={option.href}
                  className="group relative flex h-full min-h-[310px] flex-col overflow-hidden rounded-[1.5rem] border border-foreground/10 bg-background p-7 transition-all duration-500 hover:-translate-y-1 hover:border-foreground/15 hover:shadow-[0_18px_50px_rgba(0,0,0,0.06)] sm:p-8"
                >
                  {/* Top */}
                  <div className="flex items-start justify-between">
                    {/* Different icon treatment */}
                    {option.id === "call" && (
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-foreground/10 text-foreground/65 transition-colors duration-300 group-hover:border-primary/30 group-hover:text-primary">
                        <Phone size={18} strokeWidth={1.5} />
                      </div>
                    )}

                    {option.id === "whatsapp" && (
                      <div className="flex h-11 w-11 items-center justify-center rounded-full border border-foreground/10 text-foreground/65 transition-colors duration-300 group-hover:border-primary/30 group-hover:text-primary">
                        <MessageCircle size={18} strokeWidth={1.5} />
                      </div>
                    )}

                    {option.id === "email" && (
                      <div className="flex items-center gap-2 pt-2 text-foreground/65 transition-colors duration-300 group-hover:text-primary">
                        <span className="h-px w-7 bg-foreground/20 transition-colors duration-300 group-hover:bg-primary/50" />
                        <Mail size={18} strokeWidth={1.5} />
                      </div>
                    )}

                    <span className="font-heading text-sm text-foreground/20">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="mt-12">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-primary/80">
                      {option.id === "call"
                        ? "Direct"
                        : option.id === "whatsapp"
                          ? "Message"
                          : "Enquiry"}
                    </span>

                    <h3 className="mt-3 font-heading text-2xl font-medium tracking-[-0.035em] text-foreground sm:text-[1.7rem]">
                      {option.title}
                    </h3>

                    <p className="mt-4 max-w-sm text-sm leading-6 text-foreground/50">
                      {option.description}
                    </p>
                  </div>

                  {/* Bottom CTA */}
                  <div className="mt-auto flex items-center justify-between border-t border-foreground/[0.08] pt-6">
                    <span className="text-xs font-medium text-foreground/60 transition-colors duration-300 group-hover:text-foreground">
                      {option.label}
                    </span>

                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-foreground/10 text-foreground/40 transition-all duration-300 group-hover:border-primary/30 group-hover:text-primary">
                      <ArrowUpRight
                        size={15}
                        strokeWidth={1.5}
                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </span>
                  </div>

                  {/* Very subtle hover line */}
                  <span className="absolute bottom-0 left-7 h-px w-0 bg-primary transition-all duration-500 group-hover:w-12" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
