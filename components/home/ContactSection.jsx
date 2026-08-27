"use client";

import { motion } from "framer-motion";
import {
  Users,
  ShieldCheck,
  Clock,
  MapPin,
  Navigation,
  Phone,
  MessageCircle,
  Calendar,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

const trustPoints = [
  {
    icon: Users,
    title: "Expert Care",
    desc: "Dermatologists you can trust",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Hygienic",
    desc: "Clean, modern & sterilized clinic",
  },
  {
    icon: Clock,
    title: "Patient First",
    desc: "Comfort, care & personal attention",
  },
];

const quickContacts = [
  {
    icon: Phone,
    label: "Call Us",
    content: (
      <>
        <p className="font-semibold text-foreground">+91 62327 34454</p>
      </>
    ),
    href: "tel:+91",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    content: (
      <p className="font-semibold text-foreground">Chat with our care team</p>
    ),
    href: "https://wa.me/91..",
  },
  {
    icon: Clock,
    label: "Clinic Hours",
    content: (
      <>
        <p className="font-semibold text-forground">
          Mon – Sat: 10:00 AM – 7:00 PM
        </p>
        <p className="mt-0.5 text-xs text-foreground/50">Sunday: Closed</p>
      </>
    ),
    href: "#hours",
  },
];

export function ContactSection() {
  return (
    <section className="w-full bg-background px-4 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <span className="text-center text-sm font-semibold uppercase tracking-[0.25em] text-primary font-heading">
            Visit Us
          </span>
          <h2 className="mt-3 text-center text-2xl font-bold tracking-tight text-forground sm:text-3xl lg:text-4xl font-heading">
            We're here to help, however works for you
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-foreground/60">
            Visit the clinic, call, or message us — whichever is easiest, we're
            happy to help with your skin journey.
          </p>
        </div>

        <div className="hidden md:flex flex-wrap gap-6  lg:flex-nowrap justify-center ">
          {trustPoints.map((point, i) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`flex items-start gap-3 ${i > 0 ? "pl-6" : ""}`}
              >
                <div className="flex h-11 w-11  shrink-0 items-center justify-center rounded-full bg-surface text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground font-heading">
                    {point.title}
                  </p>
                  <p className="text-xs leading-snug text-foreground/55">
                    {point.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="relative mt-12 grid overflow-hidden rounded-[2rem] shadow-lg md:grid-cols-2 md:h-[330px]"
        >
          <div className="h-65 md:h-full">
            <iframe
              title="Clinic location map"
              src="https://www.google.com/maps?ll=21.08363,81.02666&z=15&t=m&hl=en-GB&gl=US&mapclient=embed&cid=5171059070357010580&output=embed"
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="relative bg-surface p-8">
            <div className="pointer-events-none absolute right-0 top-0 h-full w-24 opacity-40 [background-image:radial-gradient(var(--muted)_1px,transparent_1px)] [background-size:12px_12px]" />

            <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-accent text-primary">
              <MapPin className="h-5 w-5" />
            </div>
            <p className="relative mt-4 text-xs font-bold uppercase tracking-widest text-primary">
              Our Clinic
            </p>

            <p className="relative mt-2 max-w-xs text-lg font-bold leading-snug text-foreground font-heading">
              Ward Number 40, Basantpur, Rajnandgaon, Chhattisgarh 491441
            </p>

            <a
              href="https://maps.google.com"
              className="relative mt-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-accent px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
            >
              <Navigation className="h-4 w-4" />
              Get Directions
            </a>
          </div>
        </motion.div>

        <div className="mt-9 grid gap-4 lg:grid-cols-3 ">
          {quickContacts.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group flex items-center gap-4 rounded-2xl border border-muted bg-surface p-5 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-bold uppercase tracking-widest text-primary ">
                    {item.label}
                  </p>
                  <div className="mt-0.5 text-sm font-heading">
                    {item.content}
                  </div>
                </div>
                <ChevronRight className="h-4 w-4 shrink-0 text-primary/40 transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
              </motion.a>
            );
          })}
        </div>

        {/* CTA Section */}

        {/* <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative mt-6 flex flex-col items-center gap-4 overflow-hidden rounded-2xl bg-gradient-to-r from-primary to-primary-hover p-6 text-center sm:flex-row sm:justify-between sm:text-left"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-white text-primary">
              <Calendar className="h-5 w-5" />
            </div>
            <div>
              <p className="text-base font-bold text-white">
                Ready to start your skin journey?
              </p>
              <p className="text-sm text-white/80">
                Book your consultation in just a few clicks.
              </p>
            </div>
          </div>

          <a
            href="#book"
            className="group flex flex-shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary shadow-md transition-transform hover:scale-[1.03]"
          >
            Book Appointment
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </motion.div> */}
      </div>
    </section>
  );
}

export default ContactSection;
