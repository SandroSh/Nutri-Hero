import { PrintData } from '@/components/atoms/PrintData'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'



const SocialIcons = () => {
    const t = useTranslations('blog.blogDetails.icons');
    return (
        <div className='flex items-center justify-center gap-[15px] mt-[12px] mb-[50px]'>
            <div className='flex justify-center items-center gap-[10px] self-start cursor-pointer'>
                <Image src={'/Icon awesome-facebook-square.svg'} alt={'icon'} width={12} height={12} />
                <p className='text-gray-5'>{t('facebook')}</p>
            </div>

            <div className='flex justify-center items-center gap-[10px] self-start cursor-pointer'>
                <Image src={'/Icon awesome-twitter-square-1.svg'} alt={'icon'} width={12} height={12} />
                <p className='text-gray-5'>{t('twitter')}</p>
            </div>
            <div className='flex justify-center items-center gap-[10px] self-start cursor-pointer'>
                <Image src={'/Icon awesome-twitter-square-1.svg'} alt={'icon'} width={12} height={12} />
                <p className='text-gray-5'>{t('copy')}</p>
            </div>



        </div>
    )
}

export default SocialIcons