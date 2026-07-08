export const SITE = {
  name: "Soodit Kumar",
  url: "https://sooditk.dev",
  title: "Soodit Kumar",
  description:
    "Polyglot software engineer building scalable and efficient systems. Writing about software engineering and AI.",
  locale: "en",
  location: "New Delhi, India",
  email: "sooditkumar@duck.com",
} as const;

export const SOCIALS = [
  { label: "GitHub", href: "https://github.com/SooditK" },
  { label: "X", href: "https://x.com/SooditK" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/soodit-kumar-864a0a1b0" },
  { label: "Email", href: "mailto:sooditkumar@duck.com" },
] as const;

export const WORK = [
  {
    company: "Genloop",
    href: "https://genloop.ai",
    title: "Senior Software Engineer",
    start: "2025",
    end: null,
    description:
      "Building the Genloop platform from the ground up — natural-language analytics over connected BI tools. Own the frontend, backend, and infrastructure.",
  },
  {
    company: "Oren",
    href: "https://orennow.com",
    title: "Executive Product Engineer",
    start: "2022",
    end: "2025",
    description:
      "Took the Oren BRSR-reporting platform from 0 to 1. Responsible for the entire stack, from frontend to infrastructure.",
  },
  {
    company: "Earlier",
    href: null,
    title: "Engineering internships",
    start: "2021",
    end: "2022",
    description:
      "Plypicker, MathonGO, Devsnest, and Trepare — shipped MVPs, migrated frontends to Next.js/TypeScript, and built backend services in Node.js.",
  },
] as const;

export const PROJECTS = [
  {
    name: "inori",
    href: "https://github.com/SooditK/inori",
    description:
      "A lightweight, self-hosted secrets manager inspired by HashiCorp Vault. Written in Go.",
  },
  {
    name: "Benchmarking",
    href: "https://benchmarking-v2.vercel.app/",
    description:
      "Policy, CSR, and ESG data for the top 1000 companies in India, searchable in one place.",
  },
  {
    name: "SQeeeL",
    href: "https://sqeeel.vercel.app/",
    description: "SQL practice questions and answers for students.",
  },
  {
    name: "downstash",
    href: "https://github.com/SooditK/downstash",
    description: "Simplified database management, in TypeScript.",
  },
] as const;
