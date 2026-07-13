"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SectionHeading } from "@/components/shared/section-heading";
import type { FaqItem } from "@/types/content";

export function FaqAccordion({
  items,
  eyebrow = "FAQ",
  title = "Answers to common questions",
  initialCount = 5,
}: {
  items: FaqItem[];
  eyebrow?: string;
  title?: string;
  initialCount?: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const hasMore = items.length > initialCount;
  const visibleItems = expanded ? items : items.slice(0, initialCount);

  return (
    <section className="relative overflow-hidden bg-[var(--ink)] py-24 sm:py-32">
      <div className="absolute inset-0 bg-noise opacity-40" aria-hidden />
      <div className="container-narrow relative">
        <SectionHeading light eyebrow={eyebrow} title={title} />
        <Accordion multiple={false} className="mt-14 space-y-4">
          {visibleItems.map((item, i) => (
            <AccordionItem
              key={item.question}
              value={i}
              className="rounded-2xl border border-white/10 bg-white/5 px-6 data-open:border-[var(--turquoise)]"
            >
              <AccordionTrigger className="py-5 text-left font-heading text-lg sm:text-xl text-white hover:no-underline hover:text-[var(--turquoise)] transition-colors">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-base leading-relaxed text-white/70">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {hasMore && (
          <div className="mt-8 text-center">
            <button
              type="button"
              onClick={() => setExpanded((prev) => !prev)}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--turquoise)] px-8 py-3 text-sm font-semibold text-[var(--turquoise)] transition-colors hover:bg-white/5"
            >
              {expanded ? "Show Fewer Questions" : "Show More Questions"}
              {expanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
