import { BlogCard } from '@/components/molecules/BlogCard'
import { BlogCardProps, blogs } from '@/constants/dummyData'
import { useTranslations } from 'next-intl';


const BlogRow = ({array}:{array:BlogCardProps[]}) => {
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
        <div className='flex flex-wrap items-start justify-center gap-[19px] '>
            {
                array.map((item, index) =>
                    <BlogCard key={index} data={transferText(item)} className='max-w-[410px]' />
                )
            }
        </div>
    )
}

export default BlogRow