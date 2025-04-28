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
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const Navbar = () => {
    const t = useTranslations('navbar');
    const [isSignedIn, setIsSignedIn] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const signedIn = sessionStorage.getItem('isSignedIn') === 'true';
        setIsSignedIn(signedIn);
        setMenuOpen(false); 
    }, [pathname]);

    const toggleMenu = () => {
        setMenuOpen(prev => !prev);
    };

    return (
        <div className='h-[100px] z-50  fixed top-0 w-full flex justify-center pt-[16px] pb-[16px] bg-white shadow-[0_4px_8px_rgba(0,0,0,0.1)] p-4'>
            <div className='flex justify-between items-center w-full max-w-screen-xl'>
                <Logo width={124} height={24} />

                <div className='hidden md:flex justify-center items-baseline gap-[30px]'>
                    {isSignedIn ? (
                        <NavLinks className='gap-[30px] mt-[15px]'>
                            {navbarAuthenticatedLinks.map((item, i) => (
                                <Link href={item.link} key={i}>
                                    <Navlink isActive={pathname === item.link}>
                                        {t(item.text).toUpperCase()}
                                    </Navlink>
                                </Link>
                            ))}
                        </NavLinks>
                    ) : (
                        <NavLinks className='gap-[30px]'>
                            <Navlink>{t('link1').toUpperCase()}</Navlink>
                            <Navlink>{t('link2').toUpperCase()}</Navlink>
                            <Navlink>{t('link3').toUpperCase()}</Navlink>
                            <Navlink>{t('link4').toUpperCase()}</Navlink>
                        </NavLinks>
                    )}
                    {!isSignedIn && <AuthButtons className='gap-[30px]' />}
                    <LanguageSwitcher className='mt-[7px]' />
                </div>

                <div className='flex md:hidden'>
                    <button onClick={toggleMenu}>
                        <Image
                            src="/burger-icon.svg" 
                            alt="Menu"
                            width={25}
                            height={25}
                        />
                    </button>
                </div>
            </div>

            {/* Mobile*/}
            {menuOpen && (
                <div className='absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-end py-4 md:hidden z-50'>
                    {isSignedIn ? (
                        <NavLinks className='flex-col !items-end gap-4 end'>
                            {navbarAuthenticatedLinks.map((item, i) => (
                                <Link href={item.link} key={i}>
                                    <Navlink isActive={pathname === item.link}>
                                        {t(item.text).toUpperCase()}
                                    </Navlink>
                                </Link>
                            ))}
                        </NavLinks>
                    ) : (
                        <NavLinks className='flex-col  gap-4 end'>
                            <Navlink>{t('link1').toUpperCase()}</Navlink>
                            <Navlink>{t('link2').toUpperCase()}</Navlink>
                            <Navlink>{t('link3').toUpperCase()}</Navlink>
                            <Navlink>{t('link4').toUpperCase()}</Navlink>
                        </NavLinks>
                    )}
                    <LanguageSwitcher className='w-full flex justify-end mt-[10px]' />
                    {!isSignedIn && <AuthButtons className='w-full flex  justify-center gap-4 mt-4' />}
                </div>
            )}
        </div>
    )
}

export default Navbar
