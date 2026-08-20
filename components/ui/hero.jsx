// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import { cn } from "@/lib/utils";

// const ActionButton = ({ children }) => (
//   <motion.button
//     whileHover={{ scale: 1.05 }}
//     whileTap={{ scale: 0.95 }}
//     className="mt-8 px-8 py-3 rounded-full bg-[#DB2777] text-white font-semibold shadow-lg transition-colors hover:bg-[#c2185e] focus:outline-none focus:ring-2 focus:ring-[#DB2777]/40"
//   >
//     {children}
//   </motion.button>
// );

// export const AnimatedMarqueeHero = ({
//   tagline,
//   title,
//   description,
//   ctaText,
//   images,
//   className,
// }) => {
//   const FADE_IN_ANIMATION_VARIANTS = {
//     hidden: { opacity: 0, y: 10 },
//     show: {
//       opacity: 1,
//       y: 0,
//       transition: { type: "spring", stiffness: 100, damping: 20 },
//     },
//   };

//   const duplicatedImages = [...images, ...images];

//   return (
//     <section
//       className={cn(
//         "relative z-5 w-full h-screen overflow-hidden bg-[#FFF4F8] flex flex-col items-center justify-center text-center px-4",
//         className,
//       )}
//     >
//       <div className="z-10 flex flex-col items-center">
//         <motion.div
//           initial="hidden"
//           animate="show"
//           variants={FADE_IN_ANIMATION_VARIANTS}
//           className="mb-4 inline-block rounded-full border border-[#DB2777]/20 bg-white/70 px-4 py-1.5 text-sm font-medium text-[#DB2777] backdrop-blur-sm"
//         >
//           {tagline}
//         </motion.div>

//         <motion.h1
//           initial="hidden"
//           animate="show"
//           variants={{
//             hidden: {},
//             show: { transition: { staggerChildren: 0.1 } },
//           }}
//           className="text-5xl md:text-7xl font-bold tracking-tighter text-[#241C24]"
//         >
//           {typeof title === "string"
//             ? title.split(" ").map((word, i) => (
//                 <motion.span
//                   key={i}
//                   variants={FADE_IN_ANIMATION_VARIANTS}
//                   className="inline-block"
//                 >
//                   {word}&nbsp;
//                 </motion.span>
//               ))
//             : title}
//         </motion.h1>

//         <motion.p
//           initial="hidden"
//           animate="show"
//           variants={FADE_IN_ANIMATION_VARIANTS}
//           transition={{ delay: 0.5 }}
//           className="mt-6 max-w-xl text-lg text-[#241C24]/60"
//         >
//           {description}
//         </motion.p>

//         <motion.div
//           initial="hidden"
//           animate="show"
//           variants={FADE_IN_ANIMATION_VARIANTS}
//           transition={{ delay: 0.6 }}
//         >
//           <ActionButton>{ctaText}</ActionButton>
//         </motion.div>
//       </div>

//       <div className="absolute bottom-0 left-0 w-full h-1/3 md:h-2/5 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]">
//         <motion.div
//           className="flex gap-4"
//           animate={{
//             x: ["-100%", "0%"],
//             transition: { ease: "linear", duration: 40, repeat: Infinity },
//           }}
//         >
//           {duplicatedImages.map((src, index) => (
//             <div
//               key={index}
//               className="relative aspect-[3/4] h-48 md:h-64 flex-shrink-0"
//               style={{ rotate: `${index % 2 === 0 ? -2 : 5}deg` }}
//             >
//               <img
//                 src={src}
//                 alt={`Showcase ${index + 1}`}
//                 className="w-full h-full object-cover rounded-2xl shadow-md"
//               />
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import { ArrowRight } from "lucide-react";
// import { cn } from "@/lib/utils";

// const FADE_IN = {
//   hidden: { opacity: 0, y: 14 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: { type: "spring", stiffness: 100, damping: 20 },
//   },
// };

// const STAGGER = {
//   hidden: {},
//   show: { transition: { staggerChildren: 0.12 } },
// };

// export const AnimatedMarqueeHero = ({
//   tagline,
//   lines, // e.g. ["Healthy Skin.", "Honest Care."]
//   signature, // e.g. "Let your skin speak" — rendered in script/italic
//   description,
//   primaryCta,
//   secondaryCta,
//   stats, // [{ value: "27+", label: "Advanced Treatments" }, ...]
//   images,
//   marqueeLabel,
//   className,
// }) => {
//   const duplicatedImages = [...images, ...images];

//   return (
//     <section
//       className={cn("relative w-full bg-[#FFF4F8] overflow-hidden", className)}
//     >
//       <div className="mx-auto max-w-4xl px-4 pt-20 pb-16 text-center md:pt-15">
//         <motion.div
//           initial="hidden"
//           animate="show"
//           variants={FADE_IN}
//           className="mb-5 inline-block rounded-full border border-[#DB2777]/20 bg-white px-4 py-1.5 text-sm font-medium text-[#DB2777]"
//         >
//           {tagline}
//         </motion.div>

