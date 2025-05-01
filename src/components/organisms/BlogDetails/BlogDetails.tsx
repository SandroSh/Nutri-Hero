import { BlogCardProps, blogs } from '@/constants/dummyData'
import React from 'react'
import { SectionContainer } from '../SectionContainer'
import { useTranslations } from 'next-intl'
import BlogDetailsCard from '@/components/molecules/BlogDetailsCard/BlogDetailsCard'
import { BlogList } from '../BlogList'
import { transferText } from '@/utils/utils'




const BlogDetails = ({ data }: { data: BlogCardProps }) => {
  const t = useTranslations();
  return (
    <SectionContainer className='mt-[150px] max-sm:px-[19px]'>
      <div className='max-w-[600px] mx-auto'>
        <BlogDetailsCard data={transferText(data, t)} specificTitle={t('blog.blogDetails.title1')}/>
        <BlogDetailsCard data={transferText(blogs[1], t)} specificTitle={t('blog.blogDetails.title2')}/>
        <BlogList column={1} itemsPerLoad={3} isDetailed={true} render={(data, i) => <BlogDetailsCard key={i} data={data} />}/>

      </div>
    </SectionContainer>
  )
}

export default BlogDetails