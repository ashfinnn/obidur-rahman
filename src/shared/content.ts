import type { SiteContent, Project } from "./content-types"

export const HOME_PROJECTS: Project[] = [
  {
    title: "Northaxis",
    description:
      "AI Platform Engineering — Building production-grade ML evaluation frameworks, real-time agentic monitoring infrastructure, and scalable LLM-powered event processing systems.",
  },
  {
    title: "Ara",
    description:
      "Agentic R&D — Autonomous research agent performing end-to-end scientific discovery: self-directed literature mining, hypothesis generation and experimental validation.",
  },
  {
    title: "Syphax AI",
    description:
      "AI-Native Assurance — Real-time premium audit engine continuously underwriting complex corporate risks through agentic orchestration and dynamic risk scoring.",
  },
]

export const SITE_CONTENT: SiteContent = {
  name: "Obidur Rahman",
  title: "Research and Development Engineer",
  navLinks: [
    { label: "Work", href: "/" },
    { label: "About", href: "/about" },
  ],
  socialLinks: [
    { label: "GitHub", url: "https://github.com/obidur-rahman" },
    { label: "LinkedIn", url: "https://linkedin.com/in/obidur-rahman" },
  ],
}
