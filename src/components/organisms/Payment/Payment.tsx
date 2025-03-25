'use client'
import React from 'react'
import Title from '@/components/atoms/TitleField/title.component'
import { InfoDisplay } from '@/components/organisms/InfoDisplay'
import { useTranslations } from 'next-intl'
import { ParagraphField } from '@/components/atoms/ParagraphFIeld'

import { CustomDatePicker } from '@/components/atoms/DatePicker'
import { InputField } from '@/components/atoms/InputField'
import {  ButtonField } from '@/components/atoms/ButtonField'
import { Link } from '@/i18n/navigation'
import { signInputStyle } from '@/components/atoms/InputField/inputField.style'


const Payment = () => {
    const t = useTranslations('paymentPage')
    return (
        <InfoDisplay className='bg-white rounded-[5px] flex justify-between  px-[85px] pt-[90px] pb-[80px] mt-[120px] gap-[115px]'>
            <div className='flex flex-col items-center justify-start max-w-[410px]  '>
                <Title text={t('title')} className={`text-4xl`} />
                <ParagraphField title={t('pTitle')} paragraph={t('pText')} className='mt-[15px]' pClassName='text-gray-4 text-[1.2rem]' />
            </div>
            <div className='flex flex-col items-center justify-start max-w-[325px] ' >
                <InputField
                    placeholder={t('nameOnCard')}
                    className={`${signInputStyle}  w-full `}
                />
                <InputField
                    placeholder={t('cardNumber')}
                    className={`${signInputStyle}  w-full `}
                />
                <div className='flex items-center justify-center gap-[10px]' >
                    <CustomDatePicker className='w-[50%] pr-[15px] font-bold' placeholder={t('expiryDate')} />
                    <InputField maxLength={3} placeholder={t('cvc')} className={`w-[50%] pr-[15px] font-bold ${signInputStyle}`} suffix={<img src='/Info.svg' alt='info img' />} />
                </div>
                <Link href='/my_plan/goal' className='w-full'>
                    <ButtonField className={`p-[9px] bg-red-10 rounded-[5px] text-white w-full  mt-[30px]  text-center h-[40px] !self-end $`} >{t('bText')}
                    </ButtonField>
                </Link>
            </div>
        </InfoDisplay>
    )
}

export default Payment