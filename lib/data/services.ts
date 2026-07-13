import type { Service } from "@/types/content";

export const services: Service[] = [
  {
    slug: "pediatric-dentistry",
    title: "Pediatric Dentistry",
    shortDescription:
      "Expert preventative and restorative care specifically designed for growing smiles from infancy through adolescence.",
    description:
      "Expert preventative and restorative care specifically designed for growing smiles from infancy through adolescence. We create positive early experiences to foster a lifetime of optimal oral health, using tell-show-do techniques, behavioral management, and positive reinforcement to make dentistry feel like an adventure rather than an ordeal.",
    icon: "Baby",
    image: "/images/services/pediatric-dentistry.jpg",
    highlights: [
      "Child-friendly, non-intimidating environment",
      "Tell-show-do behavior guidance techniques",
      "Preventive focus from infancy through adolescence",
      "Positive reinforcement to build lifelong habits",
    ],
  },
  {
    slug: "preventive-care",
    title: "Preventive Care",
    shortDescription:
      "Comprehensive oral health assessments, professional prophylaxis, and personalized hygiene education.",
    description:
      "Comprehensive oral health assessments, professional prophylaxis, and personalized hygiene education. We focus on halting dental issues before they begin with meticulous attention to detail — including sealants, fluoride applications, and nutritional counseling tailored to your child's needs.",
    icon: "ShieldCheck",
    image: "/images/services/preventive-care.jpg",
    highlights: [
      "Comprehensive oral health assessments",
      "Professional prophylaxis (cleaning)",
      "Sealants & fluoride applications",
      "Personalized nutritional counseling",
    ],
  },
  {
    slug: "general-dentistry",
    title: "General Dentistry",
    shortDescription:
      "Precision-focused preventative diagnostics and comprehensive restorative therapies for long-term oral wellness.",
    description:
      "Precision-focused preventative diagnostics and comprehensive restorative therapies to maintain long-term oral wellness for all ages. Our general dentistry care forms the foundation of every family member's smile, from routine check-ups to tooth-colored restorations.",
    icon: "Stethoscope",
    image: "/images/services/general-dentistry.jpg",
    highlights: [
      "Comprehensive diagnostic examinations",
      "Tooth-coloured restorative fillings",
      "Routine check-ups for the whole family",
      "Long-term oral wellness planning",
    ],
  },
  {
    slug: "endodontics",
    title: "Endodontics",
    shortDescription:
      "Advanced micro-endodontic therapy utilizing specialized magnification to preserve natural dentition.",
    description:
      "Advanced micro-endodontic therapy utilizing specialized magnification to preserve natural dentition with precision and comfort. Specialized root canal treatments are tailored for primary and young permanent teeth, saving natural smiles wherever possible.",
    icon: "Syringe",
    image: "/images/services/endodontics.jpg",
    highlights: [
      "Specialized care for primary & young permanent teeth",
      "Micro-endodontic magnification technology",
      "Comfort-focused anesthesia protocols",
      "Natural tooth preservation focus",
    ],
  },
  {
    slug: "orthodontics",
    title: "Orthodontics",
    shortDescription:
      "Comprehensive interceptive orthodontics for skeletal alignment, functional health, and aesthetic correction.",
    description:
      "Comprehensive interceptive orthodontics for skeletal alignment, functional health, and aesthetic correction. Early evaluation helps determine whether a child simply needs monitoring or whether early intervention will provide the best long-term outcome for jaw growth and bite development.",
    icon: "AlignCenter",
    image: "/images/services/orthodontics.jpg",
    highlights: [
      "Early interceptive orthodontic assessment",
      "Skeletal alignment & functional correction",
      "Bite and jaw growth monitoring",
      "Individualized treatment planning",
    ],
  },
  {
    slug: "cosmetic-dentistry",
    title: "Cosmetic Dentistry",
    shortDescription:
      "Artisanal aesthetic treatments including porcelain veneers, composite bonding, and clinical teeth whitening.",
    description:
      "Artisanal aesthetic treatments including porcelain veneers, composite bonding, and clinical teeth whitening for natural radiance. Every cosmetic treatment plan is tailored to your unique facial features and goals.",
    icon: "Sparkles",
    image: "/images/services/cosmetic-dentistry.jpg",
    highlights: [
      "Porcelain veneers & composite bonding",
      "Clinical teeth whitening",
      "Natural, radiant aesthetic results",
      "Personalized smile design consultation",
    ],
  },
  {
    slug: "emergency-care",
    title: "Emergency Care",
    shortDescription:
      "Urgent clinical assessment and therapeutic intervention for acute dental pain, trauma, and unexpected complications.",
    description:
      "Urgent clinical assessment and therapeutic intervention for acute dental pain, trauma, and unexpected complications. Dental emergencies don't wait for business hours — call or WhatsApp us directly for urgent concerns.",
    icon: "Siren",
    image: "/images/services/emergency-care.jpg",
    highlights: [
      "Urgent assessment for dental trauma",
      "Rapid pain-relief protocols",
      "Direct phone & WhatsApp access",
      "Same-day urgent care where possible",
    ],
  },
  {
    slug: "myofunctional-therapy",
    title: "Myofunctional Therapy",
    shortDescription:
      "Specialized neuromuscular re-education to optimize breathing, swallowing, and proper facial growth in developing children.",
    description:
      "Specialized neuromuscular re-education to optimize breathing, swallowing, and proper facial growth in developing children. This therapy addresses oral habits, tongue posture, and airway-related concerns that can affect a child's long-term oral and facial development.",
    icon: "Mic",
    image: "/images/services/myofunctional-therapy.jpg",
    highlights: [
      "Assessment of oral habits & tongue posture",
      "Airway and breathing-related evaluation",
      "Neuromuscular re-education exercises",
      "Coordinated care with ENT specialists when needed",
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
