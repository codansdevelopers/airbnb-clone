type BoundaryProps = {
  children: React.ReactNode
}

const Boundary: React.FC<BoundaryProps> = ({ children }) => {
  return (
    <div className="max-w-screen-2xl mx-auto px-6">
      {children}
    </div>
  )
}

export default Boundary
