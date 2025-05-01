import React, { useState } from 'react'
import CustomCarousel from '../Carousel/CustomCarousel'
import { generateDates } from '@/utils/utils'
import { CarouselDateCard } from '@/components/atoms/CarouselDateCard'




const DateCarousel = ({ slideToShow, date, handleDateChange }: { slideToShow: number, date: Date, handleDateChange?: () => void }) => {
  const [dates, setDates] = useState(generateDates(date));

  const handleDateClick = (index:number) => {
    const updatedDates = dates.map((item, i) => ({
      ...item,
      isActive: i === index,
    }));
    setDates(updatedDates);
    if (handleDateChange) {
      handleDateChange();
    }
  }


  return (
    <CustomCarousel slidesToShow={slideToShow} className='recepie-carousel' autoplay={false} responsiveSlides={[4,3]}>
      {
        dates.map((item, i) => <CarouselDateCard date={item} key={i} onClickAction={() => handleDateClick(i)} />
        )}

    </CustomCarousel>
  )
}

export default DateCarousel