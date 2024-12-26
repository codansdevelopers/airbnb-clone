import Image from 'next/image'
import Link from 'next/link'

import Badge from '@/components/Badge'
import IconButton from '@/components/IconButton'

type CardProps = {
  children: React.ReactNode
  title: string
  hasBadge: boolean
  host: string
  duration: string
  price: number
}

const Card = ({
  children,
  duration,
  hasBadge,
  host,
  price,
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={28}
                      height={28}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="stroke-white fill-gray-800"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                    </svg>
                  )}
                />
              </div>
            </header>

            {/* Aqui ficará a imagem principal exibida pelo Card */}
            {children}
          </div>

          <figcaption className="text-xs md:text-sm">
            <h3 className="font-semibold">
              {title}
            </h3>

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
