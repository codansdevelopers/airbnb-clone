export type PublicApi = {
  accommodation: Accommodation[]
  icons: Icon[]
}

type Accommodation = {
  date: Date
  host: string
  id: string
  location: string
  rating: number
  thumbnail: string
}

type Icon = {
  id: string
  source: string
  description: string
  url: string
}

type Date = {
  start: string
  end: string
}
