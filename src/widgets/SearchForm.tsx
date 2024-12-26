import Image from 'next/image'

import Boundary from '@/components/Boundary'
import IconButton from '@/components/IconButton'
import Input from '@/components/Input'

type ResponsiveIcon = {
  id: string
  className: string
  background: 'red' | 'transparent'
  size: number
}

const SearchForm: React.FC = (): React.ReactNode => {
  // Define o ícone da lupa de acordo com o tamanho da tela.
  // No caso de telas menores que 640px, o ícone é apresentado em um tamanho maior e com fundo transparente.
  // Enquanto que em telas maiores que 640px, o ícone é apresentado em um tamanho menor e com fundo vermeho.
  const responsiveIcon: ResponsiveIcon[] = [
    {
      id: '001',
      className: 'hidden sm:block',
      background: 'red',
      size: 24,
    },
    {
      id: '002',
      className: 'sm:hidden',
      background: 'transparent',
      size: 32,
    },
  ]

  return (
    <Boundary direction="top-sides">
      <div className="max-w-3xl mx-auto">
        <Input label="Inicie a sua busca" name="search" type="search">
          {/* Escolhe como o ícone de lupa do `input` vai ser apresentado em diferentes tipos de tela. */}
          {responsiveIcon.map((icon) => (
            <span key={icon.id} className={icon.className}>
              <IconButton
                background={icon.background}
                title="Botão de pesquisa"
                type="submit"
                noOpacity={true}
                icon={(
                  <Image
                    className="sm:invert"
                    src="/assets/search.png"
                    alt="Lupa"
                    width={icon.size}
                    height={icon.size}
                  />
                )}
              />
            </span>
          ))}
        </Input>
      </div>
    </Boundary>
  )
}

export default SearchForm
