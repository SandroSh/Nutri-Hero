import React from 'react'
import { GoalHomeHero } from '../GoalHomeHero'
import { SectionContainer } from '../SectionContainer'
import { TitleField } from '@/components/atoms/TitleField'
import { useTranslations } from 'next-intl'
import { RecepiesCarousel } from '../RecepiesCarousel'
import { Tabs } from '@/components/molecules/Tabs'
import { InfoDisplay } from '../InfoDisplay'
import { Navlink } from '@/components/atoms/NavLink'
import { recepieCarouselCardData, recepieCarouselCardData2 } from '@/constants/dummyData'
import CustomTabs from '@/components/molecules/CustomTabs/CustomTabs'

const GoalHome = () => {
  const t = useTranslations('myPlanPage.goalHome');

  const tabsData = [
    { key: 'tab1', title: t('recepieTabs.tabs.today'), content: <RecepiesCarousel data={recepieCarouselCardData} /> },
    { key: 'tab2', title: t('recepieTabs.tabs.tomorrow'), content: <RecepiesCarousel data={recepieCarouselCardData2} /> },
    { key: 'tab3', title: t('recepieTabs.tabs.weekAhead'), content: <RecepiesCarousel data={recepieCarouselCardData} /> },
  ];
  return (
    <div>
      <GoalHomeHero />
      <SectionContainer>
        <InfoDisplay className='flex-col items-center justify-center  '>
          <TitleField text={t('recepieTabs.sectionTitle')} className={`mt-[27px] mb-[25px] !text-black`} />
        </InfoDisplay>
        <CustomTabs tabs={tabsData} />
      </SectionContainer>
    </div>

  )
}

export default GoalHome