import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { FacebookIcon, InstagramIcon } from "@/components/shared/social-icons";
import { Logo } from "@/components/shared/logo";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="bg-[var(--ink)] text-white/80">
      <div className="container-wide grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo light showTagline className="mb-4" />
          <p className="max-w-xs text-sm leading-relaxed text-white/60">
            {siteConfig.description}
          </p>
          <div className="mt-6 flex items-center gap-4">
            <a href={siteConfig.social.instagram} aria-label="Instagram" className="text-white/60 transition-colors hover:text-[var(--gold)]">
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a href={siteConfig.social.facebook} aria-label="Facebook" className="text-white/60 transition-colors hover:text-[var(--gold)]">
              <FacebookIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-heading text-lg text-white">Company</h3>
          <ul className="space-y-3 text-sm">
            {siteConfig.footerLinks.company.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-white/60 transition-colors hover:text-[var(--aqua)]">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-heading text-lg text-white">Resources</h3>
          <ul className="space-y-3 text-sm">
            {siteConfig.footerLinks.resources.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-white/60 transition-colors hover:text-[var(--aqua)]">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-heading text-lg text-white">Get in Touch</h3>
          <ul className="space-y-3 text-sm text-white/60">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--gold)]" />
              <span>
                {siteConfig.address.line1}
                <br />
                {siteConfig.address.line2}
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 shrink-0 text-[var(--gold)]" />
              <a href={siteConfig.phoneHref}>{siteConfig.phone}</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 shrink-0 text-[var(--gold)]" />
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[var(--gold)]" />
              <span>
                {siteConfig.hours.map((h) => (
                  <span key={h.day} className="block">
                    {h.day}: {h.time}
                  </span>
                ))}
              </span>
            </li>
          </ul>
          <div className="mt-6 flex flex-col gap-3">
            <a
              href={siteConfig.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg bg-[var(--turquoise)] px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              WhatsApp Us
            </a>
            <a
              href={siteConfig.phoneHref}
              className="flex items-center justify-center gap-2 rounded-lg border border-white/25 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-white/50"
            >
              Call Clinic
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-wide flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Tuskaè Pediatric &amp; Comprehensive Dental Clinic. All rights reserved.</p>
          <p className="hover:text-white/80 transition-colors">
            Designed and Developed by{" "}
            <a
              href="https://www.clickfieldai.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 font-semibold text-white/60 hover:text-white"
            >
              ClickFieldAI
            </a>
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-white/80">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white/80">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
