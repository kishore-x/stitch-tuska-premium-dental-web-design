// Central clinic identity, contact, and navigation config.
// CMS-ready: replace values here to update the entire site without touching UI code.

export const siteConfig = {
  name: "Tuskaè",
  tagline: "Pediatric & Comprehensive Dental Clinic",
  description:
    "Tuskaè is a premium pediatric and comprehensive dental clinic in Kanyakumari offering gentle, evidence-based, child-centered dental care for the whole family.",
  url: "https://www.tuskae.com",
  ogImage: "/og-image.jpg",
  phone: "+91 84383 40715",
  phoneHref: "tel:+918438340715",
  whatsapp: "+91 84383 40715",
  whatsappHref: "https://wa.me/918438340715",
  email: "hello@tuskae.com",
  address: {
    line1: "9/217, Sheela Bhavan, Nadaikkavu",
    line2: "Chathancode PO, Kanyakumari District, Tamil Nadu – 629153",
    mapsDirectionsHref: "https://www.google.com/maps/dir/?api=1&destination=9.217,77.123",
    mapEmbed: "https://www.google.com/maps?q=9.217,77.123&output=embed",
  },
  hours: [
    { day: "Monday – Saturday", time: "9:00 AM – 7:00 PM" },
    { day: "Sunday", time: "9:00 AM – 7:00 PM" },
    { day: "Tuesday", time: "Closed" },
  ],
  emergencyNote: "For urgent dental concerns, call or WhatsApp the clinic directly.",
  social: {
    instagram: "https://www.instagram.com/tuskaepediatric",
    instagramHandle: "@tuskaepediatric",
    facebook: "https://www.facebook.com/share/1DPxpS69Dj/",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Gallery", href: "/gallery" },
    { label: "FAQ", href: "/faq" },
  ],
  footerLinks: {
    company: [
      { label: "Our Services", href: "/services" },
      { label: "About Dr. Malavika", href: "/about" },
      { label: "Clinic Gallery", href: "/gallery" },
    ],
    resources: [
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
  trustStats: [
    { label: "Years of Clinical Excellence", value: 12, suffix: "+" },
    { label: "Happy Patients", value: 18000, suffix: "+" },
    { label: "Treatments Completed", value: 32000, suffix: "+" },
    { label: "Digital Workflow", value: 100, suffix: "%" },
  ],
} as const;
