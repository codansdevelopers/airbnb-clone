import SearchForm from "@/widgets/SearchForm"
import TopBar from "@/widgets/TopBar"

const Header = (): React.JSX.Element => {
  return (
    <header className="">
      <TopBar />
      <SearchForm />
    </header>
  )
}

export default Header
