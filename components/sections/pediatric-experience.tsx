"use client";

import { motion } from "framer-motion";
import { Puzzle, Smile, Users2, BookHeart } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { PlaceholderImage } from "@/components/shared/placeholder-image";
import { fadeLeft, fadeRight, fadeUp, viewportOnce } from "@/lib/motion";
import { clinicImages } from "@/lib/images";

const points = [
  { icon: Puzzle, title: "Friendly Environment", description: "Bright, playful spaces designed to feel nothing like a traditional dental clinic." },
  { icon: Smile, title: "Kids Corner", description: "A dedicated play area with books, toys, and activities to ease first-visit nerves." },
  { icon: Users2, title: "Child Specialists", description: "Our pediatric team is trained specifically in child psychology and behavior guidance." },
  { icon: BookHeart, title: "Gentle Care", description: "Every step is explained in child-friendly language before it happens — no surprises." },
];

export function PediatricExperience() {
  return (
    <section className="bg-[var(--aqua)]/20 py-24 sm:py-32">
      <div className="container-wide grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.3fr_1fr]">
        <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeLeft}>
          <SectionHeading
            align="left"
            eyebrow="The Pediatric Experience"
            title="Where children feel safe, seen, and even excited to visit"
            className="mx-0 text-left"
          />

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {points.map((point, i) => {
              const Icon = point.icon;
              return (
                <motion.div
                  key={point.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                  variants={fadeUp}
                  custom={i}
                  className="rounded-2xl bg-white/70 p-5 backdrop-blur"
                >
                  <Icon className="h-6 w-6 text-[var(--turquoise-dark)]" strokeWidth={1.75} />
                  <h3 className="mt-3 font-heading text-lg text-[var(--ink)]">{point.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-[var(--ink-muted)]">{point.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeRight}>
          <PlaceholderImage
            src={clinicImages.kidsArea}
            label="A child smiling in the Tuskaè kids corner"
            className="aspect-square lg:aspect-[4/3] max-h-[460px] w-full rounded-[2.5rem] shadow-xl object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
