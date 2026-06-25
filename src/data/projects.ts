export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string[];
  features: string[];
  stack: string[];
  repo: string;
  live?: string;
  year: string;
  role: string;
}

export const projects: Project[] = [
  {
    slug: 'nihoa-china',
    title: 'Nihoa China',
    tagline: 'AI-powered China exploration platform',
    description:
      'An interactive web application that helps users explore and discover China, powered by the Gemini AI API for smart, conversational guidance.',
    longDescription: [
      'Nihoa China is an AI-driven discovery platform built to make exploring China intuitive and engaging. It integrates the Google Gemini API to deliver conversational, context-aware answers and recommendations to users.',
      'The project was built end-to-end with a modern TypeScript stack and deployed on Vercel, focusing on a clean, responsive interface and fast performance.',
    ],
    features: [
      'Gemini AI integration for intelligent recommendations',
      'Fully responsive, mobile-first interface',
      'Fast client-side experience deployed on Vercel',
      'Clean, modern TypeScript architecture',
    ],
    stack: ['TypeScript', 'React', 'Gemini AI API', 'CSS', 'Vercel'],
    repo: 'https://github.com/casacoastje-lab/nihoa-china',
    live: 'https://chinaview.vercel.app',
    year: '2026',
    role: 'Full-Stack Developer',
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);