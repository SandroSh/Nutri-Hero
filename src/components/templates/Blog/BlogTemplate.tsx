import { TitleField } from '@/components/atoms/TitleField'
import Hero from '@/components/organisms/HeroSection/Hero'
import React from 'react'




const BlogTemplate = () => {
    return (
        <div className='mt-[95px]'>
            <Hero backgroundImg='/Hero Girl_2.png' outerClassName='max-h-[360px] !bg-top items-center ' imgFilter='bg-black/30 max-h-[360px]' >
                <TitleField text={'News'}/>
            </Hero>
        </div>
    )
}

export default BlogTemplate