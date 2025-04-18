import React from 'react'
import { ButtonField } from '@/components/atoms/ButtonField'
import { InputField } from '@/components/atoms/InputField'
import { TitleField } from '@/components/atoms/TitleField'
import { JoinCard } from '@/components/molecules/JoinCard'
import Hero from '@/components/organisms/HeroSection/Hero'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'



const LibraryHero = () => {
    const t = useTranslations('library')
    return (
        <div>
            <Hero backgroundImg='/Hero_Girl.png' outerClassName='mt-[95px]' innerClassName='h-full w-full flex flex-col justify-center items-center' imgFilter={'bg-black/40'}>
                <div className='!justify-self-center !self-center mb-[40px]'>

                    <TitleField text={t('mainHero.title')} className='text-6xl text-white' />
                    <p className='text-white text-center font-light text-2xl mt-[15px]'>{t('mainHero.paragraph')}</p>
                </div>
                <JoinCard className='!px-[25px]'>
                    <InputField iSize='full' cType='gray_red' placeholder={t('mainHero.inputPlaceholder')} prefix={<Image width={19} height={19} src='/search-svgrepo-com.svg' alt='icon' className='mr-[10px]' />}
                    />
                    <ButtonField cType='red_white' className='mx-[16px] py-[16px] px-[42px] h-full' bSize='xl'>{t('mainHero.exerciseButton')}</ButtonField>
                    <Link href='/library/explore-recepies'>
                        <ButtonField cType='blue_white' className='py-[16px] px-[42px] h-full' bSize='xl'>{t('mainHero.recepieButton')}</ButtonField>
                    </Link>
                </JoinCard>

            </Hero>

        </div>
    )
}

export default LibraryHero