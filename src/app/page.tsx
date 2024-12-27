import { Fragment } from "react"

import DisplayCards from "@/widgets/DisplayCards"
import HorizontalScrollTab from '@/widgets/HorizontalScrollTab'

export default async function Page() {
  return (
    <Fragment>
      <HorizontalScrollTab />
      <DisplayCards />
    </Fragment>
  )
}
