"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeUp}
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "mb-3 inline-block text-xs sm:text-sm font-semibold uppercase tracking-[0.3em]",
            light ? "text-[var(--gold)]" : "text-[var(--turquoise-dark)]"
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "text-balance font-heading font-medium leading-tight text-3xl sm:text-4xl lg:text-5xl",
          light ? "text-white" : "text-[var(--ink)]"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-balance text-base sm:text-lg leading-relaxed",
            light ? "text-white/70" : "text-[var(--ink-muted)]"
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
