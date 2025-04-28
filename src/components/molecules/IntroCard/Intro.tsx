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
        <Title text={t('title')} className='text-7xl text-center leading-[90px] text-black max-sm:text-4xl' />
        <p className='font-normal mt-[19px] text-2xl max-sm:text-xl' >{t('subtitle')}</p>
        <ButtonField className='mt-[50px] pl-[130px] pr-[130px] pt-[25px] pb-[25px] bg-red-10  text-white max-sm:px-[70px] py-[19px]' mt={'nm'} >{t('buttonText')}</ButtonField>
    </div>
  )
}

export default Intro