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
    <footer className="bg-background px-6 py-14 md:px-12">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-3 lg:gap-8">
        {/* Column 1 — Profile */}

        <div>
          {/* <div className="">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-600 font-semibold text-white">
              AK
            </div>
            <span className="text-xs font-semibold tracking-wider text-teal-600">
              ORTHOPAEDIC SUPERSPECIALITY
            </span>
          </div> */}

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

          <h2 className="text-3xl font-heading font-bold text-secondary">
            Dr. Sugandh Gandhi
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            MD (Dermatology), DNB, Dermatologist & Aesthetic Physician
          </p>

          <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-600">
            Providing advanced dermatological, aesthetic, and hair care
            treatments. Helping patients achieve healthy, radiant skin and hair
            through personalized treatment plans and evidence-based care.
          </p>

          <div className="mt-6 flex gap-3">
            <a
              href="#"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-secondary transition-colors hover:bg-hover-background hover:text-hover-foreground"
            >
              <FaInstagram className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200text-secondary transition-colors hover:bg-hover-background hover:text-hover-foreground"
            >
              <FaLinkedin className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Column 2 — Specialties */}
        <div>
          <h3 className="border-b-2 border-primary pb-2 text-lg font-bold text-secondary w-fit font-heading">
            Specialties
          </h3>
          <ul className="mt-5 space-y-4">
            {specialties.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="group flex items-center gap-2 text-sm font-medium text-slate-700 transition-colors hover:text-primary"
                >
                  <ChevronRight className="h-4 w-4 text-primary transition-transform group-hover:translate-x-0.5" />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 — Clinic & Location */}
        <div>
          <h3 className="border-b-2 border-primary pb-2 text-lg font-bold text-secondary w-fit font-heading">
            Clinic &amp; Location
          </h3>

          <div className="mt-5 flex gap-3">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <div className="text-sm text-slate-700">
              <p className="font-semibold text-secondary font-heading">
                The MediGalaxy Clinic (Orthoplanet)
              </p>
              <p className="mt-1 text-slate-500">
                B-501, 5th Floor, Kohinoor Square
                <br />
                Shivaji Park, Dadar (West), Mumbai 400028
              </p>
            </div>
          </div>

          <div className="mt-4 overflow-hidden rounded-xl border border-slate-200">
            <iframe
              title="Clinic location map"
              src="https://www.google.com/maps?q=Kohinoor+Square+Dadar+West+Mumbai&output=embed"
              className="h-44 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <a
              href="tel:+919619957525"
              className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-blue-700 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-800"
            >
              <Phone className="h-4 w-4 text-heading" />
              Call Us
            </a>
            <a
              href="https://wa.me/919619957525"
              className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white py-3 text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-50"
            >
              <MessageCircle className="h-4 w-4 text-teal-600 text-heading" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Bottom info row */}
      <div className="mx-auto mt-12 grid max-w-7xl gap-8 border-t border-slate-200 pt-8 md:grid-cols-3">
        <div className="flex gap-3">
          <Clock className="h-5 w-5 shrink-0 text-primary" />
          <div className="text-sm">
            <p className="font-normal text-secondary font-heading">
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
            <p className="font-normal text-secondary font-heading">
              24/7 Trauma Emergency
            </p>
            <p className="mt-1 text-slate-500">
              Immediate care via partner hospitals in Mumbai.
            </p>
            <a
              href="tel:+919619957525"
              className="mt-1 block font-medium text-primary"
            >
              +91 96199 57525
            </a>
          </div>
        </div>

        <div className="flex gap-3">
          <Mail className="h-5 w-5 shrink-0 text-primary" />
          <div className="text-sm">
            <p className="font-normal text-secondary font-heading">
              Email Inquiries
            </p>
            <p className="mt-1 text-slate-500">
              For reports, documentation &amp; booking help.
            </p>
            <a
              href="mailto:apptorthoplanet@gmail.com"
              className="mt-1 block font-medium text-primary"
            >
              apptorthoplanet@gmail.com
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
            href="https://www.1942studio.com"
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
