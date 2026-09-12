// Treatment
// │
// ├── slug
// ├── name
// ├── category
// │
// ├── hero                    required
// ├── snapshot                required
// ├── about                   required
// ├── treatmentAreas          optional
// ├── whoIsItFor              optional
// ├── howItWorks              optional
// ├── whatToExpect            optional
// ├── dermatologist           optional
// ├── relatedTreatments       optional
// ├── faqs                    optional
// └── finalCta                required

export const dermatologistDetails = {
  eyebrow: "Meet Your Dermatologist",

  name: "Dr. Sugandh Gandhi",
  role: "Dermatologist",

  image:
    "https://i.pinimg.com/1200x/c9/45/80/c94580837354b77a265ae8e009dfeae9.jpg",

  introduction:
    "With a personalised approach to dermatology and aesthetic care, Dr. Sugandh Gandhi focuses on understanding each patient's concerns and creating treatment plans that feel thoughtful, balanced and natural.",

  stats: [
    {
      value: "10+",
      label: "Years Experience",
    },
    {
      value: "4.5/5",
      label: "Patient Rating",
    },
    {
      value: "12K+",
      label: "Patients Consulted",
    },
  ],

  links: {
    profile: {
      label: "Know More About Her",
      href: "/about",
    },
    consultation: {
      label: "Book Consultation",
      href: "/contact",
    },
  },
};

import { hairTransplant } from "./hair-transplant";
import { hairLossTreatment } from "./hair-loss-tratment";
import { hairGfcPrp } from "./hair-gfc-prp";
import { drs1512 } from "./drs-1512";
import { regeneraActiva } from "./regenera-active";

import { acneScarReduction } from "./acne-scar-reduction";
import { dermapen } from "./dermapen";
import { facePrp } from "./face-prp";
import { fractionalCo2 } from "./fractional-co2";
import { mnrfTreatment } from "./mnrf-treatment";

import { dermalFillers } from "./dermaFillers";
import { lipolysisInjection } from "./lipolysis-injection";
import { pdrnTreatment } from "./pdrn-treatments";
import { skinBooster } from "./skin-booster";
import { threadLifting } from "./thread-lifting";

import { hifuWrinkleOne } from "./hifu-wrinkle-one";
import { iplTreatment } from "./ipl-treatment";
import { laserHairReduction } from "./laser-hair-reduction";
import { tattooRemoval } from "./tattoo-removal";

import { carbonLaser } from "./carbon-laser";
import { chemicalPeel } from "./chemical-peel";
import { cosmelanTreatment } from "./cosmelan-treatment";
import { dermamelanTreatment } from "./dermamelan-treatment";

import { glutathioneSkinLightening } from "./glutathione-skin-lightening";
import { hydraFacial } from "./hydra-facial";
import { medifacial } from "./medifacial";

import { excimer } from "./excimer";
import { nbuvbTherapy } from "./nbuvb-therapy";
import { vitiligoSurgery } from "./vitiligo-surgery";

import { exosomesTreatment } from "./exosomes-treatment";

import { cystSurgery } from "./cyst-surgery";
import { earlobeSurgery } from "./earlobe-surgery";
import { nailSurgery } from "./nail-surgery";

export const treatmentsDetails = {
  [hairTransplant.slug]: hairTransplant,
  [hairLossTreatment.slug]: hairLossTreatment,
  [hairGfcPrp.slug]: hairGfcPrp,
  [drs1512.slug]: drs1512,
  [regeneraActiva.slug]: regeneraActiva,

  [acneScarReduction.slug]: acneScarReduction,
  [dermapen.slug]: dermapen,
  [facePrp.slug]: facePrp,
  [fractionalCo2.slug]: fractionalCo2,
  [mnrfTreatment.slug]: mnrfTreatment,

  [dermalFillers.slug]: dermalFillers,
  [lipolysisInjection.slug]: lipolysisInjection,
  [pdrnTreatment.slug]: pdrnTreatment,
  [skinBooster.slug]: skinBooster,
  [threadLifting.slug]: threadLifting,

  [hifuWrinkleOne.slug]: hifuWrinkleOne,
  [iplTreatment.slug]: iplTreatment,
  [laserHairReduction.slug]: laserHairReduction,
  [tattooRemoval.slug]: tattooRemoval,

  [carbonLaser.slug]: carbonLaser,
  [chemicalPeel.slug]: chemicalPeel,
  [cosmelanTreatment.slug]: cosmelanTreatment,
  [dermamelanTreatment.slug]: dermamelanTreatment,

  [glutathioneSkinLightening.slug]: glutathioneSkinLightening,
  [hydraFacial.slug]: hydraFacial,
  [medifacial.slug]: medifacial,

  [excimer.slug]: excimer,
  [nbuvbTherapy.slug]: nbuvbTherapy,
  [vitiligoSurgery.slug]: vitiligoSurgery,

  [exosomesTreatment.slug]: exosomesTreatment,

  [cystSurgery.slug]: cystSurgery,
  [earlobeSurgery.slug]: earlobeSurgery,
  [nailSurgery.slug]: nailSurgery,
};
