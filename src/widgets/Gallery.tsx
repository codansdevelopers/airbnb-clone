import Image from 'next/image'
import type { Photo } from '@/types/Api'

type GalleryProps = {
  thumbnails: Photo[]
}

const Gallery = async ({ thumbnails }: GalleryProps): Promise<React.JSX.Element> => {
  const [thumbnail] = thumbnails

  // Determina o número de imagens a serem exibidas
  // no grid de miniaturas da galeria.
  const offSet = 4

  const galleryThumbnails = thumbnails.map((picture, idx) => {
    const { id, description, source } = picture

    // Pula a primeira imagem da galeria pois ela já foi exibida, como
    // thumbnail principal da galeria.
    if (idx === 0) {
      return null
    }

    // Exibe apenas as primeiras imagens da galeria.
    // O número de imagens exibidas é determinado pelo offSet.
    return idx < offSet + 1 && (
      <figure key={id}>
        <Image
          priority={true}
          width={1280}
          height={720}
          className="w-full border-none object-cover aspect-video 2xl:aspect-square"
          src={source}
          alt={description}
        />
      </figure>
    )
  })

  return (
    <section>
      {/* Grid de galeria de imagens online para telas maiores. Tablet, desktop, etc. */}
      <div className="gap-2 grid sm:grid-cols-12 rounded-2xl overflow-hidden">
        <div className="col-span-6">
          <figure key={thumbnail.id}>
            <Image
              width={1280}
              height={720}
              className="w-full border-none object-cover aspect-video 2xl:aspect-square"
              src={thumbnail.source}
              alt={thumbnail.description}
            />
          </figure>
        </div>
        <div className="col-span-6 gap-2 grid grid-cols-2">
          {galleryThumbnails}
        </div>
      </div>
    </section>
  )
}

export default Gallery
