import { useId } from "react"
import { formatClassName } from "@/utils/formatClassName"

type InputProps = {
  children: React.ReactNode | React.ReactNode[]
  compact?: boolean
  label: string
  name: string
  type: string
}

const Input = ({ children, compact, label, name, type }: InputProps): React.JSX.Element => {
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
        className={formatClassName(`
          w-full py-2 focus:outline-none bg-transparent
          ${compact ? "text-sm sm:p-0 sm:mx-6" : "sm:p-4"}
        `)}
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
