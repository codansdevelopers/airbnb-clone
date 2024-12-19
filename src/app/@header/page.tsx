import { Suspense } from 'react'
import HorizontalScrollTab from '@/widgets/HorizontalScrollTab'
import SearchForm from '@/widgets/SearchForm'

export const dynamic = 'force-dynamic'

export default async function Page() {
  return (
    <>
      <SearchForm />
      <Suspense>
        <HorizontalScrollTab />
      </Suspense>
    </>
  )
}
