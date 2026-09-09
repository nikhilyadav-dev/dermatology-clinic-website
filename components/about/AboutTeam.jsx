// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";
// import { ArrowUpRight } from "lucide-react";

// export function Team({ team }) {
//   return (
//     <section id={team.id} className="relative overflow-hidden bg-background-2">
//       <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 md:py-28 lg:px-12 lg:py-32">
//         {/* ───────────────── INTRO ───────────────── */}
//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-80px" }}
//           transition={{ duration: 0.6 }}
//           className="mx-auto max-w-4xl text-center"
//         >
//           <div className="flex items-center justify-center gap-3">
//             <span className="h-px w-10 bg-primary" />

//             <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
//               {team.eyebrow}
//             </span>

//             <span className="h-px w-10 bg-primary" />
//           </div>

//           <h2 className="mt-7 font-heading text-4xl font-medium leading-[1.05] tracking-[-0.045em] text-foreground sm:text-5xl lg:text-6xl">
//             {team.title}
//           </h2>

//           <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-foreground/55 sm:text-base">
//             {team.description}
//           </p>
//         </motion.div>

//         {/* ───────────────── MAIN CONTENT ───────────────── */}
//         <div className="mt-16 grid gap-10 lg:mt-20 lg:grid-cols-[1.35fr_0.65fr] lg:items-stretch lg:gap-14">
//           {/* IMAGE */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, margin: "-80px" }}
//             transition={{ duration: 0.7 }}
//             className="relative"
//           >
//             {/* Decorative circle */}
//             <div
//               aria-hidden="true"
//               className="absolute -left-8 -top-8 h-32 w-32 rounded-full bg-primary/[0.07] sm:-left-10 sm:-top-10 sm:h-40 sm:w-40"
//             />

//             {/* Decorative corner */}
//             <div
//               aria-hidden="true"
//               className="absolute -bottom-6 -right-6 h-28 w-28 rounded-br-[2rem] border-b border-r border-primary/20"
//             />

//             <div className="relative z-10">
//               <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] bg-primary/[0.05]">
//                 {team.image?.src ? (
//                   <Image
//                     src={team.image.src}
//                     alt={team.image.alt}
//                     fill
//                     sizes="(max-width: 1024px) 100vw, 65vw"
//                     className="object-cover transition-transform duration-700 hover:scale-[1.02]"
//                   />
//                 ) : (
//                   <div className="flex h-full items-center justify-center">
//                     <div className="text-center">
//                       <span className="font-heading text-7xl text-primary/[0.08]">
//                         TEAM
//                       </span>

//                       <p className="mt-2 text-[10px] uppercase tracking-[0.25em] text-foreground/25">
//                         Team Image
//                       </p>
//                     </div>
//                   </div>
//                 )}

//                 {/* Image overlay */}
//                 <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/20 to-transparent" />

//                 <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
//                   <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-white/80">
//                     Shine Skin Clinic
//                   </span>

//                   <div className="flex items-center gap-2">
//                     <span className="h-1.5 w-1.5 rounded-full bg-white" />
//                     <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
//                     <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
//                   </div>
//                 </div>
//               </div>

//               {/* Caption */}
//               {team.imageCaption && (
//                 <div className="mt-4 flex items-center gap-4 px-1">
//                   <span className="h-px w-8 bg-primary/40" />

//                   <span className="text-[10px] uppercase tracking-[0.22em] text-foreground/35">
//                     {team.imageCaption}
//                   </span>
//                 </div>
//               )}
//             </div>
//           </motion.div>

//           {/* STATEMENT */}
//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, margin: "-80px" }}
//             transition={{ duration: 0.7, delay: 0.1 }}
//             className="relative flex flex-col rounded-[2rem] border border-foreground/10 bg-background p-7 sm:p-9 lg:p-10"
//           >
//             {/* Top label */}
//             <div className="flex items-center justify-between">
//               <div className="flex items-center gap-3">
//                 <span className="h-px w-8 bg-primary" />

//                 <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-primary">
//                   Our Approach
//                 </span>
//               </div>

//               <div className="flex h-10 w-10 items-center justify-center rounded-full border border-foreground/10 text-foreground/35">
//                 <ArrowUpRight size={16} strokeWidth={1.5} />
//               </div>
//             </div>

//             {/* Statement */}
//             <div className="mt-14">
//               <span
//                 aria-hidden="true"
//                 className="font-heading text-7xl leading-none text-primary/[0.08]"
//               >
//                 “
//               </span>

//               <h3 className="-mt-4 font-heading text-3xl font-medium leading-[1.05] tracking-[-0.04em] text-foreground sm:text-4xl">
//                 {team.statement.title}
//               </h3>

//               <p className="mt-6 text-sm leading-7 text-foreground/55 sm:text-base">
//                 {team.statement.description}
//               </p>
//             </div>

//             {/* Care journey */}
//             <div className="mt-auto pt-14">
//               <div className="border-t border-foreground/10 pt-6">
//                 <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-foreground/30">
//                   Your experience
//                 </p>

//                 <div className="mt-6 space-y-5">
//                   {[
//                     {
//                       number: "01",
//                       title: "First interaction",
//                     },
//                     {
//                       number: "02",
//                       title: "Consultation & care",
//                     },
//                     {
//                       number: "03",
//                       title: "Treatment & follow-up",
//                     },
//                   ].map((item) => (
//                     <div
//                       key={item.number}
//                       className="group flex items-center gap-4"
//                     >
//                       <span className="font-heading text-xs text-primary">
//                         {item.number}
//                       </span>

