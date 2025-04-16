'use client'
import { LibraryHero } from '@/components/organisms/LibraryHero'
import { RecepieExplorer } from '@/components/organisms/RecepieExplorer'
import { usePathname } from '@/i18n/navigation'
import React from 'react'





const LibraryTemplate = () => {

    const pathname = usePathname();
    console.log(pathname)
    const renderComponents = () => {
        switch (pathname) {
            case '/library/home':
                return <LibraryHero />
            case '/library/explore-recepies':
                return <RecepieExplorer />
            default:
              

        }
    }
    return (
        renderComponents()
    )
}

export default LibraryTemplate