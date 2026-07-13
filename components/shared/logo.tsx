import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  markClassName?: string;
  showTagline?: boolean;
  light?: boolean;
}

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={cn("h-9 w-9", className)}
      aria-hidden="true"
    >
      {/* Orange/Gold Roof */}
      <path d="M30 20 L70 20 L70 40 L50 30 L30 40 Z" fill="var(--gold)" />
      {/* Teal Roots */}
      <path
        d="M50 30 L56 33 L56 52 C56 58 66 62 76 62 Q62 70 50 60 Q38 70 24 62 C34 62 44 58 44 52 L44 33 Z"
        fill="var(--turquoise)"
      />
    </svg>
  );
}

export function Logo({ className, markClassName, showTagline = false, light = false }: LogoProps) {
  return (
    <Link href="/" className={cn("group flex items-center gap-3", className)} aria-label="Tuskaè home">
      <LogoMark className={markClassName} />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-heading text-2xl tracking-[0.18em]",
            light ? "text-white" : "text-[var(--turquoise-dark)]"
          )}
        >
          TUSKAÈ
        </span>
        {showTagline && (
          <span
            className={cn(
              "mt-1 text-[9px] font-medium tracking-[0.25em] uppercase",
              light ? "text-white/70" : "text-[var(--gold)]"
            )}
          >
            Pediatric &amp; Comprehensive Dental
          </span>
        )}
      </span>
    </Link>
  );
}
