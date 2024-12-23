import { Suspense } from "react"

import DisplayCards from "@/widgets/DisplayCards"

export default async function Page() {
  return (
    <Suspense>
      <DisplayCards />
    </Suspense>
  )
}
