import React from 'react'
import { ImageField } from '../ImageField'
import Image from 'next/image'

const ActivityBadge = ({ url, title, info }: { url: string, title: string, info: string }) => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center'>
                <Image src={url} alt={'icon'} width={25} height={25} />
            </div>
            <p className='mt-[11px]'>{info}</p>
            <h1 className='font-bold'>{title}</h1>
        </div>
    )
}

export default ActivityBadge