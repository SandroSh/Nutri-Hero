import React from 'react'





const CarouselDateCard = ({date}:{date:string}) => {
  return (
    <div className='w-full h-[50px] max-w-[128px] bg-blue-1  flex justify-center items-center'>
        <p className='text-white' >{date}</p>
    </div>
  )
}

export default CarouselDateCard