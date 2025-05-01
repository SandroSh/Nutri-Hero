import { recepieCardDataType } from '@/components/molecules/Tabs/Tab.config'
import React, { useEffect, useRef, useState } from 'react'
import Hero from '../HeroSection/Hero'
import { TitleField } from '@/components/atoms/TitleField'
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
    const [isScrolled, setIsScrolled] = useState(false);

    const recepieTabsData = [
        { key: 'tab1', title: t2('myPlanPage.goalHome.recepieTabs.tabs.today'), content: <RecepiesCarousel data={recepieCarouselCardData} /> },
        { key: 'tab2', title: t2('myPlanPage.goalHome.recepieTabs.tabs.tomorrow'), content: <RecepiesCarousel data={shuffleArray(recepieCarouselCardData)} /> },
        {
            key: 'tab3', title: t2('myPlanPage.goalHome.recepieTabs.tabs.weekAhead'), content:
                <WeeklyMenuCarousel cardsContent={recepieCarouselCardData} />
        },
    ];
    const workoutTabsData = [
        { key: 'tab1', title: t2('myPlanPage.goalHome.exerciseTabs.tabs.today'), content: <RecepiesCarousel data={exerciesCarouselCardData} /> },
        { key: 'tab2', title: t2('myPlanPage.goalHome.exerciseTabs.tabs.tomorrow'), content: <RecepiesCarousel data={shuffleArray(exerciesCarouselCardData)} /> },
        {
            key: 'tab3', title: t2('myPlanPage.goalHome.exerciseTabs.tabs.weekAhead'), content:
                <WeeklyMenuCarousel cardsContent={exerciesCarouselCardData} />
        },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > window.innerHeight - 100);

        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);




    const handlegoUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }


    return (
        <div>
            <div className={`${isScrolled ? 'relative h-[800px]' : ''}`}>

                <Hero backgroundImg={data.imageUrl} outerClassName={`items-center mt-[95px] transition-all duration-500 ease-in-out ${isScrolled ? 'fixed !w-[calc(1284px/2-100px)] h-[240px] right-[calc((100%-1280px)/2)] top-10  rounded-lg shadow-lg z-50 rounded-none max-xl:w-[40%] max-xl:right-0 max-xl:h-[150px]' : 'w-full max-md:h-[70vh]  max-md:flex'
                    }`}
                    innerClassName={`${isScrolled ? 'h-full w-full' : 'h-full'}`}
                    imgFilter={`bg-black/10 ${isScrolled ? "" : "max-md:h-[70vh]"}`}
                >

                    <div className={`flex h-full flex-col items-center   justify-between ${isScrolled ? 'hidden' : ''}`}>
                        <div className='flex flex-col items-center justify-center mt-auto mb-auto'>
                            <Image src={'/ic_play_circle_filled_24px.svg'} alt={'play icon'} width={50} height={50} />
                            <TitleField text={t2(data.pText).toUpperCase()} className='text-white mt-[19px] text-7xl max-md:text-4xl' />
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
                    {
                        isScrolled &&
                        <div className='!w-full flex justify-between items-center m-[10px]'>
                            <Image src="/ic_open_in_new_24px.svg" alt="icon" className='cursor-pointer' width={25} height={25} onClick={handlegoUp} />
                            <Image src="/ic_close_24px.svg" alt="icon" className='cursor-pointer mr-[19px]' width={25} height={25} onClick={() => undefined} />
                        </div>
                    }

                </Hero>
            </div>
            <SectionContainer innerWrapperClassName=''>
                <div className={`flex flex-col items-start justify-start self-start mt-[90px] max-md:items-center`}>
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
                    <div className='w-full flex justify-between items-center mt-[65px] max-xl:px-[29px] max-md:flex-col'>
                        <ParagraphField title={t('recepie.table.pTitle')} paragraph={t('recepie.table.amount')} tClassName='text-[19px]'  pClassName='max-md:mt-0' className='max-md:flex max-md:items-center max-md:gap-[15px] max-md:mb-[15px] max-md:self-start' />
                        <CustomTable textAddress={'myPlanPage.ActivityDetailsPage.recepie.table.content'} />
                    </div>
                }

                <div className=' w-full flex items-start justify-between mt-[50px] gap-[100px] max-xl:px-[19px] max-xl:gap-[50px] max-md:flex-col-reverse max-md:justify-center max-md:items-center '>
                    <div className='flex flex-col w-[calc(100%/2)] max-md:w-full '>
                        {
                            [...new Array(5)].map((_, index) => (
                                <div key={index}>
                                    <CustomDivider key={index} prefixCls={t(`recepie.dividers.${index}.title`)} />
                                    <p className='mb-[40px] text-[19px]'>{t(`recepie.dividers.${index}.text`)}</p>
                                </div>

                            ))
                        }
                        {data.key.includes('recepie') ? <PrintData print={'printRecepie'} /> : <PrintData print={'printExercise'} />}
                    </div>

                    <div className='flex flex-col w-[calc(100%/2-100px)] max-md:w-full'>
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


