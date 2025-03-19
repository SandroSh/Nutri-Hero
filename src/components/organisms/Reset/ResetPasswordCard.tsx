'use client'
import { Reset } from '@/components/molecules/ResetCard'
import { signInputStyle } from '@/components/molecules/SignInCard/Signin.style';
import { Input } from 'antd';
import { useTranslations } from 'next-intl';
import React, { Dispatch, SetStateAction, useState } from 'react'

const ResetCard = ({resetFunction}:{resetFunction:Dispatch<SetStateAction<boolean>>}) => {
    const [nextStage, setNextStage] = useState<boolean>(true);
    const t = useTranslations('resetAccount')
    const handleFinalStageClick = () =>{
        resetFunction(state => !state)
        setNextStage(false)
    }
    return (
        <div className='max-w-[500px] bg-white rounded-md w-full flex flex-col items-center justify-center py-[40px] px-[85px] mt-[60px]'>
            {
                nextStage ?
                    <Reset title={t('1.title')} pText={t('1.p')} bText={t('1.button')} functionCall={setNextStage}>
                        <Input size='large' placeholder={t('1.input')} className={signInputStyle} />
                    </Reset>
                    :
                    <Reset title={t('2.title')} pText={t('2.p')} bText={t('2.button')} functionCall={handleFinalStageClick} >
                        <Input size='large' placeholder={t('2.input')} className={signInputStyle} />
                        <Input size='large' type='password'  placeholder={t('2.input2')} className={signInputStyle} />
                    </Reset>
            }
        </div>
    )
}

export default ResetCard