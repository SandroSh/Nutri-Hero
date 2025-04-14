import { recepieCardDataType } from '@/components/molecules/Tabs/Tab.config'
import React from 'react'
import Hero from '../HeroSection/Hero'
import { ImageField } from '@/components/atoms/ImageField'
import { TitleField } from '@/components/atoms/TitleField'
import { ActivityBadge } from '@/components/atoms/ActivityBadge'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { ActivityBadges } from '@/components/molecules/ActivityBadges'
import { badgesData } from '@/constants/dummyData'
import { Tags } from '@/components/molecules/Tags'
import { SectionContainer } from '../SectionContainer'
import { CustomDivider } from '@/components/atoms/CustomDivider'
import { ReactionButtons } from '@/components/molecules/ReactionButtons'
import { ParagraphField } from '@/components/atoms/ParagraphFIeld'


const ActivityDetails = ({ data }: { data: recepieCardDataType }) => {
    const t = useTranslations('myPlanPage.ActivityDetailsPage');
    const t2 = useTranslations();
    return (
        <div>
            <Hero backgroundImg={data.imageUrl} outerClassName='items-center mt-[95px]' innerClassName='h-full' >
                <div className='flex h-full flex-col items-center justify-between'>
                    <div className='flex flex-col items-center justify-center mt-auto mb-auto'>
                        <Image src={'/ic_play_circle_filled_24px.svg'} alt={'play icon'} width={50} height={50} />
                        <TitleField text={t2(data.pText).toUpperCase()} className='text-white mt-[19px] text-7xl' />
                    </div>
                    <div className='flex flex-col items-center mb-4'>
                        {
                            data.key.includes('recepie') ?
                                <ActivityBadges data={badgesData.recepie} />
                                :
                                <ActivityBadges data={badgesData.exercise} />
                        }
                    </div>
                </div>
            </Hero>

            <SectionContainer>
                <div className='flex flex-col items-start justify-start self-start mt-[90px]'>
                    {
                        data.key.includes('recepie') ?
                            <>
                                <TitleField text={t('recepie.tags.tagMainTitle')} className='mt-[30px] mb-[10px]' />
                                <Tags type={'recepie'} />

                            </>
                            :
                            <>
                                <TitleField text={t('exercise.tags.tagMainTitle')} className='mt-[30px] mb-[10px]' />
                                <Tags type={'exercise'} />
                            </>
                    }
                </div>

                <div></div>

                <div className=' w-full flex flex-wrap items-start justify-between mt-[50px] gap-[100px]'>
                    <div className='flex flex-col w-[calc(100%/2-100px)]'>
                        {
                            [...new Array(5)].map((_, index) => (
                                <div>
                                    <CustomDivider key={index} prefixCls={t(`recepie.dividers.${index}.title`)} /> 
                                    <p className='mb-[40px] text-[16px]'>{t(`recepie.dividers.${index}.text`)}</p>
                                </div>

                            ))
                        }
                    </div>

                    <div className='flex flex-col w-[calc(100%/2-100px)]'>
                        <div className='flex flex-col items-center justify-center w-full'>
                            <p className='text-red-10 font-bold mb-[28px] ' >{t('buttons.preferenceText')}</p>
                            <ReactionButtons />
                        </div>

                        

                        <div className='w-full h-[170px] rounded-[5px] bg-blue-1 px-[30px] pt-[30px]'>
                            <ParagraphField title={t('recepie.tips.title')} paragraph={t('recepie.tips.p')} tClassName='text-white' pClassName='text-white' className='max-w-[400px]'/>
                        </div>
                    </div>
                </div>
            </SectionContainer>
        </div>
    )
}

export default ActivityDetails