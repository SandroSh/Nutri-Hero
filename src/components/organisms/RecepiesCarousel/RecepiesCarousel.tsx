import React from 'react'
import CustomCarousel from '../Carousel/CustomCarousel'
import { recepieTabsData } from '@/constants/dummyData'
import { GoalActivityCard } from '@/components/molecules/GoalActivityCard'




const RecepiesCarousel = () => {
  return (
    <div>
        <CustomCarousel className='recepie-carousel' >
            {recepieTabsData.map((item) => <GoalActivityCard  data = {item} key={item.key} /> )}
        </CustomCarousel>
    </div>
  )
}

export default RecepiesCarousel