import { IconStar, IconStarFilled, IconStarHalfFilled } from "@tabler/icons-react";

type RatingProps = {
  rating: number
  size: number
}

const Rating = ({ rating, size }: RatingProps): React.JSX.Element => {
  const mTotalRating = Math.floor(rating)
  const mHasHalfStar = rating % 1 !== 0
  const mHasEmptyStars = 5 - mTotalRating - (mHasHalfStar ? 1 : 0)

  // Renderiza estrelas preenchidas, meia estrela e estrelas vazias!
  const fullStars = Array.from({ length: mTotalRating })
  const halfStars = mHasHalfStar
  const emptyStars = Array.from({ length: mHasEmptyStars })

  return (
    <>
      {fullStars.map(() => <IconStarFilled size={size} />)}
      {halfStars && <IconStarHalfFilled size={size} />}
      {emptyStars.map(() => <IconStar size={size} />)}
    </>
  )
}

export default Rating
