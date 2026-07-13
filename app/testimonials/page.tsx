import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { TestimonialCard } from "@/components/shared/testimonial-card";
import { AppointmentCta } from "@/components/sections/appointment-cta";
import { testimonials } from "@/lib/data/testimonials";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "Read what families and patients say about their experience at Tuskaè dental clinic.",
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title="Loved by families across the city"
        description="Real reviews from real patients — pediatric visits, implants, orthodontics, and everything in between."
      />

      <section className="py-24 sm:py-32">
        <div className="container-wide grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} index={i} />
          ))}
        </div>
      </section>

      <AppointmentCta />
    </>
  );
}
