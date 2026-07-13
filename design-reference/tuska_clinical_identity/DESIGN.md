---
name: Tuskaè Clinical Identity
colors:
  surface: '#f6faf9'
  surface-dim: '#d7dbda'
  surface-bright: '#f6faf9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f4f4'
  surface-container: '#eaefee'
  surface-container-high: '#e5e9e8'
  surface-container-highest: '#dfe3e3'
  on-surface: '#181c1c'
  on-surface-variant: '#3e4949'
  inverse-surface: '#2c3131'
  inverse-on-surface: '#edf1f1'
  outline: '#6e7979'
  outline-variant: '#bdc9c9'
  surface-tint: '#00696b'
  primary: '#00696b'
  on-primary: '#ffffff'
  primary-container: '#65c7c9'
  on-primary-container: '#005153'
  inverse-primary: '#74d6d8'
  secondary: '#286868'
  on-secondary: '#ffffff'
  secondary-container: '#afeeee'
  on-secondary-container: '#2f6e6e'
  tertiary: '#7d5800'
  on-tertiary: '#ffffff'
  tertiary-container: '#e1b055'
  on-tertiary-container: '#614300'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#91f2f4'
  primary-fixed-dim: '#74d6d8'
  on-primary-fixed: '#002020'
  on-primary-fixed-variant: '#004f51'
  secondary-fixed: '#afeeee'
  secondary-fixed-dim: '#94d1d1'
  on-secondary-fixed: '#002020'
  on-secondary-fixed-variant: '#034f50'
  tertiary-fixed: '#ffdea9'
  tertiary-fixed-dim: '#f1be62'
  on-tertiary-fixed: '#271900'
  on-tertiary-fixed-variant: '#5e4200'
  background: '#f6faf9'
  on-background: '#181c1c'
  surface-variant: '#dfe3e3'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.4'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  section-gap: 120px
---

## Brand & Style
The design system for this pediatric and comprehensive dental clinic is built on the pillars of **Modern Healthcare Luxury** and **Approachable Sophistication**. The visual narrative moves away from clinical sterility and juvenile tropes, opting instead for a "Warm Boutique" aesthetic. 

The system utilizes a **Minimalist-Tactile** hybrid style: heavy white space and a clean layout (Minimalism) paired with soft, organic depth and high-quality typography (Tactile). The goal is to evoke a sense of calm and professional reliability for parents while maintaining a welcoming, non-threatening environment for children. Every interface element should feel intentional, airy, and high-end.

## Colors
The palette is rooted in a "Coastal Sanctuary" theme. 
- **Primary Turquoise (#65C7C9)**: Functions as the brand's signature, used for primary calls-to-action and active states.
- **Light Aqua (#A8E6E6)**: Used for subtle backgrounds, progress bars, and soft hover states to maintain a high-key, bright interface.
- **Warm Gold (#E8B65A)**: A high-contrast accent used sparingly for premium markers, "VIP" service highlights, and specific secondary CTAs.
- **Warm Cream (#FDFBF8)**: The foundational canvas. Using cream instead of pure white reduces eye strain and adds a layer of warmth.
- **Dark Slate (#23303B)**: Provides high-contrast legibility for headings and long-form content.

## Typography
This design system employs a high-contrast typographic pairing to balance heritage and modernity. 
- **Playfair Display** is used for all major headings and editorial moments. It should be typeset with generous leading to feel cinematic and calm. 
- **Inter** handles all functional and body copy. Its neutral, systematic nature ensures that medical information is delivered clearly and with authority. 

For mobile devices, display sizes are aggressively scaled down to ensure legibility while maintaining the elegant serif character. All labels use increased letter spacing to enhance the premium feel.

## Layout & Spacing
The layout follows a **Fixed-Width Centered Grid** on desktop (12 columns) and a **Fluid Grid** on mobile (4 columns). 

Generous whitespace is the primary driver of the premium feel. Use `section-gap` (120px) between major content blocks to allow the eye to rest. Elements within cards should use a 24px or 32px internal padding (the "breathable" standard). Alignment should favor left-aligned text for readability, but "Hero" sections may utilize centered typography for a more formal, editorial entry point.

## Elevation & Depth
Depth is created using **Ambient Shadows** rather than harsh borders. Shadows should be ultra-diffused with a slight color tint derived from the Primary Slate to ensure they look natural on the Warm Cream background.

- **Level 1 (Cards):** 0px 4px 20px rgba(35, 48, 59, 0.04). Used for service and feature cards.
- **Level 2 (Hover/Modals):** 0px 12px 32px rgba(35, 48, 59, 0.08). Used when a user interacts with a card or for floating navigation.
- **Tonal Layers:** Use the Secondary Aqua at 10-20% opacity for "recessed" areas like footer backgrounds or search input fields.

## Shapes
The shape language is defined by **Soft Geometricism**. All containers, buttons, and inputs must use consistent rounding to appear "organic" and safe. 

Base components use a 16px radius. Larger elements, such as Feature Cards or Doctor Profiles, should use a 24px radius to emphasize the "soft" brand personality. Avoid 0px (sharp) corners entirely, as they conflict with the friendly pediatric nature of the clinic.

## Components
### Premium Navigation
The navbar is sticky with a background blur (Backdrop Filter: 15px). It transitions from transparent (at the top of the page) to Pure White once scrolled. Links use `label-md` styling with a Gold underline effect on hover.

### Luxury CTA Buttons
- **Primary:** Background: Turquoise; Text: White; Shadow: Soft Turquoise Glow. 
- **Secondary (Outline):** Border: 2px Gold; Text: Gold; Background: Transparent. 
- **Style:** 16px radius, horizontal padding of 32px.

### Service & Feature Cards
White surfaces with Level 1 elevation and 24px corner radius. Icons should be monochrome Turquoise or Gold. Titles use `headline-md`.

### Doctor Profile Cards
Feature a vertical layout with an image using a "soft-clip" (rounded corners). Name is in `headline-md` (Playfair). A subtle Gold accent line should separate the name from the specialty text.

### Accordion (FAQs)
Minimalist design with no borders. Use a simple Turquoise "plus/minus" or "chevron" icon. The active state should slightly tint the background to Light Aqua.

### Input Fields
Background: White; Border: 1px Light Aqua; Radius: 12px. Focus state: Border: 2px Turquoise; no harsh outer glow.