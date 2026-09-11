import { clinicData } from "@/data/clinic";

import { ClinicHero } from "@/components/clinic/ClinicHero";
import ClinicGallery from "@/components/clinic/ClinicGallery";
import FeaturedTechnology from "@/components/clinic/FeaturedTechnology";
import YourComfort from "@/components/clinic/YourComfort";

export default function ClinicPage() {
  return (
    <main>
      <ClinicHero hero={clinicData.hero} />
      <ClinicGallery gallery={clinicData.clinicGallery} />
      <FeaturedTechnology technology={clinicData.featuredTechnology} />
      <YourComfort comfort={clinicData.comfort} />
    </main>
  );
}
