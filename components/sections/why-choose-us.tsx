"use client";

import { motion } from "framer-motion";
import { HeartHandshake, Cpu, GraduationCap, Feather, Sparkle, PhoneCall } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { fadeLeft, fadeRight, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

const reasons = [
  { icon: HeartHandshake, title: "Gentle Pediatric Care", description: "Behavior-guided, patient techniques designed to keep children calm and cooperative." },
  { icon: Cpu, title: "Modern Equipment", description: "Digital X-rays, 3D scanning, and laser dentistry for faster, more precise treatment." },
  { icon: GraduationCap, title: "Experienced Doctors", description: "A specialist team with decades of combined experience across every discipline." },
  { icon: Feather, title: "Pain-free Procedures", description: "Advanced anesthesia and rotary technology minimize discomfort at every step." },
  { icon: Sparkle, title: "Sterilized Environment", description: "Hospital-grade sterilization protocols followed for every instrument, every visit." },
  { icon: PhoneCall, title: "Emergency Care", description: "24/7 phone support and same-day appointments for urgent dental needs." },
];

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-[var(--ink)] py-24 sm:py-32">
      <div className="absolute inset-0 bg-noise opacity-40" aria-hidden />
      <div className="container-wide relative">
        <SectionHeading light eyebrow="Why Families Choose Us" title="Care that feels different, from the first visit" />

        <div className="mt-20 grid grid-cols-1 divide-y divide-white/10 md:grid-cols-2 md:divide-x md:divide-y-0">
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
                  "group flex items-start gap-6 border-white/10 py-10",
                  col === 0 ? "md:pr-12" : "md:pl-12",
                  rowInCol > 0 && "border-t"
                )}
              >
                <span className="shrink-0 font-heading text-5xl sm:text-6xl font-medium leading-none text-[var(--turquoise)]/20 transition-colors duration-500 group-hover:text-[var(--gold)]/30">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="pt-1">
                  <div className="flex items-center gap-3">
                    <Icon className="h-5 w-5 shrink-0 text-[var(--turquoise)]" strokeWidth={1.75} />
                    <h3 className="font-heading text-lg text-white">{reason.title}</h3>
                  </div>
                  <p className="mt-2.5 max-w-md text-sm leading-relaxed text-white/70">{reason.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
