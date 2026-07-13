import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { ServiceCard } from "@/components/shared/service-card";
import { AppointmentCta } from "@/components/sections/appointment-cta";
import { services } from "@/lib/data/services";
import { clinicImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Tuskaè's full range of dental services — from pediatric dentistry and orthodontics to implants, cosmetic dentistry, and emergency care.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Comprehensive dental care for every stage of life"
        description="Eleven specialized services delivered by a team trained to make every visit comfortable, precise, and reassuring."
        image={clinicImages.equipment}
      />

      <section className="py-24 sm:py-32">
        <div className="container-wide grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard key={service.slug} service={service} index={i} />
          ))}
        </div>
      </section>

      <AppointmentCta />
    </>
  );
}
