import type { GalleryItem } from "@/types/content";
import { galleryClinicPhotos, doctorPhotos, doctorPhotoDims, galleryPeoplePhotos } from "@/lib/images";

// galleryPeoplePhotos order: [0] WA0047 3-kids, [1] WA0027 mom+2boys, [2] WA0028 mom+2boys,
// [3] WA0030 mom+girl, [4] IMG_1439 young woman, [5] IMG_2113 toddler garden,
// [6] IMG_2125 toddler sitting, [7] IMG_2151 toddler running, [8] IMG_2594 woman,
// [9-13] IMG_3473/3474/3475/3476/3478 man

export const galleryItems: GalleryItem[] = [
  { ...galleryClinicPhotos.reception, alt: "Tuskaè reception lounge with warm lighting", category: "Reception" },
  { ...galleryClinicPhotos.treatmentRoomAlt, alt: "Clinic waiting area with cream and turquoise interiors", category: "Interior" },
  { ...galleryPeoplePhotos[0], alt: "A cheerful young visitor at Tuskaè", category: "Kids Area" },
  { ...galleryClinicPhotos.treatmentRoom, alt: "Modern treatment room with dental chair", category: "Treatment Room" },
  { ...galleryClinicPhotos.equipment, alt: "Digital X-ray and imaging equipment", category: "Equipment" },
  { ...galleryPeoplePhotos[1], alt: "A warm moment at Tuskaè", category: "Happy Faces" },
  { ...galleryPeoplePhotos[2], alt: "A bright smile at Tuskaè", category: "Happy Faces" },
  { ...galleryPeoplePhotos[3], alt: "A family moment at Tuskaè", category: "Happy Faces" },
  { ...galleryPeoplePhotos[4], alt: "Siblings all smiles at Tuskaè", category: "Happy Faces" },
  { ...galleryPeoplePhotos[5], alt: "All smiles at Tuskaè", category: "Kids Area" },
  { ...galleryPeoplePhotos[6], alt: "A happy young visitor at Tuskaè", category: "Kids Area" },
  { ...galleryPeoplePhotos[7], alt: "A Tuskaè team member with a young visitor", category: "Doctors" },
  { ...galleryPeoplePhotos[8], alt: "A warm smile at Tuskaè", category: "Happy Faces" },
  { ...doctorPhotoDims, src: doctorPhotos[0], alt: "Dr. Malavika at Tuskaè", category: "Doctors" },
  { ...galleryPeoplePhotos[19], alt: "A happy visitor at Tuskaè", category: "Happy Faces" },
  { ...galleryPeoplePhotos[20], alt: "A joyful moment at Tuskaè", category: "Happy Faces" },
  { ...galleryPeoplePhotos[21], alt: "A bright smile at Tuskaè", category: "Happy Faces" },
];
