import Link from 'next/link'

import type { PublicApi } from '@/types/Api'
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
      <Link href={icon.url}>
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
    <nav>
      <List label="Navigation" scroll="horizontal" type="list">
        {tabs}
      </List>
    </nav>
  )
}

const getPublicAssets = async (): Promise<PublicApi> => {
  try {
    const response = await fetch(`${process.env.HOSTNAME}/api.json`, {
      cache: 'no-store',
      next: {
        revalidate: 86400,
        tags: ['api'],
      }
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

export default HorizontalScrollTab
