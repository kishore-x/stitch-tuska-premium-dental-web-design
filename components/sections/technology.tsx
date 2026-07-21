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
      "One of our key approaches is Conscious Sedation, which is especially beneficial for anxious or fearful children. Despite the name, your child remains awake, responsive, and able to communicate throughout the procedure.",
    highlights: [
      "Reduces anxiety and discomfort",
      "Smooth, pain-minimized experience",
      "Helps build positive dental memories",
    ],
  },
  {
    icon: Mic,
    title: "Myofunctional Therapy",
    description:
      "We incorporate globally accepted myofunctional therapy tools to support a child's overall oral and facial development, promoting healthy growth that extends far beyond the teeth.",
    highlights: [
      "Improves airway and breathing patterns",
      "Supports speech and swallowing",
      "Enhances sleep quality and tongue posture",
    ],
  },
  {
    icon: Users2,
    title: "Multidisciplinary Myofunctional Care",
    description:
      "We adopt a multidisciplinary myofunctional approach, collaborating with specialists such as pediatricians, ENT specialists, lactation consultants, occupational therapists, craniosacral therapists, orthopaedic specialists, and speech-language pathologists whenever indicated.",
    highlights: [
      "Collaborative specialist care",
      "Airway and feeding support",
      "Special healthcare needs included",
    ],
  },
  {
    icon: ScanLine,
    title: "Digital Intraoral Scanning",
    description:
      "Digital intraoral scanners provide a real-time, highly detailed 3D view of your child's oral cavity during consultations, helping parents actively participate in their child's oral health journey.",
    highlights: [
      "Real-time 3D visualization",
      "Clear concern identification",
      "Active parent education",
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
                className="flex h-full flex-col rounded-3xl border border-[var(--border)] bg-white p-7 shadow-[0_4px_20px_rgba(35,48,59,0.04)]"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--turquoise)]/15 text-[var(--turquoise-dark)]">
                  <Icon className="h-6 w-6" strokeWidth={1.75} />
                </span>
                <h3 className="mt-5 font-heading text-lg text-[var(--ink)]">{item.title}</h3>
                <p className="mt-4 text-sm leading-loose text-[var(--ink-muted)]">{item.description}</p>
                {item.highlights && (
                  <>
                    <div className="mt-6 border-t border-[var(--border)]" aria-hidden />
                    <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-[var(--ink-muted)]">
                      {item.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-3">
                          <span className="mt-0.5 text-[var(--turquoise-dark)]">✓</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
