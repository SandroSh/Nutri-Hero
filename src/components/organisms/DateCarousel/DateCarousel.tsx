import React from 'react'
import CustomCarousel from '../Carousel/CustomCarousel'
import { generateDates } from '@/utils/utils'
import { CarouselDateCard } from '@/components/atoms/CarouselDateCard'




const DateCarousel = ({ slideToShow, date }: { slideToShow: number, date: Date }) => {
  return (
    <CustomCarousel slidesToShow={slideToShow} className='recepie-carousel' autoplay={false}>
      {
        generateDates(date).map((item, i) => <CarouselDateCard date={item} key={i} />
        )}

    </CustomCarousel>
  )
}

export default DateCarousel