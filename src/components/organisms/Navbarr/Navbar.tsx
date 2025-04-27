'use client'
import { Logo } from '@/components/atoms/Logo'
import { Navlink } from '@/components/atoms/NavLink'
import { AuthButtons } from '@/components/molecules/AuthButtons'
import { LanguageSwitcher } from '@/components/molecules/LanguageSwitcher'
import { NavLinks } from '@/components/molecules/NavLinks'
import { navbarAuthenticatedLinks } from '@/constants/dummyData'
import { useNav } from '@/context/NavContext'
import { Link, usePathname } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import React, { useEffect, useState } from 'react'

const Navbar = () => {
    const t = useTranslations('navbar');
    const [isSignedIn, setIsSignedIn] = useState(false);
    const pathname = usePathname();
    useEffect(() => {
        const signedIn = sessionStorage.getItem('isSignedIn') === 'true';
        setIsSignedIn(signedIn);
    }, [pathname]);

    return (
        <div className=' z-50 fixed top-0 w-full flex justify-center pt-[32px] pb-[32px] bg-white shadow-[0_4px_8px_rgba(0,0,0,0.1)] p-4'>
            <div className=' flex justify-between  w-full  max-w-screen-xl' >
                <Logo width={124} height={24} />

                <div className='flex justify-center items-baseline gap-[30px]' >
                    {
                        isSignedIn ?
                            <NavLinks className='gap-[30px] mt-[15px]' >
                                {
                                    navbarAuthenticatedLinks.map((item, i) => 
                                    <Link href={item.link} key={i}><Navlink isActive={pathname === item.link} >{t(item.text).toUpperCase()}</Navlink></Link>
                                    )
                                }
                            </NavLinks>
                            :
                            <NavLinks className='gap-[30px]' >
                                <Navlink>{t('link1').toUpperCase()}</Navlink>
                                <Navlink>{t('link2').toUpperCase()}</Navlink>
                                <Navlink>{t('link3').toUpperCase()}</Navlink>
                                <Navlink>{t('link4').toUpperCase()}</Navlink>
                            </NavLinks>
                    }
                    {!isSignedIn && <AuthButtons className='gap-[30px]' />}

                    <LanguageSwitcher className='mt-[7px]' />
                </div>
            </div>
        </div>
    )
}

export default Navbar