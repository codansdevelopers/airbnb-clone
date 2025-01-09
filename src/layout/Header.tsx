import SearchForm from "@/widgets/SearchForm"
import TopBar from "@/widgets/TopBar"

type HeaderProps = {
  hideSearch?: boolean
}

const Header = ({ hideSearch }: HeaderProps): React.JSX.Element => {
  return (
    <header className="">
      <TopBar />

      {/* Caso hideSearch seja falso, renderiza o componente SearchForm. */}
      {!hideSearch && (
        <SearchForm />
      )}
    </header>
  )
}

export default Header
