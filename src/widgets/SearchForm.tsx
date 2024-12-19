import Image from 'next/image'
import IconButton from '@/components/IconButton'
import Input from '@/components/Input'

const SearchForm: React.FC = (): React.ReactNode => {
  return (
    <Input label="Inicie a sua busca" name="search" type="search">
      <IconButton
        background="red"
        title="Botão de pesquisa"
        type="submit"
        icon={(
          <Image
            className="invert"
            src="/assets/search.png"
            alt="Lupa"
            width={24}
            height={24}
          />
        )}
      />
    </Input>
  )
}

export default SearchForm
