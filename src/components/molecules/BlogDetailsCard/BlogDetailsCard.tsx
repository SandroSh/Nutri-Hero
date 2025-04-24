import { TitleField } from '@/components/atoms/TitleField'
import React from 'react'
import { SocialIcons } from '../SocialIcons'
import Image from 'next/image'
import { BlogCardProps } from '@/constants/dummyData'

const BlogDetailsCard = ({data, specificTitle}:{data:BlogCardProps, specificTitle?:string}) => {
    return (
        <div className={`w-full flex flex-col justify-start items-start pb-[30px] mb-[35px]`}>
            <div className='w-full flex flex-col justify-between py-[25px] border-y-2 border-gray-5'>
                <TitleField text={specificTitle ? specificTitle : data.title} className='!text-[3rem] font-extrabold leading-[1.2]' />
                <div className='flex items-center justify-between mt-[19px]'>
                    <p className='text-[15px] font-bold'><span className='font-normal'>By</span> Post {data.author}</p>
                    <p className='justify-self-end text-gray-5 '>{data.date}</p>
                </div>
            </div>
            <SocialIcons />
            <Image src={data.imgUrl} alt={'img'} width={400} height={400} className='w-full object-cover ' />
            <p className='text-[18px] leading-[31px] mt-[30px] font-normal'>{data.paragraph}</p>
        </div>
    )
}

export default BlogDetailsCard