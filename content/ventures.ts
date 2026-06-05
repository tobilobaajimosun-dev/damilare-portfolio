export type Venture = {
  name: string
  category: string
  description: string
  year: string
  status: "active" | "acquired" | "closed"
  url?: string
  logo?: string
  accent: string
}

export const ventures: Venture[] = [
  {
    name: "Realvest",
    category: "Proptech",
    description:
      "Revolutionising home financing and mortgages across 19 African countries — making homeownership a real possibility, not a distant dream.",
    year: "Active",
    status: "active",
    url: "https://realvest.ng",
    logo: "/images/realvest-logo.svg",
    accent: "#3B82F6",
  },
  {
    name: "Abode",
    category: "Proptech",
    description:
      "Pioneering property technology to make homeownership accessible for everyday Africans through smarter tools and transparent processes.",
    year: "Active",
    status: "active",
    logo: "/images/abode-logo.svg",
    accent: "#14B8A6",
  },
  {
    name: "Agbeloba",
    category: "Agritech",
    description:
      "Empowering Nigerian farmers with innovative agritech financing — bridging the gap between agriculture and formal financial systems.",
    year: "Active",
    status: "active",
    url: "https://agbeloba.ng",
    logo: "/images/agbeloba-logo.png",
    accent: "#F59E0B",
  },
  {
    name: "Pettysave",
    category: "Fintech",
    description:
      "Driving financial inclusion across Africa through accessible micro-savings and fintech infrastructure built for the underserved.",
    year: "Active",
    status: "active",
    logo: "/images/pettysave-logo.svg",
    accent: "#8B5CF6",
  },
  {
    name: "Integrated Acquest Global",
    category: "Consulting",
    description:
      "A strategic consultancy guiding transformative leaders and organisations to excel, grow, and create lasting value.",
    year: "Active",
    status: "active",
    accent: "#B8933F",
  },
]
