import React, { useState } from 'react'
import { DateCarousel } from '../DateCarousel'
import { recepieCarouselCardData } from '@/constants/dummyData'
import { shuffleArray } from '@/utils/utils'
import { RecepiesCarousel } from '../RecepiesCarousel'
import { recepieCardDataType } from '@/components/molecules/Tabs/Tab.config'

const WeeklyMenuCarousel = ({cardsContent}: {cardsContent:recepieCardDataType[]}) => {
    const currDate = new Date();
    const [data, setData] = useState(shuffleArray(cardsContent));
    const handleDateChange = () => {
        setData(shuffleArray(cardsContent));
    }

    return (
        <div className='flex flex-col justify-start items-center'>
            <DateCarousel slideToShow={7} date={currDate} handleDateChange={handleDateChange} />
            <RecepiesCarousel data={data} />
        </div>

    )
}

export default WeeklyMenuCarousel