import Boundary from '@/components/Boundary'

type FooterContentProps = {
  compact?: boolean
}

const FooterContent = ({ compact }: FooterContentProps): React.JSX.Element => {
  // Ano atual
  const year = new Date().getFullYear()

  return (
    <div className="bg-gray-100">
      <Boundary compact={compact}>
        <div className="py-4">
          <h4>&copy; {year} Airbnb, Inc.</h4>

          <ul className="text-sm mt-2">
            <li className="inline-block">
              Privacidade
            </li>
            <li className="inline-block">
              <span className="mx-1.5">
                &middot;
              </span>
              Termos
            </li>
            <li className="inline-block">
              <span className="mx-1.5">
                &middot;
              </span>
              Mapa do site
            </li>
            <li className="inline-block">
              <span className="mx-1.5">
                &middot;
              </span>
              Informações da empresa
            </li>
          </ul>
        </div>
      </Boundary>
    </div>
  )
}

export default FooterContent
