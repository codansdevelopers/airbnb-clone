import cx from 'clsx'
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
      className={cx(
        Style.Scrollbar,
        getScrollDirection(scroll),
      )}
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
    <li aria-label={label} className={getScrollListItem(scroll)}>
      {children}
    </li>
  )
}

const getScrollDirection = (scroll?: string): string => {
  return cx({
    'list-none overflow-auto whitespace-nowrap': scroll === 'horizontal',
    'block list-none'                          : scroll === 'vertical',
  })
}

const getScrollListItem = (scroll?: string): string => {
  return cx({
    'inline-block': scroll === 'horizontal',
    'block'       : scroll === 'vertical',
  })
}

export default List
