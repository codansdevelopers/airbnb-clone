import { Suspense } from 'react'
import HorizontalScrollTab from '@/widgets/HorizontalScrollTab'
import SearchForm from '@/widgets/SearchForm'

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
