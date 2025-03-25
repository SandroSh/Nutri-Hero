import { CheckboxField } from '@/components/atoms/Checkbox'
import React from 'react'
import { CheckBoxCardType } from './checkboxCard.config'





const CheckboxCard = ({pText,pClassName }:CheckBoxCardType) => {
    return (
        <div className='w-full flex justify-between items-center' >
            <p className={`${pClassName}`}>{pText}</p>
            <CheckboxField/>
        </div>
    )
}

export default CheckboxCard