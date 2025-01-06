import { Fragment } from 'react'
import { notFound } from 'next/navigation'
import { IconStarFilled } from '@tabler/icons-react'

import { getApi, getAccommodation } from '@/utils/api'
import Gallery from '@/widgets/Gallery'

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
      id: post.id,
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
    <Fragment>
      <Gallery thumbnails={post.thumbnails} />

      {/* Descrição do espaço inteiro */}
      <div arial-label="Descrição">
        <h2 className="font-medium">
          Espaço inteiro: casa de campo em Minas Gerais
        </h2>

        <ul className="text-sm flex gap-2">
          <li>10 hóspedes</li>
          <li>5 quartos</li>
          <li>5 camas</li>
          <li>6 banheiros</li>
        </ul>

        <span className="mt-1.5 inline-flex items-center gap-0.5">
          <IconStarFilled className="size-4" />
          <span className="text-sm">4.9 (20 avaliações)</span>
        </span>
      </div>
    </Fragment>
  )
}
