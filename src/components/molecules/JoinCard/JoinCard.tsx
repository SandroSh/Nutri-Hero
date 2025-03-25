import ButtonField from '@/components/atoms/ButtonField/button.component'
import Title from '@/components/atoms/TitleField/title.component'
import { useTranslations } from 'next-intl'
import React from 'react'



const JoinCard = () => {

    const t = useTranslations('joinCard')
    return (
        <div className='w-full flex justify-around items-center bg-white my-[70px] rounded-[10px] py-[40px] px-[80px]' >
            <Title text={t('title')} className='text-[30px]' />
            <ButtonField className='bg-red-10 py-[25px] px-[37px] text-white'>{t('buttonText')}</ButtonField>
        </div>
    )
}

export default JoinCard