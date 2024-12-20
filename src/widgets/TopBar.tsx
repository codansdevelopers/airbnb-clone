'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import cx from 'clsx'

import Boundary from '@/components/Boundary'
import Logo from '@/components/Logo'

const TopBar: React.FC = () => {
  const pathname = usePathname()

  return (
    <Boundary direction="top-sides">
      <div className="flex justify-between items-center">
        <Logo />

        <div className="flex gap-4">
          <Link href="/">
            <span className={highlightText(pathname, '/')}>
              Acomodações
            </span>
          </Link>
          <Link href="/experiences">
            <span className={highlightText(pathname, '/experiences')}>
              Experiências
            </span>
          </Link>
        </div>

        <div>
          3th Item
        </div>
      </div>
    </Boundary>
  )
}

const highlightText = (pathname: string, target: string) => {
  return cx({
    'font-semibold': pathname.startsWith(target),
  })
}

export default TopBar
