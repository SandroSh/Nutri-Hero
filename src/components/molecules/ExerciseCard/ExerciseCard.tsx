import ImageField from '@/components/atoms/ImageField/ImageField'
import { ParagraphField } from '@/components/atoms/ParagraphFIeld'
import React from 'react'

const ExerciseCard = ({ pTitle, pText, imageUrl, className }: { pTitle: string, pText: string, imageUrl: string, className?:string }) => {
    return (
        <div className={`flex justify-center gap-[100px] items-center pt-[30px] w-full ${className}  max-mdp:gap-[50px] `} >
            <ImageField src={imageUrl}
                alt='Exercise Image'
                className='w-[570px]  rounded-[5px]  ' />
            <ParagraphField title={pTitle} paragraph={pText}
                className='max-w-[410px] max-xl:mt-[59px] max-mdp:mt-[19px] 'pClassName='max-mdp:text-center' tClassName='max-mdp:text-center' />
        </div>
    )
}

export default ExerciseCard
