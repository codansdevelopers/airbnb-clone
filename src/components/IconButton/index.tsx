import cx from 'clsx'

type Props = {
  background: 'transparent' | 'red'
  border?: boolean
  children?: React.ReactNode
  icon: React.ReactNode
  noOpacity?: boolean
  title: string
  type: 'button' | 'submit' | 'reset'
}

const IconButton: React.FC<Props> = ({
  background,
  border,
  children,
  icon,
  noOpacity,
  title,
  type,
}): React.ReactNode => {
  return (
    <button
      title={title}
      type={type}
      className={cx(
        getRound(children),
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

const getRound = (children?: React.ReactNode): string => {
  return cx({
    'm-2 py-3 px-4 rounded-xl': children,
    'm-2 p-2 rounded-full'    : !children,
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
