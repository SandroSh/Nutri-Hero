import ImageField from '@/components/atoms/ImageField/ImageField'
import { ParagraphField } from '@/components/atoms/ParagraphFIeld'
import React from 'react'

const ExerciseCard = ({ pTitle, pText, imageUrl }: { pTitle: string, pText: string, imageUrl: string }) => {
    return (
        <div className='flex justify-center gap-[100px] items-center mt-[30px] mb-[40px] w-full' >
            <ImageField src={imageUrl}
                alt='Exercise Image'
                className='w-[410px] h-[270px] rounded-[5px]' />
            <ParagraphField title={pTitle} paragraph={pText}
                className='max-w-[340px]' />
        </div>
    )
}

export default ExerciseCard
