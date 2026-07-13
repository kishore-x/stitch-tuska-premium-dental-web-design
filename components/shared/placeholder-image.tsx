import Image from "next/image";
import { cn } from "@/lib/utils";

// Renders real stock photography when `src` is provided (see lib/images.ts),
// falling back to an elegant gradient placeholder otherwise. Swap `src` values
// for the client's real photography once available — see ClickUp checklist.
export function PlaceholderImage({
  className,
  label,
  variant = "aqua",
  src,
  priority = false,
}: {
  className?: string;
  label?: string;
  variant?: "aqua" | "gold" | "ink";
  src?: string;
  priority?: boolean;
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
          className="object-cover"
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
