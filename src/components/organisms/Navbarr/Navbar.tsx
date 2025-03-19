import { Logo } from '@/components/atoms/Logo'
import { Navlink } from '@/components/atoms/NavLink'
import { AuthButtons } from '@/components/molecules/AuthButtons'
import { NavLinks } from '@/components/molecules/NavLinks'
import { useTranslations } from 'next-intl'
import React from 'react'

const Navbar = () => {
    const t = useTranslations('navbar');
    return (
        <div className=' z-50 fixed top-0 w-full flex justify-center pt-[32px] pb-[32px] bg-white shadow-[0_4px_8px_rgba(0,0,0,0.1)] p-4'>
            <div className=' flex justify-between  w-full  max-w-screen-xl' >
                <Logo width={124} height={24} />

                <div className='flex justify-center items-baseline gap-[30px]' >
                    <NavLinks className='gap-[30px]' >
                        <Navlink>{t('link1').toUpperCase()}</Navlink>
                        <Navlink>{t('link2').toUpperCase()}</Navlink>
                        <Navlink>{t('link3').toUpperCase()}</Navlink>
                        <Navlink>{t('link4').toUpperCase()}</Navlink>
                    </NavLinks>
                    <AuthButtons className='gap-[30px]' />
                </div>
            </div>
        </div>
    )
}

export default Navbar