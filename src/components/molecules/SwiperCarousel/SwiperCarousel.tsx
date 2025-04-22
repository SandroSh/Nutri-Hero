import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './styles.css';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './styles.css';
import { Pagination,  } from 'swiper/modules';
import { Swiper } from 'swiper/react';
import React from 'react';

const SwiperCarousel = ({ children, className, slidesPerView }: { children: React.ReactNode, className?: string, slidesPerView: number }) => {
    return (
        <div className={` w-full h-full ${className}`}>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                pagination={true}
                history={{
                    key: 'slide',
                }}
                modules={[ Pagination]}
                className="mySwiper"
            >
              {children}
            </Swiper>
        </div>
    );
};

export default SwiperCarousel;