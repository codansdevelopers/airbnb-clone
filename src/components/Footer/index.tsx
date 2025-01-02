const Footer = (): React.JSX.Element => {
  // Ano atual
  const year = new Date().getFullYear()

  return (
    <div className="py-4">
      <h4>&copy; {year} Airbnb, Inc.</h4>

      <ul>
        <li>Privacidade</li>
        <li>Termos</li>
        <li>Mapa do site</li>
        <li>Informações da empresa</li>
      </ul>
    </div>
  )
}

export default Footer
