import IconButton from '@/components/IconButton'
import Input from '@/components/Input'
import Image from 'next/image'

export default function Page() {
  return (
    <div className="p-2">
      <Input label="Inicie a sua busca" name="search" type="search">
        <IconButton background="ui" iconName="search" title="Botão de pesquisa" type="submit" />
      </Input>
    </div>
  )
}
