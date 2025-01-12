import HorizontalRule from '@/components/HorizontalRule'

import DisplayCards from '@/widgets/DisplayCards'
import FooterContent from '@/widgets/FooterContent'
import HorizontalScrollTab from '@/widgets/HorizontalScrollTab'
import SearchForm from '@/widgets/SearchForm'
import TopBar from '@/widgets/TopBar'

export default async function Page() {
  return (
    <>
      <header>
        <div className="py-2">
          <TopBar showNavigation={true} />
          <SearchForm />
        </div>
      </header>

      <div className="py-2">
        <HorizontalRule />
      </div>

      <main>
        <HorizontalScrollTab />
        <DisplayCards />
      </main>

      <footer>
        <FooterContent />
      </footer>
    </>
  )
}
