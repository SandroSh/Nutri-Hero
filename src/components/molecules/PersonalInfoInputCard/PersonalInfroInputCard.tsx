'use client'
import { InputField } from '@/components/atoms/InputField'
import { Dropdown, Space } from 'antd'
import React, { useState } from 'react'
import { signInputStyle } from '../SignInCard/Signin.style'
import { CustomDatePicker } from '@/components/atoms/DatePicker'
import { useTranslations } from 'next-intl'
import { PersonalInfoInputCardProps } from './PersonalInfoInputCard.config'

const PersonalInfroInputCard = () => {
    const t = useTranslations('myPlanPage')
    const genderValues: PersonalInfoInputCardProps[] = [
        {
            key: '1',
            label: t('card4.gender.1')
        },
        {
            key: '2',
            label: t('card4.gender.2')
        },
    ]
    const [selectedGender, setSelectedGender] = useState(t('card4.gender.0'))


    const handleSelect = ({ key }: { key: string }) => {  // Destructure key directly
        const selectedItem = genderValues.find(item => item.key.toString() === key)
        if (selectedItem) {
            setSelectedGender(selectedItem.label)
        }
    }

    return (
        <div className='max-w-[410px] flex-col justify-start'>
            <InputField 
                placeholder={t('card4.username')} 
                className={`w-full justify-self-start ${signInputStyle}`} 
            />
            <div className='w-full flex justify-between gap-[10px] mt-[19px]'>
                <InputField 
                    placeholder={t('card4.firstname')} 
                    className={`w-[50%] ${signInputStyle}`} 
                />
                <InputField 
                    placeholder={t('card4.lastname')} 
                    className={`w-[50%] ${signInputStyle}`} 
                />
            </div>
            <div className='w-full flex justify-between gap-[10px] mt-[19px]'>
                <Dropdown 
                    menu={{
                        items: genderValues,
                        onClick: handleSelect
                    }}
                    // trigger={['click']} 
                    className={`w-[50%] font-bold ${signInputStyle}`}
                >
                    <a onClick={(e) => e.preventDefault()}>
                        <Space>{selectedGender}</Space>
                    </a>
                </Dropdown>
                <CustomDatePicker className='w-[50%] pr-[15px] font-bold' />
            </div>
        </div>
    )
}

export default PersonalInfroInputCard