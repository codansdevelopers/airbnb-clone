import { IconStarFilled, IconPhoto, IconToolsKitchen2, IconDesk, IconPool, IconBrandCarbon, IconSailboat, IconWifi, IconParking, IconAlarmSmoke, IconDog } from '@tabler/icons-react'
import type { Accommodation } from '@/types/Api'

import Boundary from '@/components/Boundary'

type AccommodationDescriptionProps = {
  post: Accommodation
}

const AccommodationDescription = ({ post }: AccommodationDescriptionProps): React.JSX.Element => {
  return (
    <Boundary direction="top-sides">
      <div className="grid gap-12 sm:grid-cols-12">
        {/* Descrição */}
        <div className="col-span-6">
          <div className="mt-2">
            <h2 className="font-semibold sm:text-2xl">
              Espaço inteiro: casa de campo em Minas Gerais
            </h2>

            <ul className="flex gap-2 text-sm sm:text-lg">
              <li>10 hóspedes</li>
              <li>5 quartos</li>
              <li>5 camas</li>
              <li>6 banheiros</li>
            </ul>
          </div>

          <div className="mt-10">
            <h2 className="text-xl font-semibold">
              O que esse lugar oferece?
            </h2>

            <ul className="py-6 items-center grid grid-rows-5 grid-flow-col gap-y-6">
              <li className="flex gap-1.5">
                <IconPhoto />
                <span>Vista para as montanhas</span>
              </li>

              <li className="flex gap-1.5">
                <IconToolsKitchen2 />
                <span>Cozinha</span>
              </li>

              <li className="flex gap-1.5">
                <IconDesk />
                <span>Espaço de tabalho exclusivo</span>
              </li>

              <li className="flex gap-1.5">
                <IconPool />
                <span>Piscina privativa</span>
              </li>

              <li className="flex gap-1.5">
                <IconBrandCarbon />
                <span className="line-through">Alarme de segurança p/ gás</span>
              </li>

              <li className="flex gap-1.5">
                <IconSailboat />
                <span>Vista para as águas</span>
              </li>

              <li className="flex gap-1.5">
                <IconWifi />
                <span>Wi-Fi rápido (83 Mbps)</span>
              </li>

              <li className="flex gap-1.5">
                <IconParking />
                <span>Estacionamento incluído</span>
              </li>

              <li className="flex gap-1.5">
                <IconDog />
                <span>Permitido animais</span>
              </li>

              <li className="flex gap-1.5">
                <IconAlarmSmoke />
                <span className="line-through">Detector de fumaça</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Depoimentos */}
        <div className="col-span-6">
          <div className="mt-2">
            <h2 className="text-3xl">
              Depoimentos
            </h2>

            <span className="mt-1.5 inline-flex items-center gap-0.5">
              <IconStarFilled className="size-4" />
              <span className="text-sm">4.9 (20 avaliações)</span>
            </span>
          </div>
        </div>
      </div>
    </Boundary>
  )
}

export default AccommodationDescription
