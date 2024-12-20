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
      {/* Só mostra o ícone da lupa em dispositivos <640px */}
      <span className="sm:hidden">
        {children}
      </span>

      <label className="sr-only" htmlFor={id}>
        {label}
      </label>
      <input
        className="w-full py-2 sm:p-4 focus:outline-none"
        id={id}
        name={name}
        type={type}
        placeholder={label}
      />

      {/* Só mostra o ícone da lupa em dispositivos >=640px */}
      <span className="hidden sm:block">
        {children}
      </span>
    </div>
  )
}

export default Input
