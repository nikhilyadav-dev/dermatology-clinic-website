"use client";

import { motion } from "framer-motion";
import { CredentialCard } from "./CredentialsCard";

export function CredentialsSection({ credentials }) {
  if (!credentials) return null;
  return (
    <section id={credentials.id} className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 md:py-24 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <div className=" flex place-content-center items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />

            <p className="font-heading text-[10px] font-bold uppercase tracking-[0.25em] text-primary">
              {credentials.eyebrow}
            </p>
          </div>

          <h2 className="mt-3 font-heading text-3xl font-medium tracking-[-0.035em] text-foreground sm:text-4xl md:text-5xl">
            {credentials.title}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-foreground/55 sm:text-base">
            {credentials.description}
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {credentials.credentials.map((item, index) => (
            <motion.div
              key={`${item.label}-${item.title}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
            >
              <CredentialCard item={item} index={index} />
            </motion.div>
          ))}
        </div>

        <div className="mx-auto mt-14 max-w-5xl border-t border-foreground/10 pt-10">
          <div className="grid gap-5 md:grid-cols-2 md:gap-12">
            <h3 className="font-heading text-2xl font-medium tracking-[-0.025em] text-foreground sm:text-3xl">
              {credentials.statement.title}
            </h3>

            <p className="max-w-xl text-sm leading-7 text-foreground/55 sm:text-base">
              {credentials.statement.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
