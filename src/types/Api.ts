import { PrefetchOptions } from "next/dist/shared/lib/router/router"

export type PublicApi = {
  accommodation: Accommodation[]
  icons: Photo[]
}

export type Accommodation = {
  date: string
  feedbacks: Feedback[]
  hasBadge: boolean
  host: string
  id: string
  slug: string
  location: Location
  price: number
  rating: number
  photos: Photo[]
}

export type Photo = {
  id: string
  source: string
  description: string
  url: string
}

type Feedback = {
  name: string
  image: string
  comment: string
  rating: number
  customerTime: number
  createdAt: number
  stayedAt: number
}

type Location = {
  description: string
  city: string
  state: string
  country: string
}
