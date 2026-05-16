# Obidur Rahman

Source code for my portfolio. 

[Visit the Live Site](https://obidur.vercel.app)

## Design philosophy
The website design prioritizes technical utility and structural clarity, mirroring the mathematical precision of the owner's research. It employs a high-contrast, monochromatic palette with selective use of an accent color (#FF4D00) to guide visual hierarchy.

### Motion architecture
The site uses a layered scrolling system implemented with Lenis and Framer Motion:
- Sticky stacking: Sections utilize sticky positioning to create a "card-reveal" effect where new content layers slide over previous ones.
- Smooth scrolling: Lenis provides consistent, high-inertia motion across all browsers and devices.
- Parallax depth: The hero section combines background video layers with CSS radial glows and blurred overlays to establish a sense of 3D space.

### Interactive elements
- Custom cursor: A hardware-accelerated cursor system using Framer Motion springs and mix-blend-difference for visibility across varying backgrounds.
- Staggered entry: UI components use transition staggers to maintain a rhythmic flow as the interface populates.
- Micro-interactions: Hover states are governed by cubic-bezier easing to ensure responsiveness and tactile feedback.

### Visual systems
- HUD aesthetic: The design borrows from technical heads-up displays, featuring thin-stroke icons, monospaced data markers, and clean grid alignments.
- Typography: Uses a balanced pairing of Geist for technical data and serif faces for narrative passages, emphasizing the transition between engineering and research.
- Responsive scaling: Implements dynamic font clamping and relative sizing to maintain structural integrity across mobile and high-resolution displays.

## Tech stack

### Engineering
- Framework: Next.js 15 (App Router)
- Language: TypeScript
- Styles: Tailwind CSS
- Motion: Framer Motion, Lenis

## Project organization
- app/: Core application logic and routing.
- app/components/sections/: Modular UI blocks implementing the card-stack effect.
- app/components/ui/: Global interface elements like the custom cursor and navigation.
- public/: Media assets and professional documentation.