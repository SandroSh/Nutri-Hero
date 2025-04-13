import { recepieCardDataType } from '@/components/molecules/Tabs/Tab.config'
import React from 'react'
import Hero from '../HeroSection/Hero'
import { ImageField } from '@/components/atoms/ImageField'
import { TitleField } from '@/components/atoms/TitleField'
import { ActivityBadge } from '@/components/atoms/ActivityBadge'
import Image from 'next/image'
import { useTranslations } from 'next-intl'




const ActivityDetails = ({ data }: { data: recepieCardDataType }) => {
    const t = useTranslations('');
    return (
        <div>
            <Hero backgroundImg={data.imageUrl} outerClassName='items-center mt-[95px]' innerClassName='h-full' >
             
                <div className='flex h-full flex-col items-center justify-between'>
                    <div className='flex flex-col items-center justify-center mt-auto mb-auto'>
                        <Image src={'/ic_play_circle_filled_24px.svg'} alt={'play icon'} width={50} height={50} />
                        <TitleField text={t(data.pTitle).toUpperCase()} className='text-white mt-[19px] text-7xl' />
                    </div>

                    <div className='flex flex-col items-center mb-4'>
                        <div className='flex justify-center items-center gap-[45px]'>
                            <ActivityBadge url={'/Icon material-access-time.svg'} title={''} info={''} />
                            <ActivityBadge url={'/Icon material-access-time.svg'} title={''} info={''} />
                            <ActivityBadge url={'/Icon material-restaurant.svg'} title={''} info={''} />
                            <ActivityBadge url={'/Difficulty.svg'} title={''} info={''} />
                        </div>
                    </div>
                </div>

            </Hero>
            <div className='flex flex-col items-center justify-center'>
                <h1 className='text-[32px] font-bold text-black'>{data.pTitle}</h1>
                <p className='text-[16px] text-[#7A7A7A]'>{data.pText}</p>
            </div>
        </div>
    )
}

export default ActivityDetails