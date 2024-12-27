import Image from 'next/image'

import type { Picture } from '@/types/Api'
import Boundary from "@/components/Boundary"

type GalleryProps = {
  thumbnails: Picture[]
}

const Gallery = async ({ thumbnails }: GalleryProps): Promise<React.JSX.Element> => {
  const [thumbnail] = thumbnails

  // Determina o número de imagens a serem exibidas
  // no grid de miniaturas da galeria.
  const offSet = 4

  const galleryThumbnails = thumbnails.map((picture, idx) => {
    // Pula a primeira imagem da galeria pois ela já foi exibida, como
    // thumbnail principal da galeria.
    if (idx === 0) {
      return null
    }

    // Exibe apenas as primeiras imagens da galeria.
    // O número de imagens exibidas é determinado pelo offSet.
    return idx < offSet + 1 && (
      createGalleryThumbnails(picture)
    )
  })

  return (
    <Boundary direction="top-sides">
      <section className="my-4">
        <h1 className="mb-4 text-2xl font-semibold">
          {thumbnail.description}
        </h1>

        <div className="gap-2 grid grid-cols-12 rounded-2xl overflow-hidden">
          <div className="col-span-6">
            {createGalleryThumbnails(thumbnail)}
          </div>
          <div className="col-span-6 gap-2 grid grid-cols-2">
            {galleryThumbnails}
          </div>
        </div>
      </section>
    </Boundary>
  )
}

const createGalleryThumbnails = ({ id, source, description }: Picture): React.JSX.Element => {
  return (
    <figure key={id}>
      <Image
        width={1280}
        height={720}
        className="w-full border-none object-cover aspect-video"
        src={source}
        alt={description}
      />
    </figure>
  )
}

export default Gallery
