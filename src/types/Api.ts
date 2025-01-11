export type PublicApi = {
  accommodation: Accommodation[]
  icons: Picture[]
}

export type Accommodation = {
  date: string
  feedbacks: Feedback[]
  hasBadge: boolean
  host: string
  id: string
  location: Location
  price: number
  rating: number
  thumbnails: Picture[]
}

export type Picture = {
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
