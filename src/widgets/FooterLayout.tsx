import Boundary from '@/components/Boundary'
import Footer from '@/components/Footer'

const FooterLayout = (): React.JSX.Element => {
  return (
    <div className="bg-gray-200">
      <Boundary direction="around">
        <Footer />
      </Boundary>
    </div>
  )
}

export default FooterLayout
