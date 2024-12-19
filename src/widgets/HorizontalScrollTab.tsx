import Link from 'next/link'

import type { PublicApi } from '@/types/Api'
import Boundary from '@/components/Boundary'
import List from '@/components/List'
import Tab from '@/components/Tab'

const HorizontalScrollTab: React.FC = async () => {
  // Aguarda a resposta da API.
  // A função getPublicAssets é assíncrona, então o await é necessário.
  const response = await getPublicAssets()

  // Mapeia os ícones da resposta da API para o componente Tab.
  // Cada ícone é um item da lista.
  const tabs = response.icons.map((icon) => (
    <List key={icon.id} label="Tab" scroll="horizontal" type="item">
      <Link href="#">
        <Tab
          title={icon.description}
          image={{
            source: icon.source,
            description: icon.description,
          }}
        />
      </Link>
    </List>
  ))

  return (
    <nav className="mt-6 pt-6 border-t border-gray-200">
      <Boundary>
        <List label="Navigation" scroll="horizontal" type="list">
          {tabs}
        </List>
      </Boundary>
    </nav>
  )
}

const getPublicAssets = async (): Promise<PublicApi> => {
  // Define a URL da API de acordo com o ambiente.
  // Se o ambiente for de produção, a URL é a do servidor de produção.
  const HOSTNAME = process.env.NODE_ENV === 'production' ?
    'https://airbnb.codans.com.br' :
    'http://localhost:3000'

  try {
    const response = await fetch(`${HOSTNAME}/api.json`)
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

export default HorizontalScrollTab
