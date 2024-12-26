import Link from 'next/link'
import { IconChevronRight, IconAdjustmentsHorizontal } from '@tabler/icons-react'

import type { PublicApi } from '@/types/Api'
import Boundary from '@/components/Boundary'
import IconButton from '@/components/IconButton'
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
    <div className="mt-6 pt-6 border-t border-gray-200">
      <Boundary direction="around">
        <nav className="relative">
          <List label="Categories" scroll="horizontal" type="list">
            {tabs}
            <List label="Interactive" scroll="horizontal" type="item">
              <div className="h-full absolute top-0 right-0 flex items-center bg-white">
                <IconButton
                  background="transparent"
                  border={true}
                  title="Avançar"
                  type="button"
                  icon={(
                    <IconChevronRight
                      arial-label="Seta para direita"
                      size={20}
                    />
                  )}
                />
                <IconButton
                  background="transparent"
                  border={true}
                  title="Filtro"
                  type="button"
                  icon={(
                    <IconAdjustmentsHorizontal
                      arial-label="Ícone de ajustes"
                      size={20}
                    /> 
                  )}
                >
                  Filtros
                </IconButton>
              </div>
            </List>
          </List>
       </nav>
      </Boundary>
    </div>
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
