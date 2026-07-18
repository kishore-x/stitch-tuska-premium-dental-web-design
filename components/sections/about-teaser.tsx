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
      <div className="container-wide grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeLeft}
          className="relative flex flex-col gap-4"
        >
          {/* Client photos, arranged as an uncropped feature collage. */}
          <div className="relative pb-16 sm:pb-20">
            <PlaceholderImage
              src={clinicImages.kidsPlayCorner}
              label="Kids play corner"
              objectFit="contain"
              className="absolute bottom-0 left-5 z-10 h-44 w-auto aspect-[2/3] rounded-3xl border-4 border-[var(--cream)] shadow-[0_14px_32px_rgba(26,52,68,0.16)] sm:left-8 sm:h-52"
            />
            <PlaceholderImage
              src={clinicImages.doctorWithChild}
              label="Happy young visitors"
              objectFit="contain"
              className="w-full aspect-[20/9] rounded-3xl shadow-[0_18px_40px_rgba(26,52,68,0.12)]"
            />
          </div>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeRight}>
          <SectionHeading
            align="left"
            eyebrow="About Tuskaè"
            title="A patient-first philosophy, built for modern families"
            className="mx-0 text-left"
          />
          <p className="mt-6 text-base leading-relaxed text-[var(--ink-muted)]">
            Tuskaè was founded on a simple belief: exceptional dental care should feel
            calm, warm, and completely free of anxiety — for children and adults alike.
            Every space in our clinic, from our sunlit reception to our sterilized
            treatment rooms, was designed around patient comfort first.
          </p>
          <p className="mt-4 text-base leading-relaxed text-[var(--ink-muted)]">
            We combine modern diagnostic technology — digital X-rays, 3D scanning, and
            laser dentistry — with a genuinely gentle, unhurried approach to every
            appointment, so families can trust us with their smiles for years to come.
          </p>
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
