import { ButtonField } from '@/components/atoms/ButtonField'
import { alignCenter } from '@/components/atoms/ButtonField/button.style'
import { ParagraphField } from '@/components/atoms/ParagraphFIeld'
import { signOptionStyle } from '@/components/atoms/SignOption/signOption.style'
import { TimeTitle } from '@/components/atoms/TimeTitle'
import { timeTitleData } from '@/constants/dummyData'
import React from 'react'
import Hero from '../HeroSection/Hero'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'

const GoalHomeHero = () => {
    const t = useTranslations('myPlanPage.goalHome')
    return (

        <Hero outerClassName='hero-section-2 mt-[95px]' innerClassName='flex h-full items-end justify-center max-xl:px-[19px] '>
            <div className=' w-full flex justify-between items-end mb-[60px] max-mdp:flex-col max-mdp:justify-center'>
                <div className='flex items-start justify-start max-w-[50%] w-full  max-mdp:max-w-none max-mdp:w-full' >
                    <div className='w-full flex flex-col items-start justify-start '>
                        <div className='w-full flex justify-start items-center max-mdp:justify-center max-mdp:gap-[55px] max-[350px]:gap-[15px]'>
                            {timeTitleData.map((item, i) => <TimeTitle numText={item.numText} text={t(item.text)} key={i}
                            className='mr-[77px] max-mdp:mr-0' tClassName='text-6xl text-white max-xl:text:4xl'
                            pClassName='text-white'
                            />)}
                        </div>

                        <div className=' w-full text-center flex items-end justify-between gap-[10px] mt-[45px]'>
                            <ButtonField className={`${signOptionStyle} ${alignCenter} !w-[50%] !mb-0`} cType='white_red' >{t('pastGoalsButton')}</ButtonField>
                            
                            <Link href={'/my_plan/goal-survey'} className='!w-[100%]'>
                                <ButtonField className={`${signOptionStyle} ${alignCenter} !w-[50%] !mb-0`} cType='red_white'>
                                    {t('newGoalButton')}
                                </ButtonField>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-start justify-start bg-blue-1 rounded-[5px] p-[25px] ml-[16px] max-mdp:ml-0'>
                    <p className='text-gray-5 mb-[5px]'>{t('activeGoalLabel')}</p>
                    <ParagraphField
                        title={t('goalTitle')}
                        paragraph={t('goalDescription')}
                        tClassName='text-white text-4xl'
                        pClassName='text-gray-2 text-2xl max-w-[440px]'
                    />
                </div>

            </div>
        </Hero>
    )
}

export default GoalHomeHero