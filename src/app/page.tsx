import IconButton from '@/components/IconButton'
import Input from '@/components/Input'

export default function Page() {
  return (
    <div className="p-2">
      <Input label="Inicie a sua busca" name="search" type="search">
        <IconButton background="ui" iconName="search" title="Search" type="submit" />
      </Input>
    </div>
  )
}
