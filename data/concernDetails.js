// data/concernDetails.js

const defaultJourney = {
  eyebrow: "Your Treatment Journey",
  title: "What to Expect",

  steps: [
    {
      number: "01",
      title: "Consultation",
      description: "",
    },
    {
      number: "02",
      title: "Assessment & Planning",
      description: "",
    },
    {
      number: "03",
      title: "Treatment",
      description: "",
    },
    {
      number: "04",
      title: "Follow-up",
      description: "",
    },
  ],
};

const defaultCTA = {
  eyebrow: "Ready to Get Started?",
  title: "Not sure which treatment is right for you?",
  description:
    "Book a consultation to discuss your concern and find an appropriate treatment approach.",

  button: {
    label: "Book a Consultation",
    href: "/book-appointment",
  },
};

const concern = {
  "acne-acne-scars": {
    // ─────────────────────────────────────
    // HERO
    // ─────────────────────────────────────

    hero: {
      eyebrow: "Skin Concern",

      title: "Acne & Acne Scars",

      description:
        "Personalized dermatological care for active acne, acne marks and acne scarring.",

      image: "...",

      primaryCta: {
        label: "Book a Consultation",
        href: "/book-appointment",
      },
    },

    // ─────────────────────────────────────
    // INTRODUCTION
    // ─────────────────────────────────────

    introduction: {
      eyebrow: "Understanding the Concern",

      title: "Understanding Acne & Acne Scars",

      paragraphs: ["...", "..."],
    },

    // ─────────────────────────────────────
    // TYPES / SYMPTOMS
    // ─────────────────────────────────────

    types: {
      eyebrow: "Common Types",

      title: "Different Forms of Acne & Scarring",

      items: [
        {
          title: "Type / Symptom",
          description: "...",
        },
        {
          title: "Type / Symptom",
          description: "...",
        },
      ],
    },

    // ─────────────────────────────────────
    // CONTRIBUTING FACTORS
    // ─────────────────────────────────────

    contributingFactors: {
      eyebrow: "What Can Contribute",

      title: "Factors That May Affect Your Skin",

      items: [
        {
          title: "...",
          description: "...",
        },
        {
          title: "...",
          description: "...",
        },
      ],
    },

    // ─────────────────────────────────────
    // TREATMENTS
    // ─────────────────────────────────────

    treatments: {
      eyebrow: "Treatment Options",

      title: "Treatments for Acne & Acne Scars",

      description:
        "Your treatment plan depends on your skin, the type of acne or scarring, and your individual goals.",

      // IMPORTANT:
      // Don't store treatment objects here.
      // The relationship comes from treatments.js.
    },

    // ─────────────────────────────────────
    // OUTCOMES
    // ─────────────────────────────────────

    outcomes: {
      eyebrow: "What Treatment Can Help With",

      title: "Potential Outcomes",

      items: [
        "Improved appearance of acne",
        "Reduced appearance of acne scars",
        "More even-looking skin texture",
        "Smoother overall appearance",
      ],
    },

    // ─────────────────────────────────────
    // TREATMENT JOURNEY
    // ─────────────────────────────────────

    journey: {
      eyebrow: "Your Treatment Journey",

      title: "What to Expect",

      steps: [
        {
          number: "01",
          title: "Consultation",
          description: "...",
        },
        {
          number: "02",
          title: "Assessment & Planning",
          description: "...",
        },
        {
          number: "03",
          title: "Treatment",
          description: "...",
        },
        {
          number: "04",
          title: "Follow-up",
          description: "...",
        },
      ],
    },

    // ─────────────────────────────────────
    // FAQ
    // ─────────────────────────────────────

    faqs: [
      {
        question: "...",
        answer: "...",
      },
      {
        question: "...",
        answer: "...",
      },
    ],

    // ─────────────────────────────────────
    // FINAL CTA
    // ─────────────────────────────────────

    cta: {
      eyebrow: "Ready to Get Started?",

      title: "Not sure which treatment is right for you?",

      description:
        "Book a consultation to discuss your concern and find an appropriate treatment approach.",

      button: {
        label: "Book a Consultation",
        href: "/book-appointment",
      },
    },
  },
};

