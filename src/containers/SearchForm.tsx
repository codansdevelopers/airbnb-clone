import IconButton from '@/components/IconButton'
import Input from '@/components/Input'

const SearchForm: React.FC = (): React.ReactNode => {
  return (
    <Input label="Inicie a sua busca" name="search" type="search">
      <IconButton
        background="ui"
        iconName="search"
        title="Botão de pesquisa"
        type="submit"
      />
    </Input>
  )
}

export default SearchForm
