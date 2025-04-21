import { ButtonField } from '@/components/atoms/ButtonField'
import { EditField } from '@/components/atoms/EditField'
import { ParagraphField } from '@/components/atoms/ParagraphFIeld'
import { TimeTitle } from '@/components/atoms/TimeTitle'
import { TitleField } from '@/components/atoms/TitleField'
import { JoinCard } from '@/components/molecules/JoinCard'
import ProgressActivityCard from '@/components/molecules/ProgressActivityCard/ProgressActivityCard'
import { ProgressCarousel } from '@/components/molecules/ProgressCarousel'
import { InfoDisplay } from '@/components/organisms/InfoDisplay'
import { SectionContainer } from '@/components/organisms/SectionContainer'
import { timeTitleData } from '@/constants/dummyData'
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
                            {[... new Array(3)].map((_, i) => <TimeTitle numText={t(`date.${i}.time`)} text={t(`date.${i}.text`)} key={i} tClassName='!text-4xl' className='!mr-[1px] ml-[25px]' />)}
                        </div>
                    }
                </InfoDisplay>
            </div>


            <SectionContainer>
                <div className='w-full flex justify-center items-center mt-[30px]'>

                </div>

                
                <div className='w-full h-[400px]  flex justify-between items-start gap-[16px] mb-[50px]'>
                    <div className='w-[80%] h-full flex flex-col items-center justify-between'>
                        <ProgressActivityCard className='mt-[30px]' label={t('goalCard.label')} title={t('goalCard.title')} paragraph={t('goalCard.paragraph')} />
                        <div className={`w-full flex justify-between items-center rounded-[5px]  mt-[16px] bg-gray-3 pt-[30px] px-[25px] pb-[30px] `} >
                            <div className=''>
                                <p className='text-gray-7'>{t('activateCard.label')}</p>
                                <TitleField text={t('activateCard.title')} className='!text-2xl' />
                            </div>
                            <ButtonField cType='red_white' className='px-[40px]' >{t('activateCard.button')}</ButtonField>
                        </div>
                    </div>
                    <div className=' max-w-[325px] h-[calc(100%-30px)]  bg-gray-3 rounded-[5px] mt-[30px] flex justify-center items-center'>
                        <ProgressCarousel className='w-full' />
                    </div>
                </div>
            </SectionContainer>
        </div>
    )
}

export default ProgressTemplate