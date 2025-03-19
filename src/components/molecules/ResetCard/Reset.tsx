'use client'
import { TitleField } from '@/components/atoms/TitleField'
import React from 'react'
import { resetCardType } from './resetCard.config'
import ButtonField from '@/components/atoms/ButtonField/button.component'
import { useRouter } from 'next/navigation'







const Reset = ({ title, children, pText, bText, className, functionCall }: resetCardType) => {
 
    return (
        <div className={`w-full max-w-[319px] flex flex-col items-center justify-center ${className}`} >
            <TitleField text={title} className='text-[1.5em] text-center' />
            <p className='my-[30px] text-[0.9em] text-gray-4'>{pText}</p>
            {children}
            <ButtonField className='p-[5px] bg-red-10 rounded-[5px] text-white w-full text-center h-[40px] cursor-pointer mt-[30px]' onClick={ () => functionCall((state) => !state)} >{bText}</ButtonField>
        </div>
    )
}

export default Reset