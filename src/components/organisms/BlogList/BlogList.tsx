import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import Masonry from 'react-masonry-css'
import { SectionContainer } from '../SectionContainer'
import { BlogCardProps, blogs } from '@/constants/dummyData'
import { shuffleArray } from '@/utils/utils'
import { BlogCard } from '@/components/molecules/BlogCard'
import { useTranslations } from 'next-intl'

const ITEMS_PER_LOAD = 6

const breakpointColumnsObj = {
  default: 3,
  1100: 2,
  700: 1,
}

const BlogList = () => {
  const t = useTranslations('')
  const [shuffledBlogs, setShuffledBlogs] = useState<BlogCardProps[]>([])
  const [visibleBlogs, setVisibleBlogs] = useState<BlogCardProps[]>([])
  const [hasMore, setHasMore] = useState(true)
  const transferText = (blog: BlogCardProps): BlogCardProps => {
    const newBlog = { ...blog }
    for (const key in newBlog) {
      if (key !== 'imgUrl' && key !== 'key') {
        const typedKey = key as keyof BlogCardProps
        newBlog[typedKey] = t(newBlog[typedKey])
      }
    }
    return newBlog
  }

  useEffect(() => {
    const repeated = Array.from({ length: 5 }, () => shuffleArray(blogs)).flat()
    setShuffledBlogs(repeated)
    setVisibleBlogs(repeated.slice(0, ITEMS_PER_LOAD))
  }, [])
  
  
  const fetchMoreData = () => {
    const nextElements = shuffledBlogs.slice(
      visibleBlogs.length,
      visibleBlogs.length + ITEMS_PER_LOAD
    )
    setVisibleBlogs(prev => [...prev, ...nextElements])

    if (visibleBlogs.length + ITEMS_PER_LOAD >= shuffledBlogs.length) {
      setHasMore(false)
    }
  }

  return (
    <SectionContainer>
      <InfiniteScroll
        dataLength={visibleBlogs.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h4 className="text-center">Loading...</h4>}
        endMessage={
          <p className="text-center mt-4">
            <b>Nothing more</b>
          </p>
        }
        className='mt-[40px]'
      >
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex w-auto gap-[16px]"
          columnClassName="my-masonry-column"
        >
          {visibleBlogs.map((card, i) => (
            <BlogCard key={card.key || i} data={transferText(card)} className="mb-4" />
          ))}
        </Masonry>
      </InfiniteScroll>
    </SectionContainer>
  )
}

export default BlogList
