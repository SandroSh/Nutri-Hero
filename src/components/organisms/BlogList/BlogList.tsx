import React, { useEffect, useState } from 'react'
import { SectionContainer } from '../SectionContainer'
import { useTranslations } from 'next-intl';
import { BlogCardProps, blogs } from '@/constants/dummyData';
import { BlogCard } from '@/components/molecules/BlogCard';
import { shuffleArray } from '@/utils/utils';
import { BlogColumn } from '../BlogColumn';

const BlogList = () => {
    const [shuffledBlogs, setShuffledBlogs] = useState<[BlogCardProps[], BlogCardProps[]]>([[], []]);
   
    useEffect(() => {
        setShuffledBlogs([shuffleArray(blogs), shuffleArray(blogs)]);
    }, []);
    return (
        <SectionContainer innerWrapperClassName='flex justify-center items-start  gap-[19px] mt-[40px]'>
            <BlogColumn array={blogs}/>
            <BlogColumn array={shuffledBlogs[0]}/>
            <BlogColumn array={shuffledBlogs[1]}/>

        </SectionContainer>
    )
}

export default BlogList