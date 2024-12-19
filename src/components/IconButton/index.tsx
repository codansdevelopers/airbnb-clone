import cx from 'clsx'

type Props = {
  background: 'transparent' | 'red'
  icon: React.ReactNode
  title: string
  type: 'button' | 'submit' | 'reset'
}

const IconButton: React.FC<Props> = ({
  background,
  icon,
  title,
  type,
}): React.ReactNode => {
  return (
    <button
      title={title}
      type={type}
      className={cx("m-2 p-2 rounded-full", getBackground(background))}
    >
      <span>{icon}</span>
    </button>
  )
}

const getBackground = (background: string): React.ReactNode => {
  return cx({
    'bg-transparent': background === 'transparent',
    'bg-red-500':     background === 'red',
  })
}

export default IconButton
