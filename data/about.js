export const about = {
  hero: {
    id: "hero",
    eyebrow: "Who We Are",

    title: "More than treatment. A more thoughtful way to care for your skin.",

    description:
      "Shine Skin Clinic was built around a simple belief: good dermatology begins with understanding the person, not just the concern. Every patient's skin has a history, a context and a story — and meaningful care begins by listening to all three.",

    doctor: {
      name: "Dr. Sugandh Gandhi",
      qualifications: "MD (Dermatology), DNB",
      role: "Dermatologist & Aesthetic Physician",
    },

    image: {
      src: "https://i.pinimg.com/1200x/c9/45/80/c94580837354b77a265ae8e009dfeae9.jpg",
      alt: "Dr. Sugandh Gandhi, Dermatologist & Aesthetic Physician",
    },

    statement: "Dermatology, approached personally.",

    primaryCta: {
      label: "Book a Consultation",
      href: "/contact",
    },
    secondaryCta: {
      label: "Call +91 62327 34454",
      href: "tel:+919516918966",
    },
  },

  philosophy: {
    id: "philosophy",
    eyebrow: "Our Philosophy",

    title:
      "Good skin care begins with understanding, not rushing to treatment.",

    description:
      "At Shine Skin Clinic, every treatment begins with understanding your skin, your concerns and what you hope to achieve. We believe good dermatology is not about doing more — it is about choosing what is right for you, with thoughtful recommendations, evidence-led care and realistic expectations.",

    principles: [
      {
        number: "01",
        title: "Listen First",
        shortTitle: "Understand before recommending.",
        description:
          "Your skin, concerns, history and goals all matter. We take the time to understand the bigger picture before suggesting a treatment.",
      },
      {
        number: "02",
        title: "Evidence-Led",
        shortTitle: "Recommend with a reason.",
        description:
          "Treatments should have a clear purpose. Our approach combines clinical knowledge with carefully considered recommendations suited to your individual needs.",
      },
      {
        number: "03",
        title: "Thoughtful Results",
        shortTitle: "Enhancement should still feel like you.",
        description:
          "Whether addressing a skin concern or exploring aesthetic treatment, the goal is considered care and balanced, natural-looking outcomes — never treatment for the sake of treatment.",
      },
    ],
  },

  credentials: {
    id: "credentials",

    eyebrow: "Credentials",

    title: "A strong clinical foundation behind every decision.",

    description:
      "Dr. Sugandh Gandhi combines specialised dermatological training with clinical experience across medical and aesthetic dermatology, bringing a thoughtful and evidence-led approach to patient care.",

    credentials: [
      {
        icon: "GraduationCap",
        title: "MD (Dermatology)",
        description: "Postgraduate specialisation in Dermatology.",
      },
      {
        icon: "Award",
        title: "Diplomate of National Board",
        description: "Advanced postgraduate qualification in dermatology.",
      },
      {
        icon: "Stethoscope",
        title: "Medical Dermatology",
        description:
          "Diagnosis and management of a wide range of skin, hair and nail concerns.",
      },
      {
        icon: "Sparkles",
        title: "Aesthetic Dermatology",
        description:
          "Personalised aesthetic care focused on balanced and natural-looking outcomes.",
      },
    ],

    statement: {
      title: "Clinical knowledge, personal attention.",
      description:
        "The aim is not simply to recommend a treatment, but to understand when it is appropriate, why it may help and how it fits into the patient's individual needs.",
    },
  },

  journey: {
    id: "journey",

    eyebrow: "Her Journey",

    title: "A journey shaped by medicine, experience and people.",

    description:
      "From medical training to specialised dermatology and the creation of Shine Skin Clinic, Dr. Sugandh Gandhi's journey has been shaped by continuous learning, clinical experience and a commitment to thoughtful patient care.",

    image: {
      src: "/shine-skin.avif",
      alt: "Dr. Sugandh Gandhi during a consultation at Shine Skin Clinic",
    },

    milestones: [
      {
        year: "2015",
        title: "Medical Foundation",
        description:
          "A strong foundation in medicine marked the beginning of her journey towards specialised dermatological care.",
      },
      {
        year: "2020",
        title: "Specialisation in Dermatology",
        description:
          "Advanced training in dermatology developed the clinical foundation for diagnosing and managing skin, hair and nail concerns.",
      },
      {
        year: "2023",
        title: "Growing Clinical Experience",
        description:
          "Clinical experience across dermatology and aesthetic care shaped a more individualised approach to understanding and treating patients.",
      },
      {
        year: "Today",
        title: "Building Shine Skin Clinic",
        description:
          "The journey evolved into creating a practice where clinical knowledge, thoughtful recommendations and personal attention come together.",
      },
    ],
  },

  experties: {
    id: "expertise",

    eyebrow: "Areas of Expertise",

    title: "Specialised care across skin, hair and aesthetic dermatology.",

    description:
      "Dr. Sugandh Gandhi brings together medical dermatology, hair care and aesthetic treatments to create personalised treatment plans based on each patient's concerns, skin, goals and individual needs.",

    areas: [
      {
        treatmentGroupId: "hair-scalp",

        number: "01",

        title: "Hair & Scalp",

        description:
          "Personalised care for hair loss, thinning and scalp concerns, with treatment approaches selected according to the underlying concern and individual needs.",

        image: {
          src: "https://i.pinimg.com/736x/0e/0a/bf/0e0abf8c8ccd63017eb4d4d49596dbec.jpg",
          alt: "Dr. Sugandh Gandhi providing medical dermatology care",
        },

        treatmentGroups: ["hair-scalp"],

        treatments: [
          "hair-transplant",
          "hair-loss-treatment",
          "hair-gfc-prp",
          "drs-1512",
          "regenera-activa",
        ],
      },

      {
        treatmentGroupId: "acne-scar-resurfacing",

        number: "02",

        title: "Acne, Scars & Resurfacing",

        description:
          "Focused treatment for acne scarring, uneven texture and selected skin concerns using personalised resurfacing and regenerative approaches.",

        image: {
          src: "https://i.pinimg.com/1200x/77/86/b8/7786b8b7c1e7d4371215c67ac2631323.jpg",
          alt: "Dr. Sugandh Gandhi providing medical dermatology care",
        },

        treatmentGroups: ["acne-scar-resurfacing"],

        treatments: [
          "acne-scar-reduction",
          "dermapen",
          "face-prp",
          "fractional-co2",
          "mnrf-treatment",
        ],
      },

      {
        treatmentGroupId: "injectables-lifting",

        number: "03",

        title: "Facial Aesthetics & Lifting",

        description:
          "Thoughtful aesthetic treatments designed to enhance facial features, restore volume and support firmer, balanced and natural-looking results.",

        image: {
          src: "https://i.pinimg.com/736x/5f/0a/da/5f0ada1b104d7bf4b6045f37db5784c2.jpg",
          alt: "Aesthetic dermatology consultation at Shine Skin Clinic",
        },

        treatmentGroups: ["injectables-lifting", "laser-light"],

        treatments: [
          "dermal-fillers",
          "pdrn-treatment",
          "skin-booster",
          "thread-lifting",
          "hifu-wrinkle-one",
        ],
      },

      {
        treatmentGroupId: "peels-pigmentation",

        number: "04",

        title: "Pigmentation & Skin Rejuvenation",

        description:
          "Personalised approaches to pigmentation, uneven skin tone, texture and overall skin quality using carefully selected rejuvenation and pigmentation treatments.",

        image: {
          src: "https://i.pinimg.com/736x/f4/a3/e5/f4a3e504fe9ef8e20ab8e79752a7f016.jpg",
          alt: "Skin rejuvenation treatment at Shine Skin Clinic",
        },

        treatmentGroups: [
          "peels-pigmentation",
          "skin-rejuvenation",
          "laser-light",
        ],

        treatments: [
          "carbon-laser",
          "chemical-peel",
          "cosmelan-treatment",
          "dermamelan-treatment",
          "glutathione-skin-lightening",
          "hydra-facial",
          "medifacial",
          "ipl-treatment",
        ],
      },

      {
        treatmentGroupId: "dermatologic-surgery",

        number: "05",

        title: "Advanced & Regenerative Dermatology",

        description:
          "Advanced treatment approaches for selected dermatological concerns, including regenerative therapies, vitiligo care and minor dermatological procedures.",

        image: {
          src: "https://i.pinimg.com/736x/0e/0a/bf/0e0abf8c8ccd63017eb4d4d49596dbec.jpg",
          alt: "Advanced dermatological treatment at Shine Skin Clinic",
        },

        treatmentGroups: ["regenerative", "vitiligo", "dermatologic-surgery"],

        treatments: [
          "exosomes-treatment",
          "excimer",
          "nbuvb-therapy",
          "surgery",
          "cyst-surgery",
          "earlobe-surgery",
          "nail-surgery",
        ],
      },
    ],
  },

  team: {
    id: "team",

    eyebrow: "Our Team",

    title: "The people behind your care.",

    description:
      "Behind every consultation and treatment is a team that works together to make your experience feel professional, comfortable and personal.",

    image: {
      src: "/team.jpg",
      alt: "The Shine Skin Clinic team",
    },

    imageCaption: "The team at Shine Skin Clinic",

    statement: {
      title: "Good care is a team effort.",

      description:
        "From your first interaction with the clinic to your consultation, treatment and follow-up, every member of our team plays a part in creating a thoughtful patient experience.",
    },
  },

  patientReviews: {
    id: "patient-reviews",

    eyebrow: "Patient Reviews",

    title: "Trusted by patients, one experience at a time.",

    description:
      "Every patient's experience is different. These reviews reflect the care, attention and trust patients have experienced at Shine Skin Clinic.",

    rating: {
      value: 5.0,
      max: 5,
      label: "Google Rating",
      reviewCount: 1247,
    },

    reviews: [
      {
        id: "review-01",
        author: {
          name: "Priya Sharma",
          image: "",
        },
        rating: 5,
        text: "I had a wonderful experience at Shine Skin Clinic. Dr. Sugandh Gandhi took the time to understand my concerns and explained the treatment options clearly. The entire experience felt comfortable and personalised.",
        date: "2 months ago",
        source: "Google",
      },

      {
        id: "review-02",
        author: {
          name: "Ananya Verma",
          image: "",
        },
        rating: 5,
        text: "Very professional and caring experience. Dr. Gandhi was patient, explained everything in detail and made sure I understood the treatment before proceeding. I would definitely recommend the clinic.",
        date: "3 months ago",
        source: "Google",
      },

      {
        id: "review-03",
        author: {
          name: "Rahul Mehta",
          image: "",
        },
        rating: 5,
        text: "The consultation was detailed and reassuring. I really appreciated the personalised approach and the fact that everything was explained without rushing. The clinic team was also very welcoming.",
        date: "4 months ago",
        source: "Google",
      },
      {
        id: "review-04",
        author: {
          name: "Priya Sharma",
          image: "",
        },
        rating: 5,
        text: "I had a wonderful experience at Shine Skin Clinic. Dr. Sugandh Gandhi took the time to understand my concerns and explained the treatment options clearly. The entire experience felt comfortable and personalised.",
        date: "2 months ago",
        source: "Google",
      },
      {
        id: "review-05",
        author: {
          name: "Ananya Verma",
          image: "",
        },
        rating: 5,
        text: "Very professional and caring experience. Dr. Gandhi was patient, explained everything in detail and made sure I understood the treatment before proceeding. I would definitely recommend the clinic.",
        date: "3 months ago",
        source: "Google",
      },
    ],

    cta: {
      label: "Read All Reviews on Google",
      href: "",
    },
  },
};
