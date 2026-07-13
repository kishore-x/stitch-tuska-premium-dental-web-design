import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Tuskaè's privacy policy — how we collect, use, and protect your personal and medical information.",
};

const sections = [
  {
    title: "1. Information We Collect",
    body: "When you book an appointment, fill out our contact form, or visit our clinic, we may collect your name, phone number, email address, date of birth, and relevant medical/dental history necessary for treatment.",
  },
  {
    title: "2. How We Use Your Information",
    body: "Your information is used solely to schedule appointments, provide dental treatment, send appointment reminders, and communicate important updates about your care. We do not sell or rent patient data to third parties.",
  },
  {
    title: "3. Data Security",
    body: "We employ industry-standard security measures, including encrypted storage and restricted staff access, to protect your personal and medical records from unauthorized access.",
  },
  {
    title: "4. Cookies & Website Analytics",
    body: "Our website may use cookies and analytics tools to understand visitor behavior and improve user experience. You can disable cookies through your browser settings at any time.",
  },
  {
    title: "5. Third-Party Services",
    body: "We may use third-party services (such as appointment reminder tools or payment processors) that operate under their own privacy policies, consistent with applicable healthcare data protection regulations.",
  },
  {
    title: "6. Your Rights",
    body: "You may request access to, correction of, or deletion of your personal data at any time by contacting our front desk or emailing us directly.",
  },
  {
    title: "7. Changes to This Policy",
    body: "We may update this privacy policy periodically. Continued use of our services after changes constitutes acceptance of the revised policy.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" description="Last updated: January 2026" />
      <section className="py-24 sm:py-32">
        <div className="container-narrow space-y-10">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="font-heading text-2xl text-[var(--ink)]">{section.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--ink-muted)]">{section.body}</p>
            </div>
          ))}
          <div>
            <h2 className="font-heading text-2xl text-[var(--ink)]">Contact Us</h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--ink-muted)]">
              For any privacy-related questions, contact us at{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-[var(--turquoise-dark)] underline">
                {siteConfig.email}
              </a>{" "}
              or call {siteConfig.phone}.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
