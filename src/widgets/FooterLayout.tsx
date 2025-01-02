import Boundary from '@/components/Boundary'
import Footer from '@/components/Footer'

const FooterLayout = (): React.JSX.Element => {
  return (
    <div className="bg-gray-100">
      <Boundary direction="around">
        <Footer />
      </Boundary>
    </div>
  )
}

export default FooterLayout
