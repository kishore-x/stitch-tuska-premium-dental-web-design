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
  /** CSS object-position for the avatar crop; defaults to "center 25%" if omitted. */
  imageFocus?: string;
}

export interface GalleryItem {
  src: string;
  alt: string;
  category: "Interior" | "Reception" | "Kids Area" | "Treatment Room" | "Equipment" | "Doctors" | "Happy Faces";
  /** Intrinsic pixel dimensions — used to lay out the masonry grid without cropping. */
  width: number;
  height: number;
}

export interface FaqItem {
  question: string;
  answer: string;
}
