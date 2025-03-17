
import React from 'react'
import { carouselType } from './carouselCard.config'
import { ImageField } from '@/components/atoms/ImageField'
import { ParagraphField } from '@/components/atoms/ParagraphFIeld'
import { useTranslations } from 'next-intl'
import { TitleField } from '@/components/atoms/TitleField'





const CarouselCard = ({data, reversed}:{data:carouselType, reversed:boolean}) => {
  const t = useTranslations(`carousel.${data.i}`)
  return (
    <div className={`w-full h-full max-h-[720px]  flex justify-center items-center ${reversed && 'flex-row-reverse'}`}>
        <div className='w-[50%] h-[720px]'>
            <ImageField src={data.imgUrl} className='w-full h-full object-cover object-top' alt={'image'}/>
        </div>
        <div className='w-[50%] flex flex-col items-center'>
          <div>
            <TitleField text={t('title')} className='mb-[30px]' />
            <ParagraphField title={t('pTitle')} className='max-w-[410px]' paragraph={t('p1')}/>
            {t('p2') != '' && (<p className='max-w-[410px] mt-[19px] text-[15px]'>{t('p2')}</p>)}
          </div>
        </div>

    </div>
  )
}

export default CarouselCard