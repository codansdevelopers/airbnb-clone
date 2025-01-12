import '@/globals.css'
import { Metadata } from 'next'
import { montserrat } from '@/fonts/google'

import Footer from '@/layout/Footer'

import SearchForm from '@/widgets/SearchForm'
import TopBar from '@/widgets/TopBar'

export const metadata: Metadata = {
  title: 'Airbnb | Locações por temporada, chalés, casas de praia e muito mais.',
  description: 'Reserve um Airbnb para cada tipo de viagem → 7 milhões de locações por temporada → 2 milhões de Preferidos dos Hóspedes → Mais de 220 países e regiões em todo o mundo.',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={montserrat.variable}>
      <body>
        <header>
          <TopBar showNavigation={true} />
          <SearchForm />
        </header>
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
