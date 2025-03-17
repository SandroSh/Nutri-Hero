import React from 'react'
import { Carousel } from 'antd';
import { CarouselCard } from '@/components/molecules/CarouselCard';
import { carouselData } from '@/constants/dummyData';
import { carouselType } from "@/components/molecules/CarouselCard/carouselCard.config";

const CustomCarousel = ({data, reversed = false}:{data:carouselType[], reversed?:boolean}) => {

    return (
        <div className='w-full'>
            <Carousel arrows infinite={false}  >
                {
                    data.map((item, i) => <CarouselCard data={item} key={i} reversed={reversed} />)
                }
            </Carousel>
        </div>
    )
}

export default CustomCarousel