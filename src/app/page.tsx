import DisplayCards from '@/widgets/DisplayCards'
import Footer from '@/widgets/FooterContent'
import HorizontalScrollTab from '@/widgets/HorizontalScrollTab'
import SearchForm from '@/widgets/SearchForm'
import TopBar from '@/widgets/TopBar'

export default async function Page() {
  return (
    <>
      <header>
        <TopBar showNavigation={true} />
        <SearchForm />
      </header>

      <main>
        <HorizontalScrollTab />
        <DisplayCards />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  )
}
