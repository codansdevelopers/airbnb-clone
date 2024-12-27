export type PublicApi = {
  accommodation: Accommodation[]
  icons: Picture[]
}

export type Accommodation = {
  date: string
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

type Location = {
  description: string
  city: string
  state: string
  country: string
}
