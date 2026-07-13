"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { fadeUp, viewportOnce } from "@/lib/motion";
import { iconMap } from "@/components/shared/icon-map";
import type { Service } from "@/types/content";

export function ServiceCard({ service, index = 0 }: { service: Service; index?: number }) {
  const Icon = iconMap[service.icon];
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeUp}
      custom={index}
    >
      <Link
        href={`/services/${service.slug}`}
        className="group relative flex h-full flex-col rounded-3xl border border-[var(--border)] bg-white p-8 shadow-[0_2px_20px_-8px_rgba(35,48,59,0.08)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-12px_rgba(101,199,201,0.35)]"
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--aqua)]/40 text-[var(--turquoise-dark)] transition-colors duration-500 group-hover:bg-[var(--turquoise)] group-hover:text-white">
          <Icon className="h-6 w-6" strokeWidth={1.75} />
        </div>
        <h3 className="mt-6 font-heading text-xl lg:text-2xl text-[var(--ink)]">{service.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--ink-muted)]">
          {service.shortDescription}
        </p>
        <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--turquoise-dark)]">
          Learn More
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </span>
      </Link>
    </motion.div>
  );
}
