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
    <div
      aria-label="Tab"
      className="inline-flex flex-col items-center"
    >
      {image && (
        <Image
          src={image.source}
          alt={image.description}
          width={24}
          height={24}
        />
      )}
      <span className="text-gray-800 text-xs">
        {title}
      </span>
    </div>
  )
}

export default Tab
