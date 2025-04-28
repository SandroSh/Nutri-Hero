import { ImageField } from '@/components/atoms/ImageField'
import { ParagraphField } from '@/components/atoms/ParagraphFIeld'
import Title from '@/components/atoms/TitleField/title.component'
import { DownloadCard } from '@/components/molecules/DownloadCard'
import { useTranslations } from 'next-intl'
import React from 'react'

const DownloadAppSection = () => {
    const t = useTranslations('downloadAppSection');
    return (
        <div className='w-full flex justify-center items-center gap-[100px] my-[90px]' >
            <div className='max-w-[500px] w-full max-mdp:hidden' >
                <ImageField src={'/Mobile App.png'} alt={'mobile app download'} className='' />
            </div>
            <div className='flex flex-col items-start justify-start max-w-[410px] max-mdp:justify-center  '>
                <Title text={t('title')} className='max-mdp:self-center' />
                <ParagraphField title={t('pTitle')} paragraph={t('pText')} className='mt-[30px]'  tClassName='max-mdp:text-center' pClassName='max-mdp:text-center' />
                <DownloadCard className='mt-[70px] max-mdp:self-center' />
            </div>
        </div>
    )
}

export default DownloadAppSection