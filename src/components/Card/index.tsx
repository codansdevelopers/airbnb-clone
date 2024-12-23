type CardProps = {
  children: React.ReactNode
  title: string
  host: string
  duration: string
  price: number
}

const Card: React.FC<CardProps> = ({ children, duration, host, price, title }) => {
  return (
    <article className="flex flex-col gap-y-2">
      <div className="overflow-hidden rounded-lg sm:rounded-xl bg-gray-200 border border-gray-200">
        {children}
      </div>

      <div className="text-xs md:text-sm">
        <h3 className="font-semibold">
          {title}
        </h3>

        <div aria-label="Informações">
          <span className="block my-0.5">Anfitriã(o): {host}</span>
          <span className="block my-0.5">{duration}.</span>
          <span className="block my-0.5"><strong>R$ {price}</strong> noite</span>
        </div>
      </div>
    </article>
  )
}

export default Card
