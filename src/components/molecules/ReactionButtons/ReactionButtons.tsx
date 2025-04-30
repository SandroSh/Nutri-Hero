import { ButtonField } from '@/components/atoms/ButtonField'
import { useTranslations } from 'next-intl';
import React from 'react'





const ReactionButtons = () => {
    const t = useTranslations('myPlanPage.ActivityDetailsPage.buttons');
    return (
        <div className=' w-full flex flex-wrap justify-between items-center gap-[19px] max-md:justify-center'>
            <ButtonField bSize='nm' cType='gray_blue'>{t('dislike')}</ButtonField>
            <ButtonField bSize='nm' cType='gray_blue' >{t('like')}</ButtonField>
            <ButtonField bSize='nm' cType='gray_blue' >{t('favorite')}</ButtonField>
            <ButtonField bSize='nm' cType='gray_blue'>{t('complete')}</ButtonField>
        </div>
    )
}

export default ReactionButtons