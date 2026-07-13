import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, Siren, Navigation } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { siteConfig } from "@/lib/site-config";
import { clinicImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Call or WhatsApp Tuskaè dental clinic directly. Find our address, clinic hours, and directions in Kanyakumari.",
};

const contactDetails = [
  { icon: MapPin, label: "Address", value: `${siteConfig.address.line1}, ${siteConfig.address.line2}` },
  { icon: Phone, label: "Phone", value: siteConfig.phone, href: siteConfig.phoneHref },
  { icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: Clock, label: "Hours", value: siteConfig.hours.map((h) => `${h.day}: ${h.time}`).join(" · ") },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's connect with our specialists"
        description="Call or message us directly on WhatsApp — our team responds quickly."
        image={clinicImages.reception}
      />

      <section className="py-24 sm:py-32">
        <div className="container-wide grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <h2 className="font-heading text-3xl text-[var(--ink)]">Get in Touch</h2>
            <ul className="mt-8 space-y-6">
              {contactDetails.map((detail) => {
                const Icon = detail.icon;
                const content = (
                  <>
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[var(--aqua)]/40 text-[var(--turquoise-dark)]">
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                    <span>
                      <span className="block text-xs font-semibold uppercase tracking-wide text-[var(--ink-muted)]">
                        {detail.label}
                      </span>
                      <span className="mt-1 block text-sm text-[var(--ink)]">{detail.value}</span>
                    </span>
                  </>
                );
                return (
                  <li key={detail.label} className="flex items-start gap-4">
                    {detail.href ? (
                      <a href={detail.href} className="flex items-start gap-4">
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="mt-8 flex items-start gap-4 rounded-2xl bg-[var(--gold)]/10 p-5">
              <Siren className="mt-0.5 h-5 w-5 shrink-0 text-[var(--gold)]" />
              <p className="text-sm text-[var(--ink)]">{siteConfig.emergencyNote}</p>
            </div>

            <div className="mt-8 overflow-hidden rounded-3xl border border-[var(--border)]">
              <iframe
                src={siteConfig.address.mapEmbed}
                title="Tuskaè clinic location"
                width="100%"
                height="280"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="border-0"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center rounded-3xl border border-[var(--border)] bg-white p-8 sm:p-12">
            <h3 className="font-heading text-2xl text-[var(--ink)]">Quick Connect</h3>
            <p className="mt-3 text-sm leading-relaxed text-[var(--ink-muted)]">
              Have questions or ready to schedule a visit for your family? Reach out to us directly — no forms, no waiting.
            </p>
            <div className="mt-8 space-y-4">
              <a
                href={siteConfig.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-3 rounded-lg bg-[var(--turquoise)] py-4 text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-90"
              >
                WhatsApp Us
              </a>
              <a
                href={siteConfig.phoneHref}
                className="flex w-full items-center justify-center gap-3 rounded-lg border border-[var(--turquoise)] py-4 text-sm font-semibold text-[var(--turquoise-dark)] transition-colors hover:bg-[var(--aqua)]/20"
              >
                <Phone className="h-4 w-4" /> Call Clinic
              </a>
              <a
                href={siteConfig.address.mapsDirectionsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-3 rounded-lg border border-[var(--border)] py-4 text-sm font-semibold text-[var(--ink)] transition-colors hover:bg-[var(--cream)]"
              >
                <Navigation className="h-4 w-4" /> Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
