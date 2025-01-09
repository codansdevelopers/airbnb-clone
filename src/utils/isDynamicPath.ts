export const isDynamicPath = (pathname: string): boolean => {
  // Checa se a rota é um subpath dinâmico, como `/qualquer-coisa-slug`, se for, aplica alguma lógica.
  // [\w] - Verifica se a rota começa com qualquer caractere alfanumérico.
  // (.*) - Verifica se a rota tem qualquer coisa depois do caractere alfanumérico.
  return /[\w](.*)/.test(pathname)
}