//                       <span className="h-px w-5 bg-foreground/15 transition-all duration-300 group-hover:w-8 group-hover:bg-primary" />

//                       <span className="text-sm text-foreground/60 transition-colors duration-300 group-hover:text-foreground">
//                         {item.title}
//                       </span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Bottom accent */}
//             <div className="absolute bottom-0 left-10 right-10 h-px bg-primary/20" />
//           </motion.div>
//         </div>

//         {/* ───────────────── BOTTOM STATEMENT ───────────────── */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-60px" }}
//           transition={{ duration: 0.6 }}
//           className="mt-16 flex flex-col gap-5 border-t border-foreground/10 pt-7 sm:flex-row sm:items-center sm:justify-between lg:mt-20"
//         >
//           <p className="max-w-xl font-heading text-xl font-medium tracking-[-0.025em] text-foreground sm:text-2xl">
//             Thoughtful care, from the first conversation to the final follow-up.
//           </p>

//           <span className="text-[10px] uppercase tracking-[0.25em] text-foreground/30">
//             Skin · Hair · Aesthetics
//           </span>
//         </motion.div>
//       </div>

//       {/* Background decoration */}
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute -right-48 top-1/4 h-[30rem] w-[30rem] rounded-full border border-primary/[0.05]"
//       />
//     </section>
//   );
// }

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function Team({ team }) {
  return (
    <section id={team.id} className="relative overflow-hidden bg-background">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 md:py-28 lg:px-12 lg:py-32">
        {/* ───────────────── HEADER ───────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-primary" />

            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              {team.eyebrow}
            </span>

            <span className="h-px w-10 bg-primary" />
          </div>

          <h2 className="mt-7 font-heading text-4xl font-medium leading-[1.05] tracking-[-0.045em] text-foreground sm:text-5xl lg:text-6xl">
            {team.title}
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-foreground/55 sm:text-base">
            {team.description}
          </p>
        </motion.div>

        {/* ───────────────── LARGE TEAM IMAGE ───────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.75 }}
          className="relative mt-16 sm:mt-20 lg:mt-24"
        >
          {/* Decorative circle */}
          <div
            aria-hidden="true"
            className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-primary/[0.055] sm:-left-14 sm:-top-14 sm:h-52 sm:w-52"
          />

          {/* Decorative corner */}
          <div
            aria-hidden="true"
            className="absolute -bottom-7 -right-7 h-32 w-32 rounded-br-[2.5rem] border-b border-r border-primary/20 sm:-bottom-9 sm:-right-9 sm:h-40 sm:w-40"
          />

          <div className="relative z-10">
            <div className="relative aspect-[16/8] min-h-[300px] overflow-hidden rounded-[2rem] bg-primary/[0.04] sm:min-h-[380px] lg:min-h-[480px]">
              {team.image?.src ? (
                <Image
                  src={team.image.src}
                  alt={team.image.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 90vw"
                  className="object-cover transition-transform duration-700 hover:scale-[1.015]"
                />
              ) : (
                <div className="flex h-full items-center justify-center">
                  <div className="text-center">
                    <span className="font-heading text-7xl font-medium tracking-[-0.05em] text-primary/[0.08] sm:text-9xl">
                      TEAM
                    </span>

                    <p className="mt-3 text-[10px] uppercase tracking-[0.25em] text-foreground/25">
                      Team Image
                    </p>
                  </div>
                </div>
              )}

              {/* Soft image gradient */}
              <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black/25 to-transparent" />

              {/* Image label */}
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between sm:bottom-7 sm:left-8 sm:right-8">
                <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-white/80">
                  Shine Skin Clinic
                </span>

                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                  <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
                  <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
                </div>
              </div>
            </div>

            {/* Caption */}
            {team.imageCaption && (
              <div className="mt-5 flex items-center gap-4 px-1">
                <span className="h-px w-10 bg-primary/40" />

                <span className="text-[10px] uppercase tracking-[0.24em] text-foreground/35">
                  {team.imageCaption}
                </span>
              </div>
            )}
          </div>
        </motion.div>

        {/* ───────────────── STATEMENT ───────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
          className="mt-20 border-t border-foreground/10 pt-10 sm:mt-24 sm:pt-12 lg:mt-28"
        >
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-20">
            {/* Small label */}
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-primary" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-primary">
                Our Approach
              </span>
            </div>

            {/* Statement */}
            <div className="relative">
              {/* Large decorative quote */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -left-5 -top-12 font-heading text-8xl leading-none text-primary/[0.07] sm:-left-8 sm:-top-16 sm:text-[10rem]"
              >
                “
              </span>

              <div className="relative">
                <h3 className="max-w-3xl font-heading text-3xl font-medium leading-[1.05] tracking-[-0.045em] text-foreground sm:text-4xl lg:text-5xl">
                  {team.statement.title}
                </h3>

                <p className="mt-6 max-w-2xl text-sm leading-7 text-foreground/55 sm:text-base">
                  {team.statement.description}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ───────────────── BOTTOM LINE ───────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-14 flex flex-col gap-4 border-t border-foreground/10 pt-6 sm:flex-row sm:items-center sm:justify-between lg:mt-16"
        >
          <p className="font-heading text-lg font-medium tracking-[-0.025em] text-foreground/70 sm:text-xl">
            Thoughtful care, together.
          </p>

          <span className="text-[10px] uppercase tracking-[0.25em] text-foreground/30">
            Clinical care · Personal attention · Continuity
          </span>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-52 top-1/4 h-[32rem] w-[32rem] rounded-full border border-primary/[0.045]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 bottom-10 h-64 w-64 rounded-full border border-primary/[0.035]"
      />
    </section>
  );
}
