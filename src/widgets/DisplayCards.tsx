import Image from 'next/image'

import { getApi } from '@/utils/api'
import Boundary from '@/components/Boundary'
import Card from '@/components/Card'

const DisplayCards = async (): Promise<React.JSX.Element> => {
  // Aguarda a resposta da API.
  // A função getPublicAssets é assíncrona, então o await é necessário.
  const response = await getApi()

  return (
    <section className="my-4">
      <Boundary>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {response.accommodation.map(({
            id,
            location,
            hasBadge,
            slug,
            host,
            date,
            price,
            rating,
            photos,
          }) => (
            <Card
              key={id}
              hasBadge={hasBadge}
              title={location.description}
              host={host}
              href={slug}
              duration={date}
              price={price}
              rating={rating}
            >
              <Image
                className="w-full border-none object-cover aspect-square"
                width={300}
                height={300}
                src={photos[0].source}
                alt={photos[0].description}
              />
            </Card>
          ))}
        </div>
      </Boundary>
    </section>
  )
}

export default DisplayCards
