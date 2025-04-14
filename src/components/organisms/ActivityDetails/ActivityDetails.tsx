import { recepieCardDataType } from '@/components/molecules/Tabs/Tab.config'
import React from 'react'
import Hero from '../HeroSection/Hero'
import { ImageField } from '@/components/atoms/ImageField'
import { TitleField } from '@/components/atoms/TitleField'
import { ActivityBadge } from '@/components/atoms/ActivityBadge'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { ActivityBadges } from '@/components/molecules/ActivityBadges'
import { badgesData, exerciesCarouselCardData, recepieCarouselCardData } from '@/constants/dummyData'
import { Tags } from '@/components/molecules/Tags'
import { SectionContainer } from '../SectionContainer'
import { CustomDivider } from '@/components/atoms/CustomDivider'
import { ReactionButtons } from '@/components/molecules/ReactionButtons'
import { ParagraphField } from '@/components/atoms/ParagraphFIeld'
import { ServingInfoPanel } from '../ServingInfoPanel'
import { PrintData } from '@/components/atoms/PrintData'
import { RecepiesCarousel } from '../RecepiesCarousel'
import { WeeklyMenuCarousel } from '../WeeklyMenuCarousel'
import { shuffleArray } from '@/utils/utils'
import CustomTabs from '@/components/molecules/CustomTabs/CustomTabs'
import { InfoDisplay } from '../InfoDisplay'
import { CustomTable } from '@/components/atoms/CustomTable'


const ActivityDetails = ({ data }: { data: recepieCardDataType }) => {
    const t = useTranslations('myPlanPage.ActivityDetailsPage');
    const t2 = useTranslations();
    const recepieTabsData = [
        { key: 'tab1', title: t2('myPlanPage.goalHome.recepieTabs.tabs.today'), content: <RecepiesCarousel data={recepieCarouselCardData} /> },
        { key: 'tab2', title: t2('myPlanPage.goalHome.recepieTabs.tabs.tomorrow'), content: <RecepiesCarousel data={shuffleArray(recepieCarouselCardData)} /> },
        {
            key: 'tab3', title: t2('myPlanPage.goalHome.recepieTabs.tabs.weekAhead'), content:
                <WeeklyMenuCarousel cardsContent={recepieCarouselCardData} />
        },
    ];
    const workoutTabsData = [
        { key: 'tab1', title: t('exerciseTabs.tabs.today'), content: <RecepiesCarousel data={exerciesCarouselCardData} /> },
        { key: 'tab2', title: t('exerciseTabs.tabs.tomorrow'), content: <RecepiesCarousel data={shuffleArray(exerciesCarouselCardData)} /> },
        {
            key: 'tab3', title: t('exerciseTabs.tabs.weekAhead'), content:
                <WeeklyMenuCarousel cardsContent={exerciesCarouselCardData} />
        },
    ];
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
                {
                    data.key.includes('recepie') &&
                    <div className='w-full flex justify-between items-center  mt-[65px]'>
                        <ParagraphField title={t('recepie.table.pTitle')} paragraph={t('recepie.table.amount')} tClassName='text-[19px]' />
                        <CustomTable textAddress={'myPlanPage.ActivityDetailsPage.recepie.table.content'} />
                    </div>
                }

                <div className=' w-full flex flex-wrap items-start justify-between mt-[50px] gap-[100px]'>
                    <div className='flex flex-col w-[calc(100%/2-100px)]'>
                        {
                            [...new Array(5)].map((_, index) => (
                                <div>
                                    <CustomDivider key={index} prefixCls={t(`recepie.dividers.${index}.title`)} />
                                    <p className='mb-[40px] text-[19px]'>{t(`recepie.dividers.${index}.text`)}</p>
                                </div>

                            ))
                        }
                        {data.key.includes('recepie') ? <PrintData print={'printRecepie'} /> : <PrintData print={'printExercise'} />}
                    </div>

                    <div className='flex flex-col w-[calc(100%/2-100px)]'>
                        <div className='flex flex-col items-center justify-center w-full'>
                            <p className='text-red-10 text-[19px] mb-[28px] ' >{t('buttons.preferenceText')}</p>
                            <ReactionButtons />
                        </div>
                        <ServingInfoPanel address={'myPlanPage.ActivityDetailsPage.recepie.details'} />


                        <div className='w-full h-[170px] rounded-[5px] bg-blue-1 px-[30px] pt-[30px] mt-[30px]'>
                            <ParagraphField title={t('recepie.tips.title')} paragraph={t('recepie.tips.p')} tClassName='text-white' pClassName='text-white' className='max-w-[400px]' />
                        </div>
                    </div>
                </div>
                <InfoDisplay className='flex-col items-center justify-center  '>
                    <TitleField text={data.key.includes('recepie') ? t2('myPlanPage.goalHome.recepieTabs.sectionTitle') : t2('myPlanPage.goalHome.exerciseTabs.sectionTitle')} className={`mt-[90px]  mb-[27px] !text-black`} />
                </InfoDisplay>
                {
                    data.key.includes('recepie') ?
                        <CustomTabs tabs={recepieTabsData} />
                        :
                        <CustomTabs tabs={workoutTabsData} />
                }
            </SectionContainer>
        </div>
    )
}

export default ActivityDetails