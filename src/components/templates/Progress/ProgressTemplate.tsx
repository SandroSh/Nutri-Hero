import { ButtonField } from '@/components/atoms/ButtonField'
import { TimeTitle } from '@/components/atoms/TimeTitle'
import { TitleField } from '@/components/atoms/TitleField'
import ProgressActivityCard from '@/components/molecules/ProgressActivityCard/ProgressActivityCard'
import { ProgressCarousel } from '@/components/molecules/ProgressCarousel'

import { BMICalculator } from '@/components/organisms/BMICalculator'
import { InfoDisplay } from '@/components/organisms/InfoDisplay'
import { SectionContainer } from '@/components/organisms/SectionContainer'
import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

import React from 'react'

const ProgressTemplate = () => {
    const t = useTranslations('progress');
    return (
        <div className={`mt-[95px]`} >
            <div className='w-full flex justify-center items-center h-[190px] bg-blue-1'>
                <InfoDisplay className='max-w-screen-xl justify-between items-center'>
                    <div className='flex w-full justify-start items-center gap-[30px]'>
                        <Image src={'/Avatar.png'} alt={'image'} width={80} height={80} />
                        <TitleField text={t('user')} className='text-white' />
                    </div>
                    {
                        <div className='w-full flex justify-end items-center'>
                            {[... new Array(3)].map((_, i) => <TimeTitle numText={t(`date.${i}.time`)} text={t(`date.${i}.text`)} key={i} tClassName='!text-4xl text-white' className='!mr-[1px] ml-[24px] ' pClassName='text-white' />)}
                        </div>
                    }
                </InfoDisplay>
            </div>


            <SectionContainer >
                <BMICalculator />

                <div className='w-full h-full flex justify-between items-start gap-[15px]  mt-[30px] '>
                    <div className='w-[80%]  flex flex-col items-center justify-between'>
                        <Link href={'/progress/editplan'} className='w-full'>
                            <ProgressActivityCard label={t('goalCard.label')} title={t('goalCard.title')} paragraph={t('goalCard.paragraph')} />
                        </Link>
                        <Link href={'/progress/editplan'} className='w-full'>
                            <div className={`w-full flex justify-between items-center rounded-[5px]  mt-[16px] bg-gray-1 pt-[30px] px-[25px] pb-[30px] `} >
                                <div className=''>
                                    <p className='text-gray-7'>{t('activateCard.label')}</p>
                                    <TitleField text={t('activateCard.title')} className='!text-2xl' />
                                </div>
                                <ButtonField cType='red_white' className='px-[40px]' >{t('activateCard.button')}</ButtonField>
                            </div>
                        </Link>
                    </div>
                    <div className=' max-w-[325px] min-h-[400px] h-[70%] bg-gray-0 rounded-[5px]  flex justify-center items-center px-[19px] pt-[30px] '>
                        <ProgressCarousel className='w-full h-full flex flex-col justify-between' />
                    </div>
                </div>
            </SectionContainer>
        </div>
    )
}

export default ProgressTemplate