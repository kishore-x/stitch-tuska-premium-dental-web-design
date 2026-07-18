"use client";

import { motion } from "framer-motion";
import { ScanLine, Zap, Boxes, Sparkles as SparklesIcon } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { fadeUp, viewportOnce } from "@/lib/motion";

const tech = [
  { icon: ScanLine, title: "Digital X-Ray", description: "Up to 90% less radiation than traditional film, with instant, high-resolution imaging." },
  { icon: Zap, title: "Laser Dentistry", description: "Precision soft-tissue and cavity treatment with reduced pain and faster healing." },
  { icon: Boxes, title: "3D Scanning", description: "Intraoral scanners replace messy impressions for implants, aligners, and crowns." },
  { icon: SparklesIcon, title: "Advanced Sterilization", description: "Hospital-grade autoclave sterilization for every instrument, every single time." },
];

export function Technology() {
  return (
    <section className="bg-gradient-to-b from-[var(--cream)] to-[var(--aqua)]/20 py-24 sm:py-32">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Technology"
          title="Modern tools, precise treatment, faster healing"
          description="We invest continuously in diagnostic and treatment technology so every visit is as accurate, comfortable, and efficient as possible."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tech.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={fadeUp}
                custom={i}
                className="rounded-3xl border border-[var(--border)] bg-white p-7 shadow-[0_4px_20px_rgba(35,48,59,0.04)]"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--turquoise)]/15 text-[var(--turquoise-dark)]">
                  <Icon className="h-6 w-6" strokeWidth={1.75} />
                </span>
                <h3 className="mt-5 font-heading text-lg text-[var(--ink)]">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--ink-muted)]">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
