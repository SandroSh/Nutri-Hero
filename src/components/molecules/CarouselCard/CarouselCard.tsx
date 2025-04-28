
import React from 'react'
import { carouselType } from './carouselCard.config'
import { ImageField } from '@/components/atoms/ImageField'
import { ParagraphField } from '@/components/atoms/ParagraphFIeld'
import { useTranslations } from 'next-intl'
import { TitleField } from '@/components/atoms/TitleField'





const CarouselCard = ({data, outerClassName}:{data:carouselType, outerClassName?:string}) => {
  const t = useTranslations(`carousel.${data.i}`)
  return (
    <div className={`w-full h-full max-h-[720px] flex justify-center items-center ${outerClassName} max-mdp:max-h-none max-mdp:flex-col max-mdp:justify-between max-mdp:items-end`}> 
        <div className='w-[50%] h-[720px] max-mdp:w-[100vw]  max-mdp:h-[500px]  '>
            <ImageField src={data.imgUrl} className='w-full h-full object-cover object-top' alt={'image'}/>
        </div>
        <div className='w-[50%] flex flex-col items-center max-mdp:w-full max-mdp:px-[50px]  max-mdp:py-[70px] '>
          <div>
            <TitleField text={t('title')} className='mb-[30px] max-mdp:text-center' />
            <ParagraphField title={t('pTitle')} className='max-w-[410px]' paragraph={t('p1')} tClassName='max-mdp:text-center' pClassName='max-mdp:text-center'/>
            {t('p2') != '' && (<p className='max-w-[410px] mt-[19px] text-[15px] max-mdp:text-center'>{t('p2')}</p>)}
          </div>
        </div>
    </div>
  )
}

export default CarouselCard