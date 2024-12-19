import { Suspense } from 'react'
import HorizontalScrollTab from '@/widgets/HorizontalScrollTab'
import SearchForm from '@/widgets/SearchForm'
import TopBar from '@/widgets/TopBar'

export const dynamic = 'force-dynamic'

export default async function Page() {
  return (
    <>
      <TopBar />
      <SearchForm />
      <Suspense>
        <HorizontalScrollTab />
      </Suspense>
    </>
  )
}
