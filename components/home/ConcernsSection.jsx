// import Link from "next/link";

// const concerns = [
//   {
//     title: "Acne & Acne Scars",
//     treatments: "Peels · MNRF · Laser",
//     image:
//       "https://i.pinimg.com/1200x/0a/ef/ac/0aefacb4bb895cf22ee0426470429eae.jpg",
//     href: "/concerns/acne",
//   },
//   {
//     title: "Pigmentation & Melasma",
//     treatments: "Peels · Laser · Skin Care",
//     image:
//       "https://i.pinimg.com/1200x/33/f9/5f/33f95fd49f428032ce8b4c2feb04003b.jpg",
//     href: "/concerns/pigmentation",
//   },
//   {
//     title: "Hair Loss & Thinning",
//     treatments: "PRP · GFC · Hair Care",
//     image:
//       "https://i.pinimg.com/1200x/c6/3b/d1/c63bd14e3d9bbffecb848eccc05ace6a.jpg",
//     href: "/concerns/hair-loss",
//   },
//   {
//     title: "Anti-Ageing & Wrinkles",
//     treatments: "Botox · Fillers · HIFU",
//     image:
//       "https://i.pinimg.com/736x/87/b6/d2/87b6d263eb138f9542f73f716dfbcb83.jpg",
//     href: "/concerns/anti-aging",
//   },
//   {
//     title: "Unwanted Hair",
//     treatments: "Laser Hair Reduction",
//     image:
//       "https://i.pinimg.com/736x/b5/a0/f5/b5a0f5e9b2fd3328dd86e690e2887438.jpg",
//     href: "/concerns/unwanted-hair",
//   },
//   {
//     title: "Dull Skin & Brightening",
//     treatments: "Peels · Facials · Skin Care",
//     image:
//       "https://i.pinimg.com/736x/9e/3b/b2/9e3bb2661315a9235ba6f90a0f6db2cf.jpg",
//     href: "/concerns/dull-skin",
//   },
// ];

// export default function Concerns() {
//   return (
//     <section id="concerns" className="py-20 md:py-28 bg-background-2">
//       <div className="mx-auto max-w-7xl px-4 md:px-6">
//         {/* Section Header */}
//         <div className="mb-10 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between">
//           <div className="max-w-2xl">
//             <span className="font-heading text-sm font-medium uppercase tracking-wider text-primary">
//               Your concerns
//             </span>

//             <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight md:text-5xl">
//               Care designed around your skin concerns.
//             </h2>
//           </div>

//           <p className="max-w-md text-sm leading-6 text-muted-foreground md:text-base">
//             From acne and pigmentation to hair loss and ageing, discover
//             personalized treatments designed around your needs.
//           </p>
//         </div>

//         {/* Concerns Grid */}
//         <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
//           {concerns.map((concern) => (
//             <Link
//               key={concern.title}
//               href={concern.href}
//               className="group overflow-hidden rounded-2xl border bg-background transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
//             >
//               {/* Image */}
//               <div className="relative aspect-[4/3] overflow-hidden">
//                 <img
//                   src={concern.image}
//                   alt={concern.title}
//                   className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
//                 />
//               </div>

//               {/* Content */}
//               <div className="flex items-center justify-between gap-4 p-5">
//                 <div>
//                   <h3 className="font-heading text-lg font-semibold">
//                     {concern.title}
//                   </h3>

//                   <p className="mt-1 text-sm text-muted-foreground">
//                     {concern.treatments}
//                   </p>
//                 </div>

//                 <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-hover-background text-hover-foreground transition-transform duration-300 group-hover:translate-x-1">
//                   →
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";
import { ConcernCard } from "@/components/ui/concern-card";
import { ViewAllCard } from "@/components/ui/Viewallcard";

const TOTAL_CONCERNS = 12;
const concerns = [
  {
    image:
      "https://i.pinimg.com/1200x/0a/ef/ac/0aefacb4bb895cf22ee0426470429eae.jpg",
    badge: "Most Booked",
    name: "Acne & Acne Scars",
    treatments: ["Chemical Peels", "MNRF"],
    href: "/concerns/acne",
  },
  {
    image:
      "https://i.pinimg.com/1200x/33/f9/5f/33f95fd49f428032ce8b4c2feb04003b.jpg",
    name: "Pigmentation & Melasma",
    treatments: ["Cosmelan", "Dermamelan"],
    href: "/concerns/pigmentation-melasma",
  },
  {
    image:
      "https://i.pinimg.com/736x/87/b6/d2/87b6d263eb138f9542f73f716dfbcb83.jpg",
    name: "Anti-Ageing & Wrinkles",
    treatments: ["Botox", "Fillers", "HIFU"],
    href: "/concerns/anti-ageing-wrinkles",
  },
  {
    image:
      "https://i.pinimg.com/1200x/c6/3b/d1/c63bd14e3d9bbffecb848eccc05ace6a.jpg",
    name: "Hair Loss & Thinning",
    treatments: ["PRP", "GFC"],
    href: "/concerns/hair-loss-thinning",
  },
  {
    image:
      "https://i.pinimg.com/736x/b5/a0/f5/b5a0f5e9b2fd3328dd86e690e2887438.jpg",
    badge: "Popular",
    name: "Unwanted Hair",
    treatments: ["Laser Hair Reduction"],
    href: "/concerns/unwanted-hair",
  },
  {
    image:
      "https://i.pinimg.com/736x/9e/3b/b2/9e3bb2661315a9235ba6f90a0f6db2cf.jpg",
    name: "Dull Skin & Brightening",
    treatments: ["Glutathione", "Medifacial"],
    href: "/concerns/dull-skin-brightening",
  },
  {
    image:
      "https://i.pinimg.com/736x/21/1c/4a/211c4aefe59ac290087f002ff7aa5a92.jpg",
    name: "Stubborn Fat Pockets",
    treatments: ["Lipolysis Injections"],
    href: "/concerns/stubborn-fat-pockets",
  },
  // {
  //   image:
  //     "https://i.pinimg.com/1200x/89/76/8e/89768e031d126dbdbc42289fd6f0b4e1.jpg",
  //   name: "Nail Issues",
  //   treatments: ["Day-Care Surgery"],
  //   href: "/concerns/nail-surgery",
  // },
];

export function ConcernsSection() {
  return (
    <section className="w-full bg-background-2 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Start With Your Concern
          </span>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground md:text-4xl font-heading">
            Find The Right Care, By What's Actually Bothering You
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-[var(--foreground)]/60 md:text-base">
            Every concern here is matched to a treatment plan Dr. Gandhi reviews
            personally — not a generic one-size-fits-all package.
          </p>
        </div> */}

        <div className="mb-10 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="font-heading text-sm font-bold uppercase tracking-wider text-primary">
              Your concerns
            </span>

            <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight md:text-5xl text-foreground">
              Care designed around your skin concerns.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 md:text-base text-foreground">
            From acne and pigmentation to hair loss and ageing, discover
            personalized treatments designed around your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 lg:grid-cols-4 mt-2">
          {concerns.map((concern, i) => (
            <motion.div
              key={concern.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: (i % 4) * 0.06 }}
            >
              <ConcernCard {...concern} />
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: (concerns.length % 4) * 0.06 }}
          >
            <ViewAllCard
              remainingCount={TOTAL_CONCERNS - concerns.length}
              href="/concerns"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ConcernsSection;
