import Image from 'next/image'

import Boundary from '@/components/Boundary'
import IconButton from '@/components/IconButton'
import Input from '@/components/Input'

const SearchForm: React.FC = (): React.ReactNode => {
  return (
    <Boundary direction="top-sides">
      <div className="max-w-4xl mx-auto">
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
      </div>
    </Boundary>
  )
}

export default SearchForm
