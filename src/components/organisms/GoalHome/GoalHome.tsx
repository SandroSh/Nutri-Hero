import React from 'react'
import { GoalHomeHero } from '../GoalHomeHero'
import { SectionContainer } from '../SectionContainer'
import { TitleField } from '@/components/atoms/TitleField'
import { recepieTabsData } from '@/constants/dummyData'
import { useTranslations } from 'next-intl'
import { Tabs } from 'antd'
import { GoalActivityCard } from '@/components/molecules/GoalActivityCard'



const GoalHome = () => {
  const t = useTranslations('myPlanPage.goalHome')
  return (
    <div>
      <GoalHomeHero />
      <SectionContainer>
        <TitleField text={'egeg'} className={`mt-[27px] mb-[25px] text-white`} />
        <Tabs 
        />
        <GoalActivityCard imageUrl={'/Group 2264-1.png'} title={'title'} onLoadNewSuggestion={function (): void {
          throw new Error('Function not implemented.')
        } }/>
      </SectionContainer>
    </div>

  )
}

export default GoalHome