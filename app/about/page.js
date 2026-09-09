import { about } from "@/data/about";

import { AboutHero } from "@/components/about/AboutHero";
import { PhilosophySection } from "@/components/about/AboutPhilosophy";
import { CredentialsSection } from "@/components/about/AboutCredentials";
import { Journey } from "@/components/about/AboutJourney";
import { Expertise } from "@/components/about/AboutExperties";
import { Team } from "@/components/about/AboutTeam";
import { PatientReviewsSection } from "@/components/about/PatientReviewsSection";

export default function AboutPage() {
  return (
    <main>
      {about.hero && <AboutHero hero={about.hero} />}
      {about.philosophy && <PhilosophySection philosophy={about.philosophy} />}
      {about.credentials && (
        <CredentialsSection credentials={about.credentials} />
      )}
      {about.journey && <Journey journey={about.journey} />}
      {about.experties && <Expertise expertise={about.experties} />}
      {about.team && <Team team={about.team} />}
      {<PatientReviewsSection reviews={about.patientReviews} />}
    </main>
  );
}
