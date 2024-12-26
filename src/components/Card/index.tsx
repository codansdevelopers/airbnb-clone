import Link from 'next/link'
import { IconHeart, IconStarFilled } from '@tabler/icons-react'

import Badge from '@/components/Badge'
import IconButton from '@/components/IconButton'

type CardProps = {
  children: React.ReactNode
  title: string
  hasBadge: boolean
  host: string
  duration: string
  price: number
  rating: number
}

const Card = ({
  children,
  duration,
  hasBadge,
  host,
  price,
  rating,
  title,
}: CardProps): React.JSX.Element => {
  return (
    <article aria-label="Card">
      <Link className="block" href="#">
        <figure className="flex flex-col gap-y-2">
          <div className="relative overflow-hidden rounded-lg sm:rounded-xl bg-gray-200 border border-gray-200">
            <header className="absolute w-full top-0 left-0">
              <div className="m-4 flex justify-between items-center">
                <div>
                  {hasBadge && (
                    <Badge text="Preferido dos hóspedes" />
                  )}
                </div>

                <IconButton
                  background="transparent"
                  title="Favoritar"
                  type="button"
                  noPadding={true}
                  icon={(
                    <IconHeart
                      width={28}
                      height={28}
                      strokeWidth={1.5}
                      className="stroke-white fill-gray-800"
                    />
                  )}
                />
              </div>
            </header>

            {/* Aqui ficará a imagem principal exibida pelo Card */}
            {children}
          </div>

          <figcaption className="text-xs md:text-sm">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold">
                {title}
              </h3>

              <div className="flex items-center gap-1">
                <IconStarFilled width={12} height={12} className="fill-gray-900" />
                <span className="font-medium">
                  {rating}
                </span>
              </div>
            </div>

            <div aria-label="Informações">
              <span className="block my-0.5">Anfitriã(o): {host}</span>
              <span className="block my-0.5">{duration}.</span>
              <span className="block my-0.5">
                <strong className="font-semibold">R$ {price}</strong> noite
              </span>
            </div>
          </figcaption>
        </figure>
      </Link>
    </article>
  )
}

export default Card
