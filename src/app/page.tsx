import { Suspense } from 'react'
import HorizontalScrollTab from '@/containers/HorizontalScrollTab'
import SearchForm from '@/containers/SearchForm'

export default async function Page() {
  return (
    <div className="p-2">
      <SearchForm />
      <Suspense>
        <HorizontalScrollTab />
      </Suspense>
    </div>
  )
}
