"use client";

import { motion } from "framer-motion";
import { ScanLine, Zap, Boxes, Sparkles as SparklesIcon, Mic, Users2 } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { fadeUp, viewportOnce } from "@/lib/motion";

const tech = [
  {
    icon: Zap,
    title: "Conscious Sedation",
    description:
      "Conscious sedation helps anxious or fearful children receive dental treatment in a calm and comfortable experience.",
    highlights: [
      "Child remains awake and responsive",
      "Reduces anxiety and discomfort",
      "Builds positive dental memories",
    ],
  },
  {
    icon: Mic,
    title: "Myofunctional Therapy",
    description:
      "We incorporate globally accepted myofunctional therapy tools to support a child's overall oral and facial development, promoting healthy growth beyond the teeth.",
    highlights: [
      "Improves airway and breathing patterns",
      "Supports speech and swallowing",
      "Enhances sleep quality and posture",
    ],
  },
  {
    icon: Users2,
    title: "Multidisciplinary Myofunctional Care",
    description:
      "Our multidisciplinary approach brings together appropriate healthcare specialists when needed to address oral function, airway, feeding, speech, sleep, and developmental concerns as part of comprehensive child-centred care.",
    highlights: [
      "Collaborative specialist care",
      "Airway and feeding support",
      "Support for special healthcare needs",
    ],
  },
  {
    icon: ScanLine,
    title: "Digital Intraoral Scanning",
    description:
      "Digital intraoral scanning provides a detailed real-time 3D view of a child's oral cavity, helping parents clearly understand existing concerns, proposed treatment, and their child's oral health journey.",
    highlights: [
      "Real-time 3D visualization",
      "Clear concern identification",
      "Active parent participation",
    ],
  },
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

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-fr">
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
                className="flex h-full flex-col rounded-3xl border border-[var(--border)] bg-white shadow-[0_4px_20px_rgba(35,48,59,0.04)]"
              >
                <div className="flex-none px-7 pt-7">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--turquoise)]/15 text-[var(--turquoise-dark)]">
                    <Icon className="h-6 w-6" strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-5 font-heading text-base text-[var(--ink)]">{item.title}</h3>
                </div>
                <div className="flex-none px-7 pt-4">
                  <p className="text-sm leading-loose text-[var(--ink-muted)]">{item.description}</p>
                </div>
                <div className="mt-auto px-7 pb-7">
                  <div className="border-t border-[var(--border)]" aria-hidden />
                  <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-[var(--ink-muted)]">
                    {item.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-3">
                        <span className="mt-0.5 text-[var(--turquoise-dark)]">✓</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
