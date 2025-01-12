import {
  IconPhoto,
  IconToolsKitchen2,
  IconDesk,
  IconPool,
  IconBrandCarbon,
  IconSailboat,
  IconWifi,
  IconParking,
  IconAlarmSmoke,
  IconDog,
} from '@/assets/icons'

import Typography from '@/components/Typography'

const AccommodationDescription = async (): Promise<React.JSX.Element> => {
  return (
    <div>
      <div className="mt-2">
        <Typography as="h2" variant="title">
          Espaço inteiro: casa de campo em Minas Gerais
        </Typography>

        <ul className="text-sm sm:text-base">
          <li className="inline-block">
            10 hóspedes
          </li>
          <li className="inline-block">
            <span className="mx-1.5">
              &middot;
            </span>
            5 quartos
          </li>
          <li className="inline-block">
            <span className="mx-1.5">
              &middot;
            </span>
            5 camas
          </li>
          <li className="inline-block">
            <span className="mx-1.5">
              &middot;
            </span>
            6 banheiros
          </li>
        </ul>
      </div>

      <div className="mt-10">
        <Typography as="h2" variant="subtitle">
          O que esse lugar oferece?
        </Typography>

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
  )
}

export default AccommodationDescription
