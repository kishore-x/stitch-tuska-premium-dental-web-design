"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { PlaceholderImage } from "@/components/shared/placeholder-image";
import { fadeUp, viewportOnce } from "@/lib/motion";
import type { GalleryItem } from "@/types/content";
import { cn } from "@/lib/utils";

export function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const [active, setActive] = useState<GalleryItem | null>(null);

  return (
    <>
      <div className="grid auto-rows-[220px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <motion.button
            key={`${item.src}-${i}`}
            type="button"
            onClick={() => setActive(item)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            custom={i}
            className={cn(
              "group relative overflow-hidden rounded-3xl text-left",
              item.span
            )}
          >
            <PlaceholderImage
              src={item.src}
              label={item.alt}
              className="h-full w-full transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="flex items-center gap-2 p-4 text-sm font-medium text-white">
                <ZoomIn className="h-4 w-4" /> View
              </span>
            </div>
          </motion.button>
        ))}
      </div>

      <Dialog open={!!active} onOpenChange={(open) => !open && setActive(null)}>
        <DialogContent className="max-w-3xl border-none bg-transparent p-0 shadow-none">
          <DialogTitle className="sr-only">{active?.alt}</DialogTitle>
          {active && (
            <div className="relative">
              <PlaceholderImage src={active.src} label={active.alt} className="h-[70vh] w-full rounded-2xl" />
              <button
                onClick={() => setActive(null)}
                aria-label="Close"
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white"
              >
                <X className="h-5 w-5" />
              </button>
              <p className="mt-3 text-center text-sm text-white/80">{active.alt}</p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
