import type { PublicApi, Accommodation } from '@/types/Api'

const requestInit: RequestInit = {
  cache: 'force-cache',
  next: {
    revalidate: 86400,
  },
  headers: {
    'x-site-api': 'airbnb.com.br',
  }
}

export const getApi = async (): Promise<PublicApi> => {
  try {
    const response = await fetch('https://codans.com.br/api', requestInit)
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

export const getAccommodation = async (id: string): Promise<Accommodation> => {
  try {
    const response = await fetch('https://codans.com.br/api/' + id, requestInit)
    const post: Accommodation = await response.json()
    // Retorna os dados do post específico.
    return post
  } catch (e) {
    // Fazer tratamento de erro aqui ou enviar para algum serviço de monitoramento.
    // Por enquanto, só vamos logar o erro no console.
    console.error(e)
    throw e
  }
}
