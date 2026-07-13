import type { Metadata } from "next";
import { Quote, GraduationCap, Stethoscope, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { PlaceholderImage } from "@/components/shared/placeholder-image";
import { Button } from "@/components/ui/button";
import { AppointmentCta } from "@/components/sections/appointment-cta";
import { doctor } from "@/lib/data/doctor";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About Dr. Malavika",
  description:
    "Meet Dr. Malavika, Lead Clinician & Pedodontist at Tuskaè — a pediatric dentist with over 12 years of clinical excellence in child-centered oral healthcare.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow={doctor.title} title={`Meet ${doctor.name}`} />

      <section className="py-24 sm:py-32">
        <div className="container-wide grid grid-cols-1 items-start gap-20 lg:grid-cols-[5fr_7fr]">
          {/* Image column */}
          <div className="lg:sticky lg:top-28">
            <div className="relative">
              <PlaceholderImage
                src={doctor.image}
                label={`${doctor.name} — ${doctor.title}`}
                className="aspect-[3/4] w-full rounded-2xl shadow-2xl"
              />
              <div className="absolute bottom-6 right-6 rounded-xl bg-[var(--turquoise)] px-6 py-5 text-white shadow-xl">
                <p className="font-heading text-2xl leading-tight">{doctor.yearsBadge}</p>
                <p className="text-xs uppercase tracking-widest opacity-80">{doctor.yearsSubtitle}</p>
              </div>
            </div>

            <div className="relative mt-10 overflow-hidden rounded-2xl bg-[var(--cream)] p-10">
              <Quote className="absolute left-4 top-4 h-16 w-16 text-[var(--turquoise)]/10" />
              <p className="relative font-heading text-lg lg:text-xl italic leading-relaxed text-[var(--turquoise-dark)]">
                &ldquo;{doctor.quote}&rdquo;
              </p>
              <p className="relative mt-6 text-xs sm:text-sm font-semibold uppercase tracking-widest text-[var(--gold)]">
                — {doctor.name}
              </p>
            </div>
          </div>

          {/* Content column */}
          <div className="space-y-16">
            <div className="space-y-6 text-base leading-relaxed text-[var(--ink-muted)]">
              {doctor.bioParagraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>

            <div className="grid grid-cols-1 gap-12 border-t border-[var(--border)] pt-8 md:grid-cols-2">
              <div className="space-y-6">
                <h4 className="flex items-center gap-2 border-b border-[var(--border)] pb-3 text-xs font-semibold uppercase tracking-widest text-[var(--turquoise-dark)]">
                  <GraduationCap className="h-4 w-4 text-[var(--gold)]" />
                  Education &amp; Training
                </h4>
                <ul className="space-y-5">
                  {doctor.education.map((item) => (
                    <li key={item.title} className="flex items-start gap-4">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--turquoise-dark)]/60" />
                      <div>
                        <p className="mb-1 text-sm font-semibold text-[var(--ink)]">{item.title}</p>
                        <p className="text-xs leading-snug text-[var(--ink-muted)]">{item.subtitle}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6">
                <h4 className="flex items-center gap-2 border-b border-[var(--border)] pb-3 text-xs font-semibold uppercase tracking-widest text-[var(--turquoise-dark)]">
                  <Stethoscope className="h-4 w-4 text-[var(--gold)]" />
                  Clinical Expertise
                </h4>
                <ul className="space-y-5">
                  {doctor.expertise.map((item) => (
                    <li key={item.title} className="flex items-start gap-4">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--turquoise-dark)]/60" />
                      <div>
                        <p className="mb-1 text-sm font-semibold text-[var(--ink)]">{item.title}</p>
                        <p className="text-xs leading-snug text-[var(--ink-muted)]">{item.subtitle}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-wrap gap-6 pt-4">
              <Button
                size="lg"
                className="rounded-full bg-[var(--turquoise)] px-8 text-white hover:bg-[var(--turquoise-dark)]"
                render={
                  <a href={siteConfig.whatsappHref} target="_blank" rel="noopener noreferrer">
                    WhatsApp Dr. Malavika
                  </a>
                }
              />
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-[var(--turquoise)] px-8 text-[var(--turquoise-dark)]"
                render={<a href={siteConfig.phoneHref}>Call for Consultation</a>}
              />
            </div>
          </div>
        </div>
      </section>

      <AppointmentCta />
    </>
  );
}
