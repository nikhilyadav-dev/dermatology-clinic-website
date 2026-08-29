import { AnimatedMarqueeHero } from "@/components/ui/animated-marquee-hero";
import { TestimonialsSection } from "@/components/home/TestimonilasSection";
import { AboutDoctorSection } from "@/components/home/AboutSection";
import { StatsSection } from "@/components/home/StatusSection";
import { ConcernsSection } from "@/components/home/ConcernsSection";
import { FAQSection } from "@/components/home/FaqSection";
import { TreatmentsSection } from "@/components/home/TretmentSection";
import { CTASection } from "@/components/home/CTASection";
import { ContactSection } from "@/components/home/ContactSection";

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
    <main>
      <AnimatedMarqueeHero
        tagline="Dermatologist-led skin & aesthetic care"
        lines={["Healthy Skin.", "Honest Care."]}
        signature="Let your skin speak"
        description="Dr. Sugandh Gandhi blends dermatological science with a personalized approach — treating your skin, not just your symptoms."
        primaryCta={{ label: "Book Appointment", href: "#book" }}
        secondaryCta={{ label: "Explore Treatments", href: "#treatments" }}
        stats={[
          { value: "10+", label: "Years Experience" },
          { value: "5000+", label: "Patients Treated" },
          { value: "20+", label: "Advanced Treatments" },
        ]}
        marqueeLabel=""
        images={CLINIC_IMAGES}
      />
      <AboutDoctorSection />
      <StatsSection />
      <ConcernsSection />
      <TreatmentsSection />
      <TestimonialsSection />
      <ContactSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}
