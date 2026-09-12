import { notFound } from "next/navigation";
import { treatmentsDetails } from "@/data/treatmentsDetails/index";
import { dermatologistDetails } from "@/data/treatmentsDetails/index";

import { TreatmentHero } from "@/components/treatments/TreatmentHero";
import { TreatmentSnapshot } from "@/components/treatments/TratmentSnapshot";
import { TreatmentAbout } from "@/components/treatments/TratmentAbout";
import { TreatmentAreas } from "@/components/treatments/TreatmentAreas";
import { WhoIsItFor } from "@/components/treatments/TreatmentWhoIsFor";
import { HowItWorks } from "@/components/treatments/TreatmentHowItWorks";
import { WhatToExpect } from "@/components/treatments/TreatmentWhatToExpect";
import { Dermatologist } from "@/components/treatments/Dermatologist";
import { RelatedTreatments } from "@/components/treatments/RelatedTratments";
import { FAQSection } from "@/components/treatments/FaqSection";
import { CTASection } from "@/components/common/CTASection";

export default async function TreatmentPage({ params }) {
  const { slug } = await params;
  const details = treatmentsDetails[slug];
  if (!details) notFound();

  return (
    <main className="w-full">
      {details.hero && <TreatmentHero hero={details.hero} />}
      {details.snapshot && <TreatmentSnapshot snapshot={details.snapshot} />}
      {details.about && <TreatmentAbout about={details.about} />}
      {details.treatmentAreas?.length > 0 && (
        <TreatmentAreas treatmentAreas={details.treatmentAreas} />
      )}
      {details.whoIsItFor && <WhoIsItFor whoIsItFor={details.whoIsItFor} />}
      {details.howItWorks && <HowItWorks howItWorks={details.howItWorks} />}
      {details.whatToExpect && (
        <WhatToExpect whatToExpect={details.whatToExpect} />
      )}
      {dermatologistDetails && (
        <Dermatologist dermatologist={dermatologistDetails} />
      )}
      {details.relatedTreatments?.length > 0 && (
        <RelatedTreatments relatedTreatments={details.relatedTreatments} />
      )}
      {details.faqs?.length > 0 && <FAQSection faqs={details.faqs} />}
      {details.finalCTA && <CTASection cta={details.finalCTA} />}
    </main>
  );
}
