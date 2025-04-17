import { TimeTitle } from '@/components/atoms/TimeTitle'
import { TitleField } from '@/components/atoms/TitleField'
import { InfoDisplay } from '@/components/organisms/InfoDisplay'
import { timeTitleData } from '@/constants/dummyData'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'

const ProgressTemplate = () => {
    const t = useTranslations('progress');
    return (
        <div className={`mt-[95px]`} >
            <div className='w-full flex justify-center items-center h-[190px] bg-blue-1'>
                <InfoDisplay className='max-w-screen-xl justify-between items-center'>
                    <div className='flex w-full justify-start items-center gap-[30px]'>
                        <Image src={'/Avatar.png'} alt={'image'} width={140} height={140} />
                        <TitleField text={t('user')} className='text-white' />
                    </div>
                    {
                        <div className='w-full flex justify-end gap-[50px] items-center'>
                            {[... new Array(3)].map((_, i) => <TimeTitle numText={t(`date.${i}.time`)} text={t(`date.${i}.text`)} key={i} tClassName='!text-6xl' className='mr-[0px]' />)}
                        </div>
                    }
                </InfoDisplay>
            </div>
            <InfoDisplay className='max-w-screen-xl justify-between items-center'>
                    
            </InfoDisplay>
        </div>
    )
}

export default ProgressTemplate