import Image from 'next/image'

import type { Picture } from '@/types/Api'
import Boundary from "@/components/Boundary"

type GalleryProps = {
  thumbnails: Picture[]
}

const Gallery = async ({ thumbnails }: GalleryProps): Promise<React.JSX.Element> => {
  const [thumbnail] = thumbnails

  return (
    <Boundary direction="top-sides">
      <section className="my-8">
        <h1 className="text-2xl font-semibold">
          {thumbnail.description}
        </h1>
      </section>
    </Boundary>
  )
}

export default Gallery
