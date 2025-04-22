import { ButtonField } from '@/components/atoms/ButtonField'
import { GoalSummaryCard } from '@/components/molecules/GoalSummaryCard'
import { goalSummaryCards } from '@/constants/dummyData'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import React from 'react'

const SurveySummary = () => {
    const t1 = useTranslations('progress')
    const t2 = useTranslations('myPlanPage.goal')
    const data = sessionStorage.getItem('userGoalData')
    const parsedData = data ? JSON.parse(data) : null
    return (
        <div className='w-full flex flex-col justify-center items-center'>
            <div className='!w-full mt-[19px]'>

                {
                    goalSummaryCards.map((card, i) => (
                        <GoalSummaryCard data={card} option={t2(`${parsedData[card.option]}`)} name={i == 0 && parsedData['goal_name']} key={i} />
                    ))
                }
            </div>
            <Link href={'/my_plan/goal-home'} className='self-end'>
                <ButtonField cType="red_white" bSize="xl" className=' mt-[30px] mb-[55px]' >
                    {t1('button')}
                </ButtonField>
            </Link>
        </div>
    )
}

export default SurveySummary