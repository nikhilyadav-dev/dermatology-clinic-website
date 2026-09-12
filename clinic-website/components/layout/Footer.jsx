import {
  MapPin,
  ChevronRight,
  Phone,
  MessageCircle,
  Clock,
  Mail,
} from "lucide-react";

import { FaInstagram, FaLinkedin } from "react-icons/fa";

const specialties = [
  { label: "Acne & Acne Scars", href: "/concerns/acne" },
  { label: "Pigmentation & Melasma", href: "/concerns/pigmentation" },
  { label: "Hair Loss & Thinning", href: "/concerns/hair-loss" },
  { label: "Anti-Ageing & Wrinkles", href: "/concerns/anti-ageing" },
  { label: "All Concerns & Treatments", href: "/treatments" },
];
export default function Footer() {
  return (
    <footer className=" px-6 py-14 md:px-12 bg-background-2">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-3 lg:gap-8">
        <div>
          <a href="#" className="mb-6 flex items-center gap-3">
            <img
              src="/shine_logo_cropped.png"
              className="h-14 w-auto items-center justify-center"
              alt="shine skin care logo"
            />
            <span className="text-md font-bold tracking-tight text-ink font-heading text-primary pb-0.5 items-center justify-center mt-4">
              Shine Skin Care
            </span>
          </a>

          <h2 className="text-3xl font-heading font-bold text-foreground">
            Dr. Sugandh Gandhi
          </h2>
          <p className="mt-1 text-sm text-foreground/70">
            MD (Dermatology), DNB, Dermatologist & Aesthetic Physician
          </p>

          <p className="mt-4 max-w-sm text-sm leading-relaxed text-foreground/70">
            Providing advanced dermatological, aesthetic, and hair care
            treatments. Helping patients achieve healthy, radiant skin and hair
            through personalized treatment plans and evidence-based care.
          </p>

          <div className="mt-6 flex gap-3">
            <a
              href="#"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-foreground transition-colors hover:bg-hover-background hover:text-hover-foreground"
            >
              <FaInstagram className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-foreground transition-colors hover:bg-hover-background hover:text-hover-foreground"
            >
              <FaLinkedin className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className=" pb-2 text-lg font-bold text-foreground w-fit font-heading">
            Specialties
          </h3>
          <span className=" block h-1 w-15 rounded-full bg-primary" />
          <ul className="mt-5 space-y-4">
            {specialties.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="group flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
                >
                  <ChevronRight className="h-4 w-4 text-primary transition-transform group-hover:translate-x-0.5" />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className=" pb-2 text-lg font-bold text-foreground w-fit font-heading">
            Clinic &amp; Location
          </h3>
          <span className=" block h-1 w-17 rounded-full bg-primary" />

          <div className="mt-5 flex gap-3">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <div className="text-sm text-foreground/70">
              <p className="font-semibold text-foreground font-heading">
                Shine Skin Clinic - Dr. Sugandh Gandhi
              </p>
              <p className="mt-1 text-foreground/50">
                Ward Number 40, Basantpur
                <br />
                Rajnandgaon, Chhattisgarh 491441
              </p>
            </div>
          </div>

          <div className="mt-4 overflow-hidden rounded-xl border border-slate-200">
            <iframe
              title="Clinic location map"
              src="https://www.google.com/maps?ll=21.08363,81.02666&z=15&t=m&hl=en-GB&gl=US&mapclient=embed&cid=5171059070357010580&output=embed"
              className="h-44 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <a
              href="tel:91"
              className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-blue-700 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-800"
            >
              <Phone className="h-4 w-4 text-heading" />
              Call Us
            </a>
            <a
              href="https://wa.me/91:"
              className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white py-3 text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-50"
            >
              <MessageCircle className="h-4 w-4 text-teal-600 text-heading" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 grid max-w-7xl gap-8 border-t border-slate-200 pt-8 md:grid-cols-3">
        <div className="flex gap-3">
          <Clock className="h-5 w-5 shrink-0 text-primary" />
          <div className="text-sm">
            <p className="font-normal text-foreground font-heading">
              Consultation Timings
            </p>
            <p className="mt-1 text-slate-500">
              Mon–Fri: 4:00 PM – 11:00 PM
              <br />
              Sat: 2:00 PM – 11:00 PM (Sun Closed)
            </p>
          </div>
        </div>

        <div className="flex gap-3">
          <Phone className="h-5 w-5 shrink-0 text-primary" />
          <div className="text-sm">
            <p className="font-normal text-foreground font-heading">
              24/7 Trauma Emergency
            </p>
            <p className="mt-1 text-foreground/50">
              Immediate care via partner hospitals in Mumbai.
            </p>
            <a
              href="tel:+91"
              className="mt-1 block font-medium text-primary font-heading"
            >
              +91 62327 34454
            </a>
          </div>
        </div>

        <div className="flex gap-3">
          <Mail className="h-5 w-5 shrink-0 text-primary" />
          <div className="text-sm">
            <p className="font-normal text-foreground font-heading">
              Email Inquiries
            </p>
            <p className="mt-1 text-foreground/50">
              For reports, documentation &amp; booking help.
            </p>
            <a
              href="mailto:....@gmail.com"
              className="mt-1 block font-medium text-primary font-heading"
            >
              shineclinic@gmail.com
            </a>
          </div>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row md:flex-row items-center justify-between gap-4 text-xs text-slate-500 ">
        <p>© 2026 Dr. Sugandh Gnadhi | Dermetologist . All rights reserved.</p>
        <div className="flex gap-6  ">
          <a className="hover:text-brand transition-colors" href="/">
            Home
          </a>
          <a className="hover:text-brand transition-colors" href="/who-we-are">
            Who We Are
          </a>
          <a className="hover:text-brand transition-colors" href="/clinic">
            Clinic Gallery
          </a>
          <a className="hover:text-brand transition-colors" href="/contact">
            Book Consultation
          </a>
        </div>
        <p>
          Designed &amp; Developed by{" "}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand underline transition-colors"
          >
            Nikhil Yadu
          </a>
        </p>
      </div>
    </footer>
  );
}
