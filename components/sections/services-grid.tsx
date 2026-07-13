import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { ServiceCard } from "@/components/shared/service-card";
import { services } from "@/lib/data/services";

export function ServicesGrid({ limit }: { limit?: number }) {
  const list = limit ? services.slice(0, limit) : services;
  return (
    <section className="py-24 sm:py-32">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Our Services"
          title="Comprehensive dental care, all under one roof"
          description="From your child's first check-up to advanced restorative and cosmetic treatments, our specialist team covers every stage of your family's dental journey."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((service, i) => (
            <ServiceCard key={service.slug} service={service} index={i} />
          ))}
        </div>

        {limit && (
          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--turquoise)] px-8 py-3 text-sm font-semibold text-[var(--turquoise-dark)] transition-colors hover:bg-[var(--turquoise)] hover:text-white"
            >
              View All Services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
