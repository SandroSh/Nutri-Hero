import React from 'react'
import { GoalHomeHero } from '../GoalHomeHero'
import { SectionContainer } from '../SectionContainer'
import { TitleField } from '@/components/atoms/TitleField'
import { useTranslations } from 'next-intl'
import { RecepiesCarousel } from '../RecepiesCarousel'
import { InfoDisplay } from '../InfoDisplay'
import { exerciesCarouselCardData, recepieCarouselCardData } from '@/constants/dummyData'
import CustomTabs from '@/components/molecules/CustomTabs/CustomTabs'
import { shuffleArray } from '@/utils/utils'
import { WeeklyMenuCarousel } from '../WeeklyMenuCarousel'

const GoalHome = () => {
  const t = useTranslations('myPlanPage.goalHome');

  const recepieTabsData = [
    { key: 'tab1', title: t('recepieTabs.tabs.today'), content: <RecepiesCarousel data={recepieCarouselCardData} /> },
    { key: 'tab2', title: t('recepieTabs.tabs.tomorrow'), content: <RecepiesCarousel data={shuffleArray(recepieCarouselCardData)} /> },
    {
      key: 'tab3', title: t('recepieTabs.tabs.weekAhead'), content:
        <WeeklyMenuCarousel cardsContent={recepieCarouselCardData}  />
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
      <GoalHomeHero />
      <SectionContainer className='max-xl:px-[19px]'>
        <InfoDisplay className='flex-col items-center justify-center  '>
          <TitleField text={t('recepieTabs.sectionTitle')} className={`mt-[70px] mb-[25px] !text-black`} />
        </InfoDisplay>
        <CustomTabs tabs={recepieTabsData} />

        <InfoDisplay className='flex-col items-center justify-center  '>
          <TitleField text={t('exerciseTabs.sectionTitle')} className={`mt-[90px]  mb-[27px] !text-black`} />
        </InfoDisplay>
        <CustomTabs className='mb-[53px]' tabs={workoutTabsData} />
      </SectionContainer>
    </div>

  )
}

export default GoalHome