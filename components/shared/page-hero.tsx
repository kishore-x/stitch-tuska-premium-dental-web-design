import { PlaceholderImage } from "@/components/shared/placeholder-image";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description?: string;
  image?: string;
  className?: string;
}

export function PageHero({ eyebrow, title, description, image, className }: PageHeroProps) {
  return (
    <section className={cn("relative overflow-hidden bg-[var(--ink)] pb-20 pt-40 sm:pt-48", className)}>
      {image && (
        <div className="absolute inset-0">
          <PlaceholderImage src={image} className="h-full w-full opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--ink)]/70 via-[var(--ink)]/80 to-[var(--ink)]" />
        </div>
      )}
      {!image && <div className="absolute inset-0 bg-noise opacity-30" aria-hidden />}
      <div className="container-narrow relative text-center">
        <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.3em] text-[var(--gold)]">
          {eyebrow}
        </span>
        <h1 className="text-balance font-heading text-5xl font-medium text-white sm:text-6xl">{title}</h1>
        {description && (
          <p className="mx-auto mt-5 max-w-xl text-balance text-white/70">{description}</p>
        )}
      </div>
    </section>
  );
}
