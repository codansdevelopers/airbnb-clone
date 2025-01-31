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
    <span className="mr-6 sm:mr-8 gap-y-2 inline-flex flex-col items-center justify-center">
      {image && (
        <Image
          className="grayscale opacity-65"
          src={image.source}
          alt={image.description}
          width={24}
          height={24}
        />
      )}
      <span className="text-gray-600 text-xs font-medium">
        {title}
      </span>
    </span>
  )
}

export default Tab
