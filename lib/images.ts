// Real clinic photography provided by the client (sourced from the Stitch design
// export at design-reference/assets/photos), copied into public/images/clinic.
const clinicDims: Record<string, { width: number; height: number }> = {
  "clinic-interior.jpg": { width: 1200, height: 802 },
  "doctor.jpg": { width: 900, height: 1350 },
  "hero.jpg": { width: 1600, height: 1068 },
  "pediatric-checkup.jpg": { width: 1200, height: 1800 },
  "preventive-tools.jpg": { width: 1200, height: 1800 },
  "tech-clinic.jpg": { width: 1200, height: 900 },
};

function clinicPhoto(filename: string) {
  return `/images/clinic/${filename}`;
}

function clinicPhotoWithDims(filename: string) {
  return { src: clinicPhoto(filename), ...clinicDims[filename] };
}

// Real photos of the agency/client's own people, provided directly and processed
// (auto-oriented, optimized) into public/images/people. Each one is used in at most
// ONE non-gallery slot on the site — the gallery is the only place duplicates are
// allowed. Never used for Dr. Malavika, whose real photo hasn't been provided yet
// (still using the clinic stock placeholder below).
const peopleDims: Record<string, { width: number; height: number }> = {
  "IMG-20260714-WA0047.jpg": { width: 1280, height: 576 },
  "IMG-20260717-WA0027.jpg": { width: 1280, height: 960 },
  "IMG-20260717-WA0028.jpg": { width: 1280, height: 960 },
  "IMG-20260717-WA0030.jpg": { width: 1200, height: 1599 },
  "IMG-20260719-WA0130.jpg.jpeg": { width: 1200, height: 1600 },
  "IMG-20260719-WA0133.jpg.jpeg": { width: 1200, height: 1600 },
  "IMG-20260719-WA0145.jpg.jpeg": { width: 1200, height: 1600 },
  "IMG-20260719-WA0146.jpg.jpeg": { width: 1200, height: 1600 },
  "IMG-20260719-WA0147.jpg.jpeg": { width: 1200, height: 1600 },
  "IMG-20260719-WA0148.jpg.jpeg": { width: 1200, height: 1600 },
  "IMG-20260719-WA0150.jpg.jpeg": { width: 1200, height: 1600 },
  "IMG-20260719-WA0151.jpg.jpeg": { width: 1200, height: 1600 },
  "IMG-20260722-WA0000.jpg": { width: 1103, height: 1600 },
  "IMG-20260722-WA0001.jpg": { width: 1476, height: 1600 },
  "IMG-20260722-WA0002.jpg": { width: 1600, height: 1200 },
  "dr-malavika.jpg": { width: 1122, height: 1402 },
  "IMG_1439-1.jpg": { width: 2000, height: 1333 },
  "IMG_2113.jpg": { width: 2000, height: 3000 },
  "IMG_2125.jpg": { width: 2000, height: 1333 },
  "IMG_2151.jpg": { width: 2000, height: 1333 },
  "IMG_2594.jpg": { width: 2000, height: 1333 },
  "IMG_3473.jpg": { width: 2000, height: 3000 },
  "IMG_3474.jpg": { width: 2000, height: 3000 },
  "IMG_3475.jpg": { width: 2000, height: 3000 },
  "IMG_3476.jpg": { width: 2000, height: 1333 },
  "IMG_3478.jpg": { width: 2000, height: 1333 },
};

function realPhoto(filename: string) {
  return `/images/people/${filename}`;
}

function realPhotoWithDims(filename: string) {
  return { src: realPhoto(filename), ...peopleDims[filename] };
}

export const clinicImages = {
  hero: realPhoto("IMG_2151.jpg"),
  treatmentRoom: clinicPhoto("tech-clinic.jpg"),
  treatmentRoomAlt: clinicPhoto("clinic-interior.jpg"),
  equipment: clinicPhoto("preventive-tools.jpg"),
  reception: clinicPhoto("clinic-interior.jpg"),
  // Used only in pediatric-experience.tsx
  kidsArea: realPhoto("IMG_2125.jpg"),
  // Used only in about-teaser.tsx ("Kids play corner")
  kidsPlayCorner: realPhoto("IMG_2113.jpg"),
  // Used only in about-teaser.tsx ("A young Tuskaè visitor")
  doctorWithChild: realPhoto("IMG_3478.jpg"),
  // Additional real people photos for About section and gallery
  aboutTeam: realPhoto("IMG-20260719-WA0145.jpg.jpeg"),
  aboutChild: realPhoto("IMG-20260719-WA0130.jpg.jpeg"),
};

// Dr. Malavika's real photo (taken in front of the actual Tuskaè clinic signage).
// Used ONLY for her — never reused for any other person/section on the site.
export const doctorPhotos = [realPhoto("dr-malavika.jpg"), realPhoto("dr-malavika.jpg")];
export const doctorPhotoDims = peopleDims["dr-malavika.jpg"];

// Every real photo with its intrinsic dimensions, for the gallery's masonry layout
// (natural aspect ratio, never cropped) — duplicates with the slots above are fine here.
export const galleryPeoplePhotos = [
  realPhotoWithDims("IMG-20260719-WA0130.jpg.jpeg"),
  realPhotoWithDims("IMG-20260719-WA0145.jpg.jpeg"),
  realPhotoWithDims("IMG-20260719-WA0146.jpg.jpeg"),
  realPhotoWithDims("IMG-20260719-WA0147.jpg.jpeg"),
  realPhotoWithDims("IMG-20260719-WA0148.jpg.jpeg"),
  realPhotoWithDims("IMG-20260719-WA0150.jpg.jpeg"),
  realPhotoWithDims("IMG-20260719-WA0151.jpg.jpeg"),
  realPhotoWithDims("IMG-20260719-WA0133.jpg.jpeg"),
  realPhotoWithDims("IMG_1439-1.jpg"),
  realPhotoWithDims("IMG_2113.jpg"),
  realPhotoWithDims("IMG_2125.jpg"),
  realPhotoWithDims("IMG_2151.jpg"),
  realPhotoWithDims("IMG_2594.jpg"),
  realPhotoWithDims("IMG_3473.jpg"),
  realPhotoWithDims("IMG_3474.jpg"),
  realPhotoWithDims("IMG_3475.jpg"),
  realPhotoWithDims("IMG_3476.jpg"),
  realPhotoWithDims("IMG_3478.jpg"),
  realPhotoWithDims("IMG-20260714-WA0047.jpg"),
  realPhotoWithDims("IMG-20260717-WA0027.jpg"),
  realPhotoWithDims("IMG-20260717-WA0028.jpg"),
  realPhotoWithDims("IMG-20260717-WA0030.jpg"),
  realPhotoWithDims("IMG-20260722-WA0000.jpg"),
  realPhotoWithDims("IMG-20260722-WA0001.jpg"),
  realPhotoWithDims("IMG-20260722-WA0002.jpg"),
];

export const galleryClinicPhotos = {
  reception: clinicPhotoWithDims("clinic-interior.jpg"),
  treatmentRoom: clinicPhotoWithDims("tech-clinic.jpg"),
  treatmentRoomAlt: clinicPhotoWithDims("clinic-interior.jpg"),
  equipment: clinicPhotoWithDims("preventive-tools.jpg"),
};

// Stock clinic images only — never real people, since these rotate across every
// service detail page and a real face shouldn't repeat next to unrelated service titles.
const serviceImageRotation = [clinicImages.treatmentRoom, clinicImages.equipment, clinicImages.treatmentRoomAlt];

export function serviceImageFor(index: number) {
  return serviceImageRotation[index % serviceImageRotation.length];
}