//         <motion.h1
//           initial="hidden"
//           animate="show"
//           variants={STAGGER}
//           className="text-5xl md:text-7xl font-bold tracking-tighter text-[#241C24] leading-[1.05]"
//         >
//           {lines.map((line, i) => (
//             <motion.span key={i} variants={FADE_IN} className="block">
//               {line}
//             </motion.span>
//           ))}
//         </motion.h1>

//         {signature && (
//           <motion.p
//             initial="hidden"
//             animate="show"
//             variants={FADE_IN}
//             transition={{ delay: 0.35 }}
//             className="mt-3 font-serif italic text-2xl text-[#DB2777]/80"
//           >
//             {signature}
//           </motion.p>
//         )}

//         <motion.p
//           initial="hidden"
//           animate="show"
//           variants={FADE_IN}
//           transition={{ delay: 0.5 }}
//           className="mx-auto mt-6 max-w-xl text-lg text-[#241C24]/60"
//         >
//           {description}
//         </motion.p>

//         <motion.div
//           initial="hidden"
//           animate="show"
//           variants={FADE_IN}
//           transition={{ delay: 0.6 }}
//           className="mt-8 flex flex-wrap items-center justify-center gap-4"
//         >
//           <motion.a
//             href={primaryCta.href}
//             whileHover={{ scale: 1.04 }}
//             whileTap={{ scale: 0.97 }}
//             className="group flex items-center gap-2 rounded-full bg-[#DB2777] px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-[#DB2777]/25 transition-colors hover:bg-[#c2185e]"
//           >
//             {primaryCta.label}
//             <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
//           </motion.a>
//           <motion.a
//             href={secondaryCta.href}
//             whileHover={{ scale: 1.04 }}
//             whileTap={{ scale: 0.97 }}
//             className="rounded-full border border-[#241C24]/15 bg-white px-8 py-3 text-sm font-semibold text-[#241C24] transition-colors hover:bg-[#241C24]/[0.03]"
//           >
//             {secondaryCta.label}
//           </motion.a>
//         </motion.div>

//         {stats?.length > 0 && (
//           <motion.div
//             initial="hidden"
//             animate="show"
//             variants={FADE_IN}
//             transition={{ delay: 0.7 }}
//             className="mx-auto mt-12 flex max-w-md items-start justify-center divide-x divide-[#241C24]/10"
//           >
//             {stats.map((stat, i) => (
//               <div key={i} className="flex-1 px-4">
//                 <p className="text-2xl font-bold text-[#241C24]">
//                   {stat.value}
//                 </p>
//                 <p className="mt-1 text-xs text-[#241C24]/50">{stat.label}</p>
//               </div>
//             ))}
//           </motion.div>
//         )}
//       </div>

//       {/* Marquee — its own segment, not overlapping the text above */}
//       <div className="border-t border-[#241C24]/10 bg-white/40 pt-5 pb-10">
//         {marqueeLabel && (
//           <p className="mb-5 text-center text-xs font-semibold tracking-widest text-[#241C24]/40">
//             {marqueeLabel}
//           </p>
//         )}
//         <div className="relative h-56 md:h-64 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
//           <motion.div
//             className="flex h-full gap-4"
//             animate={{ x: ["0%", "-50%"] }}
//             transition={{ ease: "linear", duration: 34, repeat: Infinity }}
//           >
//             {duplicatedImages.map((src, index) => (
//               <div
//                 key={index}
//                 className="relative aspect-[3/4] h-full flex-shrink-0"
//                 style={{ rotate: `${index % 2 === 0 ? -2 : 3}deg` }}
//               >
//                 <img
//                   src={src}
//                   alt={`Clinic showcase ${index + 1}`}
//                   className="h-full w-full rounded-2xl object-cover shadow-md"
//                 />
//               </div>
//             ))}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const FADE_IN = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

const STAGGER = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

