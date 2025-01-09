'use client'

import { formatClassName } from '@/utils/formatClassName'
import { isDynamicPath } from '@/utils/isDynamicPath'
import { usePathname } from 'next/navigation'

type BoundaryProps = {
  children: React.ReactNode
  direction: 'around' | 'top-sides'
  role?: React.AriaRole
}

const Boundary = ({ direction, role, children }: BoundaryProps) => {
  return (
    <div role={role} className={Css.getBoundary({ direction })}>
      {children}
    </div>
  )
}

const Css = {
  getBoundary: ({ direction }: Pick<BoundaryProps, 'direction'>) => {
    const pathname = usePathname()

    return formatClassName(`
      mx-auto

      ${isDynamicPath(pathname) ? 'max-w-6xl' : 'max-w-screen-2xl'}

      ${
        /** Seleciona a classe de acordo com a propriedade direction */
        direction === 'around'    && 'px-6 sm:px-10' ||
        direction === 'top-sides' && 'px-6 pt-2.5 sm:px-10 sm:pt-2'
      }
    `)
  },
}

export default Boundary
