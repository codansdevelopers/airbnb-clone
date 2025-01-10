import type { ProfileApi, Profile, PublicApi, Accommodation } from '@/types/Api'

const requestInit: RequestInit = {
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
      return item.id === decodeURIComponent(id)
    })

    return post
  } catch (e) {
    // Fazer tratamento de erro aqui ou enviar para algum serviço de monitoramento.
    // Por enquanto, só vamos logar o erro no console.
    console.error(e)
    throw e
  }
}

export const getRandomProfile = async (): Promise<Profile> => {
  try {
    const response = await fetch('https://randomuser.me/api/?nat=br')
    const api: ProfileApi = await response.json()
    
    // Retorna um perfil aleatório.
    return api.results[0]
  } catch (e) {
    // Fazer tratamento de erro aqui ou enviar para algum serviço de monitoramento.
    // Por enquanto, só vamos logar o erro no console.
    console.error(e)
    throw e
  }
}
