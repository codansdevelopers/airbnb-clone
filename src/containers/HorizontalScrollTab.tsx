import type { PublicApi } from '@/types/Api'
import Tab from '@/components/Tab'

const HorizontalScrollTab: React.FC = async () => {
  // Aguarda a resposta da API.
  // A função getPublicAssets é assíncrona, então o await é necessário.
  const response = await getPublicAssets()

  return response.icons.map((icon) => (
    <Tab
      key={icon.id}
      title={icon.description}
      image={{
        source: icon.source,
        description: icon.description,
      }}
    />
  ))
}

const getPublicAssets = async (): Promise<PublicApi> => {
  try {
    const response = await fetch(`${process.env.HOSTNAME}/api.json`)
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

export default HorizontalScrollTab
