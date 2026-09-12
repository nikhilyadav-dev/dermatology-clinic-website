// export function CredentialCard({ item, index }) {
//   return (
//     <article className="group relative flex min-h-[270px] flex-col overflow-hidden rounded-2xl border border-foreground/10 bg-background p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-lg hover:shadow-foreground/[0.04]">
//       {/* Credential label */}
//       <div className="flex items-start justify-between">
//         <span className="inline-flex h-11 min-w-11 items-center justify-center rounded-full border border-primary/20 bg-primary/[0.05] px-3 text-xs font-semibold uppercase tracking-[0.12em] text-primary">
//           {item.label}
//         </span>

//         <span className="text-[10px] font-medium tracking-[0.2em] text-foreground/25">
//           0{index + 1}
//         </span>
//       </div>

//       {/* Content */}
//       <div className="mt-auto">
//         <h3 className="font-heading text-xl font-medium tracking-[-0.025em] text-foreground">
//           {item.title}
//         </h3>

//         <p className="mt-3 max-w-sm text-sm leading-6 text-foreground/55">
//           {item.description}
//         </p>
//       </div>

//       {/* Bottom accent */}
//       <div className="absolute bottom-0 left-7 right-7 h-px bg-foreground/10">
//         <div className="h-full w-0 bg-primary transition-all duration-500 group-hover:w-full" />
//       </div>
//     </article>
//   );
// }

// export function CredentialCard({ item, index }) {
//   return (
//     <article
//       className="
//         group relative flex min-h-[340px] flex-col
//         overflow-hidden rounded-[2rem]
//         border border-foreground/10
//         bg-background p-8 sm:p-9
//         transition-all duration-500
//         hover:-translate-y-2
//         hover:border-primary/20
//         hover:shadow-[0_24px_70px_rgba(0,0,0,0.07)]
//       "
//     >
//       {/* Top */}
//       <div className="flex items-start justify-between">
//         <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-primary">
//           {item.label}
//         </span>

//         <span className="font-heading text-sm text-foreground/25">
//           {String(index + 1).padStart(2, "0")}
//         </span>
//       </div>

//       {/* Large credential mark */}
//       <div className="mt-10">
//         <span
//           className="
//             font-heading text-7xl font-medium
//             tracking-[-0.07em]
//             text-foreground/[0.07]
//             transition-colors duration-500
//             group-hover:text-primary/[0.14]
//           "
//         >
//           {item.label}
//         </span>
//       </div>

//       {/* Content */}
//       <div className="mt-auto pt-8">
//         <h3
//           className="
//             max-w-xs
//             font-heading text-2xl font-medium
//             leading-tight tracking-[-0.035em]
//             text-foreground
//           "
//         >
//           {item.title}
//         </h3>

//         <p className="mt-4 max-w-sm text-sm leading-6 text-foreground/55">
//           {item.description}
//         </p>
//       </div>

//       {/* Decorative vertical line */}
//       <div
//         className="
//           absolute right-0 top-0 h-full w-px
//           bg-foreground/[0.06]
//           transition-colors duration-500
//           group-hover:bg-primary/30
//         "
//       />

//       {/* Bottom progress line */}
//       <div className="absolute bottom-0 left-8 right-8 h-px bg-foreground/10">
//         <div
//           className="
//             h-full w-0 bg-primary
//             transition-all duration-700
//             group-hover:w-full
//           "
//         />
//       </div>
//     </article>
//   );
// }

// "use client";

// import { GraduationCap, Award, Stethoscope, Sparkles } from "lucide-react";

// // Schema addition: `item.icon` as a string, same convention used elsewhere
// // in the project (contributingFactors, etc). Add an icon name per
// // credential in your data; falls back to Award if none is given.
// const ICONS = { GraduationCap, Award, Stethoscope, Sparkles };

// export function CredentialCard({ item, index }) {
//   const Icon = ICONS[item.icon] || Award;

//   return (
//     <article
//       className="
//         group relative flex flex-col overflow-hidden
//         rounded-[1.75rem] border border-foreground/10
//         bg-background p-7
//         transition-all duration-500
//         hover:-translate-y-1.5
//         hover:border-primary/25
//         hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)]
//       "
//     >
//       {/* Large faint icon, corner accent — replaces the duplicated ghost text */}
//       <Icon
//         className="
//           pointer-events-none absolute -right-4 -top-4 h-24 w-24
//           text-primary/[0.05]
//           transition-colors duration-500
//           group-hover:text-primary/[0.09]
//         "
//         strokeWidth={1.2}
//       />

//       {/* Top row: label badge + index */}
//       <div className="relative flex items-center justify-between">
//         <span
//           className="
//             flex h-10 w-10 items-center justify-center rounded-full
//             bg-primary/10 text-[11px] font-bold text-primary
//             transition-colors duration-500
//             group-hover:bg-primary group-hover:text-white
//           "
//         >
//           {item.label}
//         </span>
//         <span className="font-heading text-xs text-foreground/25">
//           {String(index + 1).padStart(2, "0")}
//         </span>
//       </div>

//       {/* Content */}
//       <div className="relative mt-6">
//         <h3 className="font-heading text-lg font-semibold leading-snug tracking-[-0.02em] text-foreground">
//           {item.title}
//         </h3>
//         <p className="mt-2.5 text-sm leading-relaxed text-foreground/55">
//           {item.description}
//         </p>
//       </div>

