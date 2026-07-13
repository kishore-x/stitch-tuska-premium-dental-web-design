import type { Testimonial } from "@/types/content";
import { testimonialPhotos } from "@/lib/images";

export const testimonials: Testimonial[] = [
  {
    name: "Priya Menon",
    role: "Mother of two",
    rating: 5,
    review:
      "My son used to scream at the mention of a dentist. After his first visit at Tuskaè, he asked when he could go back. The staff are incredibly patient with kids, and the clinic itself feels calm and welcoming rather than clinical.",
    image: testimonialPhotos[0],
  },
  {
    name: "Rahul Verma",
    role: "Dental implant patient",
    rating: 5,
    review:
      "I was nervous about getting implants at 45, but Dr. Vikram walked me through every step with the 3D scans before we even started. Zero pain during the procedure and the results look completely natural.",
    image: testimonialPhotos[1],
  },
  {
    name: "Sneha Iyer",
    role: "Smile makeover patient",
    rating: 5,
    review:
      "The digital smile preview sold me instantly — I could see exactly what my smile would look like before committing. Three months later, I genuinely smile more in photos. Worth every rupee.",
    image: testimonialPhotos[2],
  },
  {
    name: "Karthik Subramaniam",
    role: "Root canal patient",
    rating: 5,
    review:
      "I'd heard horror stories about root canals for years. Dr. Arjun finished mine in a single visit and I genuinely felt nothing beyond the initial anesthesia. The clinic's hygiene standards are also visibly excellent.",
    image: testimonialPhotos[3],
  },
  {
    name: "Divya Ramesh",
    role: "Parent, orthodontics patient",
    rating: 5,
    review:
      "Both my teenagers are on clear aligners with Dr. Meera now. The tracking app and monthly scans make it so easy to see progress, and the kids actually enjoy their check-ins.",
    image: testimonialPhotos[4],
  },
  {
    name: "Arvind Krishnamurthy",
    role: "Emergency care patient",
    rating: 5,
    review:
      "Chipped a tooth on a Sunday evening and was seen within the hour. The emergency line actually gets answered by a real person, not voicemail. That kind of reliability matters.",
    image: testimonialPhotos[5],
  },
];
