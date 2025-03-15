import ButtonField from '@/components/atoms/ButtonField/button.component';
import Title from '@/components/atoms/TitleField/title.component'
import { useTranslations } from 'next-intl';
import React from 'react'

export interface IntroProps {
  className?: string
  textAddress: string

}

const Intro = ({
    className,
    textAddress
}:IntroProps) => {
    const t = useTranslations(textAddress);
  return (
    <div className={`flex flex-col items-center justify-center ${className}  max-w-[650px] mt-[10px]`} >
        <Title text={t('title')} className='text-7xl text-center leading-[90px] text-black' />
        <p className='font-normal mt-[19px] text-2xl' >{t('subtitle')}</p>
        <ButtonField className='mt-[50px] pl-[130px] pr-[130px] pt-[15px] pb-[15px] bg-red-10 rounded-[5px] text-white' >{t('buttonText')}</ButtonField>
    </div>
  )
}

export default Intro