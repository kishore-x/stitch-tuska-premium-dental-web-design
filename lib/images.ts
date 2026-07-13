// Real clinic photography provided by the client (sourced from the Stitch design
// export at design-reference/assets/photos), copied into public/images/clinic.
function clinicPhoto(filename: string) {
  return `/images/clinic/${filename}`;
}

// Stable, real (non-generated) portrait photography, free to use without attribution —
// used only as a fallback where no real client photo exists (e.g. testimonials).
function portrait(gender: "men" | "women", index: number) {
  return `https://randomuser.me/api/portraits/${gender}/${index}.jpg`;
}

export const clinicImages = {
  hero: clinicPhoto("hero.jpg"),
  treatmentRoom: clinicPhoto("tech-clinic.jpg"),
  treatmentRoomAlt: clinicPhoto("clinic-interior.jpg"),
  equipment: clinicPhoto("preventive-tools.jpg"),
  reception: clinicPhoto("clinic-interior.jpg"),
  kidsArea: clinicPhoto("pediatric-checkup.jpg"),
  doctorWithChild: clinicPhoto("pediatric-checkup.jpg"),
};

// Dr. Malavika's real photo — single lead clinician, so every doctor-photo slot
// (profile, gallery "Doctors" category) points to the same real image.
export const doctorPhotos = [clinicPhoto("doctor.jpg"), clinicPhoto("doctor.jpg")];

export const testimonialPhotos = [
  portrait("women", 12),
  portrait("men", 45),
  portrait("women", 68),
  portrait("men", 23),
  portrait("women", 51),
  portrait("men", 8),
];

const serviceImageRotation = [
  clinicImages.treatmentRoom,
  clinicImages.equipment,
  clinicImages.treatmentRoomAlt,
  clinicImages.doctorWithChild,
];

export function serviceImageFor(index: number) {
  return serviceImageRotation[index % serviceImageRotation.length];
}
