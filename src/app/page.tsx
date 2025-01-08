import { Fragment } from "react"

import DisplayCards from '@/widgets/DisplayCards'
import HorizontalScrollTab from '@/widgets/HorizontalScrollTab'
import SearchForm from '@/widgets/SearchForm'
import TopBar from '@/widgets/TopBar'

export default async function Page() {
  return (
    <Fragment>
      <header>
        <TopBar />
        <SearchForm />
      </header>

      <HorizontalScrollTab />
      <DisplayCards />
    </Fragment>
  )
}
