export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: string;
  image: string;
  highlights: string[];
  faqs?: { question: string; answer: string }[];
}

export interface Doctor {
  slug: string;
  name: string;
  qualification: string;
  specialization: string;
  experience: string;
  about: string;
  image: string;
  social: {
    linkedin?: string;
    instagram?: string;
  };
}

export interface Testimonial {
  name: string;
  role: string;
  rating: number;
  review: string;
  image: string;
}

export interface GalleryItem {
  src: string;
  alt: string;
  category: "Interior" | "Reception" | "Kids Area" | "Treatment Room" | "Equipment" | "Doctors";
  span?: "row-span-2" | "";
}

export interface FaqItem {
  question: string;
  answer: string;
}
