import React, { useState } from 'react'
import { Carousel } from 'antd'
import './styles.css'

const CustomCarousel = ({
    children,
    className,
    slidesToShow,
    responsiveSlides,
    autoplay = true,
}: {
    children: React.ReactNode
    className?: string
    slidesToShow: number
    responsiveSlides?: number[]
    autoplay?: boolean
}) => {
    const [isGrabbing, setIsGrabbing] = useState(false)

    return (
        <div
            className="w-full"
            onMouseDown={() => setIsGrabbing(true)}
            onMouseUp={() => setIsGrabbing(false)}
        >
            <Carousel
                arrows
                infinite
                draggable
                slidesToShow={slidesToShow}
                autoplay={autoplay}
                autoplaySpeed={3000}
                className={`${className || ''} ${isGrabbing ? 'cursor-grabbing' : 'cursor-grab'}`}
                responsive={[
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 2,
                        },
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                        },
                    },
                ]}
            >
                {React.Children.map(children, (child) => (
                    <div className="px-2">{child}</div>
                ))}
            </Carousel>
        </div>
    )
}

export default CustomCarousel
