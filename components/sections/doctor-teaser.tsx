"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, GraduationCap, Stethoscope, CheckCircle2, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PlaceholderImage } from "@/components/shared/placeholder-image";
import { doctor } from "@/lib/data/doctor";
import { siteConfig } from "@/lib/site-config";
import { fadeLeft, fadeRight, viewportOnce } from "@/lib/motion";

export function DoctorTeaser() {
  return (
    <section className="bg-white py-24 sm:py-32" id="about">
      <div className="container-wide grid grid-cols-1 items-start gap-16 lg:grid-cols-[5fr_7fr]">
        <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeLeft} className="lg:sticky lg:top-28">
          <div className="relative">
            <PlaceholderImage
              src={doctor.image}
              label={`${doctor.name} — ${doctor.title}`}
              className="aspect-[3/4] w-full rounded-[2rem] shadow-2xl"
            />
            <div className="absolute bottom-6 right-6 rounded-xl bg-[var(--turquoise)] px-6 py-5 text-white shadow-xl">
              <p className="font-heading text-2xl leading-tight">{doctor.yearsBadge}</p>
              <p className="text-xs uppercase tracking-widest opacity-80">{doctor.yearsSubtitle}</p>
            </div>
          </div>

          <div className="relative mt-8 overflow-hidden rounded-2xl bg-[var(--cream)] p-8">
            <Quote className="absolute left-4 top-4 h-12 w-12 text-[var(--turquoise)]/10" />
            <p className="relative font-heading text-lg lg:text-xl italic leading-relaxed text-[var(--turquoise-dark)]">
              &ldquo;{doctor.quote}&rdquo;
            </p>
            <p className="relative mt-4 text-xs sm:text-sm font-semibold uppercase tracking-widest text-[var(--gold)]">
              — {doctor.name}
            </p>
          </div>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeRight}>
          <span className="mb-4 inline-block text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-[var(--gold)]">
            About Our Clinician
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-medium text-[var(--ink)]">{doctor.name}</h2>
          <p className="mt-2 text-sm sm:text-base font-semibold uppercase tracking-wider text-[var(--turquoise-dark)]">{doctor.title}</p>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-[var(--ink-muted)]">
            {doctor.bioParagraphs.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {doctor.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-[var(--cream)] px-4 py-2 text-xs font-medium text-[var(--ink-muted)]">
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 gap-10 border-t border-[var(--border)] pt-8 sm:grid-cols-2">
            <div className="space-y-5">
              <h4 className="flex items-center gap-2 border-b border-[var(--border)] pb-3 text-xs font-semibold uppercase tracking-widest text-[var(--turquoise-dark)]">
                <GraduationCap className="h-4 w-4 text-[var(--gold)]" />
                Education &amp; Training
              </h4>
              <ul className="space-y-4">
                {doctor.education.map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--turquoise-dark)]/60" />
                    <div>
                      <p className="text-sm font-semibold text-[var(--ink)]">{item.title}</p>
                      <p className="text-xs leading-snug text-[var(--ink-muted)]">{item.subtitle}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-5">
              <h4 className="flex items-center gap-2 border-b border-[var(--border)] pb-3 text-xs font-semibold uppercase tracking-widest text-[var(--turquoise-dark)]">
                <Stethoscope className="h-4 w-4 text-[var(--gold)]" />
                Clinical Expertise
              </h4>
              <ul className="space-y-4">
                {doctor.expertise.map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--turquoise-dark)]/60" />
                    <div>
                      <p className="text-sm font-semibold text-[var(--ink)]">{item.title}</p>
                      <p className="text-xs leading-snug text-[var(--ink-muted)]">{item.subtitle}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button
              size="lg"
              className="rounded-full bg-[var(--turquoise)] px-8 text-white hover:bg-[var(--turquoise-dark)]"
              render={
                <Link href="/about">
                  Read Full Bio <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              }
            />
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-[var(--turquoise)] px-8 text-[var(--turquoise-dark)]"
              render={
                <a href={siteConfig.whatsappHref} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-1 h-4 w-4" /> WhatsApp Us
                </a>
              }
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
