import { BlogCard } from '@/components/molecules/BlogCard'
import { BlogCardProps, blogs } from '@/constants/dummyData'
import { transferText } from '@/utils/utils';
import { useTranslations } from 'next-intl';
import React from 'react'

const BlogColumn = ({ array }: { array: BlogCardProps[] }) => {
    const t = useTranslations('');
    
   
    return (
        <div className='flex flex-col items-center justify-center '>
            {
                array.map((item, index) =>
                    <BlogCard key={index} data={transferText(item, t)} className='w-[410px]' />
                )
            }
        </div>
    )
}

export default BlogColumn