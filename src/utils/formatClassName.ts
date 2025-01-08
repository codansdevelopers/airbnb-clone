export const formatClassName = (className: string): string => {
  // Remove espaços em branco duplicados, caso existam.
  return className.trim().split(/\s+/).join(' ')
}
