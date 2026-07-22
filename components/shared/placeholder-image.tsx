import Image from "next/image";
import { cn } from "@/lib/utils";

// Renders real stock photography when `src` is provided (see lib/images.ts),
// falling back to an elegant gradient placeholder otherwise. Swap `src` values
// for the client's real photography once available — see ClickUp checklist.
export function PlaceholderImage({
  className,
  imageClassName,
  label,
  variant = "aqua",
  src,
  priority = false,
  objectPosition = "center 25%",
  objectFit = "cover",
}: {
  className?: string;
  /** Extra classes applied directly to the <Image>, e.g. a scale + translate pair to
   * re-center a face that sits off-center in the source photo (cover mode alone can't
   * shift the crop window when the image's full width/height is already shown). */
  imageClassName?: string;
  label?: string;
  variant?: "aqua" | "gold" | "ink";
  src?: string;
  priority?: boolean;
  /** CSS object-position, e.g. "center 25%" (default, biased toward faces near the top) or "center". */
  objectPosition?: string;
  /** "cover" (default, fills the box, may crop) or "contain" (shows the whole image, may letterbox). */
  objectFit?: "cover" | "contain";
}) {
  if (src) {
    return (
      <div className={cn("relative overflow-hidden", className)}>
        <Image
          src={src}
          alt={label ?? "Tuskaè dental clinic"}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 50vw"
          className={cn(objectFit === "contain" ? "object-contain" : "object-cover", imageClassName)}
          style={{ objectPosition }}
        />
      </div>
    );
  }

  const gradients: Record<string, string> = {
    aqua: "linear-gradient(135deg, var(--aqua) 0%, var(--turquoise) 100%)",
    gold: "linear-gradient(135deg, var(--gold) 0%, var(--aqua) 100%)",
    ink: "linear-gradient(135deg, var(--turquoise-dark) 0%, var(--ink) 100%)",
  };
  return (
    <div
      className={cn("relative flex items-center justify-center overflow-hidden", className)}
      style={{ background: gradients[variant] }}
      role="img"
      aria-label={label ?? "Tuskaè clinic imagery placeholder"}
    >
      <div className="bg-noise absolute inset-0" />
      {label && (
        <span className="relative px-4 text-center font-heading text-lg text-white/90">
          {label}
        </span>
      )}
    </div>
  );
}
