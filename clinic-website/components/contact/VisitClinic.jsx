// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { ArrowUpRight, Clock3, MapPin } from "lucide-react";
// import { motion } from "framer-motion";

// export function VisitClinic({ visit }) {
//   if (!visit?.clinic) return null;

//   const { clinic } = visit;

//   return (
//     <section id={visit.id} className="relative overflow-hidden bg-background">
//       <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 md:py-24 lg:px-12 lg:py-28">
//         <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
//           {/* Image */}
//           <motion.div
//             initial={{ opacity: 0, x: -25 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, margin: "-80px" }}
//             transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
//             className="relative"
//           >
//             <div className="relative aspect-[4/4.3] overflow-hidden rounded-[1.75rem]">
//               <Image
//                 src={clinic.image.src}
//                 alt={clinic.image.alt}
//                 fill
//                 sizes="(max-width: 1024px) 100vw, 50vw"
//                 className="object-cover transition-transform duration-700 hover:scale-[1.02]"
//               />
//             </div>

//             {/* Subtle decorative detail */}
//             <div className="absolute -bottom-4 -left-4 -z-10 h-24 w-24 rounded-full bg-primary/[0.06]" />
//           </motion.div>

//           {/* Content */}
//           <motion.div
//             initial={{ opacity: 0, x: 25 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, margin: "-80px" }}
//             transition={{
//               duration: 0.7,
//               delay: 0.1,
//               ease: [0.22, 1, 0.36, 1],
//             }}
//             className="lg:pl-2"
//           >
//             {/* Eyebrow */}
//             <div className="flex items-center gap-3">
//               <span className="h-px w-8 bg-primary/60" />

//               <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-primary">
//                 {visit.eyebrow}
//               </span>
//             </div>

//             {/* Heading */}
//             <h2 className="mt-6 max-w-xl font-heading text-4xl font-medium leading-[1.06] tracking-[-0.05em] text-foreground sm:text-5xl lg:text-[3.5rem]">
//               {visit.title}
//             </h2>

//             {/* Description */}
//             <p className="mt-6 max-w-lg text-sm leading-7 text-foreground/55 sm:text-base">
//               {visit.description}
//             </p>

//             {/* Clinic information */}
//             <div className="mt-10 border-y border-foreground/[0.09]">
//               {/* Address */}
//               <div className="flex gap-4 py-6">
//                 <div className="mt-0.5 shrink-0 text-primary">
//                   <MapPin size={19} strokeWidth={1.5} />
//                 </div>

//                 <div>
//                   <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground/45">
//                     Address
//                   </p>

//                   <p className="mt-2 font-medium text-foreground">
//                     {clinic.name}
//                   </p>

//                   <address className="mt-1 max-w-sm not-italic text-sm leading-6 text-foreground/55">
//                     {clinic.address.line1}, {clinic.address.line2}
//                     <br />
//                     {clinic.address.city}, {clinic.address.state}
//                     <br />
//                     {clinic.address.postalCode}
//                   </address>
//                 </div>
//               </div>

//               {/* Divider */}
//               <div className="h-px bg-foreground/[0.08]" />

//               {/* Hours */}
//               <div className="flex gap-4 py-6">
//                 <div className="mt-0.5 shrink-0 text-primary">
//                   <Clock3 size={19} strokeWidth={1.5} />
//                 </div>

//                 <div className="w-full">
//                   <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground/45">
//                     Clinic Hours
//                   </p>

//                   <div className="mt-3 space-y-2">
//                     {clinic.hours.map((item) => (
//                       <div
//                         key={item.days}
//                         className="flex max-w-sm items-center justify-between gap-6 text-sm"
//                       >
//                         <span className="text-foreground/55">{item.days}</span>

//                         <span className="font-medium text-foreground">
//                           {item.time}
//                         </span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* CTA */}
//             <div className="mt-8">
//               <Link
//                 href={clinic.directions.href}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="group inline-flex items-center gap-3 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
//               >
//                 {clinic.directions.label}

