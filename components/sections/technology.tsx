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
      "One of our key approaches is Conscious Sedation, which is especially beneficial for anxious or fearful children. Despite the name, your child remains awake, responsive, and able to communicate throughout the procedure. Conscious sedation simply helps reduce anxiety and discomfort, making dental treatment a smooth, pain-minimized, and safe experience while helping children develop positive dental memories.",
  },
  {
    icon: Mic,
    title: "Myofunctional Therapy",
    description:
      "We also incorporate globally accepted and updated myofunctional therapy tools to support a child's overall oral and facial development. Myofunctional therapy aims to improve airway function, breathing patterns, speech, swallowing, tongue posture, sleep quality, and overall quality of life, promoting healthy growth that extends far beyond the teeth.",
  },
  {
    icon: Users2,
    title: "Multidisciplinary Myofunctional Care",
    description:
      "At Tuskaè, we believe that oral health is closely connected to a child's overall well-being. Rather than focusing solely on dental treatment, we adopt a multidisciplinary myofunctional approach, collaborating with specialists such as pediatricians, ENT specialists, lactation consultants, occupational therapists, craniosacral therapists, orthopaedic specialists, and speech-language pathologists whenever indicated. This collaborative model enables us to provide comprehensive care for children with airway concerns, oral functional abnormalities, feeding difficulties, speech issues, sleep-related breathing disorders, and children with special healthcare needs, ensuring that every aspect of their development is addressed.",
  },
  {
    icon: ScanLine,
    title: "Digital Intraoral Scanning",
    description:
      "To enhance diagnosis and parent education, we use digital intraoral scanners even during consultations. These scanners provide a real-time, highly detailed 3D view of your child's oral cavity, allowing parents to clearly visualize existing concerns, better understand the proposed treatment, and actively participate in their child's oral health journey.",
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
