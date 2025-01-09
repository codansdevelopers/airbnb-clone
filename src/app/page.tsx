import { Fragment } from "react"

import Header from '@/layout/Header'
import DisplayCards from '@/widgets/DisplayCards'
import HorizontalScrollTab from '@/widgets/HorizontalScrollTab'

export default async function Page() {
  return (
    <Fragment>
      <Header />
      <HorizontalScrollTab />
      <DisplayCards />
    </Fragment>
  )
}
