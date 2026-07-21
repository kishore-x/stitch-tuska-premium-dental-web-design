// Lucide icon components can't be passed as props across the server/client
// boundary (they're plain functions, not serializable). We store icon names
// as strings in the data layer instead and resolve them through this map
// wherever an icon needs to render inside a Client Component.
import {
  Baby,
  Stethoscope,
  Syringe,
  Anchor,
  Sparkles,
  SunMedium,
  AlignCenter,
  SmilePlus,
  Activity,
  ShieldCheck,
  Siren,
  Mic,
  Apple,
  Users2,
  type LucideIcon,
} from "lucide-react";

export const iconMap: Record<string, LucideIcon> = {
  Baby,
  Stethoscope,
  Syringe,
  Anchor,
  Sparkles,
  SunMedium,
  AlignCenter,
  SmilePlus,
  Activity,
  ShieldCheck,
  Siren,
  Mic,
  Apple,
  Users2,
};
