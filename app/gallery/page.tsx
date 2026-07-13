import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { GalleryGrid } from "@/components/shared/gallery-grid";
import { AppointmentCta } from "@/components/sections/appointment-cta";
import { galleryItems } from "@/lib/data/gallery";
import { clinicImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Take a look inside Tuskaè — our reception, kids' area, treatment rooms, equipment, and the team behind every gentle smile.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Clinic Gallery"
        title="A space designed to feel nothing like a dental clinic"
        description="Bright interiors, a dedicated kids' corner, and modern equipment — take a look around."
        image={clinicImages.treatmentRoom}
      />

      <section className="py-24 sm:py-32">
        <div className="container-wide">
          <GalleryGrid items={galleryItems} />
        </div>
      </section>

      <AppointmentCta />
    </>
  );
}
