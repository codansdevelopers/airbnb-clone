import { getApi } from '@/utils/api'

type PageProps = {
  id: string
}

export async function generateStaticParams() {
  const api = await getApi()

  // Retorna uma lista de `params` para popular o [id], que forma um segmento dinâmico da URL.
  // Isso significa que o Next.js irá gerar uma página estática para cada `id` retornado.
  // Referência: https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes
  return api.accommodation.map((post) => ({
    id: post.id,
  }))
}

export default async function Page({
  params,
}: {
  params: Promise<PageProps>
}) {
  const { id } = await params

  return (
    <div>
      <h1>Accomodation, {id}</h1>
    </div>
  )
}
