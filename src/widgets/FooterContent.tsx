import Boundary from '@/components/Boundary'

const FooterContent = (): React.JSX.Element => {
  // Ano atual
  const year = new Date().getFullYear()

  return (
    <div className="bg-gray-100">
      <Boundary direction="around">
        <div className="py-4">
          <h4>&copy; {year} Airbnb, Inc.</h4>

          <ul className="text-sm mt-2">
            <li className="inline mr-1.5">Privacidade |</li>
            <li className="inline mr-1.5">Termos |</li>
            <li className="inline mr-1.5">Mapa do site |</li>
            <li className="inline mr-1.5">Informações da empresa</li>
          </ul>
        </div>
      </Boundary>
    </div>
  )
}

export default FooterContent
