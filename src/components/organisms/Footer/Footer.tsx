'use client'
import { ListField } from '@/components/atoms/ListField';
import { Logo } from '@/components/atoms/Logo';
import { DownloadCard } from '@/components/molecules/DownloadCard'
import { footerNavData } from '@/constants/dummyData';
import React from 'react'
import { useTranslations } from 'use-intl'

const Footer = () => {

    const t = useTranslations('footer');

    return (
        <div className='w-full flex justify-center bg-white '>
            <div className=' flex flex-col justify-between  w-full  max-w-screen-xl' >
                <div className=' w-full flex justify-between items-start gap-[100px] mt-[40px]'>
                    <DownloadCard />
                    <div className='flex justify-evenly items-start w-[70%]'>
                        {
                            Object.entries(footerNavData).map(([section, keys], index) => {
                                const translatedArray = keys.map(key => t(`nav.${section}.${key}`));
                                return <ListField listData={translatedArray.slice(0)} key={index} />;
                            })
                        }
                    </div>
                </div>
                <div className='flex flex-col items-start justify-start gap-[15px] mt-[15p] mb-[30px]'>
                    <Logo />
                    <p className='text-gray-7'>{t('copyright')}</p>
                </div>
            </div>
        </div>
    )
}

export default Footer