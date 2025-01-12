import { notFound } from 'next/navigation'
import { getApi, getAccommodation } from '@/utils/api'

import Boundary from '@/components/Boundary'
import Typography from '@/components/Typography'

import AccomodationDescription from '@/widgets/AccomodationDescription'
import FooterContent from '@/widgets/FooterContent'
import Gallery from '@/widgets/Gallery'
import SearchForm from '@/widgets/SearchForm'
import Testimonial from '@/widgets/Testimonial'
import TopBar from '@/widgets/TopBar'

type PageProps = {
  id: string
}

export async function generateStaticParams() {
  const api = await getApi()

  // Retorna uma lista de `params` para popular o [id], que forma um segmento dinâmico da URL.
  // Isso significa que o Next.js irá gerar uma página estática para cada `id` retornado.
  // Referência: https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes
  return api.accommodation.map((post) => {
    return {
      id: post.slug,
    }
  })
}

export default async function Page({
  params,
}: {
  params: Promise<PageProps>
}) {
  const { id } = await params
  // Quero receber a API aqui para poder filtrar o post pelo `id`.
  // isso me permite acessar o post específico que corresponde ao `id` passado.
  const post = await getAccommodation(id)

  if (!post) {
    // Se o post não for encontrado, eu retorno uma página 404.
    // Isso é feito com a função `notFound` do Next.js.
    notFound()
  }

  return (
    <>
      <header>
        <TopBar showNavigation={false}>
          <SearchForm compact={true} />
        </TopBar>
      </header>

      <main>
        <Boundary compact={true}>
          <Typography as="h1" variant="title">
            Rancho da Lua, tranquilo e rodeado por montanhas
          </Typography>
          <Gallery thumbnails={post.photos} />
          <AccomodationDescription />
          <Testimonial testimonials={post.testimonials} />
        </Boundary>
      </main>

      <footer>
        <FooterContent />
      </footer>
    </>
  )
}
