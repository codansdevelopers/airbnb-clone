import type { Accommodation } from '@/types/Api'
import Boundary from "@/components/Boundary"

type GalleryProps = {
  accomodation: Accommodation
}

const Gallery = async ({ accomodation }: GalleryProps): Promise<React.JSX.Element> => {
  return (
    <Boundary direction="top-sides">
      <section className="my-8">
        <h1 className="text-3xl font-medium">{accomodation.id}</h1>
      </section>
    </Boundary>
  )
}

export default Gallery
