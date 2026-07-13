import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  markClassName?: string;
  showTagline?: boolean;
  light?: boolean;
}

// Recreates the Tuskaè mark: a gold crown/roof over a turquoise "T" tooth silhouette.
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={cn("h-9 w-9", className)}
      aria-hidden="true"
    >
      <path d="M14 18 L32 6 L50 18 L50 26 L38 18 L38 26 L26 18 L26 26 L14 26 Z" fill="var(--gold)" />
      <path
        d="M22 26 C22 26 22 40 27 46 C29 48.5 32 47 32 44 C32 47 35 48.5 37 46 C42 40 42 26 42 26 Z"
        fill="var(--turquoise)"
      />
      <path
        d="M18 40 C22 45 42 45 46 40 C42 46 34 48 32 48 C30 48 22 46 18 40 Z"
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
