import React from 'react'

type TypographyProps = {
  as: 'h1' | 'h2' | 'h3'
  variant: 'title' | 'subtitle' | 'display' | 'body1' | 'body2'
  children: React.ReactNode
}

const Typography = ({ as, variant, children }: TypographyProps): React.JSX.Element => {
  // Mapeamento de classes CSS para cada variante de texto.
  const definedClassNames = {
    title   : 'text-2xl font-semibold',
    subtitle: 'text-xl font-semibold',
    body1   : 'text-lg font-medium',
    body2   : 'font-semibold',
    display : 'text-3xl',
  }

  // Opções para a criação de elementos React.
  // Aqui, eu passo a classe CSS correspondente à variante de texto.
  const options = {
    className: definedClassNames[variant],
  }

  // Criação dinâmica de elementos React.
  const Heading = React.createElement(as, options, children)

  return Heading
}

export default Typography
