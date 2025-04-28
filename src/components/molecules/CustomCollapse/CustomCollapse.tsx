'use client'
import { getItems } from '@/constants/dummyData';
import { Collapse } from 'antd'
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react'





const CustomCollapse = () => {
    const t = useTranslations('')
    const isSmallScreen = window.innerWidth < 600; 

    const panelStyle = {
        marginBottom: 10,
        borderRadius: '5px',
        border: 'none',
        paddingTop: '20px', 
    };

    return (
        <div>
            <Collapse
                bordered={false}
                defaultActiveKey={['1']}
                expandIcon={({ isActive }) => <Image src={isActive ? '/Path 2114.svg' : '/Path 2115.svg'} alt={'icon'} width={isSmallScreen ? 15 : 19} height={isSmallScreen ? 15 : 19} />}
                style={{ background: 'white', width: '100%' }}
                items={getItems(panelStyle, t)}
                className='max-sm:text-[12px]'
            />
        </div>
    )
}

export default CustomCollapse