import type { GalleryItem } from "@/types/content";
import { clinicImages, doctorPhotos } from "@/lib/images";

export const galleryItems: GalleryItem[] = [
  { src: clinicImages.reception, alt: "Tuskaè reception lounge with warm lighting", category: "Reception", span: "row-span-2" },
  { src: clinicImages.treatmentRoomAlt, alt: "Clinic waiting area with cream and turquoise interiors", category: "Interior" },
  { src: clinicImages.kidsArea, alt: "Children's play corner inside the clinic", category: "Kids Area" },
  { src: clinicImages.treatmentRoom, alt: "Modern treatment room with dental chair", category: "Treatment Room", span: "row-span-2" },
  { src: clinicImages.equipment, alt: "Digital X-ray and imaging equipment", category: "Equipment" },
  { src: clinicImages.kidsArea, alt: "Pediatric dental chair designed for children", category: "Kids Area" },
  { src: doctorPhotos[0], alt: "Tuskaè dental team in the clinic hallway", category: "Doctors" },
  { src: clinicImages.reception, alt: "Sterilization and equipment preparation area", category: "Interior" },
  { src: clinicImages.treatmentRoomAlt, alt: "Treatment room with 3D scanning equipment", category: "Treatment Room" },
  { src: clinicImages.reception, alt: "Front desk at Tuskaè dental clinic", category: "Reception" },
  { src: clinicImages.equipment, alt: "Sterilization autoclave equipment", category: "Equipment", span: "row-span-2" },
  { src: doctorPhotos[1], alt: "Pediatric dentist consulting with a young patient", category: "Doctors" },
];