//                 <span className="flex h-6 w-6 items-center justify-center rounded-full bg-background/10">
//                   <ArrowUpRight
//                     size={14}
//                     strokeWidth={1.7}
//                     className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
//                   />
//                 </span>
//               </Link>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock3, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export function VisitClinic({ visit }) {
  if (!visit?.clinic) return null;

  const { clinic } = visit;

  return (
    <section id={visit.id} className="relative overflow-hidden bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 md:py-24 lg:px-12 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 xl:gap-20">
          {/* =========================================================
              IMAGE
          ========================================================= */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
          >
            {/* Decorative circle */}
            <div className="absolute -left-8 -top-8 -z-10 h-32 w-32 rounded-full bg-primary/[0.06]" />

            <div className="relative aspect-[4/4.5] overflow-hidden rounded-[2rem] sm:aspect-[4/4.2]">
              <Image
                src={clinic.image.src}
                alt={clinic.image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 52vw"
                className="object-cover transition-transform duration-700 hover:scale-[1.02]"
              />

              {/* Soft image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

              {/* Floating clinic badge */}
              <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8">
                <div className="flex items-center gap-3 rounded-full border border-white/30 bg-background/90 px-4 py-3 shadow-xl backdrop-blur-md sm:px-5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-background">
                    <MapPin size={15} strokeWidth={1.7} />
                  </span>

                  <div className="pr-1">
                    <p className="text-xs font-semibold text-foreground">
                      {clinic.name}
                    </p>

                    <p className="mt-0.5 text-[10px] text-foreground/50">
                      {clinic.address.city}, {clinic.address.state}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Small editorial marker */}
            <div className="absolute -bottom-5 right-8 hidden items-center gap-3 lg:flex">
              <span className="text-[10px] font-semibold tracking-[0.25em] text-foreground/30">
                SHINE SKIN CLINIC
              </span>

              <span className="h-px w-10 bg-foreground/20" />
            </div>
          </motion.div>

          {/* =========================================================
              CONTENT
          ========================================================= */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.75,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:pl-2"
          >
            {/* Section label */}
            <div className="flex items-center gap-4">
              <span className="font-mono text-xs text-foreground/30">01</span>

              <span className="h-px w-8 bg-primary/60" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-primary">
                {visit.eyebrow}
              </span>
            </div>

            {/* Heading */}
            <h2 className="mt-7 max-w-xl font-heading text-4xl font-medium leading-[1.05] tracking-[-0.05em] text-foreground sm:text-5xl lg:text-[3.6rem]">
              {visit.title}
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-lg text-sm leading-7 text-foreground/55 sm:text-base">
              {visit.description}
            </p>

            {/* =====================================================
                VISIT INFORMATION
            ===================================================== */}
            <div className="mt-10">
              <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-foreground/35">
                Plan Your Visit
              </p>

              <div className="border-t border-foreground/[0.09]">
                {/* Address */}
                <div className="grid grid-cols-[32px_1fr] gap-4 border-b border-foreground/[0.09] py-6">
                  <div className="pt-0.5 text-primary">
                    <MapPin size={19} strokeWidth={1.5} />
                  </div>

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground/40">
                      Address
                    </p>

                    <p className="mt-2 text-sm font-medium text-foreground">
                      {clinic.name}
                    </p>

                    <address className="mt-1 not-italic text-sm leading-6 text-foreground/55">
                      {clinic.address.line1}, {clinic.address.line2}
                      <br />
                      {clinic.address.city}, {clinic.address.state}
                      <br />
                      {clinic.address.postalCode}
                    </address>
                  </div>
                </div>

                {/* Clinic Hours */}
                <div className="grid grid-cols-[32px_1fr] gap-4 py-6">
                  <div className="pt-0.5 text-primary">
                    <Clock3 size={19} strokeWidth={1.5} />
                  </div>

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground/40">
                      Clinic Hours
                    </p>

                    <div className="mt-3 space-y-2.5">
                      {clinic.hours.map((item) => (
                        <div
                          key={item.days}
                          className="flex max-w-md items-center justify-between gap-6 text-sm"
                        >
                          <span className="text-foreground/55">
                            {item.days}
                          </span>

                          <span className="whitespace-nowrap font-medium text-foreground">
                            {item.time}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* =====================================================
                CTA
            ===================================================== */}
            <div className="mt-8">
              <Link
                href={clinic.directions.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-4 border-b border-foreground pb-2.5 text-sm font-medium text-foreground transition-colors duration-300 hover:border-primary hover:text-primary"
              >
                <span>{clinic.directions.label}</span>

                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-foreground/15 transition-all duration-300 group-hover:border-primary/30">
                  <ArrowUpRight
                    size={15}
                    strokeWidth={1.6}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
