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
    <section className="relative overflow-hidden bg-[var(--ink)] py-24 sm:py-32">
      <div className="absolute inset-0 bg-noise opacity-40" aria-hidden />
      <div className="container-wide relative">
        <SectionHeading
          light
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
                className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--turquoise)]/20 text-[var(--turquoise)]">
                  <Icon className="h-6 w-6" strokeWidth={1.75} />
                </span>
                <h3 className="mt-5 font-heading text-lg text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
