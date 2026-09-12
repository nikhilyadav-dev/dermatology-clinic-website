import { contactData } from "@/data/contact";

import { ContactHero } from "@/components/contact/ContactHero";
import { QuickContact } from "@/components/contact/QuickContacts";
import { VisitClinic } from "@/components/contact/VisitClinic";
import { FindUs } from "@/components/contact/FindUs";
import { SendEnquiry } from "@/components/contact/SendEnquiry";

export default function Contact() {
  return (
    <main>
      {contactData.hero && <ContactHero hero={contactData.hero} />}
      {contactData.contact && <QuickContact contact={contactData.contact} />}
      {contactData.visit && <VisitClinic visit={contactData.visit} />}
      {contactData.findUs && <FindUs findUs={contactData.findUs} />}
      {contactData.enquiry && <SendEnquiry enquiry={contactData.enquiry} />}
    </main>
  );
}
