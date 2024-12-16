import cx from 'clsx'
import Heart from '@/icons/Heart'
import Search from '@/icons/Search'

type Props = {
  background: 'transparent' | 'ui'
  iconName: string
  title: string
  type: 'button' | 'submit' | 'reset'
}

const IconButton: React.FC<Props> = ({ background, iconName, title, type }): React.ReactNode => {
  return (
    <button
      title={title}
      type={type}
      className={cx("m-2 p-2 rounded-full", getBackground(background))}
    >
      {getIconFrom(iconName)}
    </button>
  )
}

const getIconFrom = (iconName: string): React.ReactNode => {
  // Lista os ícones disponíveis e retorna o ícone correspondente.
  const iconCollection = {
    heart: <Heart />,
    search: <Search />,
  }[iconName]

  return iconCollection
}

const getBackground = (background: string): React.ReactNode => {
  return cx({
    'bg-transparent': background === 'transparent',
    'bg-red-500':     background === 'ui',
  })
}

export default IconButton
