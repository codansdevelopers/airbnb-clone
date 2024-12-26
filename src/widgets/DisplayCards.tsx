import Image from 'next/image'

import type { PublicApi } from '@/types/Api'
import Boundary from '@/components/Boundary'
import Card from '@/components/Card'

const DisplayCards = async (): Promise<React.JSX.Element> => {
  // Aguarda a resposta da API.
  // A função getPublicAssets é assíncrona, então o await é necessário.
  const response = await getPublicAssets()

  return (
    <section className="my-4">
      <Boundary direction="top-sides">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {response.accommodation.map(({
            id,
            location,
            hasBadge,
            host,
            date,
            price,
            rating,
            thumbnail,
          }) => (
            <Card
              key={id}
              hasBadge={hasBadge}
              title={location.description}
              host={host}
              duration={date}
              price={price}
              rating={rating}
            >
              <Image
                className="w-full border-none object-cover aspect-square"
                width={300}
                height={300}
                src={thumbnail[0].source}
                alt={thumbnail[0].description}
              />
            </Card>
          ))}
        </div>
      </Boundary>
    </section>
  )
}

const getPublicAssets = async (): Promise<PublicApi> => {
  // Define a URL da API de acordo com o ambiente.
  // Se o ambiente for de produção, a URL é a do servidor de produção.
  const HOSTNAME = process.env.NODE_ENV === 'production' ?
    'https://airbnb.codans.com.br' :
    'http://localhost:3000'

  try {
    const response = await fetch(`${HOSTNAME}/api.json`, {
      cache: 'no-store'
    })
    const api: PublicApi = await response.json()
    // Retorna os dados da API.
    return api
  } catch (e) {
    // Fazer tratamento de erro aqui ou enviar para algum serviço de monitoramento.
    // Por enquanto, só vamos logar o erro no console.
    console.error(e)
    throw e
  }
}

export default DisplayCards
