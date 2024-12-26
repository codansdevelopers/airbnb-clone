type CardProps = {
  badge?: React.ReactNode
  children: React.ReactNode
  title: string
  host: string
  duration: string
  price: number
}

const Card = ({ 
  badge,
  children,
  duration,
  host,
  price,
  title
}: CardProps) => {
  return (
    <article className="flex flex-col gap-y-2">
      <div className="relative overflow-hidden rounded-lg sm:rounded-xl bg-gray-200 border border-gray-200">
        {/* Renderiza esse bloco, apenas se o badge estiver disponível */}
        {badge && (
          <div className="absolute top-0 left-0 m-4">
            {badge}
          </div>
        )}

        {/* Aqui ficará a imagem principal exibida pelo Card */}
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
