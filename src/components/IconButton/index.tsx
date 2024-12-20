import cx from 'clsx'

type Props = {
  background: 'transparent' | 'red'
  border?: boolean
  icon: React.ReactNode
  title: string
  type: 'button' | 'submit' | 'reset'
}

const IconButton: React.FC<Props> = ({
  background,
  border,
  icon,
  title,
  type,
}): React.ReactNode => {
  return (
    <button
      title={title}
      type={type}
      className={cx("m-2 p-2 rounded-full", getBackground(background), getBorder(border))}
    >
      <span>{icon}</span>
    </button>
  )
}

const getBackground = (background: string): string => {
  return cx({
    'bg-transparent': background === 'transparent',
    'bg-red-500':     background === 'red',
  })
}

const getBorder = (border?: boolean): string => {
  return cx({
    'border border-gray-400': border,
  })
}

export default IconButton
