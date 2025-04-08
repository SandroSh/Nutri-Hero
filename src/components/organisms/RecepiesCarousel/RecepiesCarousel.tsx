import React from 'react'
import CustomCarousel from '../Carousel/CustomCarousel'
import { GoalActivityCard } from '@/components/molecules/GoalActivityCard'
import { recepieCardDataType } from '@/components/molecules/Tabs/Tab.config'
import { useTranslations } from 'next-intl'


const RecepiesCarousel = ({data}:{data:recepieCardDataType[]}) => {
  const t = useTranslations('');
  return (
    <CustomCarousel  slidesToShow={3} className='recepie-carousel mt-[15px]' >
      {data.map((item, i) => <GoalActivityCard data={{...item, pText:t(item.pText), pTitle:t(item.pTitle) }} key={i} />)}
    </CustomCarousel>   

  )
}

export default RecepiesCarousel