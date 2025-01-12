export type PublicApi = {
  accommodation: Accommodation[]
  icons: Photo[]
}

export type Accommodation = {
  id: string
  date: string
  testimonials: Testimonials[]
  hasBadge: boolean
  host: string
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

export type Testimonials = {
  id: string
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
