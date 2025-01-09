'use client'

import { usePathname } from "next/navigation"
import { isDynamicPath } from '@/utils/isDynamicPath'

import SearchForm from "@/widgets/SearchForm"
import TopBar from "@/widgets/TopBar"

const Header = (): React.JSX.Element => {
  const pathname = usePathname()

  return (
    <header>
      <TopBar isDynamicPath={isDynamicPath(pathname)}>
        <SearchForm compact={true} />
      </TopBar>

      {/* Não renderiza o SearchForm de qualquer jeito em subpaths */}
      {!isDynamicPath(pathname) && (
        <SearchForm />
      )}
    </header>
  )
}

export default Header
