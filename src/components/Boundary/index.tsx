import { formatClassName } from '@/utils/formatClassName'

type BoundaryProps = {
  children: React.ReactNode
  compact?: Boolean
}

const Boundary = ({ compact, children }: BoundaryProps) => {
  return (
    <div className={formatClassName(`
      mx-auto px-6 sm:px-10
      ${ compact ? 'max-w-6xl' : 'max-w-screen-2xl'}
    `)}
    >
      {children}
    </div>
  )
}

export default Boundary
