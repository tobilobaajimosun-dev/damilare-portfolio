export type Venture = {
  name: string
  category: string
  description: string
  year: string
  status: "active" | "acquired" | "closed"
  url?: string
}

export const ventures: Venture[] = [
  {
    name: "Realvest.ng",
    category: "Proptech",
    description:
      "Revolutionising home financing and mortgages across 19 African countries — making homeownership a real possibility, not a distant dream.",
    year: "Active",
    status: "active",
    url: "https://realvest.ng",
  },
  {
    name: "Abode",
    category: "Proptech",
    description:
      "Pioneering property technology to make homeownership accessible for everyday Africans through smarter tools and transparent processes.",
    year: "Active",
    status: "active",
  },
  {
    name: "Agbeloba.ng",
    category: "Agritech",
    description:
      "Empowering Nigerian farmers with innovative agritech financing — bridging the gap between agriculture and formal financial systems.",
    year: "Active",
    status: "active",
    url: "https://agbeloba.ng",
  },
  {
    name: "Pettysave",
    category: "Fintech",
    description:
      "Driving financial inclusion across Africa through accessible micro-savings and fintech infrastructure built for the underserved.",
    year: "Active",
    status: "active",
  },
  {
    name: "Integrated Acquest Global",
    category: "Consulting",
    description:
      "A strategic consultancy guiding transformative leaders and organisations to excel, grow, and create lasting value.",
    year: "Active",
    status: "active",
  },
]
