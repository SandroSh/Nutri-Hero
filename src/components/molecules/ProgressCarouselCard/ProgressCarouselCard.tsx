import { ParagraphField } from '@/components/atoms/ParagraphFIeld'
import Image from 'next/image'
import React from 'react'



export interface ProgressCarouselCardProps {
    className?: String;
    title: string;
    paragraph: string;
}

const ProgressCarouselCard = ({ className, title, paragraph }: ProgressCarouselCardProps) => {
    return (
        <div className={`flex w-full flex-col  items-start ${className}`}>
            <Image src={'/Hydration.svg'} alt={'hydration icon'} width={70} height={70} />
            <ParagraphField title={title} paragraph={paragraph} className='mt-[20px]' pClassName='text-gray-7 text-base' />
        </div>
    )
}

export default ProgressCarouselCard