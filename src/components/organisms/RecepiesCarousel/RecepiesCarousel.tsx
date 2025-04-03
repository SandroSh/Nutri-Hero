import React from 'react'
import CustomCarousel from '../Carousel/CustomCarousel'
import { GoalActivityCard } from '@/components/molecules/GoalActivityCard'
import { recepieCardDataType } from '@/components/molecules/Tabs/Tab.config'


const RecepiesCarousel = ({data}:{data:recepieCardDataType[]}) => {
  return (
    <CustomCarousel  slidesToShow={3} >
      {data.map((item, i) => <GoalActivityCard data={item} key={i} />)}
    </CustomCarousel>  

  )
}

export default RecepiesCarousel