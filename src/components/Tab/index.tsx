import Image from 'next/image'

type TabProps = {
  children?: React.ReactNode
  title: string
  image?: {
    source: string
    description: string
  }
}

const Tab: React.FC<TabProps> = ({ title, image }): React.ReactNode => {
  return (
    <div>
      {image && (
        <Image
          src={image.source}
          alt={image.description}
          width={96}
          height={96}
        />
      )}
      <span className="text-gray-800 text-xs">
        {title}
      </span>
    </div>
  )
}

export default Tab
