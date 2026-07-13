"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Logo } from "@/components/shared/logo";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHome = pathname === "/";
  const transparent = isHome && !scrolled;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        transparent ? "bg-transparent py-5" : "bg-[var(--cream)]/90 py-3 shadow-[0_1px_0_0_var(--border)] backdrop-blur-md"
      )}
    >
      <nav className="container-wide flex items-center justify-between">
        <Logo light={transparent} />

        <ul className="hidden items-center gap-8 lg:flex">
          {siteConfig.nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "text-sm font-medium tracking-wide transition-colors",
                  transparent ? "text-white/90 hover:text-white" : "text-[var(--ink)] hover:text-[var(--turquoise-dark)]",
                  pathname === item.href && (transparent ? "text-white" : "text-[var(--turquoise-dark)]")
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={siteConfig.phoneHref}
            className={cn(
              "flex items-center gap-2 text-sm font-medium",
              transparent ? "text-white/90" : "text-[var(--ink-muted)]"
            )}
          >
            <Phone className="h-4 w-4" />
            {siteConfig.phone}
          </a>
          <Button
            className="rounded-full bg-[var(--turquoise)] px-6 text-white hover:bg-[var(--turquoise-dark)]"
            render={<a href={siteConfig.phoneHref}>Call Clinic</a>}
          />
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            aria-label="Open menu"
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center rounded-full lg:hidden",
              transparent ? "text-white" : "text-[var(--ink)]"
            )}
          >
            <Menu className="h-6 w-6" />
          </SheetTrigger>
          <SheetContent side="right" className="w-[85vw] bg-[var(--cream)] sm:max-w-sm">
            <SheetHeader>
              <SheetTitle>
                <Logo />
              </SheetTitle>
            </SheetHeader>
            <ul className="mt-6 flex flex-col gap-1 px-4">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "block rounded-xl px-3 py-3 text-base font-medium text-[var(--ink)] transition-colors hover:bg-[var(--aqua)]/30",
                      pathname === item.href && "bg-[var(--aqua)]/40 text-[var(--turquoise-dark)]"
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-col gap-3 px-4">
              <Button
                className="w-full rounded-full bg-[var(--turquoise)] text-white hover:bg-[var(--turquoise-dark)]"
                render={<a href={siteConfig.whatsappHref} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>WhatsApp Us</a>}
              />
              <a href={siteConfig.phoneHref} className="flex items-center justify-center gap-2 text-sm font-medium text-[var(--ink-muted)]">
                <Phone className="h-4 w-4" />
                {siteConfig.phone}
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </motion.header>
  );
}
