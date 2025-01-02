import { type HTMLInputTypeAttribute, useId } from "react"

type InputProps = {
  children: React.ReactNode | React.ReactNode[]
  label: string
  name: string
  type: HTMLInputTypeAttribute
}

const Input: React.FC<InputProps> = ({ children, label, name, type }) => {
  const id = useId()

  return (
    <div className="flex items-center overflow-clip rounded-full ring-1 ring-gray-200 shadow-lg shadow-gray-200">
      <ResponsiveIcon>
        {children}
      </ResponsiveIcon>

      {/* Campo de pesquisa */}
      <label className="sr-only" htmlFor={id}>
        {label}
      </label>

      <input
        className="w-full py-2 sm:p-4 focus:outline-none bg-transparent"
        id={id}
        name={name}
        type={type}
        placeholder={label}
      />

      <SearchIcon>
        {children}
      </SearchIcon>
    </div>
  )
}

const ResponsiveIcon = ({ children }: { children?: React.ReactNode }) => (
  <span className="sm:hidden">
    {children}
  </span>
)

const SearchIcon = ({ children }: { children?: React.ReactNode }) => (
  <span className="hidden sm:block">
    {children}
  </span>
)

export default Input
