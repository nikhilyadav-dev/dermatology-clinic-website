export const bookingConfig = {
  estimatedCompletionMinutes: 2,

  steps: [
    {
      id: "concern",
      number: "01",
      label: "Your Concern",
    },
    {
      id: "details",
      number: "02",
      label: "About You",
    },
    {
      id: "visit",
      number: "03",
      label: "Preferred Visit",
    },
    {
      id: "review",
      number: "04",
      label: "Review & Request",
    },
  ],

  confirmation: {
    title: "We've received your consultation request.",
    description:
      "Our clinic team will review your request and contact you to confirm your preferred date and time.",
  },
};
