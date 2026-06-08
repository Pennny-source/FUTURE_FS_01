---
name: Editorial Luxury Developer Portfolio
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1b1b1b'
  on-surface-variant: '#4c4546'
  inverse-surface: '#303030'
  inverse-on-surface: '#f1f1f1'
  outline: '#7e7576'
  outline-variant: '#cfc4c5'
  surface-tint: '#5e5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1b1b1b'
  on-primary-container: '#848484'
  inverse-primary: '#c6c6c6'
  secondary: '#5d5f5f'
  on-secondary: '#ffffff'
  secondary-container: '#dcdddd'
  on-secondary-container: '#5f6161'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#211b00'
  on-tertiary-container: '#988300'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c6'
  on-primary-fixed: '#1b1b1b'
  on-primary-fixed-variant: '#474747'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c7'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#454747'
  tertiary-fixed: '#ffe24c'
  tertiary-fixed-dim: '#e2c62d'
  on-tertiary-fixed: '#211b00'
  on-tertiary-fixed-variant: '#524600'
  background: '#f9f9f9'
  on-background: '#1b1b1b'
  surface-variant: '#e2e2e2'
typography:
  display-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 180px
    fontWeight: '800'
    lineHeight: 160px
    letterSpacing: -0.04em
  display-xl-outline:
    fontFamily: Plus Jakarta Sans
    fontSize: 180px
    fontWeight: '800'
    lineHeight: 160px
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 80px
    fontWeight: '700'
    lineHeight: 88px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 52px
    letterSpacing: -0.02em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '400'
    lineHeight: 32px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.1em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  margin-page: 4rem
  margin-mobile: 1.5rem
  gutter: 2rem
  section-gap: 12rem
  stack-sm: 0.5rem
  stack-md: 1.5rem
---

## Brand & Style

This design system is rooted in **Swiss-style Minimalism** and **Editorial Boldness**. It is designed for a high-end creative developer portfolio that values white space, structural integrity, and typographic dominance over decorative elements. The brand personality is confident, precise, and sophisticated—evoking the feeling of a premium printed architecture or fashion magazine.

The aesthetic utilizes "Massive Typography" as the primary visual anchor. It balances heavy, filled letterforms with delicate outlines to create a rhythmic depth. Visual hierarchy is achieved through extreme scale shifts rather than complex color palettes or shadows. 

**Key Principles:**
- **Asymmetric Balance:** Use large-scale text to offset negative space.
- **Typographic Texture:** Mix filled and outlined styles to create layers of information.
- **Monochrome Foundation:** Rely on black and off-white for structural elements, using color only for fleeting interactive moments.

## Colors

The palette is strictly curated to maintain a luxury editorial feel. 

- **Background:** The off-white (#F5F5F5) provides a softer, more premium feel than pure white, reducing eye strain and adding warmth.
- **Primary Text:** Pure Black (#000000) for maximum impact and readability.
- **Structural Outlines:** A light neutral grey is used specifically for outlined typographic headers and delicate container borders.
- **Accents:** Soft Yellow and Muted Pink are reserved for small interactive details—such as a hover state on a button or a dot indicating availability. They should never dominate the composition.

## Typography

The typography system is the core of the design. **Plus Jakarta Sans** provides a clean, modern, and slightly warm geometric feel that remains legible even at extreme scales. 

**Usage Guidelines:**
- **Display XL:** Reserved for the hero section or project titles. Use the "Outline" variant for the second word in a pair or for background layering to maintain legibility while adding depth.
- **Editorial Mix:** Use **JetBrains Mono** for secondary labels, metadata, or "code-adjacent" information to acknowledge the developer roots of the portfolio.
- **Tight Leading:** Headlines should use tight line-heights (90-110%) to create a "blocky" visual effect.

## Layout & Spacing

This design system uses a **12-column Fixed Grid** for desktop and a **4-column Fluid Grid** for mobile. 

- **Extreme Gaps:** Sections are separated by large vertical gaps (12rem+) to allow the work to "breathe" and signal a transition in narrative.
- **Asymmetry:** Align text to the left 4-6 columns, leaving the right side empty or using it for a single high-quality image. 
- **The "Magazine" Margin:** Ensure page margins are generous (64px+) to frame the content like a printed page.

## Elevation & Depth

In a minimalist editorial system, depth is created through **Layering and Contrast** rather than shadows.

- **Stacking:** Elements use "Z-index" layering where text can slightly overlap images.
- **Tonal Layers:** Surfaces are kept flat on the #F5F5F5 background.
- **Low-Contrast Outlines:** Use 1px solid borders (#000000 or #D1D5DB) to define project cards or input fields. Do not use blurs or drop shadows.
- **Image Depth:** All photography should be styled with a grayscale filter, reverting to full color only on hover.

## Shapes

To contrast the sharp, aggressive typography, the shape language uses **Full Pill-Shaped** rounding for interactive elements. This softens the brand and makes it feel "premium-tech" rather than "industrial-brutalist."

- **Buttons:** Always fully rounded (pill-shaped).
- **Project Cards:** Should maintain sharp 0px corners to look like magazine cutouts, or very subtle 4px corners if a softer feel is desired.
- **Selection Chips:** Pill-shaped with 1px outlines.

## Components

### Buttons
- **Primary:** Solid black background, white text, pill-shaped. On hover, background shifts to the soft yellow or pink accent.
- **Secondary:** Transparent background, 1px black outline, black text.

### Navigation
- **Header:** Minimalist top-aligned bar. Use `label-sm` typography for links. Navigation should be "sticky" but transition to a blurred backdrop or disappear on scroll to prioritize the content.

### Project Cards
- Full-width or half-width layouts. Images should have a 16:9 or 4:5 aspect ratio. Title in `headline-lg` should overlap the bottom-left edge of the image slightly.

### Input Fields
- Underline-only style or very thin 1px black borders. Use `label-sm` for placeholders.

### Micro-Interactions
- **Magnetic Cursor:** A large, translucent circular cursor that "snaps" to buttons and image thumbnails.
- **Text Reveal:** Use scroll-triggered masks to "slide" massive text into view.