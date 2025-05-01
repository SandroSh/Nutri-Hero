import React, { useState } from 'react'
import { Carousel } from 'antd'
import './styles.css'

const CustomCarousel = ({
    children,
    className,
    slidesToShow,
    responsiveSlides = [2,1],
    autoplay = true,
}: {
    children: React.ReactNode
    className?: string
    slidesToShow: number
    responsiveSlides?: [number, number]
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
                // autoplay={autoplay}
                autoplaySpeed={3000}
                className={`${className || ''} ${isGrabbing ? 'cursor-grabbing' : 'cursor-grab'}`}
                responsive={[
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: responsiveSlides[0],
                        },
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: responsiveSlides[1],
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
