const treatments = [
  // ─────────────────────────────────────────────
  // HAIR
  // ─────────────────────────────────────────────

  {
    id: "hair-transplant",
    name: "Hair Transplant",
    slug: "hair-transplant",
    image:
      "https://i.pinimg.com/736x/2d/be/fd/2dbefd586c9c1746d2077aa94c47f24a.jpg",
    description:
      "FUE-based hair restoration with natural hairline design and long-term, lasting density.",
    duration: "",
    category: "Hair",
    tag: "Signature",
    concerns: ["hair-loss-thinning"],
    href: "/treatments/hair-transplant",
  },

  {
    id: "hair-loss-treatment",
    name: "Hair Loss Treatment",
    slug: "hair-loss-treatment",
    image:
      "https://i.pinimg.com/736x/7b/39/a1/7b39a1946ba11d656ee49e5b2439b17e.jpg",
    description:
      "Comprehensive trichology programme combining diagnostics, topicals and in-clinic therapy.",
    duration: "60 min consult",
    category: "Hair",
    tag: "",
    concerns: ["hair-loss-thinning"],
    href: "/treatments/hair-loss-treatment",
  },

  {
    id: "hair-gfc-prp",
    name: "Hair GFC (PRP)",
    slug: "hair-gfc-prp",
    image:
      "https://i.pinimg.com/1200x/2f/47/d6/2f47d65dac461aaeaae8f83496809a09.jpg",
    description:
      "Platelet-rich plasma therapy that nourishes follicles and reduces shedding over a multi-session protocol.",
    duration: "45 min",
    category: "Hair",
    tag: "",
    concerns: ["hair-loss-thinning"],
    href: "/treatments/hair-gfc-prp",
  },

  {
    id: "drs-1512",
    name: "DRS 1512",
    slug: "drs-1512",
    image:
      "https://i.pinimg.com/736x/70/59/2f/70592fb5c042cb7eabc17852386773f1.jpg",
    description:
      "Advanced hair restoration treatment using biomimetic peptides and growth factors to reduce hair fall and stimulate denser regrowth.",
    duration: "",
    category: "Hair",
    tag: "",
    concerns: ["hair-loss-thinning"],
    href: "/treatments/drs-1512",
  },

  {
    id: "regenera-activa",
    name: "Regenera Activa",
    slug: "regenera-activa",
    image:
      "https://i.pinimg.com/736x/1b/d8/ac/1bd8ac46caeadccfbeeec4fe10d81fe3.jpg",
    description:
      "Autologous micrograft therapy using your own scalp cells to stimulate natural hair regrowth.",
    duration: "30–45 min",
    category: "Hair",
    tag: "",
    concerns: ["hair-loss-thinning"],
    href: "/treatments/regenera-activa",
  },

  // ─────────────────────────────────────────────
  // ACNE
  // ─────────────────────────────────────────────

  {
    id: "acne-scar-reduction",
    name: "Acne Scar Reduction",
    slug: "acne-scar-reduction",
    image:
      "https://i.pinimg.com/736x/e5/53/ff/e553ff7934599e5e0ae88d25dd0a81b4.jpg",
    description:
      "Combination protocol using MNRF, subcision and TCA-CROSS for visible, lasting scar improvement.",
    duration: "60 min",
    category: "Acne",
    tag: "Acne Scars",
    concerns: ["acne-acne-scars", "scars-stretch-marks"],
    href: "/treatments/acne-scar-reduction",
  },

  {
    id: "dermapen",
    name: "Dermapen",
    slug: "dermapen",
    image:
      "https://i.pinimg.com/736x/99/a4/7f/99a47f1d3f8b81add341bb4598f6bbad.jpg",
    description:
      "Boosts collagen and elastin to improve acne scars, fine lines, and uneven skin texture with minimal downtime.",
    duration: "",
    category: "Acne",
    tag: "",

    concerns: [
      "acne-acne-scars",
      "wrinkles-fine-lines",
      "dull-uneven-skin",
      "scars-stretch-marks",
    ],
    href: "/treatments/dermapen",
  },

  {
    id: "face-prp",
    name: "Face PRP",
    slug: "face-prp",
    image:
      "https://i.pinimg.com/736x/09/a6/57/09a65754038512d0f1086918da21f59c.jpg",
    description:
      "Autologous platelet-rich plasma for glow, texture refinement and acne-scar improvement.",
    duration: "45 min",
    category: "Acne",
    tag: "",
    concerns: ["acne-acne-scars", "dull-uneven-skin"],
    href: "/treatments/face-prp",
  },

  {
    id: "fractional-co2",
    name: "Fractional CO2",
    slug: "fractional-co2",
    image:
      "https://i.pinimg.com/736x/f4/a3/e5/f4a3e504fe9ef8e20ab8e79752a7f016.jpg",
    description:
      "Stimulates deep collagen production to target acne scars, fine lines, and pigmentation for visibly smoother skin.",
    duration: "",
    category: "Acne",
    tag: "",
    concerns: [
      "acne-acne-scars",
      "pigmentation-melasma",
      "wrinkles-fine-lines",
      "dull-uneven-skin",
      "scars-stretch-marks",
    ],
    href: "/treatments/fractional-co2",
  },

  {
    id: "mnrf-treatment",
    name: "MNRF Treatment",
    slug: "mnrf-treatment",
    image:
      "https://i.pinimg.com/1200x/d4/82/b5/d482b56bb3fa88f94e4612e8e59082f5.jpg",
    description:
      "Microneedling RF for acne scars, pores and skin tightening, with collagen remodelling and minimal downtime.",
    duration: "60 min",
    category: "Acne",
    tag: "Signature",
    concerns: [
      "acne-acne-scars",
      "wrinkles-fine-lines",
      "dull-uneven-skin",
      "scars-stretch-marks",
    ],
    href: "/treatments/mnrf-treatment",
  },

  // ─────────────────────────────────────────────
  // INJECTABLES
  // ─────────────────────────────────────────────

  {
    id: "dermal-fillers",
    name: "Dermal Fillers",
    slug: "dermal-fillers",
    image:
      "https://i.pinimg.com/1200x/4e/90/31/4e9031872d18d1555db67122cc15d6c7.jpg",
    description:
      "Hyaluronic acid fillers for cheek, lip, chin and under-eye contouring with subtle, refined results.",
    duration: "  min",
    category: "Injectables",
    href: "/treatments/dermal-fillers",
    tag: "",
    concerns: ["wrinkles-fine-lines", "facial-sagging-loss-of-volume"],
    href: "/treatments/dermal-fillers",
  },

  {
    id: "lipolysis-injection",
    name: "Lipolysis Injection",
    slug: "lipolysis-injection",
    image:
      "https://i.pinimg.com/736x/95/4f/33/954f33099af5667f22e84a77e94747e9.jpg",
    description:
      "Targeted injections that gradually reduce stubborn small fat pockets around the chin, jowls and flanks.",
    duration: "30 min",
    category: "Injectables",
    tag: "",
    concerns: ["stubborn-fat-pockets"],
    href: "/treatments/lipolysis-injection",
  },

  {
    id: "pdrn-treatment",
    name: "PDRN Treatment",
    slug: "pdrn-treatment",
    image:
      "https://i.pinimg.com/736x/3b/71/40/3b714032fbe4e314ef9412dde0fb1af7.jpg",
    description:
      "Polynucleotide therapy designed to support skin repair, hydration and elasticity.",
    duration: "40 min",
    category: "Injectables",
    tag: "",
    concerns: ["wrinkles-fine-lines", "dull-uneven-skin"],
    href: "/treatments/pdrn-treatment",
  },

  {
    id: "skin-booster",
    name: "Skin Booster",
    slug: "skin-booster",
    image:
      "https://i.pinimg.com/1200x/94/71/62/9471623ff7fec06c73efe2188cf1cac4.jpg",
    description:
      "Micro-injection treatment that improves skin hydration, elasticity and luminosity.",
    duration: "",
    category: "Injectables",
    tag: "",
    concerns: ["wrinkles-fine-lines", "dull-uneven-skin"],
    href: "/treatments/skin-booster",
  },

  {
    id: "thread-lifting",
    name: "Thread Lifting",
    slug: "thread-lifting",
    image:
      "https://i.pinimg.com/736x/62/7a/f5/627af518577ccdf8e95055a9c45fa0ab.jpg",
    description:
      "PDO thread lift for jawline definition and mid-face lifting with collagen stimulation.",
    duration: "60 min",
    category: "Injectables",
    tag: "",
    concerns: ["facial-sagging-loss-of-volume", "wrinkles-fine-lines"],
    href: "/treatments/thread-lifting",
  },

  // ─────────────────────────────────────────────
  // LASERS
  // ─────────────────────────────────────────────

  {
    id: "hifu-wrinkle-one",
    name: "HIFU & Wrinkle One",
    slug: "hifu-wrinkle-one",
    image:
      "https://i.pinimg.com/736x/5a/36/f3/5a36f341d660648cf7adb3253018b20a.jpg",
    description:
      "High-intensity focused ultrasound to lift, firm and contour without downtime.",
    duration: "60 min",
    category: "Lasers",
    tag: "",
    concerns: ["facial-sagging-loss-of-volume", "wrinkles-fine-lines"],
    href: "/treatments/hifu-wrinkle-one",
  },

  {
    id: "ipl-treatment",
    name: "IPL Treatment",
    slug: "ipl-treatment",
    image:
      "https://i.pinimg.com/1200x/11/53/17/11531768d6bc0c5e0a02040e7b2edff2.jpg",
    description:
      "Intense pulsed light treatment for pigmentation, redness and overall skin tone evening.",
    duration: "30 min",
    category: "Lasers",
    tag: "",
    concerns: [
      "pigmentation-melasma",
      "dark-spots-sun-damage",
      "dull-uneven-skin",
      "rosacea-facial-redness",
    ],
    href: "/treatments/ipl-treatment",
  },

  {
    id: "laser-hair-reduction",
    name: "Laser Hair Reduction",
    slug: "laser-hair-reduction",
    image:
      "https://i.pinimg.com/736x/89/13/87/8913879b958b01aefac428cbca311242.jpg",
    description:
      "Laser hair reduction calibrated for Indian skin tones across body areas.",
    duration: "20–60 min",
    category: "Lasers",
    tag: "",
    concerns: ["unwanted-hair"],
    href: "/treatments/laser-hair-reduction",
  },

  {
    id: "tattoo-removal",
    name: "Tattoo Removal",
    slug: "tattoo-removal",
    image:
      "https://i.pinimg.com/1200x/2d/a6/e5/2da6e5c90a7b396a8a113896364a75dc.jpg",
    description:
      "Q-Switch Nd:YAG laser treatment for gradual tattoo pigment reduction over multiple sessions.",
    duration: "20 min",
    category: "Lasers",
    tag: "",
    concerns: ["tattoo-removal"],
    href: "/treatments/tattoo-removal",
  },

  // ─────────────────────────────────────────────
  // PEELS
  // ─────────────────────────────────────────────

  {
    id: "carbon-laser",
    name: "Carbon Laser",
    slug: "carbon-laser",
    image:
      "https://i.pinimg.com/736x/f8/a4/88/f8a4883e1be5a00b7f5db592b690a5ab.jpg",
    description:
      "Carbon peel and Q-switch laser combination for pore refinement, oil control and instant glow.",
    duration: "45 min",
    category: "Peels",
    tag: "",
    concerns: ["dull-uneven-skin"],
    href: "/treatments/carbon-laser",
  },

  {
    id: "chemical-peel",
    name: "Chemical Peel",
    slug: "chemical-peel",
    image:
      "https://i.pinimg.com/1200x/50/00/33/500033c8611b24dc64a9d2ff353cf4fb.jpg",
    description:
      "Glycolic, mandelic and salicylic peels for acne, pigmentation and dullness, graded for your skin.",
    duration: "30 min",
    category: "Peels",
    tag: "",
    concerns: [
      "acne-acne-scars",
      "pigmentation-melasma",
      "dark-spots-sun-damage",
      "dull-uneven-skin",
      "scars-stretch-marks",
    ],
    href: "/treatments/chemical-peel",
  },

  {
    id: "cosmelan-treatment",
    name: "Cosmelan Treatment",
    slug: "cosmelan-treatment",
    image:
      "https://i.pinimg.com/1200x/1e/52/c7/1e52c7f615cde5a7e95b0d7d10ae19ef.jpg",
    description:
      "Two-phase depigmentation system for melasma and persistent pigmentation.",
    duration: "60 min",
    category: "Peels",
    tag: "For Melasma",
    concerns: ["pigmentation-melasma", "dark-spots-sun-damage"],
    href: "/treatments/cosmelan-treatment",
  },

  {
    id: "dermamelan-treatment",
    name: "Dermamelan Treatment",
    slug: "dermamelan-treatment",
    image:
      "https://i.pinimg.com/1200x/e6/59/ec/e659ec72242ceb667a75998715521e03.jpg",
    description:
      "Depigmentation protocol for severe melasma and persistent pigmentary disorders.",
    duration: "60 min",
    category: "Peels",
    tag: "",
    concerns: ["pigmentation-melasma", "dark-spots-sun-damage"],
    href: "/treatments/dermamelan-treatment",
  },

  // ─────────────────────────────────────────────
  // SKIN
  // ─────────────────────────────────────────────

  {
    id: "glutathione-skin-lightening",
    name: "Glutathione Skin Lightening",
    slug: "glutathione-skin-lightening",
    image:
      "https://i.pinimg.com/736x/48/85/32/4885327a1e264df782f6896132e38ca4.jpg",
    description:
      "Doctor-supervised antioxidant therapy for a brighter, more even complexion.",
    duration: "30 min",
    category: "Skin",
    tag: "",
    concerns: ["dull-uneven-skin"],
    href: "/treatments/glutathione-skin-lightening",
  },

  {
    id: "hydra-facial",
    name: "Hydra Facial",
    slug: "hydra-facial",
    image:
      "https://i.pinimg.com/736x/13/90/c7/1390c730eef36b9fa0891fc74d9bdd6d.jpg",
    description:
      "Multi-step facial treatment that cleanses, exfoliates and hydrates the skin for an instant glow.",
    duration: "",
    category: "Skin",
    tag: "",
    concerns: ["dull-uneven-skin"],
    href: "/treatments/hydra-facial",
  },

  {
    id: "medifacial",
    name: "Medifacial",
    slug: "medifacial",
    image:
      "https://i.pinimg.com/736x/dc/3e/50/dc3e50e5f956463478dfb16682a09241.jpg",
    description:
      "Medical-grade facial customised for hydration, acne and brightening protocols.",
    duration: "60 min",
    category: "Skin",
    tag: "Most Booked",
    concerns: ["acne-acne-scars", "dull-uneven-skin"],
    href: "/treatments/medifacial",
  },

  // ─────────────────────────────────────────────
  // VITILIGO
  // ─────────────────────────────────────────────

  {
    id: "excimer",
    name: "Excimer",
    slug: "excimer",
    image:
      "https://i.pinimg.com/1200x/71/0c/8f/710c8f826fe4a8f6829f81c17ff3be87.jpg",
    description:
      "Targeted light therapy directed at depigmented patches to stimulate repigmentation.",
    duration: "",
    category: "Vitiligo",
    tag: "",
    concerns: ["vitiligo"],
    href: "/treatments/excimer",
  },

  {
    id: "nbuvb-therapy",
    name: "NBUVB Therapy",
    slug: "nbuvb-therapy",
    image:
      "https://i.pinimg.com/736x/7a/14/dc/7a14dccf2413002d306e906e829caecb.jpg",
    description:
      "Narrow-band UVB therapy to stimulate gradual repigmentation of depigmented patches.",
    duration: "",
    category: "Vitiligo",
    tag: "",
    concerns: ["vitiligo"],
    href: "/treatments/nbuvb-therapy",
  },

  {
    id: "vitiligo-surgery",
    name: "Vitiligo Surgery",
    slug: "vitiligo-surgery",
    image:
      "https://i.pinimg.com/736x/45/b4/9a/45b49a79fcdbab1dc1d739ea6b65f5a0.jpg",
    description:
      "Surgical transplantation of healthy melanocytes to selected depigmented patches.",
    duration: "",
    category: "Vitiligo",
    tag: "Popular",
    concerns: ["vitiligo"],
    href: "/treatments/vitiligo-surgery",
  },

  // ─────────────────────────────────────────────
  // REGENERATIVE
  // ─────────────────────────────────────────────

  {
    id: "exosomes-treatment",
    name: "Exosomes Treatment",
    slug: "exosomes-treatment",
    image:
      "https://i.pinimg.com/236x/da/99/59/da99591d98f0bb346c7a0ceaf12c1a31.jpg",
    description:
      "Regenerative therapy for skin rejuvenation, hair restoration and post-procedure healing.",
    duration: "45 min",
    category: "Regenerative",
    tag: "New",
    concerns: ["hair-loss-thinning", "dull-uneven-skin", "wrinkles-fine-lines"],
    href: "/treatments/exosomes-treatment",
  },

  // ─────────────────────────────────────────────
  // SURGERY
  // ─────────────────────────────────────────────

  {
    id: "cyst-surgery",
    name: "Cyst Surgery",
    slug: "cyst-surgery",
    image:
      "https://i.pinimg.com/736x/c8/55/d5/c855d545a5c9c0ddabc16bf0ee8f6742.jpg",
    description:
      "Minor surgical excision of cysts, lipomas, warts and moles with minimal scarring.",
    duration: "30–45 min",
    category: "Surgery",
    tag: "",
    concerns: ["warts-moles-skin-growths"],
    href: "/treatments/cyst-surgery",
  },

  {
    id: "earlobe-surgery",
    name: "Earlobe Surgery",
    slug: "earlobe-surgery",
    image:
      "https://i.pinimg.com/736x/ac/5d/22/ac5d22bf1c4ea4dc542542a328158596.jpg",
    description: "Minimally invasive repair of torn or stretched earlobes.",
    duration: "",
    category: "Surgery",
    tag: "",
    concerns: [],
    href: "/treatments/earlobe-surgery",
  },

  {
    id: "nail-surgery",
    name: "Nail Surgery",
    slug: "nail-surgery",
    image:
      "https://i.pinimg.com/736x/cd/17/78/cd17786b67ea1b7b71a4c9aced1bcff5.jpg",
    description:
      "Day-care surgical management of ingrown toenails and nail disorders.",
    duration: "30 min",
    category: "Surgery",
    tag: "",
    concerns: ["nail-disorders-ingrown-nails"],
    href: "/treatments/nail-surgery",
  },
];

export default treatments;
