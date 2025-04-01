import React from 'react'
import { Carousel } from 'antd';


const CustomCarousel = ({ children, className }: { children: React.ReactNode, className: string }) => {

    return (
        <div className='w-full'>
            <Carousel arrows infinite={true} autoplaySpeed={3000} slidesToShow={3} className={className} autoplay  >
                    {children}
            </Carousel>
        </div>
    )
}

export default CustomCarousel