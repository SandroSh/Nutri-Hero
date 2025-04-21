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
        <div className={`flex flex-col items-start ${className}`}>
            <Image src={'/Hydration.svg'} alt={'hydration icon'} width={70} height={70} />
            <ParagraphField title={title} paragraph={paragraph} />
        </div>
    )
}

export default ProgressCarouselCard