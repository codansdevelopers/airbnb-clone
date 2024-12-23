export type PublicApi = {
  accommodation: Accommodation[]
  icons: Image[]
}

type Accommodation = {
  date: string
  host: string
  id: string
  location: string
  price: number
  rating: number
  thumbnail: Image
}

type Image = {
  id: string
  source: string
  description: string
  url: string
}
