import { formatClassName } from '@/utils/formatClassName'
import Style from './style.module.css'

type ListProps = {
  children?: React.ReactNode
  label: string
  scroll?: 'horizontal' | 'vertical'
  type: 'list' | 'item'
}

const List: React.FC<ListProps> = ({
  children,
  label,
  scroll,
  type,
}): React.ReactNode => {
  // Se o tipo for lista, renderiza o componente ul.
  return type === 'list' ? (
    <ul
      aria-label={label}
      className={Css.getScrollbar({ scroll })}
    >
      {children}
    </ul>

  // Se o tipo for item, renderiza o componente ListItem.
  ) : (
    <ListItem label={label} scroll={scroll} type={type}>
      {children}
    </ListItem>
  )
}

const ListItem: React.FC<ListProps> = ({ label, scroll, children }): React.ReactNode => {
  return (
    <li aria-label={label} className={Css.getScrollType({ scroll })}>
      {children}
    </li>
  )
}

const Css = {
  getScrollbar: ({ scroll }: Pick<ListProps, 'scroll'>): string => {
    return formatClassName(`
      'mr-32 sm:mr-24'

      ${
        /** Adiciona a classe de estilo do scroll */
        Style.Scrollbar
      }

      ${
        /** Seleciona a classe de acordo com a propriedade scroll */
        scroll === 'horizontal' && 'list-none overflow-auto whitespace-nowrap' ||
        scroll === 'vertical'   && 'block list-none'
      }
    `)
  },
  getScrollType: ({ scroll }: Pick<ListProps, 'scroll'>): string => {
    return formatClassName(`
      ${
        /** Adiciona a classe de estilo do scroll */
        scroll === 'horizontal' && 'inline-block' ||
        scroll === 'vertical'   && 'block'
      }
    `)
  }
}

export default List
