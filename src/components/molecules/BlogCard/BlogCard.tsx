import { TitleField } from '@/components/atoms/TitleField'
import { BlogCardProps } from '@/constants/dummyData'
import Image from 'next/image'
import React from 'react'


const BlogCard = ({className, data}: {data: BlogCardProps; className: string}) => {
  return (
    <div className={` w-full flex flex-col justify-start items-start border-b-2 border-black pb-[7px] mb-[40px] ${className}`}>
      <TitleField text={data.title} />
      <p className='mt-[5px] mb-[10px]'>{data.author}</p>
      <Image src={data.imgUrl} alt={'img'} width={400} height={400} className='w-full h-full' />
      <p className='my-[19px]'>{data.paragraph}</p>
      <p className='justify-self-end'>{data.date}</p>
    </div>
  )
}

export default BlogCard