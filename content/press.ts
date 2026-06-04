export type PressItem = {
  title: string
  outlet: string
  excerpt: string
  url?: string
  image?: string
}

// Replace with real articles — add `url` and `image` (path under /public/press) for each.
export const press: PressItem[] = [
  {
    title: "Oshokoya Urges Public-Private Synergy for Real Estate Growth",
    outlet: "Press",
    excerpt:
      "Co-founder of Abode, Damilare Oshokoya, has called for stronger collaboration between the public and private sectors to accelerate housing access.",
  },
  {
    title: "Building Financial Inclusion From the Ground Up",
    outlet: "Press",
    excerpt:
      "On why accessible fintech infrastructure is the foundation for sustainable economic participation across the continent.",
  },
  {
    title: "The Future of Proptech and Home Financing in Africa",
    outlet: "Press",
    excerpt:
      "A conversation on how technology is reshaping homeownership and mortgage access across 19 African markets.",
  },
]
