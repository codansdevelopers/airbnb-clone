'use client'

import Link from 'next/link'
import { IconUserCircle } from '@tabler/icons-react'
import { usePathname } from 'next/navigation'

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
            <Link className="font-semibold" href="/">
              Acomodações
            </Link>
            <Link className="opacity-60" href="#">
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
                <IconUserCircle
                  aria-label="Ícone do usuário"
                  size={20}
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

export default TopBar
