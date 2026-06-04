export type Venture = {
  name: string
  category: string
  description: string
  year: string
  status: "active" | "acquired" | "closed"
  url?: string
}

// Replace placeholder data with actual ventures
export const ventures: Venture[] = [
  {
    name: "Venture Name",
    category: "Industry",
    description:
      "What the company does and the problem it solves. One or two honest sentences.",
    year: "20XX–",
    status: "active",
  },
  {
    name: "Venture Name",
    category: "Industry",
    description:
      "What the company does and the problem it solves. One or two honest sentences.",
    year: "20XX–20XX",
    status: "active",
  },
  {
    name: "Venture Name",
    category: "Industry",
    description:
      "What the company does and the problem it solves. One or two honest sentences.",
    year: "20XX–20XX",
    status: "acquired",
  },
  {
    name: "Venture Name",
    category: "Industry",
    description:
      "What the company does and the problem it solves. One or two honest sentences.",
    year: "20XX–20XX",
    status: "closed",
  },
]
