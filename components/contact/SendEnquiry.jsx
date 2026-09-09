"use client";

import { ArrowUpRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export function SendEnquiry({ enquiry }) {
  if (!enquiry?.form?.fields?.length) return null;

  return (
    <section id={enquiry.id} className="relative overflow-hidden bg-background">
      <div className="mx-auto max-w-5xl px-6 py-20 sm:px-8 md:py-24 lg:py-32">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="font-mono text-xs text-foreground/30">02</span>

            <span className="h-px w-8 bg-primary/60" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-primary">
              {enquiry.eyebrow}
            </span>
          </div>

          <h2 className="font-heading text-4xl font-medium leading-[1.05] tracking-[-0.05em] text-foreground sm:text-5xl lg:text-6xl">
            {enquiry.title}
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-foreground/55 sm:text-base">
            {enquiry.description}
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto mt-12 max-w-3xl rounded-[2rem] border border-foreground/[0.08] bg-muted/20 p-6 sm:mt-16 sm:p-8 lg:p-10"
        >
          <div className="grid gap-x-6 gap-y-7 sm:grid-cols-2">
            {enquiry.form.fields.map((field) => {
              const isTextarea = field.type === "textarea";

              return (
                <div
                  key={field.id}
                  className={isTextarea ? "sm:col-span-2" : ""}
                >
                  <label
                    htmlFor={field.id}
                    className="mb-2.5 block text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground/45"
                  >
                    {field.label}
                    {field.required && (
                      <span className="ml-1 text-primary">*</span>
                    )}
                  </label>

                  {isTextarea ? (
                    <textarea
                      id={field.id}
                      name={field.name}
                      placeholder={field.placeholder}
                      required={field.required}
                      rows={5}
                      className="w-full resize-none rounded-xl border border-foreground/[0.1] bg-background px-4 py-3.5 text-sm text-foreground outline-none transition-all placeholder:text-foreground/30 focus:border-primary/50 focus:ring-4 focus:ring-primary/[0.06]"
                    />
                  ) : (
                    <input
                      id={field.id}
                      name={field.name}
                      type={field.type}
                      placeholder={field.placeholder}
                      required={field.required}
                      className="h-12 w-full rounded-xl border border-foreground/[0.1] bg-background px-4 text-sm text-foreground outline-none transition-all placeholder:text-foreground/30 focus:border-primary/50 focus:ring-4 focus:ring-primary/[0.06]"
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom */}
          <div className="mt-8 flex flex-col gap-5 border-t border-foreground/[0.08] pt-7 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex max-w-sm items-start gap-2.5">
              <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary/[0.1] text-primary">
                <Check size={10} strokeWidth={2.5} />
              </span>

              <p className="text-xs leading-5 text-foreground/45">
                {enquiry.form.privacyNote}
              </p>
            </div>

            <button
              type="submit"
              className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-background transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/20"
            >
              <span>{enquiry.form.submitLabel}</span>

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-background/15">
                <ArrowUpRight
                  size={15}
                  strokeWidth={1.7}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </span>
            </button>
          </div>
        </motion.form>

        {/* Alternative contact */}
        {enquiry.alternativeContact?.href && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 flex flex-col items-center justify-center gap-2 text-center sm:flex-row sm:gap-3"
          >
            <span className="text-xs text-foreground/40">
              {enquiry.alternativeContact.text}
            </span>

            <Link
              href={enquiry.alternativeContact.href}
              className="group inline-flex items-center gap-1.5 text-xs font-semibold text-foreground transition-colors hover:text-primary"
            >
              {enquiry.alternativeContact.label}

              <ArrowUpRight
                size={13}
                strokeWidth={1.7}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
