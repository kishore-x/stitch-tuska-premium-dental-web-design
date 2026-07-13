import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { TrustStats } from "@/components/sections/trust-stats";
import { AboutTeaser } from "@/components/sections/about-teaser";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { ServicesGrid } from "@/components/sections/services-grid";
import { PediatricExperience } from "@/components/sections/pediatric-experience";
import { Technology } from "@/components/sections/technology";
import { DoctorTeaser } from "@/components/sections/doctor-teaser";
import { TestimonialsPreview } from "@/components/sections/testimonials-preview";
import { AppointmentCta } from "@/components/sections/appointment-cta";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { faqs } from "@/lib/data/faqs";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Premium pediatric and comprehensive dental care in Kanyakumari. Gentle, evidence-based, child-centered dentistry led by Dr. Malavika at Tuskaè.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStats />
      <AboutTeaser />
      <WhyChooseUs />
      <ServicesGrid limit={6} />
      <PediatricExperience />
      <Technology />
      <DoctorTeaser />
      <TestimonialsPreview />
      <AppointmentCta />
      <FaqAccordion items={faqs} initialCount={5} />
    </>
  );
}
