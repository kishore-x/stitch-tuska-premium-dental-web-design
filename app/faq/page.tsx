import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { AppointmentCta } from "@/components/sections/appointment-cta";
import { faqs } from "@/lib/data/faqs";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers to common questions about visiting Tuskaè, our treatments, insurance, and appointment policies.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Answers before you even have to ask"
        description="Still have a question? Reach out to our team directly on our contact page."
      />
      <FaqAccordion items={faqs} title="Frequently Asked Questions" eyebrow="Support" />
      <AppointmentCta />
    </>
  );
}
