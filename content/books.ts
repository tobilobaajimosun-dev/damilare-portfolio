export type Publication = {
  title: string
  description: string
  type: "book" | "research"
  url?: string
  cta?: string
  image?: string
}

export const publications: Publication[] = [
  {
    title: "Buyology Guide",
    description:
      "Proven strategies to attract and retain high-value customers in today's competitive market.",
    type: "book",
    url: "https://selar.com/Buyology?currency=NGN",
    cta: "Get the Book",
    image: "/images/buyology-guide.jpg",
  },
  {
    title: "Smash It",
    description:
      "A practical guide to setting and achieving transformative goals — with the discipline to follow through.",
    type: "book",
    url: "https://selar.com/Buyology?currency=NGN",
    cta: "Get the Book",
    image: "/images/smash-it.jpg",
  },
  {
    title: "9 Academic Research Papers",
    description:
      "Published research on entrepreneurship, innovation, and SME growth in Africa — contributing to the academic conversation around building on the continent.",
    type: "research",
    cta: "Read the Research",
  },
]
