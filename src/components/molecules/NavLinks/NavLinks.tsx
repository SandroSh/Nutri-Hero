import { Navlink } from '@/components/atoms/NavLink'
import { useTranslations } from 'next-intl';
import React from 'react'




const NavLinks = () => {

    const t = useTranslations('navbar');
    return (
        <div className='flex justify-center items-center gap-[30px]'>
            <Navlink>{t('link1')}</Navlink>
            <Navlink>{t('link2')}</Navlink>
            <Navlink>{t('link3')}</Navlink>
            <Navlink>{t('link4')}</Navlink>
        </div>
    )
}

export default NavLinks