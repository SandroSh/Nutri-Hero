'use client'
import { ListField } from '@/components/atoms/ListField';
import { Logo } from '@/components/atoms/Logo';
import { DownloadCard } from '@/components/molecules/DownloadCard'
import { footerNavData } from '@/constants/dummyData';
import { usePathname } from '@/i18n/navigation';
import React from 'react'
import { useTranslations } from 'use-intl'

const Footer = () => {
    const pathname = usePathname();
    const t = useTranslations('footer');

    return (
        <div className={`w-full px-[15px] flex justify-center bg-white ${pathname.includes('my_plan/') ? '' : ''} self-end justify-self-end `}>
            <div className=' flex flex-col justify-between  w-full  max-w-screen-xl' >
                <div className=' w-full flex justify-between items-start gap-[100px] mt-[40px] max-mdp:justify-center'>
                    <DownloadCard className='' />
                    <div className='flex justify-evenly items-start w-[70%] max-md:hidden'>
                        {
                            Object.entries(footerNavData).map(([section, keys], index) => {
                                const translatedArray = keys.map(key => t(`nav.${section}.${key}`));
                                return <ListField listData={translatedArray.slice(0)} key={index} />;
                            })
                        }
                    </div>
                </div>
                <div className='flex flex-col items-start justify-start gap-[15px] mt-[15p] mb-[30px]  max-mdp:items-center max-mdp:mt-[40px]'>
                    <Logo />
                    <p className='text-gray-7'>{t('copyright')}</p>
                </div>
            </div>
        </div>
    )
}

export default Footer