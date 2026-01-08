export interface ImageData {
  url: string
  alt: string
}

export interface PublishedInfo {
  label: string // "Today"
  date: string  // ISO date: "2016-08-09"
}

export interface Stats {
  likes: number
  comments: number
}

export interface FeedItem {
  id: number
  image: ImageData
  published: PublishedInfo
  stats: Stats
  statsToday: Stats
}
