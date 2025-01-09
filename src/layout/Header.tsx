'use client'

import { usePathname } from "next/navigation"

import SearchForm from "@/widgets/SearchForm"
import TopBar from "@/widgets/TopBar"

const Header = (): React.JSX.Element => {
  const pathname = usePathname()

  // Checa se a rota é um subpath dinâmico, como `/qualquer-coisa-slug`, se for, não exibe alguns itens.
  // [\w] - Verifica se a rota começa com qualquer caractere alfanumérico.
  // (.*) - Verifica se a rota tem qualquer coisa depois do caractere alfanumérico.
  const isDynamicPath = /[\w](.*)/.test(pathname)

  return (
    <header>
      <TopBar isDynamicPath={isDynamicPath}>
        <SearchForm compact={true} />
      </TopBar>

      {/* Não renderiza o SearchForm de qualquer jeito em subpaths */}
      {!isDynamicPath && (
        <SearchForm />
      )}
    </header>
  )
}

export default Header
