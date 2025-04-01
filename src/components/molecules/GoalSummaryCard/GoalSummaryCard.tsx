import { ImageField } from '@/components/atoms/ImageField'
import React from 'react'
import { GoalSummaryCardType } from './goalSummaryCard.config'
import { useTranslations } from 'next-intl'
import { Dropdown, MenuProps, Space } from 'antd'





const GoalSummaryCard = ({ data, option, name }: { data: GoalSummaryCardType, option: string, name?:string }) => {
    const t = useTranslations('')
    return (
        <div className='w-full h-[50px] max-w-[650px] flex justify-between items-center rounded-[5px] border-gray-2 border-[1px] px-[19px] py-[16px] mb-[16px]'>
            <h3>{t(data.title)}</h3>

            <div className='flex gap-[19px] items-center'>
                <h2 className='font-bold' >{name? name :option}</h2>
                <div className='w-[25px]'>
                    <ImageField src={data.img} width={25} height={25} alt={'image'} />
                </div>
            </div>
        </div>
    )
}

export default GoalSummaryCard