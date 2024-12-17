import { Suspense } from 'react'
import HorizontalTabScroll from '@/containers/HorizontalTabScroll'
import SearchForm from '@/containers/SearchForm'

export default async function Page() {
  return (
    <div className="p-2">
      <SearchForm />
      <Suspense>
        <HorizontalTabScroll />
      </Suspense>
    </div>
  )
}
