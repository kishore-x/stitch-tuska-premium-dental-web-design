import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { PlaceholderImage } from "@/components/shared/placeholder-image";
import { ServiceCard } from "@/components/shared/service-card";
import { AppointmentCta } from "@/components/sections/appointment-cta";
import { Button } from "@/components/ui/button";
import { iconMap } from "@/components/shared/icon-map";
import { services, getServiceBySlug } from "@/lib/data/services";
import { serviceImageFor } from "@/lib/images";
import { siteConfig } from "@/lib/site-config";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);
  const Icon = iconMap[service.icon];
  const serviceIndex = services.findIndex((s) => s.slug === service.slug);

  return (
    <>
      <section className="relative overflow-hidden bg-[var(--ink)] pb-20 pt-40 sm:pt-48">
        <div className="absolute inset-0 bg-noise opacity-30" aria-hidden />
        <div className="container-wide relative grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--turquoise)]/20 text-[var(--turquoise)]">
              <Icon className="h-6 w-6" strokeWidth={1.75} />
            </span>
            <h1 className="text-balance font-heading text-4xl font-medium text-white sm:text-5xl">
              {service.title}
            </h1>
            <p className="mt-5 max-w-lg text-balance text-white/70">{service.shortDescription}</p>
            <Button
              size="lg"
              className="mt-8 rounded-full bg-[var(--turquoise)] px-8 text-white hover:bg-[var(--turquoise-dark)]"
              render={
                <a href={siteConfig.whatsappHref} target="_blank" rel="noopener noreferrer">
                  Inquire via WhatsApp
                </a>
              }
            />
          </div>
          <PlaceholderImage
            src={service.image.startsWith("/images/people/") ? service.image : serviceImageFor(serviceIndex)}
            label={service.title}
            objectPosition={service.imagePosition ?? "center 25%"}
            className="aspect-square lg:aspect-[4/3] max-h-[380px] w-full rounded-[2rem] object-cover"
          />
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="container-wide grid grid-cols-1 gap-16 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="font-heading text-3xl text-[var(--ink)]">Overview</h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--ink-muted)]">{service.description}</p>
          </div>
          <div>
            <div className="rounded-3xl border border-[var(--border)] bg-[var(--cream)] p-8">
              <h3 className="font-heading text-xl text-[var(--ink)]">What&rsquo;s Included</h3>
              <ul className="mt-5 space-y-3">
                {service.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3 text-sm text-[var(--ink-muted)]">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--turquoise-dark)]" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 sm:py-32">
        <div className="container-wide">
          <div className="flex items-end justify-between">
            <h2 className="font-heading text-3xl text-[var(--ink)]">Related Services</h2>
            <Link href="/services" className="hidden items-center gap-1.5 text-sm font-semibold text-[var(--turquoise-dark)] sm:flex">
              View all <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((s, i) => (
              <ServiceCard key={s.slug} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      <AppointmentCta />
    </>
  );
}