export const AnimatedMarqueeHero = ({
  tagline,
  lines, // e.g. ["Healthy Skin.", "Honest Care."]
  signature, // e.g. "Let your skin speak" — rendered in script/italic
  description,
  primaryCta,
  secondaryCta,
  stats, // [{ value: "27+", label: "Advanced Treatments" }, ...]
  images,
  marqueeLabel,
  className,
}) => {
  const duplicatedImages = [...images, ...images];

  return (
    <section
      className={cn("relative w-full  bg-white/10 overflow-hidden", className)}
    >
      {/* Background motifs — only kick in on large screens where the centered
          text column would otherwise leave flat, empty margins */}
      <PetalMotif className="pointer-events-none absolute -left-32 top-10 hidden h-[420px] w-[420px] text-[#DB2777]/[0.05] lg:block" />
      <PetalMotif className="pointer-events-none absolute -right-32 bottom-0 hidden h-[420px] w-[420px] rotate-45 text-[#8FBC6E]/[0.06] lg:block" />

      {/* Floating credibility badges — fill the side margins with real
          content instead of empty space, same trick as a floating
          testimonial card */}
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="float-badge absolute left-16 top-1/3 hidden w-44 rounded-2xl bg-white px-4 py-3 shadow-lg shadow-[#241C24]/5 xl:block"
      >
        <p className="text-xs font-semibold text-[#DB2777] font-heading">
          DERMATOLOGIST-LED
        </p>
        <p className="mt-0.5 text-xs text-[#241C24]/50">
          Personalized treatment plans
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="float-badge absolute right-16 top-1/2 hidden w-44 rounded-2xl bg-white px-4 py-3 shadow-lg shadow-[#241C24]/5 xl:block"
        style={{ animationDelay: "1.4s" }}
      >
        <p className="text-xs font-semibold text-[#241C24] font-heading">
          Patient Rated
        </p>
        <p className="mt-0.5 text-xs text-[#241C24]/50">
          {/* replace with real rating */}4.9 / 5
        </p>
      </motion.div>

      <div className="relative mx-auto max-w-4xl px-4 pt-20 pb-16 text-center md:pt-28">
        <motion.div
          initial="hidden"
          animate="show"
          variants={FADE_IN}
          className="mb-5 inline-block rounded-full border border-[#DB2777]/20 bg-white px-4 py-1.5 text-sm font-medium text-[#DB2777] font-heading"
        >
          {tagline}
        </motion.div>

        <motion.h1
          initial="hidden"
          animate="show"
          variants={STAGGER}
          className="text-5xl md:text-7xl font-bold tracking-tighter text-[#241C24] leading-[1.05]"
        >
          {lines.map((line, i) => (
            <motion.span key={i} variants={FADE_IN} className="block">
              {line}
            </motion.span>
          ))}
        </motion.h1>

        {signature && (
          <motion.p
            initial="hidden"
            animate="show"
            variants={FADE_IN}
            transition={{ delay: 0.35 }}
            className="mt-3 font-serif italic text-2xl text-[#DB2777]/80"
          >
            {signature}
          </motion.p>
        )}

        <motion.p
          initial="hidden"
          animate="show"
          variants={FADE_IN}
          transition={{ delay: 0.5 }}
          className="mx-auto mt-6 max-w-xl text-lg text-[#241C24]/60"
        >
          {description}
        </motion.p>

        <motion.div
          initial="hidden"
          animate="show"
          variants={FADE_IN}
          transition={{ delay: 0.6 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <motion.a
            href={primaryCta.href}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="group flex items-center gap-2 rounded-full bg-[#DB2777] px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-[#DB2777]/25 transition-colors hover:bg-[#c2185e] font-heading"
          >
            {primaryCta.label}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </motion.a>
          <motion.a
            href={secondaryCta.href}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-full border border-[#241C24]/15 bg-white px-8 py-3 text-sm font-semibold font-heading text-[#241C24] transition-colors hover:bg-[#241C24]/[0.03]"
          >
            {secondaryCta.label}
          </motion.a>
        </motion.div>

        {stats?.length > 0 && (
          <motion.div
            initial="hidden"
            animate="show"
            variants={FADE_IN}
            transition={{ delay: 0.7 }}
            className="mx-auto mt-12 flex max-w-md items-start justify-center divide-x divide-[#241C24]/10 "
          >
            {stats.map((stat, i) => (
              <div key={i} className="flex-1 px-4">
                <p className="text-2xl font-bold text-[#241C24] font-heading">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-[#241C24]/50">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        )}
      </div>

      {/* Marquee — its own segment, not overlapping the text above */}
      <div className="border-t border-[#241C24]/10 bg-white/40 pt-8 pb-10">
        {marqueeLabel && (
          <p className="mb-5 text-center text-xs font-semibold tracking-widest text-[#241C24]/40">
            {marqueeLabel}
          </p>
        )}
        <div className="relative h-56 md:h-64 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <motion.div
            className="flex h-full gap-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 34, repeat: Infinity }}
          >
            {duplicatedImages.map((src, index) => (
              <div
                key={index}
                className="relative aspect-[3/4] h-full flex-shrink-0"
                style={{ rotate: `${index % 2 === 0 ? -2 : 3}deg` }}
              >
                <img
                  src={src}
                  alt={`Clinic showcase ${index + 1}`}
                  className="h-full w-full rounded-2xl object-cover shadow-md"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .float-badge {
          animation: float 4.5s ease-in-out infinite;
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .float-badge {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
};

// Same petal/lotus silhouette used in the split-layout hero — reused here
// as a large, low-opacity background motif to tie both heroes to the brand mark.
function PetalMotif({ className }) {
  return (
    <svg viewBox="0 0 200 200" className={className} fill="currentColor">
      <path
        d="M100 20 C130 50 140 90 100 120 C60 90 70 50 100 20Z"
        opacity="0.9"
      />
      <path
        d="M40 70 C75 75 95 100 80 140 C40 140 25 105 40 70Z"
        opacity="0.7"
      />
      <path
        d="M160 70 C125 75 105 100 120 140 C160 140 175 105 160 70Z"
        opacity="0.7"
      />
      <path
        d="M100 110 C140 120 160 155 130 180 C90 180 70 145 100 110Z"
        opacity="0.85"
      />
    </svg>
  );
}
