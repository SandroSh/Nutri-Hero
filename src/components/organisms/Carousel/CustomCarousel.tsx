import React from 'react'
import { Carousel } from 'antd';
import { CarouselCard } from '@/components/molecules/CarouselCard';
import { carouselType } from "@/components/molecules/CarouselCard/carouselCard.config";


const CustomCarousel = ({data, reversed = false}:{data:carouselType[], reversed?:boolean}) => {

    return (
        <div className='w-full'>
            <Carousel arrows infinite={true} autoplaySpeed={3000}  autoplay >
                {
                    data.map((item, i) => <CarouselCard data={item} key={i} reversed={reversed} />)
                }
            </Carousel>
        </div>
    )
}

export default CustomCarousel