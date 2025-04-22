import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './styles.css';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './styles.css';
import { Autoplay, Pagination} from 'swiper/modules';
import { Swiper } from 'swiper/react';
import React from 'react';

const SwiperCarousel = ({ children, className, slidesPerView }: { children: React.ReactNode, className?: string, slidesPerView: number }) => {
    return (
        <div className={` w-full h-full cursor-pointer ${className}`}>
            <Swiper
                spaceBetween={50}
                slidesPerView={slidesPerView}
                pagination={true}
                autoplay={{
                    delay:  1500,
                    disableOnInteraction: false,
                }}
                history={{
                    key: 'slide',
                }}
                modules={[ Pagination, Autoplay]}
                className="mySwiper"
            >
              {children}
            </Swiper>
        </div>
    );
};

export default SwiperCarousel;