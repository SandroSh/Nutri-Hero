import React from 'react'
import { Carousel } from 'antd';


const CustomCarousel = ({ children, className, slidesToShow }: { children: React.ReactNode, className?: string, slidesToShow:number }) => {

    return (
        <div className='w-full'>
            <Carousel arrows infinite={true} autoplaySpeed={3000} slidesToShow={slidesToShow} className={className} autoplay  >
                    {children}
            </Carousel>
        </div>
    )
}

export default CustomCarousel