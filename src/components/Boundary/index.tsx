import { formatClassName } from '@/utils/formatClassName'

type BoundaryProps = {
  children: React.ReactNode
  direction: 'around' | 'top-sides'
  role?: React.AriaRole
}

const Boundary: React.FC<BoundaryProps> = ({ direction, role, children }) => {
  return (
    <div role={role} className={Css.getBoundary({ direction })}>
      {children}
    </div>
  )
}

const Css = {
  getBoundary: ({ direction }: Pick<BoundaryProps, 'direction'>) => {
    return formatClassName(`
      max-w-screen-2xl mx-auto
      ${
        /** Seleciona a classe de acordo com a propriedade direction */
        direction === 'around'    && 'px-6 sm:px-10' ||
        direction === 'top-sides' && 'px-6 pt-2.5 sm:px-10 sm:pt-2'
      }
    `)
  },
}

export default Boundary
