"use client";

import { motion } from "framer-motion";
import { HeartHandshake, Cpu, GraduationCap, Feather, Sparkle, PhoneCall, Baby, ShieldCheck, Users2, BookHeart } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { fadeLeft, fadeRight, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

const reasons = [
  { icon: HeartHandshake, title: "Child-First Care", description: "Every decision we make is centered around the comfort, emotional well-being, and individual needs of the child. Our goal is to create positive dental experiences that help children develop lifelong confidence in visiting the dentist." },
  { icon: GraduationCap, title: "Experienced Pediatric Team", description: "Our experienced doctors and trained dental team understand child behaviour and adolescent needs, allowing us to deliver treatment with patience, compassion, and confidence." },
  { icon: Baby, title: "Comprehensive Care from Birth to 20 Years", description: "We provide specialized oral healthcare for infants, toddlers, preschoolers, school-going children, adolescents, and young adults, ensuring age-appropriate care at every stage of growth." },
  { icon: Cpu, title: "Advanced Technology", description: "We combine modern dental technology, digital diagnostics, magnification, intraoral scanning, conscious sedation, and evidence-based treatment protocols to deliver precise, comfortable, and predictable care." },
  { icon: Feather, title: "Gentle & Anxiety-Free Dentistry", description: "Our child-friendly techniques and conscious sedation options help minimize pain, fear, and anxiety, making dental visits a calm and positive experience for children." },
  { icon: Sparkle, title: "International Standards of Sterilization", description: "Patient safety is our highest priority. We follow strict sterilization protocols, standard operating procedures (SOPs), and infection control practices to maintain the highest standards of clinical hygiene." },
  { icon: HeartHandshake, title: "Tradition with Modern Innovation", description: "We believe in preserving the warmth, ethics, and trust of traditional healthcare while embracing the latest advancements in pediatric dentistry to provide the best possible treatment." },
  { icon: ShieldCheck, title: "Prevention-Focused Approach", description: "We emphasize early diagnosis, preventive dentistry, oral health education, and growth guidance to reduce future dental problems and support healthy overall development." },
  { icon: Users2, title: "Multidisciplinary Care", description: "When required, we collaborate with pediatricians, ENT specialists, lactation consultants, speech therapists, occupational therapists, craniosacral therapists, orthodontists, and other healthcare professionals to provide comprehensive, child-centered care." },
  { icon: PhoneCall, title: "Emergency Guidance & Teleconsultation", description: "We understand that dental emergencies can happen anytime. We provide prompt guidance through phone or online consultation whenever appropriate and ensure timely in-clinic care whenever required." },
  { icon: BookHeart, title: "Parent Education & Partnership", description: "We believe informed parents make confident decisions. Every consultation includes clear explanations, treatment discussions, and guidance to help families actively participate in their child's oral health journey." },
];

export function WhyChooseUs() {
  return (
    <section className="bg-[var(--aqua)]/15 py-24 sm:py-32">
      <div className="container-wide">
        <SectionHeading eyebrow="Why Families Choose Us" title="Care that feels different, from the first visit" />

        <div className="mt-20 grid grid-cols-1 divide-y divide-[var(--border)] md:grid-cols-2 md:divide-x md:divide-y-0">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            const col = i % 2;
            const rowInCol = Math.floor(i / 2);
            return (
              <motion.div
                key={reason.title}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={col === 0 ? fadeRight : fadeLeft}
                custom={rowInCol}
                className={cn(
                  "group flex items-start gap-6 border-[var(--border)] py-10",
                  col === 0 ? "md:pr-12" : "md:pl-12",
                  rowInCol > 0 && "border-t"
                )}
              >
                <span className="shrink-0 font-heading text-5xl sm:text-6xl font-medium leading-none text-[var(--turquoise)]/25 transition-colors duration-500 group-hover:text-[var(--gold)]/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="pt-1">
                  <div className="flex items-center gap-3">
                    <Icon className="h-5 w-5 shrink-0 text-[var(--turquoise-dark)]" strokeWidth={1.75} />
                    <h3 className="font-heading text-lg text-[var(--ink)]">{reason.title}</h3>
                  </div>
                  <p className="mt-2.5 max-w-md text-sm leading-relaxed text-[var(--ink-muted)]">{reason.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
