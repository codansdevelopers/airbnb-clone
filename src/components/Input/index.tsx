import { useId } from "react"

type InputProps = {
  children: React.ReactNode | React.ReactNode[]
}

const Input: React.FC<InputProps> = ({ children }) => {
  const id = useId()

  return (
    <div
      className="flex overflow-clip rounded-full ring-1 ring-gray-200 shadow-lg shadow-gray-200"
    >
      <label htmlFor={id} className="sr-only">Search</label>
      <input id={id} className="w-full p-4 focus:outline-none" />

      {children}
    </div>
  )
}

export default Input
