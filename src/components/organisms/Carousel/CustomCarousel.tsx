import React, { useState } from 'react'
import { Carousel } from 'antd';




const CustomCarousel = ({ children, className, slidesToShow }: { children: React.ReactNode, className?: string, slidesToShow: number }) => {
    const [isGrabbing, setIsGrabbing] = useState(false)
    console.log(isGrabbing)
    return (
        <div className='w-full' onMouseDown={() => setIsGrabbing(true)} onMouseUp={() => setIsGrabbing(false)}>
            <Carousel
                arrows
                infinite={true}
                draggable={true}
                autoplaySpeed={3000}
                slidesToShow={slidesToShow}
                className={`${className} ${isGrabbing ? 'cursor-grabbing' : 'cursor-grab'}`}
                autoplay
            >
                {children}
            </Carousel>
        </div>
    )
}

export default CustomCarousel