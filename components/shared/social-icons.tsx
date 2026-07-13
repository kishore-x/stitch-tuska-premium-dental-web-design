// lucide-react no longer ships brand/logo icons — minimal inline glyphs instead.
type IconProps = { className?: string };

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M14 9h3V5.5h-3C11.79 5.5 10 7.29 10 9.5V12H7.5v3.5H10V22h3.5v-6.5H16l1-3.5h-3.5V9.5c0-.28.22-.5.5-.5Z" />
    </svg>
  );
}

export function YoutubeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M21.6 7.5a3 3 0 0 0-2.1-2.1C17.7 5 12 5 12 5s-5.7 0-7.5.4A3 3 0 0 0 2.4 7.5 31 31 0 0 0 2 12a31 31 0 0 0 .4 4.5 3 3 0 0 0 2.1 2.1C6.3 19 12 19 12 19s5.7 0 7.5-.4a3 3 0 0 0 2.1-2.1A31 31 0 0 0 22 12a31 31 0 0 0-.4-4.5ZM10 15V9l5.2 3-5.2 3Z" />
    </svg>
  );
}

export function LinkedinIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M6.94 5a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0ZM3.5 8.75h3.4V20h-3.4V8.75Zm6.2 0h3.26v1.54h.05c.45-.85 1.56-1.75 3.2-1.75 3.43 0 4.06 2.26 4.06 5.2V20h-3.4v-5.3c0-1.27-.02-2.9-1.77-2.9-1.78 0-2.05 1.39-2.05 2.81V20h-3.35V8.75Z" />
    </svg>
  );
}
