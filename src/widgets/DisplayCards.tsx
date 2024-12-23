import Image from 'next/image'

import Boundary from '@/components/Boundary'
import Card from '@/components/Card'

const tweentyCount = new Array(20).fill(null)

const DisplayCards: React.FC = () => {
  return (
    <section>
      <Boundary direction="top-sides">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {tweentyCount.map(() => (
            <Card
              title="Colônia de Pescadores, Brasil"
              host="Maria"
              duration="8 - 13 de jan"
              price={229}
            >
              <Image
                className="border-none object-cover aspect-square"
                width={1180}
                height={820}
                src="/img/photos/01/0001.jpg"
                alt=""
              />
            </Card>
          ))}
        </div>
      </Boundary>
    </section>
  )
}

export default DisplayCards
