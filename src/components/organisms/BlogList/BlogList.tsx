import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import Masonry from 'react-masonry-css'
import { SectionContainer } from '../SectionContainer'
import { BlogCardProps, blogs } from '@/constants/dummyData'
import { shuffleArray, transferText } from '@/utils/utils'
import { BlogCard } from '@/components/molecules/BlogCard'
import { useTranslations } from 'next-intl'
import BlogDetailsCard from '@/components/molecules/BlogDetailsCard/BlogDetailsCard'



const BlogList = ({ column = 3, itemsPerLoad = 6, isDetailed = false, className, render }: {
  column?: number,
  className?:string;
  itemsPerLoad?: number,
  render?: (data: BlogCardProps, index: number) => React.ReactNode, isDetailed?: boolean
}) => {

  const breakpointColumnsObj = {
    default: column,
    1100: 2,
    700: 1,
  }
  const t = useTranslations('')
  const [shuffledBlogs, setShuffledBlogs] = useState<BlogCardProps[]>([])
  const [visibleBlogs, setVisibleBlogs] = useState<BlogCardProps[]>([])
  const [hasMore, setHasMore] = useState(true)

  useEffect(() => {
    const repeated = Array.from({ length: 5 }, () => shuffleArray(blogs)).flat()
    setShuffledBlogs(repeated)
    setVisibleBlogs(repeated.slice(0, itemsPerLoad))
  }, [])


  const fetchMoreData = () => {
    const nextElements = shuffledBlogs.slice(
      visibleBlogs.length,
      visibleBlogs.length + itemsPerLoad
    )
    setVisibleBlogs(prev => [...prev, ...nextElements])

    if (visibleBlogs.length + itemsPerLoad >= shuffledBlogs.length) {
      setHasMore(false)
    }
  }

  return (
    <SectionContainer className={`${className}`}>
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
          {visibleBlogs.map((card, i) => {
            const blogProps = { data: transferText(card, t), key: i }
            const translated = transferText(card, t)
            if (render) return render(translated, i)
          })}
        </Masonry>
      </InfiniteScroll>
    </SectionContainer>
  )
}

export default BlogList
