import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LogoMark } from "@/components/shared/logo";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center bg-[var(--cream)] px-6 text-center">
      <LogoMark className="h-14 w-14" />
      <p className="mt-8 font-heading text-8xl text-[var(--turquoise)]">404</p>
      <h1 className="mt-4 font-heading text-3xl text-[var(--ink)] sm:text-4xl">
        This page took an unscheduled leave
      </h1>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-[var(--ink-muted)]">
        The page you&rsquo;re looking for doesn&rsquo;t exist or may have moved. Let&rsquo;s get you back
        to a smile-worthy destination.
      </p>
      <Button
        size="lg"
        className="mt-8 rounded-full bg-[var(--turquoise)] px-8 text-white hover:bg-[var(--turquoise-dark)]"
        render={<Link href="/">Back to Home</Link>}
      />
    </section>
  );
}
