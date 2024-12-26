export type PublicApi = {
  accommodation: Accommodation[]
  icons: Image[]
}

type Accommodation = {
  date: string
  hasBadge: boolean
  host: string
  id: string
  location: Location
  price: number
  rating: number
  thumbnail: Image[]
}

type Image = {
  id: string
  source: string
  description: string
  url: string
}

type Location = {
  description: string
  city: string
  state: string
  country: string
}
