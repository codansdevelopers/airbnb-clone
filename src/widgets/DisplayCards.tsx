import Image from 'next/image'

import type { PublicApi } from '@/types/Api'
import Boundary from '@/components/Boundary'
import Card from '@/components/Card'

const DisplayCards: React.FC = async () => {
  // Aguarda a resposta da API.
  // A função getPublicAssets é assíncrona, então o await é necessário.
  const response = await getPublicAssets()
  
  return (
    <section>
      <Boundary direction="top-sides">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {response.accommodation.map((item) => (
            <Card
              key={item.id}
              title={item.location}
              host={item.host}
              duration={item.date}
              price={item.price}
            >
              <Image
                className="border-none object-cover aspect-square"
                width={640}
                height={480}
                src={item.thumbnail[0].source}
                alt={item.thumbnail[0].description}
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
