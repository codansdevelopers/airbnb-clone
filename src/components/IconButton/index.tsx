import cx from 'clsx'

type IconButtonProps = {
  background: 'transparent' | 'red'
  border?: boolean
  children?: React.ReactNode
  icon: React.ReactNode
  noOpacity?: boolean
  noPadding?: boolean
  title: string
  type: 'button' | 'submit' | 'reset'
}

const IconButton = ({
  background,
  border,
  children,
  icon,
  noOpacity,
  noPadding,
  title,
  type,
}: IconButtonProps): React.JSX.Element => {
  return (
    <button
      title={title}
      type={type}
      className={cx(
        getRound(children, noPadding),
        getBackground(background),
        getBorder(border),
      )}
    >
      <div className={getFlexibleLayout(children)}>
        <span className={cx({ 'opacity-80': !noOpacity })}>
          {icon}
        </span>

        {/* Se o elemento possuir um filho, então renderiza o `span`. */}
        {children && (
          <span className="text-xs font-medium">
            {children}
          </span>
        )}
      </div>
    </button>
  )
}

const getRound = (children?: React.ReactNode, noPadding?: boolean): string => {
  return cx({
    'm-2 py-3 px-4 rounded-xl': children  && !noPadding,
    'm-2 p-2 rounded-full'    : !children && !noPadding,
  })
}

const getBackground = (background: string): string => {
  return cx({
    'bg-transparent': background === 'transparent',
    'bg-red-500'    : background === 'red',
  })
}

const getBorder = (border?: boolean): string => {
  return cx({
    'border border-gray-200 hover:border-gray-400': border,
  })
}

const getFlexibleLayout = (children?: React.ReactNode): string => {
  return cx({
    'flex justify-center items-center gap-1.5': children,
  })
}

export default IconButton
