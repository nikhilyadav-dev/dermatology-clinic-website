export const contactData = {
  hero: {
    id: "hero",

    eyebrow: "Get in Touch",

    title: "Let's talk about your skin.",

    description:
      "Whether you have a specific skin concern, need guidance about a treatment, or simply want to understand your options, our team is here to help.",

    primaryCta: {
      label: "Book a Consultation",
      href: "/book-consultation",
    },

    secondaryCta: {
      label: "WhatsApp Us",
      href: "",
    },

    reassurance: "Call, message or visit us — we're here to help.",

    image: {
      src: "/front-image.jpg",
      alt: "",
    },
  },

  contact: {
    id: "quick-contact",

    eyebrow: "We're Here to Help",

    title: "Choose the way that works for you.",

    description:
      "Have a question or ready to get started? Connect with our clinic team through the option that's most convenient for you.",

    options: [
      {
        id: "call",
        title: "Call the Clinic",
        description:
          "Speak directly with our clinic team for appointments, treatment enquiries and general questions.",
        label: "Call Us",
        href: "tel:+916232734454",
      },

      {
        id: "whatsapp",
        title: "WhatsApp Us",
        description:
          "Prefer to message? Send us your question or appointment enquiry directly on WhatsApp.",
        label: "Chat on WhatsApp",
        href: "https://wa.me/916232734454",
      },

      {
        id: "email",
        title: "Email Us",
        description:
          "For general enquiries or information, you can also reach us by email.",
        label: "Send an Email",
        href: "mailto:YOUR_EMAIL@example.com",
      },
    ],
  },

  visit: {
    id: "visit-clinic",

    eyebrow: "Visit Shine Skin Clinic",

    title: "A comfortable place to begin your skin journey.",

    description:
      "Your consultation is an opportunity to sit down, discuss your concerns and understand what may be right for your skin. Find us at our clinic and plan your visit with ease.",

    clinic: {
      name: "Shine Skin Clinic",

      address: {
        line1: "Ward Number 40",
        line2: "Basantpur",
        city: "Rajnandgaon",
        state: "Chhattisgarh",
        postalCode: "491 441",
      },

      hours: [
        {
          days: "Monday – Saturday",
          time: "10:00 AM – 7:00 PM",
        },
        {
          days: "Sunday",
          time: "Closed",
        },
      ],

      image: {
        src: "/interioir.avif",
        alt: "Shine Skin Clinic",
      },

      directions: {
        label: "Get Directions",
        href: "https://www.google.com/maps",
      },
    },
  },

  findUs: {
    id: "find-us",

    eyebrow: "Find Us",

    title: "Easy to find. Easy to reach.",

    description:
      "Planning your visit to Shine Skin Clinic? Use the map below to find our location and get directions from wherever you are.",

    map: {
      embedUrl:
        "https://www.google.com/maps?ll=21.08363,81.02666&z=15&t=m&hl=en-GB&gl=US&mapclient=embed&cid=5171059070357010580&output=embed",
      directionsUrl: "",
    },

    location: {
      name: "Shine Skin Clinic",
      address: "Ward No 44 , Basantpur , Rajnandgaon, Chhattisgarh, 491441",
    },

    cta: {
      label: "Get Directions",
      href: "",
    },
  },

  enquiry: {
    id: "send-enquiry",

    eyebrow: "Send an Enquiry",

    title: "Have a question? We're happy to help.",

    description:
      "Tell us a little about what you need help with and our clinic team will get back to you.",

    form: {
      fields: [
        {
          id: "name",
          name: "name",
          label: "Your Name",
          type: "text",
          placeholder: "Enter your name",
          required: true,
        },
        {
          id: "phone",
          name: "phone",
          label: "Phone Number",
          type: "tel",
          placeholder: "Enter your phone number",
          required: true,
        },
        {
          id: "email",
          name: "email",
          label: "Email Address",
          type: "email",
          placeholder: "Enter your email address",
          required: false,
        },
        {
          id: "message",
          name: "message",
          label: "How Can We Help?",
          type: "textarea",
          placeholder: "Tell us briefly about your enquiry...",
          required: true,
        },
      ],

      submitLabel: "Send Enquiry",

      privacyNote: "Your details are used only to respond to your enquiry.",
    },

    alternativeContact: {
      text: "Prefer to speak directly?",
      label: "Book a Consultation",
      href: "/book-consultation",
    },
  },
};
