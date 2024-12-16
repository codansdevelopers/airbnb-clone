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
    <div className="flex overflow-clip rounded-full ring-1 ring-gray-200 shadow-lg shadow-gray-200">
      <label className="sr-only" htmlFor={id}>{label}</label>
      <input className="w-full p-4 focus:outline-none" id={id} name={name} type={type} placeholder={label} />

      {children}
    </div>
  )
}

export default Input
