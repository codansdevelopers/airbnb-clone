import { IconStarFilled } from '@tabler/icons-react'

import Boundary from '@/components/Boundary'

const AccommodationDescription = (): React.JSX.Element => {
  return (
    <Boundary direction="around">
      <div arial-label="Descrição">
        <h2 className="font-medium sm:text-xl">
          Espaço inteiro: casa de campo em Minas Gerais
        </h2>

        <ul className="flex gap-2 text-sm sm:text-base">
          <li>10 hóspedes</li>
          <li>5 quartos</li>
          <li>5 camas</li>
          <li>6 banheiros</li>
        </ul>

        <span className="mt-1.5 inline-flex items-center gap-0.5">
          <IconStarFilled className="size-4" />
          <span className="text-sm">4.9 (20 avaliações)</span>
        </span>
      </div>
    </Boundary>
  )
}

export default AccommodationDescription
