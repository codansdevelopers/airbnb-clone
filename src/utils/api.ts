import type { PublicApi, Accommodation } from '@/types/Api'

const requestInit: RequestInit = {
  cache: 'force-cache',
  next: {
    revalidate: 86400,
  },
  headers: {
    'x-site-api': 'airbnb.com.br',
  },
}

export const getApi = async (): Promise<PublicApi> => {
  try {
    const response = await fetch('https://web.codans.com.br', requestInit)
    const api: PublicApi = await response.json()
    // Retorna os dados da API.
    return api
  } catch (e) {
    // Fazer tratamento de erro aqui ou enviar para algum serviço de monitoramento.
    // Por enquanto, só vamos logar o erro no console.
    console.error(e)
    throw e
  }
}

export const getAccommodation = async (id: string): Promise<Accommodation | undefined> => {
  try {
    const response = await fetch('https://web.codans.com.br', requestInit)
    const api: PublicApi = await response.json()

    // Retorna os dados do post específico.
    // O método find() retorna o primeiro item que satisfaz a condição.
    const post = api.accommodation.find((item: Accommodation) => {
      return item.id === id
    })

    return post
  } catch (e) {
    // Fazer tratamento de erro aqui ou enviar para algum serviço de monitoramento.
    // Por enquanto, só vamos logar o erro no console.
    console.error(e)
    throw e
  }
}
