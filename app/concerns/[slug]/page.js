import { notFound } from "next/navigation";
import { concernDetails } from "@/data/concernsDetails/index";
import concerns from "@/data/concern";

import { ConcernHero } from "@/components/concerns/ConcernHero";
import { ConcernOverview } from "@/components/concerns/ConcernOverview";
import { ConcernTypes } from "@/components/concerns/ConcernTypes";
import { WhenToSeekCare } from "@/components/concerns/Considerations";
import { RelatedTreatments } from "@/components/concerns/RelatedTreatments";
import { TreatmentJourney } from "@/components/concerns/Journey";
import { FAQSection } from "@/components/concerns/FaqSection";
import { CTASection } from "@/components/common/CTASection";

export function generateStaticParams() {
  return concerns.map((c) => ({ slug: c.slug }));
}

export default async function ConcernPage({ params }) {
  const { slug } = await params;
  const details = concernDetails[slug];
  if (!details) notFound();

  return (
    <main className="w-full">
      {details.hero && <ConcernHero hero={details.hero} />}
      {details.overview && <ConcernOverview overview={details.overview} />}
      {details.types && <ConcernTypes types={details.types} />}
      {details.considerations && (
        <WhenToSeekCare considerations={details.considerations} />
      )}
      {details.treatments && (
        <RelatedTreatments treatments={details.treatments} slug={slug} />
      )}
      {details.journey && <TreatmentJourney journey={details.journey} />}
      {details.faqs?.length > 0 && <FAQSection faqs={details.faqs} />}
      {details.finalCTA && <CTASection cta={details.finalCTA} />}
    </main>
  );
}
