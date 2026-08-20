// import { AnimatedMarqueeHero } from "@/components/ui/hero";

// // NOTE: these are placeholder Unsplash stock photos, standing in until you have
// // real clinic/treatment photos. Do NOT present strangers' stock photos as patient
// // results — swap these for your own consented photography before launch.
// const DEMO_IMAGES = [
//   "https://i.pinimg.com/1200x/1d/b2/56/1db256909a04196744b5742db87a070e.jpg",
//   "https://i.pinimg.com/1200x/07/5b/46/075b460ea13d40e9823c36ecb005ff32.jpg",
//   "https://i.pinimg.com/1200x/0a/99/86/0a9986c92d6ac9c39c32a437515b059f.jpg",
//   "https://i.pinimg.com/736x/33/a6/1c/33a61ca79365f16b5c3cf08518ddea78.jpg",
//   "https://i.pinimg.com/736x/ef/b5/2d/efb52d59ba93de666d61aecf8ffd856e.jpg",
//   "https://i.pinimg.com/1200x/16/b7/b7/16b7b7241b2a7374df44a8b91bd5693f.jpg",
// ];

// export default function MarqueeHeroSection() {
//   return (
//     <AnimatedMarqueeHero
//       tagline="Dermatologist-led skin & aesthetic care"
//       title={
//         <>
//           Healthy Skin.
//           <br />
//           Honest Care.
//         </>
//       }
//       description="Dr. Sugandh Gandhi blends dermatological science with a personalized approach — treating your skin, not just your symptoms."
//       ctaText="Book Appointment"
//       images={DEMO_IMAGES}
//     />
//   );
// }

import { AnimatedMarqueeHero } from "@/components/ui/hero";
import TestimonialsSection from "@/components/ui/testimonials-6";

// Placeholder Unsplash photos — swap for your own consented clinic/treatment
// photography before launch. Do not present stock photos of strangers as
// patient results.
const CLINIC_IMAGES = [
  "https://i.pinimg.com/1200x/1d/b2/56/1db256909a04196744b5742db87a070e.jpg",
  "https://i.pinimg.com/1200x/07/5b/46/075b460ea13d40e9823c36ecb005ff32.jpg",
  "https://i.pinimg.com/1200x/0a/99/86/0a9986c92d6ac9c39c32a437515b059f.jpg",
  "https://i.pinimg.com/736x/33/a6/1c/33a61ca79365f16b5c3cf08518ddea78.jpg",
  "https://i.pinimg.com/736x/ef/b5/2d/efb52d59ba93de666d61aecf8ffd856e.jpg",
  "https://i.pinimg.com/1200x/16/b7/b7/16b7b7241b2a7374df44a8b91bd5693f.jpg",
];

export default function MarqueeHeroSection() {
  return (
    <>
      <AnimatedMarqueeHero
        tagline="Dermatologist-led skin & aesthetic care"
        lines={["Healthy Skin.", "Honest Care."]}
        signature="Let your skin speak"
        description="Dr. Sugandh Gandhi blends dermatological science with a personalized approach — treating your skin, not just your symptoms."
        primaryCta={{ label: "Book Appointment", href: "#book" }}
        secondaryCta={{ label: "Explore Treatments", href: "#treatments" }}
        stats={[
          // placeholders — replace with Dr. Gandhi's real figures
          { value: "10+", label: "Years Experience" },
          { value: "5000+", label: "Patients Treated" },
          { value: "20+", label: "Advanced Treatments" },
        ]}
        marqueeLabel=""
        images={CLINIC_IMAGES}
      />
      <TestimonialsSection />
    </>
  );
}
