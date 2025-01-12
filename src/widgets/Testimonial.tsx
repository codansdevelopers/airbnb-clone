import Image from "next/image"
import { IconStarFilled } from "@tabler/icons-react"
import type { Testimonials } from '@/types/Api'

import Rating from "@/components/Rating"
import Typography from "@/components/Typography"

type TestimonialProps = {
  testimonials: Testimonials[]
}

export const Testimonial = ({ testimonials }: TestimonialProps): React.JSX.Element => {
  return (
    <div>
      <div className="mt-2">
        <Typography as="h2" variant="display">
          Depoimentos
        </Typography>

        <span className="mt-1.5 inline-flex items-center gap-0.5">
          <IconStarFilled className="size-4" />
          <span className="text-sm">4.9 (400+ avaliações)</span>
        </span>
      </div>

      <div>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="mt-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Image
                  className="w-12 h-12 rounded-full"
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                />
              </div>

              {/* Descrição */}
              <div>
                <header className="flex flex-col gap-2">
                  <div className="flex flex-col">
                    <Typography as="h3" variant="body2">
                      {testimonial.name}
                    </Typography>
                    <span className="text-xs">
                      {testimonial.customerTime} anos no Airbnb
                    </span>
                  </div>

                  <ul className="flex items-center">
                    <li className="flex gap-0.5">
                      <Rating rating={testimonial.rating} size={12} />
                    </li>
                    <li className="text-xs">
                      <span className="mx-1.5">
                        &middot;
                      </span>
                      <span className="font-medium">
                        {testimonial.createdAt} dias atrás
                      </span>
                    </li>
                    <li className="text-xs">
                      <span className="mx-1.5">
                        &middot;
                      </span>
                      Ficou {testimonial.stayedAt} noite(s)
                    </li>
                  </ul>
                </header>

                <div className="mt-2">
                  <p className="text-sm">
                    {testimonial.comment}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonial
