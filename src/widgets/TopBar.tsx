'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import cx from 'clsx'

import Boundary from '@/components/Boundary'
import IconButton from '@/components/IconButton'
import Logo from '@/components/Logo'

const TopBar: React.FC = () => {
  const pathname = usePathname()

  return (
    <div className="hidden sm:block">
      <Boundary direction="top-sides">
        <div className="flex justify-between items-center">
          <Logo />

          <div className="flex gap-8">
            <Link className={highlightText(pathname, '/')} href="/">
              Acomodações
            </Link>
            <Link className={highlightText(pathname, '/experiences')} href="/experiences">
              Experiências
            </Link>
          </div>

          <div>
            <IconButton
              background="transparent"
              border={true}
              title="Filtro"
              type="button"
              icon={(
                <Image
                  src="/assets/user-circle.png"
                  alt="Ícone de ajustes"
                  width={20}
                  height={20}
                />
              )}
              >
                Entrar
            </IconButton>
          </div>
        </div>
      </Boundary>
    </div>
  )
}

const highlightText = (pathname: string, target: string) => {
  return cx({
    'opacity-65': !pathname.startsWith(target),
    'font-semibold opacity-100': pathname.startsWith(target),
  })
}

export default TopBar
