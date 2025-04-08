import React, { useState } from 'react'
import { Carousel } from 'antd';
import './styles.css'



const CustomCarousel = ({ children, className, slidesToShow, autoplay = true }: { children: React.ReactNode, className?: string, slidesToShow: number, autoplay?:boolean }) => {
    const [isGrabbing, setIsGrabbing] = useState(false)
    return (
        <div className='w-full' onMouseDown={() => setIsGrabbing(true)} onMouseUp={() => setIsGrabbing(false)}>
            <Carousel
                arrows
                infinite={true}
                draggable={true}
                autoplaySpeed={3000}
                slidesToShow={slidesToShow}
                className={`${className} ${isGrabbing ? 'cursor-grabbing' : 'cursor-grab'}`}
                autoplay = {autoplay}
            >
                {children}
            </Carousel>
        </div>
    )
}

export default CustomCarousel