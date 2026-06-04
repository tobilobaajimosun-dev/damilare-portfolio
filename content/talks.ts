export type Talk = {
  title: string
  venue: string
  url?: string
  thumbnail?: string
}

// Replace with real talks — add `url` (YouTube/Vimeo) and `thumbnail` (path under /public/talks).
export const talks: Talk[] = [
  {
    title: "Building Businesses That Outlast Trends",
    venue: "TEDx · Pan-Atlantic University, Lagos",
  },
  {
    title: "Entrepreneurship & Economic Transformation in Africa",
    venue: "Keynote · Lagos",
  },
]
