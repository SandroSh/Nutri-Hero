import { ButtonField } from '@/components/atoms/ButtonField'
import { InputField } from '@/components/atoms/InputField'
import { TitleField } from '@/components/atoms/TitleField'
import { JoinCard } from '@/components/molecules/JoinCard'
import Hero from '@/components/organisms/HeroSection/Hero'
import { LibraryHero } from '@/components/organisms/LibraryHero'
import { usePathname } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'





const LibraryTemplate = () => {
    
    const pathname = usePathname();
    const renderComponents = () => {
        switch (pathname) {
          case '/library':
            return <LibraryHero/>
          case '/library/recepies':
            return 
         
        }
      }
    return (
       {
        renderComponents
       }
    )
}

export default LibraryTemplate