'use client'
import React from 'react'
import SwiperCarousel from '../SwiperCarousel/SwiperCarousel'
import { SwiperSlide } from 'swiper/react'
import { progressCarouselData } from '@/constants/dummyData'
import { ProgressCarouselCard } from '../ProgressCarouselCard'
import { useTranslations } from 'next-intl'





const ProgressCarousel = ({ className }: { className: string }) => {
    const t = useTranslations('');
    return (
        <div className={`${className}`}>
            <SwiperCarousel slidesPerView={1}>
                {
                    progressCarouselData.map((item, i) => (
                        <SwiperSlide key={i} data-history={i + 1}>
                           <ProgressCarouselCard title={t(item.title)} paragraph={t(item.title)} />
                        </SwiperSlide>
                    ))
                }
            </SwiperCarousel>
        </div>
    )
}

export default ProgressCarousel