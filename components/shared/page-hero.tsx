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
    <section
      className={cn(
        "relative overflow-hidden bg-gradient-to-b from-[var(--aqua)]/25 via-[var(--cream)] to-[var(--cream)] pb-20 pt-40 sm:pt-48",
        className
      )}
    >
      {image && (
        <div className="absolute inset-0">
          <PlaceholderImage src={image} className="h-full w-full opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--cream)]/70 via-[var(--cream)]/85 to-[var(--cream)]" />
        </div>
      )}
      <div className="container-narrow relative text-center">
        <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.3em] text-[var(--turquoise-dark)]">
          {eyebrow}
        </span>
        <h1 className="text-balance font-heading text-5xl font-medium text-[var(--ink)] sm:text-6xl">{title}</h1>
        {description && (
          <p className="mx-auto mt-5 max-w-xl text-balance text-[var(--ink-muted)]">{description}</p>
        )}
      </div>
    </section>
  );
}
