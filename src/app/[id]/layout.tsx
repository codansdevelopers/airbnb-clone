import '@/globals.css'
import { montserrat } from '@/fonts/google'

import SearchForm from '@/widgets/SearchForm'
import TopBar from '@/widgets/TopBar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={montserrat.variable}>
      <body>
        <header>
          <TopBar />
          <SearchForm />
        </header>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
