import { recepieCardDataType } from '@/components/molecules/Tabs/Tab.config'
import React from 'react'
import Hero from '../HeroSection/Hero'




const ActivityDetails = ({ data }: { data: recepieCardDataType }) => {
    return (
        <div>
            <Hero outerClassName='mb-[95px] ' backgroundImg={data.imageUrl}>
                <h1>Text</h1>
            </Hero>
            <div className='flex flex-col items-center justify-center'>
                <h1 className='text-[32px] font-bold text-black'>{data.pTitle}</h1>
                <p className='text-[16px] text-[#7A7A7A]'>{data.pText}</p>
            </div>
        </div>
    )
}

export default ActivityDetails