import React, { use } from 'react'
import Hero from '../HeroSection/Hero'
import { TitleField } from '@/components/atoms/TitleField'
import { useTranslations } from 'next-intl';
import { BlogCard } from '@/components/molecules/BlogCard';
import { BlogCardProps, blogs } from '@/constants/dummyData';
import { SectionContainer } from '../SectionContainer';
import { shuffleArray } from '@/utils/utils';



const BlogHome = () => {
    const t = useTranslations('');
    const transferText = (blog: BlogCardProps): BlogCardProps => {
        const newBlog = { ...blog };
        for (const key in newBlog) {
            if (key != 'imgUrl' && key != 'key') {
                const typedKey = key as keyof BlogCardProps;
                newBlog[typedKey] = t(newBlog[typedKey]);
            }
        }

        return newBlog;
    }
    return (
        <div>
            <Hero backgroundImg='/Hero Girl_2.png' outerClassName='max-h-[360px] !bg-top items-center ' imgFilter='bg-black/30 max-h-[360px]' >
                <TitleField text={t('blog.title').toUpperCase()} className='text-white text-7xl' />
            </Hero>
            <SectionContainer innerWrapperClassName='flex justify-center items-start  gap-[19px]'>
                <div className='flex flex-col items-center justify-center '>
                    {
                        blogs.map((item, index) =>
                            <BlogCard key={index} data={transferText(item)} className='w-[410px]' />
                        )
                    }
                </div>
                <div className='flex flex-col items-center justify-center '>
                    {
                        shuffleArray(blogs).map((item, index) =>
                            <BlogCard key={index} data={transferText(item)} className='w-[410px]' />
                        )
                    }
                </div>
                <div className='flex flex-col items-center justify-center '>
                    {
                        shuffleArray(blogs).map((item, index) =>
                            <BlogCard key={index} data={transferText(item)} className='w-[410px]' />
                        )
                    }
                </div>

            </SectionContainer>
        </div>
    )
}

export default BlogHome