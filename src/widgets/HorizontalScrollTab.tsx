import Link from 'next/link'
import { IconAdjustmentsHorizontal } from '@tabler/icons-react'

import { getApi } from '@/utils/api'
import Boundary from '@/components/Boundary'
import IconButton from '@/components/IconButton'
import Tab from '@/components/Tab'

const HorizontalScrollTab: React.FC = async () => {
  // Aguarda a resposta da API.
  // A função getPublicAssets é assíncrona, então o await é necessário.
  const response = await getApi()

  // Mapeia os ícones da resposta da API para o componente Tab.
  // Cada ícone é um item da lista.
  const tabs = response.icons.map((icon) => (
    <li key={icon.id} className="inline-block">
      <Link href="#">
        <Tab
          title={icon.description}
          image={{
            source: icon.source,
            description: icon.description,
          }}
        />
      </Link>
    </li>
  ))

  return (
    <Boundary direction="around">
      <nav className="flex items-center">
        <ul
          style={{ scrollbarWidth: 'none' }}
          className="list-none overflow-auto whitespace-nowrap"
        >
          {tabs}
        </ul>
        <div className="flex items-center bg-white">
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
     </nav>
    </Boundary>
  )
}

export default HorizontalScrollTab
