import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FloatingContact } from "@/components/shared/floating-contact";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const heading = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const body = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "pediatric dentist",
    "children's dentist",
    "family dental clinic",
    "dental implants",
    "root canal treatment",
    "cosmetic dentistry",
    "Tuskaè",
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: siteConfig.name,
  image: `${siteConfig.url}${siteConfig.ogImage}`,
  "@id": siteConfig.url,
  url: siteConfig.url,
  telephone: siteConfig.phone,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.line1,
    addressLocality: "Chennai",
    addressRegion: "Tamil Nadu",
    postalCode: "600040",
    addressCountry: "IN",
  },
  openingHoursSpecification: siteConfig.hours.map((h) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: h.day,
    opens: h.time.split("–")[0]?.trim(),
    closes: h.time.split("–")[1]?.trim(),
  })),
  medicalSpecialty: ["Pediatric Dentistry", "General Dentistry", "Orthodontics", "Oral Surgery"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className="min-h-full flex flex-col bg-[var(--cream)] text-[var(--ink)]"
        suppressHydrationWarning
      >
        <TooltipProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingContact />
          <Toaster />
        </TooltipProvider>
      </body>
    </html>
  );
}
