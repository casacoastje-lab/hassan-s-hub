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
  {
    slug: 'competion-project-china-2',
    title: 'Competition Project China — V2',
    tagline: 'Full-stack competition platform with database',
    description:
      'The second, refined version of a full-stack competition project featuring a Supabase-backed database, server-side logic, and a polished user interface.',
    longDescription: [
      'This is the second iteration of a competition-focused web platform, rebuilt with a stronger architecture and a real database layer. It combines a TypeScript frontend with PostgreSQL (PL/pgSQL) backend logic.',
      'The project demonstrates full lifecycle development: schema design, server-side functions, frontend integration, and production deployment on Vercel.',
    ],
    features: [
      'PostgreSQL database with PL/pgSQL server-side logic',
      'Improved architecture over the first version',
      'Responsive UI built with TypeScript',
      'Deployed and live on Vercel',
    ],
    stack: ['TypeScript', 'PostgreSQL', 'PL/pgSQL', 'JavaScript', 'Vercel'],
    repo: 'https://github.com/casacoastje-lab/competion-project-china-2',
    live: 'https://competion-project-china-2-lovat.vercel.app',
    year: '2026',
    role: 'Full-Stack Developer',
  },
  {
    slug: 'qr-menu-system',
    title: 'QR Menu System',
    tagline: 'Digital restaurant menu with QR ordering',
    description:
      'A modern QR-code based digital menu system for restaurants, built with Next.js and Supabase for real-time menu management.',
    longDescription: [
      'QR Menu System is a complete digital menu solution that lets restaurants present their offerings through scannable QR codes. Built on Next.js with a Supabase backend, it supports real-time menu management and a smooth customer experience.',
      'The system handles authentication, database storage, and a responsive customer-facing menu — a practical, production-ready SaaS-style application.',
    ],
    features: [
      'QR-code driven digital menus',
      'Supabase authentication and database',
      'Real-time menu management',
      'Responsive, fast Next.js frontend',
    ],
    stack: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Vercel'],
    repo: 'https://github.com/casacoastje-lab/qr-menu-system',
    live: 'https://qr-menu-system-lime.vercel.app',
    year: '2026',
    role: 'Full-Stack Developer',
  },
  {
    slug: 'competion-project-china',
    title: 'Competition Project China — V1',
    tagline: 'The original competition web project',
    description:
      'The first version of the China competition project — the foundation that shaped the improved second iteration.',
    longDescription: [
      'This is the original release of the competition project, built primarily with HTML and front-end fundamentals. It served as the prototype and learning ground for the more advanced V2.',
      'It captures the early concept and structure that later evolved into a full-stack, database-backed platform.',
    ],
    features: [
      'Initial concept and prototype build',
      'Hand-crafted HTML/CSS structure',
      'Foundation for the V2 full-stack rebuild',
    ],
    stack: ['HTML', 'CSS', 'JavaScript'],
    repo: 'https://github.com/casacoastje-lab/competion-project-china',
    year: '2026',
    role: 'Frontend Developer',
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);