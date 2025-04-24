'use client'
import { BlogDetails } from '@/components/organisms/BlogDetails'
import { BlogHome } from '@/components/organisms/BlogHome'
import { BlogCardProps, blogs } from '@/constants/dummyData'
import { usePathname } from '@/i18n/navigation'

import React, { useEffect, useState } from 'react'




const BlogTemplate = () => {
    const pathname = usePathname();
    const [blogData, setBlogData] = useState<BlogCardProps>(blogs[0]);
    const key = pathname.split('/')[2];

    useEffect(() => {
        if (key) {
            const obj = blogs.find(item => item.key.includes(key))
            if (obj) {
                setBlogData(obj);
            }
        }
    }, [pathname, key]);

    const renderComponents = () => {
        switch (pathname) {
            case '/blog/home':
                return <BlogHome />
            case `/blog/${key}`:
                return <BlogDetails data={blogData} />
        }
    }
    return (
        <div className='mt-[95px]'>
            {renderComponents()}
        </div>
    )
}

export default BlogTemplate