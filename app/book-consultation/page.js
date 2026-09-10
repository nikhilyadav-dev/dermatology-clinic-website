import { bookingConfig } from "@/data/booking/config";
import { heroDetails } from "@/data/booking/hero";

import { BookingHero } from "@/components/booking/Hero";
import BookingForm from "@/components/booking/BookingForm";

export default function BookConsultationPage() {
  return (
    <main>
      <BookingHero hero={heroDetails} />
      <BookingForm />
    </main>
  );
}
