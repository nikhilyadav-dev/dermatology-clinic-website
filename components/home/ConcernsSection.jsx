"use client";

import { motion } from "framer-motion";
import { ConcernCard } from "@/components/ui/concern-card";
import { ViewAllCard } from "@/components/ui/Viewallcard";

const TOTAL_CONCERNS = 25;
const concerns = [
  {
    image:
      "https://i.pinimg.com/736x/1e/1c/6b/1e1c6b1a554b6eaad635ac334ef4a40d.jpg",
    badge: "Most Booked",
    name: "Acne & Acne Scars",
    slug: "acne-acne-scars",
    treatments: [
      "Chemical Peels",
      "Microneedling",
      "RF Microneedling",
      "Laser Treatments",
    ],
    href: "/concerns/acne-acne-scars",
  },

  {
    image:
      "https://i.pinimg.com/736x/14/3f/c7/143fc7abc00b88d85d8eef183cff868f.jpg",
    badge: "",
    name: "Pigmentation & Melasma",
    slug: "pigmentation-melasma",
    treatments: ["Chemical Peels", "IPL", "Laser Treatments", "Microneedling"],
    href: "/concerns/pigmentation-melasma",
  },

  {
    image:
      "https://i.pinimg.com/736x/b7/d8/0f/b7d80f702b830bc69f6d1d15fa5db81f.jpg",
    badge: "",
    name: "Dark Spots & Sun Damage",
    slug: "dark-spots-sun-damage",
    treatments: ["Chemical Peels", "IPL", "Laser Treatments"],
    href: "/concerns/dark-spots-sun-damage",
  },

  {
    image:
      "https://i.pinimg.com/1200x/0c/05/08/0c0508e4776d19d33379225719f95765.jpg",
    badge: "",
    name: "Hair Loss & Thinning",
    slug: "hair-loss-thinning",
    treatments: [
      "PRP",
      "Hair Mesotherapy",
      "Growth Factor Therapy",
      "Low-Level Laser Therapy",
      "Hair Transplant",
    ],
    href: "/concerns/hair-loss-thinning",
  },

  {
    image:
      "https://i.pinimg.com/1200x/4a/cb/d2/4acbd2a0291ea1695613ed7f11cd3171.jpg",
    badge: "",
    name: "Wrinkles & Fine Lines",
    slug: "wrinkles-fine-lines",
    treatments: [
      "Botox",
      "Dermal Fillers",
      "Chemical Peels",
      "Microneedling",
      "RF Microneedling",
    ],
    href: "/concerns/wrinkles-fine-lines",
  },

  {
    image:
      "https://i.pinimg.com/736x/b5/a0/f5/b5a0f5e9b2fd3328dd86e690e2887438.jpg",
    badge: "",
    name: "Unwanted Hair",
    slug: "unwanted-hair",
    treatments: ["Laser Hair Removal"],
    href: "/concerns/unwanted-hair",
  },

  {
    image:
      "https://i.pinimg.com/736x/9e/3b/b2/9e3bb2661315a9235ba6f90a0f6db2cf.jpg",
    badge: "",
    name: "Dull & Uneven Skin",
    slug: "dull-uneven-skin",
    treatments: [
      "Chemical Peels",
      "Microdermabrasion",
      "Dermaplaning",
      "PRP Facial",
      "Mesotherapy",
      "IPL",
    ],
    href: "/concerns/dull-uneven-skin",
  },

  {
    image:
      "https://i.pinimg.com/1200x/08/55/bb/0855bb064a7c0b4b8e4e941db33d94bb.jpg",
    badge: "",
    name: "Scars & Stretch Marks",
    slug: "scars-stretch-marks",
    treatments: [
      "Microneedling",
      "RF Microneedling",
      "Chemical Peels",
      "Laser Treatments",
    ],
    href: "/concerns/scars-stretch-marks",
  },

  {
    image:
      "https://i.pinimg.com/236x/97/d6/1d/97d61d9ec69edefe80dfec82dc3ceff3.jpg",
    badge: "",
    name: "Facial Sagging & Loss of Volume",
    slug: "facial-sagging-volume-loss",
    treatments: ["HIFU", "Thread Lift", "Dermal Fillers", "Facial Contouring"],
    href: "/concerns/facial-sagging-volume-loss",
  },

  {
    image:
      "https://i.pinimg.com/736x/72/77/a0/7277a0cd769bd5a9dbaca40df782b4af.jpg",
    badge: "",
    name: "Dandruff & Scalp Conditions",
    slug: "dandruff-scalp-conditions",
    treatments: ["Scalp Treatment", "Scalp Mesotherapy"],
    href: "/concerns/dandruff-scalp-conditions",
  },

  {
    image:
      "https://i.pinimg.com/236x/a8/83/23/a883232b3c1553d8df317c1c25f1381d.jpg",
    badge: "",
    name: "Eczema & Dermatitis",
    slug: "eczema-dermatitis",
    treatments: [
      "Medical Dermatology Treatment",
      "Prescription Treatment",
      "Patch Testing",
    ],
    href: "/concerns/eczema-dermatitis",
  },

  {
    image:
      "https://i.pinimg.com/736x/4c/d0/83/4cd083c715aa42f77501c264c8b250b4.jpg",
    badge: "",
    name: "Psoriasis",
    slug: "psoriasis",
    treatments: ["Medical Dermatology Treatment", "Prescription Treatment"],
    href: "/concerns/psoriasis",
  },

  {
    image:
      "https://i.pinimg.com/736x/4e/d7/2d/4ed72d7e0a657f8a7fd177911125a643.jpg",
    badge: "",
    name: "Rosacea & Facial Redness",
    slug: "rosacea-facial-redness",
    treatments: ["Medical Dermatology Treatment", "Laser Treatment"],
    href: "/concerns/rosacea-facial-redness",
  },

  {
    image:
      "https://i.pinimg.com/736x/66/61/01/6661014e45e624bb8a4dbac6f90e22e3.jpg",
    badge: "",
    name: "Warts, Moles & Skin Growths",
    slug: "warts-moles-skin-growths",
    treatments: [
      "Wart Removal",
      "Mole Removal",
      "Skin Tag Removal",
      "Skin Lesion Removal",
    ],
    href: "/concerns/warts-moles-skin-growths",
  },

  {
    image:
      "https://i.pinimg.com/736x/c4/7c/82/c47c82ea7d2a08ccaa67593e7834af3b.jpg",
    badge: "",
    name: "Skin Infections",
    slug: "skin-infections",
    treatments: ["Medical Dermatology Treatment", "Prescription Treatment"],
    href: "/concerns/skin-infections",
  },

  {
    image:
      "https://i.pinimg.com/736x/1e/39/8a/1e398a70efd5113e8252e00f992d61c7.jpg",
    badge: "",
    name: "Vitiligo",
    slug: "vitiligo",
    treatments: ["Vitiligo Treatment"],
    href: "/concerns/vitiligo",
  },
];

export function ConcernsSection() {
  return (
    <section className="w-full bg-background-2 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <span className="text-center text-sm font-semibold uppercase tracking-[0.25em] text-primary font-heading">
            Your concerns
          </span>
          <h2 className="mt-3 text-center text-2xl font-bold tracking-tight text-forground sm:text-3xl lg:text-4xl font-heading">
            Care designed around your skin concerns.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-foreground/60">
            From acne and pigmentation to hair loss and ageing, discover
            personalized treatments designed around your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mt-2">
          {concerns.slice(0, 7).map((concern, i) => (
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
