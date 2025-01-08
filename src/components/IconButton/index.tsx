import { formatClassName } from '@/utils/formatClassName'

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
      className={formatClassName(`
        ${Css.getBackgroundColor({ background })}
        ${Css.getBorder({ border })}
        ${Css.getRounded({ children, noPadding })}
      `)}
    >
      <div className={Css.getFlexibleLayout({ children })}>
        <span className={Css.getOpacity({ noOpacity })}>
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

const Css = {
  getRounded: ({ children, noPadding }: Pick<IconButtonProps, 'children' | 'noPadding'>) => {
    return formatClassName(`
      ${
        /** Se o botão de ícone não possuir um filho, então renderiza o botão de ícone redondo */
        children  && !noPadding && 'm-2 py-3 px-4 rounded-xl' ||
        !children && !noPadding && 'm-2 p-2 rounded-full'
      }
    `)
  },
  getBackgroundColor: ({ background }: Pick<IconButtonProps, 'background'>) => {
    return formatClassName(`
      ${
        /** Escolhe a cor de fundo do botão de ícone */
        background === 'transparent' && 'bg-transparent' ||
        background === 'red'         && 'bg-red-500'
      }
    `)
  },
  getBorder: ({ border }: Pick<IconButtonProps, 'border'>) => {
    return formatClassName(`
      ${
        /** Se o botão de ícone possuir o atributo de borda, então renderiza a borda */
        border  && 'border border-gray-200 hover:border-gray-400' ||
        !border && ''
      }
    `)
  },
  getFlexibleLayout: ({ children }: Pick<IconButtonProps, 'children'>) => {
    return formatClassName(`
      ${
        /** Se o botão de ícone possuir um filho, então renderiza o layout flexível */
        children  && 'flex justify-center items-center gap-1.5' ||
        !children && ''
      }
    `)
  },
  getOpacity: ({ noOpacity }: Pick<IconButtonProps, 'noOpacity'>) => {
    return formatClassName(`
      ${
        /** Se o botão de ícone possuir o atributo de opacidade, então renderiza a opacidade */
        noOpacity  && 'opacity-100' ||
        !noOpacity && 'opacity-80'
      }
    `)
  }
}

export default IconButton
