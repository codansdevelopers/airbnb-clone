import '@/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Airbnb | Locações por temporada, chalés, casas de praia e muito mais.</title>
        <meta name="description" content="Reserve um Airbnb para cada tipo de viagem → 7 milhões de locações por temporada → 2 milhões de Preferidos dos Hóspedes → Mais de 220 países e regiões em todo o mundo." />
      </head>
      <body>{children}</body>
    </html>
  )
}
