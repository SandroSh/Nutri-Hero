import React from 'react'
import { SectionContainer } from '../SectionContainer'
import { useTranslations } from 'next-intl';
import ProgressActivityCard from '@/components/molecules/ProgressActivityCard/ProgressActivityCard';
import { TitleField } from '@/components/atoms/TitleField';
import { goalSummaryCards } from '@/constants/dummyData';
import { GoalSummaryCard } from '@/components/molecules/GoalSummaryCard';
import Link from 'next/link';
import { ButtonField } from '@/components/atoms/ButtonField';
import { SurveySummary } from '../SurveySummary';

const ProgressEditPlan = () => {
    const t = useTranslations('progress');

    return (
        <SectionContainer className='mt-[135px]' >


            <div className='w-full h-full flex justify-center items-start gap-[15px]  mt-[30px] '>
                <div className='w-[100%] max-w-[650px]  flex flex-col items-center justify-center'>
                    <ProgressActivityCard
                        label={t('goalCard.label')}
                        title={t('goalCard.title')}
                        paragraph={t('goalCard.paragraph')}
                        isEditVisible={false}
                    />
                    <SurveySummary />
                </div>

            </div>
        </SectionContainer>
    )
}

export default ProgressEditPlan