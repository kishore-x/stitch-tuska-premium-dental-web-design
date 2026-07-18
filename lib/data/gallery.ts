import type { GalleryItem } from "@/types/content";
import { galleryClinicPhotos, doctorPhotos, doctorPhotoDims, galleryPeoplePhotos } from "@/lib/images";

// galleryPeoplePhotos order: [0] WA0047 3-kids, [1] WA0027 mom+2boys, [2] WA0028 mom+2boys,
// [3] WA0030 mom+girl, [4] IMG_1439 young woman, [5] IMG_2113 toddler garden,
// [6] IMG_2125 toddler sitting, [7] IMG_2151 toddler running, [8] IMG_2594 woman,
// [9-13] IMG_3473/3474/3475/3476/3478 man

export const galleryItems: GalleryItem[] = [
  { ...galleryClinicPhotos.reception, alt: "Tuskaè reception lounge with warm lighting", category: "Reception" },
  { ...galleryClinicPhotos.treatmentRoomAlt, alt: "Clinic waiting area with cream and turquoise interiors", category: "Interior" },
  { ...galleryPeoplePhotos[5], alt: "A cheerful young visitor at Tuskaè", category: "Kids Area" },
  { ...galleryClinicPhotos.treatmentRoom, alt: "Modern treatment room with dental chair", category: "Treatment Room" },
  { ...galleryClinicPhotos.equipment, alt: "Digital X-ray and imaging equipment", category: "Equipment" },
  { ...galleryPeoplePhotos[6], alt: "A happy young visitor at Tuskaè", category: "Kids Area" },
  { src: doctorPhotos[0], ...doctorPhotoDims, alt: "Tuskaè dental team in the clinic hallway", category: "Doctors" },
  { ...galleryClinicPhotos.reception, alt: "Sterilization and equipment preparation area", category: "Interior" },
  { ...galleryClinicPhotos.treatmentRoomAlt, alt: "Treatment room with 3D scanning equipment", category: "Treatment Room" },
  { ...galleryClinicPhotos.reception, alt: "Front desk at Tuskaè dental clinic", category: "Reception" },
  { ...galleryClinicPhotos.equipment, alt: "Sterilization autoclave equipment", category: "Equipment" },
  { src: doctorPhotos[1], ...doctorPhotoDims, alt: "Pediatric dentist consulting with a young patient", category: "Doctors" },
  { ...galleryPeoplePhotos[7], alt: "All smiles at Tuskaè", category: "Kids Area" },
  { ...galleryPeoplePhotos[0], alt: "Siblings all smiles at Tuskaè", category: "Happy Faces" },
  { ...galleryPeoplePhotos[1], alt: "A family moment at Tuskaè", category: "Happy Faces" },
  { ...galleryPeoplePhotos[2], alt: "A family moment at Tuskaè", category: "Happy Faces" },
  { ...galleryPeoplePhotos[3], alt: "A warm moment at Tuskaè", category: "Happy Faces" },
  { ...galleryPeoplePhotos[4], alt: "A bright smile at Tuskaè", category: "Happy Faces" },
  { ...galleryPeoplePhotos[8], alt: "A warm smile at Tuskaè", category: "Happy Faces" },
  { ...galleryPeoplePhotos[9], alt: "A member of the Tuskaè family, all smiles", category: "Happy Faces" },
  { ...galleryPeoplePhotos[10], alt: "Good vibes at Tuskaè", category: "Happy Faces" },
  { ...galleryPeoplePhotos[11], alt: "Good vibes at Tuskaè", category: "Happy Faces" },
  { ...galleryPeoplePhotos[12], alt: "Bright smiles at Tuskaè", category: "Happy Faces" },
  { ...galleryPeoplePhotos[13], alt: "Bright smiles at Tuskaè", category: "Happy Faces" },
];
