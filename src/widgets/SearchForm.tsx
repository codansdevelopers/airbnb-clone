import { IconSearch } from '@/assets/icons'
import { formatClassName } from '@/utils/formatClassName'

import IconButton from '@/components/IconButton'
import Input from '@/components/Input'

type ResponsiveIcon = {
  id: string
  className: string
  background: 'red' | 'transparent'
  size: number
}

type SearchFormProps = {
  compact?: boolean
}

const SearchForm = ({ compact }: SearchFormProps): React.JSX.Element => {
  // Define o ícone da lupa de acordo com o tamanho da tela.
  // No caso de telas menores que 640px, o ícone é apresentado em um tamanho maior e com fundo transparente.
  // Enquanto que em telas maiores que 640px, o ícone é apresentado em um tamanho menor e com fundo vermeho.
  const responsiveIcon: ResponsiveIcon[] = [
    {
      id: crypto.randomUUID(),
      className: 'hidden sm:block',
      background: 'red',
      size: 24,
    },
    {
      id: crypto.randomUUID(),
      className: 'sm:hidden',
      background: 'transparent',
      size: 32,
    },
  ]

  return (
    <div className={formatClassName(`
      w-full mx-auto
      ${compact ? 'max-w-md' : 'max-w-2xl'}
    `)}>
      <Input
        compact={compact}
        label="Inicie a sua busca"
        name="search"
        type="search"
      >
        {/* Escolhe como o ícone de lupa do `input` vai ser apresentado em diferentes tipos de tela. */}
        {responsiveIcon.map((icon) => (
          <span key={icon.id} className={icon.className}>
            <IconButton
              background={icon.background}
              title="Botão de pesquisa"
              type="submit"
              noOpacity={true}
              icon={(
                <IconSearch
                  aria-label="Lupa"
                  className={formatClassName(`
                    size-5 sm:invert
                    ${compact ? 'sm:size-4' : 'sm:size-8'}
                  `)}
                  size={icon.size}
                /> 
              )}
            />
          </span>
        ))}
      </Input>
    </div>
  )
}

export default SearchForm
