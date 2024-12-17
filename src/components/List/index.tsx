type ListProps = {
  type: 'list' | 'item'
  label: string
  children?: React.ReactNode | React.ReactNode[]
}

const List: React.FC<ListProps> = ({ type, label, children }): React.ReactNode => {
  // Se o tipo for lista, renderiza o componente ul.
  return type === 'list' ? (
    <ul aria-label={label} className="list-none">
      {children}
    </ul>

  // Se o tipo for item, renderiza o componente ListItem.
  ) : (
    <ListItem type={type} label={label}>
      {children}
    </ListItem>
  )
}

const ListItem: React.FC<ListProps> = ({ label, children }): React.ReactNode => {
  return (
    <li aria-label={label}>
      {children}
    </li>
  )
}

export default List
