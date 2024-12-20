import cx from 'clsx'

type BoundaryProps = {
  children: React.ReactNode
  direction: 'around' | 'top-sides'
  role?: React.AriaRole
}

const Boundary: React.FC<BoundaryProps> = ({ direction, role, children }) => {
  return (
    <div role={role} className={cx('max-w-screen-2xl mx-auto', {
      // Seleciona a classe de acordo com a propriedade direction
      'px-6 sm:px-10'             : direction === 'around',
      'px-6 pt-4 sm:px-10 sm:pt-6': direction === 'top-sides',
    })}>
      {children}
    </div>
  )
}

export default Boundary
