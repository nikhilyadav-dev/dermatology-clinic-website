import concerns from "@/data/concern";
import treatments from "@/data/treatment";
import homepage from "@/data/home";
import treatmentGroups from "@/data/treatmentGroup";
// Generic helpers

export const getConcernBySlug = (slug) => {
  return concerns.find((concern) => concern.slug === slug);
};

export const getTreatmentBySlug = (slug) => {
  return treatments.find((treatment) => treatment.slug === slug);
};

// Homepage

export const getHomepageConcerns = () => {
  return homepage.concerns
    .map((slug) => getConcernBySlug(slug))
    .filter(Boolean);
};

export const getHomepageTreatments = () => {
  return homepage.treatments
    .map((slug) => getTreatmentBySlug(slug))
    .filter(Boolean);
};

// Concern → Treatments

export const getTreatmentsByConcern = (concernSlug) => {
  return treatments.filter((treatment) =>
    treatment.concerns.includes(concernSlug),
  );
};

// Treatment → Concerns

export const getConcernsByTreatment = (treatmentSlug) => {
  const treatment = getTreatmentBySlug(treatmentSlug);

  if (!treatment) return [];

  return treatment.concerns
    .map((concernSlug) => getConcernBySlug(concernSlug))
    .filter(Boolean);
};

// Treatment Groups

export const getTreatmentGroups = () => {
  return treatmentGroups.map((group) => ({
    ...group,

    items: group.items.map(getTreatmentBySlug).filter(Boolean),
  }));
};

export { concerns, treatments, homepage };
