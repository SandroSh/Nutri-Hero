import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './styles.css';
// import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
// import { Swiper, SwiperSlide } from 'swiper/react';
import { recepieCarouselCardData } from '@/constants/dummyData';
import { GoalActivityCard } from '../GoalActivityCard';



// const SwiperCarousel = ({ children, className, slidesPerView }: { children: React.ReactNode, className?: string, slidesPerView: number }) => {
//     return (
//         <Swiper
//             cssMode={true}
//             navigation={{
//                 nextEl: '.swiper-button-next',
//                 prevEl: '.swiper-button-prev',
//             }}
//             pagination={{ clickable: true }}
//             modules={[Navigation, Pagination, Mousewheel, Keyboard]}
//             spaceBetween={40}
//             slidesPerView={3}
//             className='mySwiper'
//         >
//             {recepieCarouselCardData.map((item, i) => <SwiperSlide key={i} ><GoalActivityCard data={item} /></SwiperSlide>)}
//             <div className="swiper-button-prev"></div>
//             <div className="swiper-button-next"></div>
//         </Swiper>
//     )
// }

// export default SwiperCarousel


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './styles.css';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';

const SwiperCarousel = ({ children, className, slidesPerView }: { children: React.ReactNode, className?: string, slidesPerView: number }) => {
    return (
        <div className={className}>
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                navigation={true}
                pagination={true}
                history={{
                    key: 'slide',
                }}
                modules={[Navigation, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide data-history="1">Slide 1</SwiperSlide>
                <SwiperSlide data-history="Slide 2">Slide 2</SwiperSlide>
            </Swiper>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
        </div>
    );
};

export default SwiperCarousel;