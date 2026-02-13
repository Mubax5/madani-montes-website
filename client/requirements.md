## Packages
framer-motion | For page transitions, scroll animations, and interactive elements
lucide-react | Already in base, but emphasizing usage for all icons
clsx | For conditional class names (usually in base, ensuring availability)
tailwind-merge | For merging tailwind classes (usually in base)

## Notes
Tailwind Config - extend fontFamily:
fontFamily: {
  display: ["'Architects Daughter'", "cursive"], // Playful
  body: ["'DM Sans'", "sans-serif"], // Clean
  mono: ["'Fira Code'", "monospace"],
}

Colors need to be defined in CSS variables for the requested palette.
