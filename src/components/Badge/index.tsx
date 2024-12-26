type BadgeProps = {
  text: string
}

const Badge = ({ text }: BadgeProps): React.JSX.Element => {
  return (
    <span
      aria-label={text}
      className="py-1 px-2 rounded-full shadow-2xl shadow-gray-800 border border-gray-200 bg-white font-semibold text-sm"
    >
      {text}
    </span>
  )
}

export default Badge
