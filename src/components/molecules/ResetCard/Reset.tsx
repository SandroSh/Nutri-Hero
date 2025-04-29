'use client'
import { TitleField } from '@/components/atoms/TitleField'
import React from 'react'
import { resetCardType } from './resetCard.config'
import ButtonField from '@/components/atoms/ButtonField/button.component'
import { useRouter } from 'next/navigation'







const Reset = ({ title, children, pText, bText, className, functionCall }: resetCardType) => {
 
    return (
        <div className={`w-full max-w-[319px] flex flex-col items-center justify-center ${className} max-sm:!w-[80%]`} >
            <TitleField text={title} className='text-[1.5em] text-center max-[500px]:text-[19px]' />
            <p className='my-[30px] text-[0.9em] text-gray-4 max-sm:text-center'>{pText}</p>
            {children}
            <ButtonField className='p-[5px] bg-red-10  text-white  text-center h-[40px]  mt-[30px]' bSize='full' onClick={ () => functionCall((state) => !state)} >{bText}</ButtonField>
        </div>
    )
}

export default Reset