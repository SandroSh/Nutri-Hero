import React from 'react'
import { GoalHomeHero } from '../GoalHomeHero'
import { SectionContainer } from '../SectionContainer'
import { TitleField } from '@/components/atoms/TitleField'
import { useTranslations } from 'next-intl'
import { RecepiesCarousel } from '../RecepiesCarousel'
const GoalHome = () => {
  const t = useTranslations('myPlanPage.goalHome')
  return (
    <div>
      <GoalHomeHero />
      <SectionContainer>
        <TitleField text={'egeg'} className={`mt-[27px] mb-[25px] text-white`} />
       
        <RecepiesCarousel/>
      </SectionContainer>
    </div>

  )
}

export default GoalHome