const concernDetails = {
  // ============================================================
  // 01. ACNE & ACNE SCARS
  // ============================================================

  "acne-acne-scars": {
    introduction: {
      eyebrow: "Understanding the Concern",
      title: "Understanding Acne & Acne Scars",
      description: "",
      paragraphs: [],
    },

    types: {
      eyebrow: "Common Types",
      title: "Different Forms of Acne & Scarring",
      description: "",
      items: [],
    },

    contributingFactors: {
      eyebrow: "What Can Contribute",
      title: "Factors That May Affect Your Skin",
      description: "",
      items: [],
    },

    treatments: {
      eyebrow: "Treatment Options",
      title: "Treatments for Acne & Acne Scars",
      description:
        "Your treatment approach depends on your skin, the type of acne or scarring, and your individual needs.",
    },

    outcomes: {
      eyebrow: "Potential Outcomes",
      title: "What Treatment Can Help With",
      description: "",
      items: [],
    },

    journey: defaultJourney,

    faqs: [],

    cta: defaultCTA,
  },

  // ============================================================
  // 02. PIGMENTATION & MELASMA
  // ============================================================

  "pigmentation-melasma": {
    introduction: {
      eyebrow: "Understanding the Concern",
      title: "Understanding Pigmentation & Melasma",
      description: "",
      paragraphs: [],
    },

    types: {
      eyebrow: "Common Types",
      title: "Different Types of Pigmentation",
      description: "",
      items: [],
    },

    contributingFactors: {
      eyebrow: "What Can Contribute",
      title: "Factors That May Affect Pigmentation",
      description: "",
      items: [],
    },

    treatments: {
      eyebrow: "Treatment Options",
      title: "Treatments for Pigmentation & Melasma",
      description: "",
    },

    outcomes: {
      eyebrow: "Potential Outcomes",
      title: "What Treatment Can Help With",
      description: "",
      items: [],
    },

    journey: defaultJourney,

    faqs: [],

    cta: defaultCTA,
  },

  // ============================================================
  // 03. DARK SPOTS & SUN DAMAGE
  // ============================================================

  "dark-spots-sun-damage": {
    introduction: {
      eyebrow: "Understanding the Concern",
      title: "Understanding Dark Spots & Sun Damage",
      description: "",
      paragraphs: [],
    },

    types: {
      eyebrow: "Common Types",
      title: "Types of Dark Spots & Sun Damage",
      description: "",
      items: [],
    },

    contributingFactors: {
      eyebrow: "What Can Contribute",
      title: "Factors That May Affect Skin Discoloration",
      description: "",
      items: [],
    },

    treatments: {
      eyebrow: "Treatment Options",
      title: "Treatments for Dark Spots & Sun Damage",
      description: "",
    },

    outcomes: {
      eyebrow: "Potential Outcomes",
      title: "What Treatment Can Help With",
      description: "",
      items: [],
    },

    journey: defaultJourney,

    faqs: [],

    cta: defaultCTA,
  },

  // ============================================================
  // 04. WRINKLES & FINE LINES
  // ============================================================

  "wrinkles-fine-lines": {
    introduction: {
      eyebrow: "Understanding the Concern",
      title: "Understanding Wrinkles & Fine Lines",
      description: "",
      paragraphs: [],
    },

    types: {
      eyebrow: "Common Types",
      title: "Different Types of Facial Lines",
      description: "",
      items: [],
    },

    contributingFactors: {
      eyebrow: "What Can Contribute",
      title: "Factors That May Affect Skin Aging",
      description: "",
      items: [],
    },

    treatments: {
      eyebrow: "Treatment Options",
      title: "Treatments for Wrinkles & Fine Lines",
      description: "",
    },

    outcomes: {
      eyebrow: "Potential Outcomes",
      title: "What Treatment Can Help With",
      description: "",
      items: [],
    },

    journey: defaultJourney,

    faqs: [],

    cta: defaultCTA,
  },

  // ============================================================
  // 05. FACIAL SAGGING & LOSS OF VOLUME
  // ============================================================

  "facial-sagging-loss-of-volume": {
    introduction: {
      eyebrow: "Understanding the Concern",
      title: "Understanding Facial Sagging & Loss of Volume",
      description: "",
      paragraphs: [],
    },

    types: {
      eyebrow: "Common Signs",
      title: "How Facial Volume Changes May Appear",
      description: "",
      items: [],
    },

    contributingFactors: {
      eyebrow: "What Can Contribute",
      title: "Factors That May Affect Facial Structure",
      description: "",
      items: [],
    },

    treatments: {
      eyebrow: "Treatment Options",
      title: "Treatments for Facial Sagging & Loss of Volume",
      description: "",
    },

    outcomes: {
      eyebrow: "Potential Outcomes",
      title: "What Treatment Can Help With",
      description: "",
      items: [],
    },

    journey: defaultJourney,

    faqs: [],

    cta: defaultCTA,
  },

  // ============================================================
  // 06. DULL & UNEVEN SKIN
  // ============================================================

  "dull-uneven-skin": {
    introduction: {
      eyebrow: "Understanding the Concern",
      title: "Understanding Dull & Uneven Skin",
      description: "",
      paragraphs: [],
    },

    types: {
      eyebrow: "Common Signs",
      title: "How Dull & Uneven Skin May Appear",
      description: "",
      items: [],
    },

    contributingFactors: {
      eyebrow: "What Can Contribute",
      title: "Factors That May Affect Skin Appearance",
      description: "",
      items: [],
    },

    treatments: {
      eyebrow: "Treatment Options",
      title: "Treatments for Dull & Uneven Skin",
      description: "",
    },

    outcomes: {
      eyebrow: "Potential Outcomes",
      title: "What Treatment Can Help With",
      description: "",
      items: [],
    },

    journey: defaultJourney,

    faqs: [],

    cta: defaultCTA,
  },

  // ============================================================
  // 07. HAIR LOSS & THINNING
  // ============================================================

  "hair-loss-thinning": {
    introduction: {
      eyebrow: "Understanding the Concern",
      title: "Understanding Hair Loss & Thinning",
      description: "",
      paragraphs: [],
    },

    types: {
      eyebrow: "Common Signs",
      title: "Common Patterns of Hair Loss",
      description: "",
      items: [],
    },

    contributingFactors: {
      eyebrow: "What Can Contribute",
      title: "Factors That May Affect Hair Growth",
      description: "",
      items: [],
    },

    treatments: {
      eyebrow: "Treatment Options",
      title: "Treatments for Hair Loss & Thinning",
      description: "",
    },

    outcomes: {
      eyebrow: "Potential Outcomes",
      title: "What Treatment Can Help With",
      description: "",
      items: [],
    },

    journey: defaultJourney,

    faqs: [],

    cta: defaultCTA,
  },

  // ============================================================
  // 08. DANDRUFF & SCALP CONDITIONS
  // ============================================================

  "dandruff-scalp-conditions": {
    introduction: {
      eyebrow: "Understanding the Concern",
      title: "Understanding Dandruff & Scalp Conditions",
      description: "",
      paragraphs: [],
    },

    types: {
      eyebrow: "Common Conditions",
      title: "Different Scalp Concerns",
      description: "",
      items: [],
    },

    contributingFactors: {
      eyebrow: "What Can Contribute",
      title: "Factors That May Affect Scalp Health",
      description: "",
      items: [],
    },

    treatments: {
      eyebrow: "Treatment Options",
      title: "Treatments for Dandruff & Scalp Conditions",
      description: "",
    },

    outcomes: {
      eyebrow: "Potential Outcomes",
      title: "What Treatment Can Help With",
      description: "",
      items: [],
    },

    journey: defaultJourney,

    faqs: [],

    cta: defaultCTA,
  },

  // ============================================================
  // 09. UNWANTED HAIR
  // ============================================================

  "unwanted-hair": {
    introduction: {
      eyebrow: "Understanding the Concern",
      title: "Understanding Unwanted Hair",
      description: "",
      paragraphs: [],
    },

    types: {
      eyebrow: "Common Areas",
      title: "Areas Commonly Treated",
      description: "",
      items: [],
    },

    contributingFactors: {
      eyebrow: "Understanding Hair Growth",
      title: "Factors That May Affect Hair Growth",
      description: "",
      items: [],
    },

    treatments: {
      eyebrow: "Treatment Options",
      title: "Treatments for Unwanted Hair",
      description: "",
    },

    outcomes: {
      eyebrow: "Potential Outcomes",
      title: "What Treatment Can Help With",
      description: "",
      items: [],
    },

    journey: defaultJourney,

    faqs: [],

    cta: defaultCTA,
  },

  // ============================================================
  // 10. VITILIGO
  // ============================================================

  vitiligo: {
    introduction: {
      eyebrow: "Understanding the Concern",
      title: "Understanding Vitiligo",
      description: "",
      paragraphs: [],
    },

    types: {
      eyebrow: "Common Patterns",
      title: "How Vitiligo May Present",
      description: "",
      items: [],
    },

    contributingFactors: {
      eyebrow: "Understanding Vitiligo",
      title: "Factors Considered During Assessment",
      description: "",
      items: [],
    },

    treatments: {
      eyebrow: "Treatment Options",
      title: "Treatments for Vitiligo",
      description: "",
    },

    outcomes: {
      eyebrow: "Potential Outcomes",
      title: "What Treatment Can Help With",
      description: "",
      items: [],
    },

    journey: defaultJourney,

    faqs: [],

    cta: defaultCTA,
  },

  // ============================================================
  // 11. ECZEMA & DERMATITIS
  // ============================================================

  "eczema-dermatitis": {
    introduction: {
      eyebrow: "Understanding the Concern",
      title: "Understanding Eczema & Dermatitis",
      description: "",
      paragraphs: [],
    },

    types: {
      eyebrow: "Common Types",
      title: "Different Forms of Eczema & Dermatitis",
      description: "",
      items: [],
    },

    contributingFactors: {
      eyebrow: "What Can Contribute",
      title: "Factors That May Affect the Skin",
      description: "",
      items: [],
    },

    treatments: {
      eyebrow: "Treatment Options",
      title: "Treatments for Eczema & Dermatitis",
      description: "",
    },

    outcomes: {
      eyebrow: "Potential Outcomes",
      title: "What Treatment Can Help With",
      description: "",
      items: [],
    },

    journey: defaultJourney,

    faqs: [],

    cta: defaultCTA,
  },

  // ============================================================
  // 12. PSORIASIS
  // ============================================================

  psoriasis: {
    introduction: {
      eyebrow: "Understanding the Concern",
      title: "Understanding Psoriasis",
      description: "",
      paragraphs: [],
    },

    types: {
      eyebrow: "Common Types",
      title: "Different Forms of Psoriasis",
      description: "",
      items: [],
    },

    contributingFactors: {
      eyebrow: "Understanding the Condition",
      title: "Factors That May Affect Psoriasis",
      description: "",
      items: [],
    },

    treatments: {
      eyebrow: "Treatment Options",
      title: "Treatments for Psoriasis",
      description: "",
    },

    outcomes: {
      eyebrow: "Potential Outcomes",
      title: "What Treatment Can Help With",
      description: "",
      items: [],
    },

    journey: defaultJourney,

    faqs: [],

    cta: defaultCTA,
  },

  // ============================================================
  // 13. ROSACEA & FACIAL REDNESS
  // ============================================================

  "rosacea-facial-redness": {
    introduction: {
      eyebrow: "Understanding the Concern",
      title: "Understanding Rosacea & Facial Redness",
      description: "",
      paragraphs: [],
    },

    types: {
      eyebrow: "Common Signs",
      title: "How Rosacea & Facial Redness May Appear",
      description: "",
      items: [],
    },

    contributingFactors: {
      eyebrow: "What Can Contribute",
      title: "Factors That May Affect Facial Redness",
      description: "",
      items: [],
    },

    treatments: {
      eyebrow: "Treatment Options",
      title: "Treatments for Rosacea & Facial Redness",
      description: "",
    },

    outcomes: {
      eyebrow: "Potential Outcomes",
      title: "What Treatment Can Help With",
      description: "",
      items: [],
    },

    journey: defaultJourney,

    faqs: [],

    cta: defaultCTA,
  },

  // ============================================================
  // 14. SKIN INFECTIONS
  // ============================================================

  "skin-infections": {
    introduction: {
      eyebrow: "Understanding the Concern",
      title: "Understanding Skin Infections",
      description: "",
      paragraphs: [],
    },

    types: {
      eyebrow: "Common Types",
      title: "Different Types of Skin Infections",
      description: "",
      items: [],
    },

    contributingFactors: {
      eyebrow: "Understanding the Condition",
      title: "Factors Considered During Assessment",
      description: "",
      items: [],
    },

    treatments: {
      eyebrow: "Treatment Options",
      title: "Treatments for Skin Infections",
      description: "",
    },

    outcomes: {
      eyebrow: "Potential Outcomes",
      title: "What Treatment Can Help With",
      description: "",
      items: [],
    },

    journey: defaultJourney,

    faqs: [],

    cta: defaultCTA,
  },

  // ============================================================
  // 15. WARTS, MOLES & SKIN GROWTHS
  // ============================================================

  "warts-moles-skin-growths": {
    introduction: {
      eyebrow: "Understanding the Concern",
      title: "Understanding Warts, Moles & Skin Growths",
      description: "",
      paragraphs: [],
    },

    types: {
      eyebrow: "Common Growths",
      title: "Different Types of Skin Growths",
      description: "",
      items: [],
    },

    contributingFactors: {
      eyebrow: "Understanding Skin Growths",
      title: "What May Need to Be Assessed",
      description: "",
      items: [],
    },

    treatments: {
      eyebrow: "Treatment Options",
      title: "Treatments for Warts, Moles & Skin Growths",
      description: "",
    },

    outcomes: {
      eyebrow: "Potential Outcomes",
      title: "What Treatment Can Help With",
      description: "",
      items: [],
    },

    journey: defaultJourney,

    faqs: [],

    cta: defaultCTA,
  },

  // ============================================================
  // 16. SCARS & STRETCH MARKS
  // ============================================================

  "scars-stretch-marks": {
    introduction: {
      eyebrow: "Understanding the Concern",
      title: "Understanding Scars & Stretch Marks",
      description: "",
      paragraphs: [],
    },

    types: {
      eyebrow: "Common Types",
      title: "Different Types of Scars & Stretch Marks",
      description: "",
      items: [],
    },

    contributingFactors: {
      eyebrow: "What Can Contribute",
      title: "Factors That May Affect Scar Formation",
      description: "",
      items: [],
    },

    treatments: {
      eyebrow: "Treatment Options",
      title: "Treatments for Scars & Stretch Marks",
      description: "",
    },

    outcomes: {
      eyebrow: "Potential Outcomes",
      title: "What Treatment Can Help With",
      description: "",
      items: [],
    },

    journey: defaultJourney,

    faqs: [],

    cta: defaultCTA,
  },

  // ============================================================
  // 17. TATTOO REMOVAL
  // ============================================================

  "tattoo-removal": {
    introduction: {
      eyebrow: "Understanding the Concern",
      title: "Understanding Tattoo Removal",
      description: "",
      paragraphs: [],
    },

    types: {
      eyebrow: "Before Treatment",
      title: "What Can Affect Tattoo Removal",
      description: "",
      items: [],
    },

    contributingFactors: {
      eyebrow: "Treatment Considerations",
      title: "Factors That May Affect Results",
      description: "",
      items: [],
    },

    treatments: {
      eyebrow: "Treatment Options",
      title: "Treatments for Tattoo Removal",
      description: "",
    },

    outcomes: {
      eyebrow: "Potential Outcomes",
      title: "What Treatment Can Help With",
      description: "",
      items: [],
    },

    journey: defaultJourney,

    faqs: [],

    cta: defaultCTA,
  },

  // ============================================================
  // 18. STUBBORN FAT POCKETS
  // ============================================================

  "stubborn-fat-pockets": {
    introduction: {
      eyebrow: "Understanding the Concern",
      title: "Understanding Stubborn Fat Pockets",
      description: "",
      paragraphs: [],
    },

    types: {
      eyebrow: "Common Areas",
      title: "Areas Where Stubborn Fat May Appear",
      description: "",
      items: [],
    },

    contributingFactors: {
      eyebrow: "Understanding Body Contouring",
      title: "Factors Considered During Assessment",
      description: "",
      items: [],
    },

    treatments: {
      eyebrow: "Treatment Options",
      title: "Treatments for Stubborn Fat Pockets",
      description: "",
    },

    outcomes: {
      eyebrow: "Potential Outcomes",
      title: "What Treatment Can Help With",
      description: "",
      items: [],
    },

    journey: defaultJourney,

    faqs: [],

    cta: defaultCTA,
  },

  // ============================================================
  // 19. NAIL DISORDERS & INGROWN NAILS
  // ============================================================

  "nail-disorders-ingrown-nails": {
    introduction: {
      eyebrow: "Understanding the Concern",
      title: "Understanding Nail Disorders & Ingrown Nails",
      description: "",
      paragraphs: [],
    },

    types: {
      eyebrow: "Common Conditions",
      title: "Different Nail Concerns",
      description: "",
      items: [],
    },

    contributingFactors: {
      eyebrow: "What Can Contribute",
      title: "Factors That May Affect Nail Health",
      description: "",
      items: [],
    },

    treatments: {
      eyebrow: "Treatment Options",
      title: "Treatments for Nail Disorders & Ingrown Nails",
      description: "",
    },

    outcomes: {
      eyebrow: "Potential Outcomes",
      title: "What Treatment Can Help With",
      description: "",
      items: [],
    },

    journey: defaultJourney,

    faqs: [],

    cta: defaultCTA,
  },
};

export default concernDetails;
