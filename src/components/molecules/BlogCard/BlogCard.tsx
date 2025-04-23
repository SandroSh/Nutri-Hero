import { TitleField } from '@/components/atoms/TitleField'
import { BlogCardProps } from '@/constants/dummyData'
import Image from 'next/image'
import React from 'react'


const BlogCard = ({ ...data }: BlogCardProps) => {
  return (
    <div className='flex flex-col justify-start items-start border-b-2 border-black pb-[7px]'>
      <TitleField text={data.title} />
      <p className='mt-[5px] mb-[10px]'>{data.author}</p>
      <Image src={data.imgUrl} alt={'img'} width={100} height={100} />
      <p className='my-[19px]'>{data.paragraph}</p>
      <p className='justify-self-end'>{data.date}</p>
    </div>
  )
}

export default BlogCard