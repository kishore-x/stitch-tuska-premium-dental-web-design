"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PlaceholderImage } from "@/components/shared/placeholder-image";
import { clinicImages } from "@/lib/images";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden">
      {/* Full-bleed background photo */}
      <div className="absolute inset-0">
        <PlaceholderImage
          src={clinicImages.hero}
          label="A happy young smile, the reason Tuskaè exists"
          className="h-full w-full"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/80" />
      </div>

      <div className="container-wide relative flex w-full flex-col items-center pt-24 pb-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-balance font-heading font-medium leading-[1.05] text-white text-6xl sm:text-7xl lg:text-8xl 2xl:text-9xl"
        >
          Healthy Smiles
          <br />
          Begin Here
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-8 max-w-2xl text-balance text-lg leading-relaxed text-white/85 sm:text-xl"
        >
          Tuskaè brings gentle, modern pediatric and comprehensive dental care to
          Kanyakumari — crafted for children, trusted by parents, and delivered with
          the comfort and precision of a world-class clinic.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <Button
            size="lg"
            className="rounded-full bg-[var(--turquoise)] px-8 text-white hover:bg-[var(--turquoise-dark)]"
            render={<a href={siteConfig.phoneHref}>Call Clinic</a>}
          />
          <Button
            size="lg"
            variant="outline"
            className="rounded-full border-white/30 bg-white/10 px-8 text-white backdrop-blur-sm hover:bg-white/20 hover:text-white"
            render={<a href={siteConfig.whatsappHref} target="_blank" rel="noopener noreferrer">WhatsApp Us</a>}
          />
          <Button
            size="lg"
            variant="outline"
            className="rounded-full border-white/30 bg-white/10 px-8 text-white backdrop-blur-sm hover:bg-white/20 hover:text-white"
            render={<Link href="/services">Explore Services</Link>}
          />
        </motion.div>
      </div>
    </section>
  );
}
