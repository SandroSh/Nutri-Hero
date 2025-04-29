import React, { use, useEffect, useState } from 'react'
import Hero from '../HeroSection/Hero'
import { TitleField } from '@/components/atoms/TitleField'
import { useTranslations } from 'next-intl';
import { BlogCard } from '@/components/molecules/BlogCard';
import { BlogCardProps, blogs } from '@/constants/dummyData';
import { SectionContainer } from '../SectionContainer';
import { shuffleArray } from '@/utils/utils';
import { BlogList } from '../BlogList';



const BlogHome = () => {
    const t = useTranslations('blog');

    return (
        <div>
            <Hero backgroundImg='/Hero Girl_2.png' outerClassName='max-h-[360px] !bg-top items-center ' imgFilter='bg-black/30 max-h-[360px] '>
                <TitleField text={t('title').toUpperCase()} className='text-white text-7xl max-[1224px]:text-5xl max-[400px]:text-2xl' />
            </Hero>
            <BlogList className='max-sm:px-[19px]' render={(data, i) => <BlogCard key={i} data={data} className="mb-4 " />} />
               
        </div>
    )
}

export default BlogHome