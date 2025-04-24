import { ButtonField } from '@/components/atoms/ButtonField'
import { ImageField } from '@/components/atoms/ImageField'
import { TitleField } from '@/components/atoms/TitleField'
import { GoalSummaryCard } from '@/components/molecules/GoalSummaryCard'
import { GoalSummaryCardType } from '@/components/molecules/GoalSummaryCard/goalSummaryCard.config'
import { goalSummaryCards } from '@/constants/dummyData'
import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import React, { useState } from 'react'


const GoalSummary = () => {
    const t = useTranslations('myPlanPage.goalSummary')
    const t2 = useTranslations('myPlanPage.goal')
    const data = sessionStorage.getItem('userGoalData')
    const parsedData = data ? JSON.parse(data) : null

    return (
        <div className={`w-full flex flex-col justify-center items-center mt-[95px]  `} >
            <ImageField src={'/goal_summary.png'} alt={'goal summary image'} width={100} height={400} className='w-screen h-[400px] object-cover object-top' />
            <div className={`max-w-[1700px] w-full flex justify-center items-center`} >
                <div className='max-w-[650px] w-full flex flex-col justify-center items-center'>
                    <TitleField text={t('title')} className='my-[40px] self-start' />
                    <div className='w-full'>

                        {
                            goalSummaryCards.map((card, i) => (
                                <GoalSummaryCard data={card} option={t2(`${parsedData[card.option]}`)} name={i == 0 && parsedData['goal_name']} key={i} />
                            ))
                        }
                    </div>
                    <Link href={'/my_plan/goal-home'} className='self-end'>
                        <ButtonField cType="red_white" bSize="xl" className=' mt-[30px] mb-[55px]' >
                            {t('button')}
                        </ButtonField>
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default GoalSummary