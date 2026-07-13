import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms and conditions for using Tuskaè's website and dental services.",
};

const sections = [
  {
    title: "1. Acceptance of Terms",
    body: "By accessing this website or booking an appointment with Tuskaè, you agree to be bound by these Terms of Service and our Privacy Policy.",
  },
  {
    title: "2. Appointments & Cancellations",
    body: "Appointments booked through our website or phone line are subject to confirmation by our front desk team. We request at least 24 hours' notice for cancellations or rescheduling to allow us to accommodate other patients.",
  },
  {
    title: "3. Medical Disclaimer",
    body: "Content on this website is provided for general informational purposes only and does not constitute medical or dental advice. Always consult with a qualified dentist for diagnosis and treatment specific to your condition.",
  },
  {
    title: "4. Payment & Insurance",
    body: "Treatment fees are communicated prior to procedures. We accept most major insurance providers; patients are responsible for verifying their coverage with their insurer prior to treatment.",
  },
  {
    title: "5. Website Use",
    body: "You agree not to misuse this website, including attempting unauthorized access to our systems or submitting false information through our contact and appointment forms.",
  },
  {
    title: "6. Limitation of Liability",
    body: "Tuskaè is not liable for indirect or consequential damages arising from use of this website. Nothing in these terms limits liability that cannot be excluded under applicable law.",
  },
  {
    title: "7. Governing Law",
    body: "These terms are governed by the laws of India, and any disputes shall be subject to the exclusive jurisdiction of the courts in Chennai, Tamil Nadu.",
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of Service" description="Last updated: January 2026" />
      <section className="py-24 sm:py-32">
        <div className="container-narrow space-y-10">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="font-heading text-2xl text-[var(--ink)]">{section.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--ink-muted)]">{section.body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
