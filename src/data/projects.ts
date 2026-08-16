import billy1 from "@/assets/billy-1.jpg";
import billy2 from "@/assets/billy-2.jpg";
import cookable1 from "@/assets/cookable-1.jpg";
import cookable2 from "@/assets/cookable-2.jpg";
import feldenkrais1 from "@/assets/feldenkrais-1.jpg";
import feldenkrais2 from "@/assets/feldenkrais-2.jpg";
import utopia1 from "@/assets/utopia-1.jpg";
import utopia2 from "@/assets/utopia-2.jpg";

export type Project = {
  id: string;
  name: string;
  category: string;
  year: string;
  description: string;
  images: { src: string; alt: string }[];
};

export const projects: Project[] = [
  {
    id: "billy",
    name: "Billy",
    category: "Personal Finance App",
    year: "2025",
    description:
      "A calm money app for people who avoid money apps. Clear balances, gentle nudges, and a spending overview you can read in three seconds.",
    images: [
      { src: billy1, alt: "Billy finance app home screen with balance and spending overview" },
      { src: billy2, alt: "Billy spending categories and housing detail screens" },
    ],
  },
  {
    id: "cookable",
    name: "Cookable",
    category: "Voice Cooking Experience",
    year: "2025",
    description:
      "Hands covered in flour? Cookable listens. A voice-first recipe flow designed for messy kitchens and short attention spans.",
    images: [
      { src: cookable1, alt: "Cookable recipe screen on a tablet in a bright kitchen" },
      { src: cookable2, alt: "Cookable voice interface showing a waveform and cooking step" },
    ],
  },
  {
    id: "feldenkrais",
    name: "Feldenkrais Berlin",
    category: "Website Redesign",
    year: "2024",
    description:
      "A movement practice needed a site that moves like the work: unhurried, generous, easy to book. Editorial typography, real photography, no noise.",
    images: [
      { src: feldenkrais1, alt: "Feldenkrais Berlin homepage shown on a laptop" },
      { src: feldenkrais2, alt: "Responsive layouts and brand palette for Feldenkrais Berlin" },
    ],
  },
  {
    id: "utopia",
    name: "Utopia OS",
    category: "Landing Page",
    year: "2024",
    description:
      "One page to make a new operating system feel inevitable. Oversized type, a single sculptural object, and nothing else competing for attention.",
    images: [
      { src: utopia1, alt: "Utopia OS landing page on a widescreen monitor" },
      { src: utopia2, alt: "Abstract geometric art direction for Utopia OS" },
    ],
  },
];
