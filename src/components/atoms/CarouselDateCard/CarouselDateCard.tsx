import { DateCardType } from '@/utils/utils'
import React from 'react'





const CarouselDateCard = ({date, onClickAction}:{date:DateCardType, onClickAction:() => void}) => {
  return (
    <div className={`${date.isActive ? "bg-blue-1" : "bg-gray-4"} h-[50px] mx-[15px] w-[155px] flex justify-center items-center rounded-[5px] cursor-pointer`}
      onClick={onClickAction}
    >
        <p className={`${date.isActive ? "text-white" : "text-gray-7"}`} >{date.date}</p>
    </div>
  )
}

export default CarouselDateCard