//       {/* Bottom accent line — grows on hover, same mechanic you already liked */}
//       <div className="relative mt-6 h-px bg-foreground/10">
//         <div className="h-full w-0 bg-primary transition-all duration-700 group-hover:w-full" />
//       </div>
//     </article>
//   );
// }

// "use client";

// import { GraduationCap, Award, Stethoscope, Sparkles } from "lucide-react";

// // Schema addition: `item.icon` as a string, same convention used elsewhere
// // in the project (contributingFactors, etc). Add an icon name per
// // credential in your data; falls back to Award if none is given.
// const ICONS = { GraduationCap, Award, Stethoscope, Sparkles };

// export function CredentialCard({ item, index }) {
//   const Icon = ICONS[item.icon] || Award;

//   return (
//     <article
//       className="
//         group relative flex h-full flex-col overflow-hidden
//         rounded-[1.75rem] border border-foreground/10
//         bg-background p-7
//         transition-all duration-500
//         hover:-translate-y-1.5
//         hover:border-primary/25
//         hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)]
//       "
//     >
//       {/* Large faint icon, corner accent — replaces the duplicated ghost text */}
//       <Icon
//         className="
//           pointer-events-none absolute -right-4 -top-4 h-24 w-24
//           text-primary/[0.05]
//           transition-colors duration-500
//           group-hover:text-primary/[0.09]
//         "
//         strokeWidth={1.2}
//       />

//       {/* Top row: label badge + index */}
//       <div className="relative flex items-center justify-between">
//         <span
//           className="
//             flex h-10 w-10 items-center justify-center rounded-full
//             bg-primary/10 text-[11px] font-bold text-primary
//             transition-colors duration-500
//             group-hover:bg-primary group-hover:text-white
//           "
//         >
//           {item.label}
//         </span>
//         <span className="font-heading text-xs text-foreground/25">
//           {String(index + 1).padStart(2, "0")}
//         </span>
//       </div>

//       {/* Content — flex-1 so it absorbs the leftover space in equal-height cards */}
//       <div className="relative mt-6 flex-1">
//         <h3 className="font-heading text-lg font-semibold leading-snug tracking-[-0.02em] text-foreground">
//           {item.title}
//         </h3>
//         <p className="mt-2.5 text-sm leading-relaxed text-foreground/55">
//           {item.description}
//         </p>
//       </div>

//       {/* Bottom accent line — mt-auto keeps it flush with the card bottom
//           regardless of how long the description above it is */}
//       <div className="relative mt-6 h-px bg-foreground/10">
//         <div className="h-full w-0 bg-primary transition-all duration-700 group-hover:w-full" />
//       </div>
//     </article>
//   );
// }

"use client";

import { GraduationCap, Award, Stethoscope, Sparkles } from "lucide-react";

const ICONS = { GraduationCap, Award, Stethoscope, Sparkles };

export function CredentialCard({ item, index }) {
  const Icon = ICONS[item.icon] || Award;
  const isFeatured = index % 2 === 0; // alternates: solid, light, solid, light...

  return (
    <article
      className={`
        group relative flex h-full flex-col overflow-hidden rounded-[1.75rem]
        p-7 transition-all duration-500 hover:-translate-y-2
        ${
          isFeatured
            ? "bg-primary text-white shadow-lg  hover:shadow-2xl hover:shadow-primary/30"
            : "border border-foreground/10 bg-background text-foreground hover:border-primary/25 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)]"
        }
      `}
    >
      {/* Decorative texture — different per style so featured/light cards
          don't just differ in color, they differ in surface detail too */}
      {isFeatured ? (
        <div className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full border border-white/10" />
      ) : (
        <div className="pointer-events-none absolute -right-6 -top-6 grid grid-cols-4 gap-1.5 opacity-60">
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} className="h-1 w-1 rounded-full bg-primary/25" />
          ))}
        </div>
      )}

      {/* Top row: index + label */}
      <div className="relative flex items-center justify-between">
        <span
          className={`text-[11px] font-bold uppercase tracking-[0.2em] ${
            isFeatured ? "text-white/60" : "text-foreground/35"
          }`}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <span
          className={`rounded-full px-2.5 py-1 text-[10px] font-bold ${
            isFeatured ? "bg-white/15 text-white" : "bg-primary/10 text-primary"
          }`}
        >
          {item.label}
        </span>
      </div>

      {/* Large icon — the visual anchor of the card, not a small corner accent */}
      <div
        className={`
          relative mt-7 flex h-16 w-16 items-center justify-center rounded-2xl
          transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3
          ${isFeatured ? "bg-white/15" : "bg-primary/10"}
        `}
      >
        <Icon
          className={`h-8 w-8 ${isFeatured ? "text-white" : "text-primary"}`}
          strokeWidth={1.6}
        />
      </div>

      {/* Content */}
      <div className="relative mt-6 flex-1">
        <h3
          className={`font-heading text-lg font-semibold leading-snug tracking-[-0.02em] ${
            isFeatured ? "text-white" : "text-foreground"
          }`}
        >
          {item.title}
        </h3>
        <p
          className={`mt-2.5 text-sm leading-relaxed ${
            isFeatured ? "text-white/75" : "text-foreground/55"
          }`}
        >
          {item.description}
        </p>
      </div>

      {/* Bottom accent — inverted logic so it's visible on both card types */}
      <div
        className={`relative mt-6 h-px ${isFeatured ? "bg-white/15" : "bg-foreground/10"}`}
      >
        <div
          className={`h-full w-0 transition-all duration-700 group-hover:w-full ${
            isFeatured ? "bg-white" : "bg-primary"
          }`}
        />
      </div>
    </article>
  );
}
