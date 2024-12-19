import Boundary from '@/components/Boundary'
import Logo from '@/components/Logo'

const TopBar: React.FC = () => {
  return (
    <Boundary direction="top-sides">
      <div>
        <Logo />
      </div>
    </Boundary>
  )
}

export default TopBar
