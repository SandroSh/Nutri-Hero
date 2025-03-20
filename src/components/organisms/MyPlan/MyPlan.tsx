'use client'
import React, { useReducer, useState } from 'react'
import { SectionContainer } from '../SectionContainer'
import { MyPlanCard } from '@/components/molecules/MyPlanCard'
import { myPlanCardData } from '@/constants/dummyData'
import { useTranslations } from 'next-intl'

import { InputField } from '@/components/atoms/InputField'
import { signInputStyle } from '@/components/molecules/SignInCard/Signin.style'
import { PersonalInfroInputCard } from '@/components/molecules/PersonalInfoInputCard'

const MyPlan = () => {
    const t = useTranslations('myPlanPage');
    const [stage, setStage] = useState<number>(0);
    const handleRenderStage = () => {
        switch (stage) {
            case 0:
                return (
                    <MyPlanCard
                        imgUrl={myPlanCardData[0].imgUrl}
                        pTitle={t(myPlanCardData[0].pTitle)}
                        pText={t(myPlanCardData[0].pText)}
                        bText={t(myPlanCardData[0].bText)}
                        className='!h-[100vh]'
                        buttonClass='mt-[150px]'
                        functionCall={() => setStage(1)}
                    >
                        <InputField
                            placeholder={t('card0.mail')}
                            className={`${signInputStyle} mt-[30px] `}
                        />
                    </MyPlanCard>
                )
            case 1:
                return (
                    <MyPlanCard
                        imgUrl={myPlanCardData[1].imgUrl}
                        pTitle={t(myPlanCardData[1].pTitle)}
                        pText={t(myPlanCardData[1].pText)}
                        bText={t(myPlanCardData[1].bText)}
                        className='!h-[100vh]'
                        buttonClass='mt-[95px]'
                        functionCall={() => setStage(2)}
                    >
                        <InputField
                            placeholder={t('card1.password')}
                            type='password'
                            className={`${signInputStyle} mt-[30px] `}
                        />
                        <InputField
                            placeholder={t('card1.password2')}
                            type='password'
                            className={`${signInputStyle} mt-[20px] `}
                        />
                    </MyPlanCard>
                )
            case 2:
                return (
                    <MyPlanCard
                        imgUrl={myPlanCardData[2].imgUrl}
                        pTitle={t(myPlanCardData[2].pTitle)}
                        pText={t(myPlanCardData[2].pText)}
                        className='!h-[100vh]'
                        buttonClass='mt-[95px]'
                        functionCall={() => setStage(3)}
                    >
                        <p className='font-bold text-red-10 cursor-pointer mt-[100px]' onClick={() => setStage(3)} >{t(myPlanCardData[2].bText)}</p>
                    </MyPlanCard>
                )
            case 3:
                return (
                    <MyPlanCard
                        imgUrl={myPlanCardData[3].imgUrl}
                        pTitle={t(myPlanCardData[3].pTitle)}
                        bText={t(myPlanCardData[3].bText)}
                        className='!h-[100vh]'
                        buttonClass='mt-[95px]'
                        functionCall={() => setStage(4)}
                    >
                         <InputField
                            placeholder={t('card3.username')}
                            type='password'
                            className={`${signInputStyle} mt-[30px] `}
                        />
                        <InputField
                            placeholder={t('card3.password')}
                            type='password'
                            className={`${signInputStyle} mt-[20px] `}
                        />
                    </MyPlanCard>
                )
            case 4:
                return (
                    <MyPlanCard
                        imgUrl={myPlanCardData[4].imgUrl}
                        pTitle={t(myPlanCardData[4].pTitle)}
                        bText={t(myPlanCardData[4].bText)}
                        className='!h-[100vh]'
                        buttonClass='mt-[95px]'
                        functionCall={() => setStage(5)}
                    >
                        <PersonalInfroInputCard />
                    </MyPlanCard>
                )
            default:
                return <div>No stage matched. Please select a valid stage.</div>;

        }

    }
    return (
        <div>
            <SectionContainer innerWrapperClassName='!max-w-[1700px] !w-full'>
                {
                    handleRenderStage()
                }
            </SectionContainer>
        </div>
    )
}
export default MyPlan