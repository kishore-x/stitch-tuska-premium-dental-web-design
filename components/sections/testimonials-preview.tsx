"use client";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { SectionHeading } from "@/components/shared/section-heading";
import { TestimonialCard } from "@/components/shared/testimonial-card";
import { testimonials } from "@/lib/data/testimonials";

export function TestimonialsPreview() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--aqua)]/25 via-transparent to-transparent" aria-hidden />
      <div className="container-wide relative">
        <SectionHeading
          eyebrow="Testimonials"
          title="Loved by families across the city"
        />

        <Carousel opts={{ align: "start", loop: true }} className="mt-16">
          <CarouselContent>
            {testimonials.map((testimonial, i) => (
              <CarouselItem key={testimonial.name} className="sm:basis-1/2 lg:basis-1/3">
                <TestimonialCard testimonial={testimonial} index={i} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-8 flex justify-center gap-4">
            <CarouselPrevious className="static translate-y-0 border-[var(--turquoise)] text-[var(--turquoise-dark)]" />
            <CarouselNext className="static translate-y-0 border-[var(--turquoise)] text-[var(--turquoise-dark)]" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
