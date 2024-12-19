import { Suspense } from 'react'
import HorizontalScrollTab from '@/widgets/HorizontalScrollTab'

export const dynamic = 'force-dynamic'

export default async function Page() {
  return (
    <Suspense>
      <HorizontalScrollTab />
    </Suspense>
  )
}
