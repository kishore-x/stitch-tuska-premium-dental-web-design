"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PlaceholderImage } from "@/components/shared/placeholder-image";
import { SectionHeading } from "@/components/shared/section-heading";
import { fadeLeft, fadeRight, viewportOnce } from "@/lib/motion";
import { clinicImages } from "@/lib/images";

export function AboutTeaser() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container-wide grid grid-cols-1 items-center gap-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeLeft}
          className="relative"
        >
          {/* Separate, gallery-style cards keep every real photo fully visible. */}
          <div className="grid grid-cols-1 gap-4 sm:gap-5">
            <PlaceholderImage
              src={clinicImages.kidsPlayCorner}
              label="Kids play corner"
              objectFit="cover"
              objectPosition="center center"
              className="w-full aspect-[16/9] rounded-3xl"
            />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <PlaceholderImage
                src={clinicImages.aboutChild}
                label="A young Tuskaè visitor"
                objectFit="cover"
                objectPosition="center top"
                className="w-full aspect-square rounded-3xl"
              />
              <PlaceholderImage
                src={clinicImages.aboutTeam}
                label="Tuskaè team member with a young visitor"
                objectFit="cover"
                objectPosition="center top"
                className="w-full aspect-square rounded-3xl"
              />
            </div>
          </div>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeRight}>
          <SectionHeading
            align="left"
            eyebrow="About Tuskaè"
            title="The Story of Tuskaè"
            className="mx-0 text-left"
          />
          <div className="mt-6 space-y-6 text-base leading-relaxed text-[var(--ink-muted)]">
            <p>
              Tuskaè was born from a simple belief—that a child is far more than a set of teeth.
            </p>
            <p>
              A healthy smile is not just about straight, cavity-free teeth. It is about healthy breathing, efficient chewing, proper swallowing, clear speech, restful sleep, balanced facial growth, and the confidence to smile without fear. At Tuskaè, we believe these functions work together to build a child's overall health, and a beautiful smile is simply the natural result of a healthy, well-functioning oral environment.
            </p>
            <p>
              Our vision is to care for children from birth through young adulthood, providing preventive, functional, and comprehensive dental care during the years when growth and development can be guided most effectively. By identifying concerns early and working alongside pediatricians, ENT specialists, lactation consultants, speech therapists, occupational therapists, and other healthcare professionals, we strive to provide truly holistic care tailored to every child.
            </p>
            <p>
              Tuskaè was established with the dream of bringing globally accepted, evidence-based pediatric dental care to the families of Kanyakumari District, including suburban and semi-rural communities where such specialized care is often limited. Every child deserves access to modern dentistry delivered with compassion, integrity, and the highest standards of care—regardless of where they live.
            </p>
            <p>
              More than a dental clinic, Tuskaè is a commitment to nurturing healthier children, empowering parents through knowledge, and creating generations of confident smiles built on strong function, lifelong oral health, and genuine trust.
            </p>
          </div>
          <Button
            size="lg"
            className="mt-8 rounded-full bg-[var(--turquoise)] px-8 text-white hover:bg-[var(--turquoise-dark)]"
            render={
              <Link href="/about">
                Discover Our Story <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            }
          />
        </motion.div>
      </div>
    </section>
  );
}
