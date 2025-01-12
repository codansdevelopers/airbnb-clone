import React from 'react'

enum Typo {
  Heading1 = 'text-2xl font-semibold',
  Heading2 = 'text-xl font-medium',
  Heading3 = 'text-lg font-medium',
}

type TypographyProps = {
  as: 'h1' | 'h2' | 'h3'
  variant: 'title' | 'subtitle' | 'body'
  children: React.ReactNode
}

const Typography = ({ as, variant, children }: TypographyProps): React.JSX.Element => {
  // Mapeamento de classes CSS para cada variante de texto.
  const definedClassNames = {
    title: Typo.Heading1,
    subtitle: Typo.Heading2,
    body: Typo.Heading3,
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
