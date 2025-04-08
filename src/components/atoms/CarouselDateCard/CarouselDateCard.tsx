import React from 'react'





const CarouselDateCard = ({date}:{date:string}) => {
  return (
    <div className=' h-[50px] w-[160px] bg-gray-3 flex justify-center items-center rounded-[5px] '>
        <p className='text-white' >{date}</p>
    </div>
  )
}

export default CarouselDateCard