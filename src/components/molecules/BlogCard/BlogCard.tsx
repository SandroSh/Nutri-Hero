import { TitleField } from '@/components/atoms/TitleField'
import { BlogCardProps } from '@/constants/dummyData'
import { Link } from '@/i18n/navigation'
import Image from 'next/image'
import React from 'react'


const BlogCard = ({ className, data }: { data: BlogCardProps; className: string }) => {
  const maxLength = data.paragraph.length < 1000 ? data.paragraph.length * 0.4 : 200
  return (
    <Link href={`/blog/${data.key}`} className='w-full'>
      <div className={` w-full flex flex-col justify-start items-start border-b-2 border-black pb-[7px] mb-[40px] ${className}`}>
        <TitleField text={data.title} className='!text-[25px] font-extrabold max-sm:text-[19px]' />
        <p className='mt-[5px] mb-[10px] text-[15px]  max-sm:text-[12px]' >{data.author}</p>
        <Image src={data.imgUrl} alt={'img'} width={400} height={400} className='w-full object-cover ' />
        <p className='mt-[13px] font-normal '>{data.paragraph.length > maxLength
          ? `${data.paragraph.slice(0, maxLength)}...`
          : data.paragraph}</p>
        <p className='justify-self-end text-gray-5 !mt-[40px] max-mdp:!mt-[19px]'>{data.date}</p>
      </div>
    </Link>
  )
}

export default BlogCard