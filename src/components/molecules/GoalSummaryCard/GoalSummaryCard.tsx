import { ImageField } from '@/components/atoms/ImageField'
import React from 'react'
import { GoalSummaryCardType } from './goalSummaryCard.config'
import { useTranslations } from 'next-intl'
import { Dropdown, MenuProps, Space } from 'antd'





const GoalSummaryCard = ({ data, option }: { data: GoalSummaryCardType, option: string }) => {
    const t = useTranslations('')
    const items: MenuProps['items'] = [
        {
            key: '1',
            label: 'wefw',
        },
        {
            key: '2',
            label: 'wefw',
        },
        {
            key: '3',
            label: 'fwfe',
        },
    ];
    return (
        <div className='w-full h-[50px] max-w-[650px] flex justify-between items-center rounded-[5px] border-gray-5 '>
            <h3>{t(data.title)}</h3>

            <div className='flex gap-[19px] items-center'>
                <Dropdown menu={{ items }}>
                    <a onClick={(e) => e.preventDefault()}>
                        <Space>
                            {option}
                        </Space>
                    </a>
                </Dropdown>
                <div className='w-[25px]'>
                    <ImageField src={data.img} width={25} height={25} alt={'image'} />
                </div>
            </div>
        </div>
    )
}

export default GoalSummaryCard