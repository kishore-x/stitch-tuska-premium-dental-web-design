import type { GalleryItem } from "@/types/content";
import { galleryClinicPhotos, galleryPeoplePhotos } from "@/lib/images";

// galleryPeoplePhotos order: [0] WA0130 mom+girl, [1] WA0145 team+child, [2-6] WA0146/0147/0148/0150/0151
// happy faces, [7] WA0133, [8] IMG_1439 young woman, [9] IMG_2113 toddler garden, [10] IMG_2125 toddler
// sitting, [11] IMG_2151 toddler running, [12] IMG_2594 woman, [13-17] IMG_3473/3474/3475/3476/3478 man,
// [18] WA0047 3-kids, [19] WA0027 mom+2boys, [20] WA0028 mom+2boys, [21] WA0030 mom+girl,
// [22-24] WA0000/0001/0002. Dr. Malavika's photo is deliberately excluded from the gallery.

const peopleAlts = [
  "A family moment at Tuskaè",
  "A Tuskaè team member with a young visitor",
  "A cheerful young visitor at Tuskaè",
  "A warm moment at Tuskaè",
  "A bright smile at Tuskaè",
  "All smiles at Tuskaè",
  "A happy young visitor at Tuskaè",
  "A joyful moment at Tuskaè",
  "Siblings all smiles at Tuskaè",
  "All smiles in the garden at Tuskaè",
  "A happy toddler at Tuskaè",
  "A happy young visitor at Tuskaè",
  "A warm smile at Tuskaè",
  "A confident smile at Tuskaè",
  "A bright smile at Tuskaè",
  "A joyful visitor at Tuskaè",
  "A confident smile at Tuskaè",
  "A young visitor all smiles at Tuskaè",
  "A cheerful trio at Tuskaè",
  "A warm family moment at Tuskaè",
  "A bright family moment at Tuskaè",
  "A family moment at Tuskaè",
  "A happy visitor at Tuskaè",
  "A joyful moment at Tuskaè",
  "A bright smile at Tuskaè",
];

const peopleCategories = [
  "Happy Faces", "Doctors", "Kids Area", "Happy Faces", "Happy Faces",
  "Kids Area", "Kids Area", "Happy Faces", "Happy Faces", "Kids Area",
  "Kids Area", "Kids Area", "Happy Faces", "Happy Faces", "Happy Faces",
  "Happy Faces", "Happy Faces", "Kids Area", "Kids Area", "Happy Faces",
  "Happy Faces", "Happy Faces", "Happy Faces", "Happy Faces", "Happy Faces",
] as const;

export const galleryItems: GalleryItem[] = [
  { ...galleryClinicPhotos.reception, alt: "Tuskaè reception lounge with warm lighting", category: "Reception" },
  { ...galleryClinicPhotos.treatmentRoomAlt, alt: "Clinic waiting area with cream and turquoise interiors", category: "Interior" },
  { ...galleryClinicPhotos.treatmentRoom, alt: "Modern treatment room with dental chair", category: "Treatment Room" },
  { ...galleryClinicPhotos.equipment, alt: "Digital X-ray and imaging equipment", category: "Equipment" },
  ...galleryPeoplePhotos.map((photo, i) => ({
    ...photo,
    alt: peopleAlts[i] ?? "A happy moment at Tuskaè",
    category: peopleCategories[i] ?? "Happy Faces",
  })),
];
