'use client'
import { Logo } from '@/components/atoms/Logo'
import { Navlink } from '@/components/atoms/NavLink'
import { TimeTitle } from '@/components/atoms/TimeTitle'
import { TitleField } from '@/components/atoms/TitleField'
import { AuthButtons } from '@/components/molecules/AuthButtons'
import { LanguageSwitcher } from '@/components/molecules/LanguageSwitcher'
import { NavLinks } from '@/components/molecules/NavLinks'
import { accountSidebarLinks, navbarAuthenticatedLinks } from '@/constants/dummyData'
import { Link, usePathname } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const Navbar = () => {
    const t = useTranslations('navbar');
    const t2 = useTranslations('account')
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
            <div className='flex justify-between items-center w-full max-w-screen-xl '>
                <Logo width={124} height={24} />

                <div className='hidden mdp:flex justify-center items-baseline gap-[30px] '>
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


                <div className='flex mdp:hidden'>
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


            {menuOpen && (
                <div className={`absolute top-full left-0 w-full bg-white shadow-md flex  items-start py-4 px-[19px]  mdp:hidden z-50 ${pathname.includes('account') ? 'justify-between' : 'justify-end'} `}>
                    {
                        pathname.includes('account') &&
                        <div className='flex flex-col items-start justify-start '>

                            <div className='flex flex-col gap-4'>
                                {
                                    accountSidebarLinks.map((item, i) => <Link href={item.link} key={i}><p className={` text-[16px]  ${item.link == pathname ? 'text-red-10' : 'text-black'}`}>{t2(item.text).toUpperCase()}</p></Link>)
                                }
                            </div>


                            <div className='flex justify-start items-center gap-4  mt-[80px]'>
                                <Image src={'/Avatar.png'} alt={'image'} width={30} height={30} />
                                <TitleField text={t2('sidebar.name')} className='text-black  font-bold text-[15px]' />
                            </div>



                            {
                                <div className='flex  justify-center self-start mt-[15px]'>
                                    {[... new Array(3)].map((_, i) => <TimeTitle numText={t2(`sidebar.date.${i}.time`)} text={t2(`sidebar.date.${i}.text`)} key={i} tClassName='font-normal !text-[16px] !text-black leading-[10px]' pClassName='font-normal text-[10px] leading-[8px] mt-[15px] !text-black' className={i == 1 ? 'mx-[19px]' : ''} />)}
                                </div>
                            }

                        </div>
                    }
                    <div className='flex flex-col'>

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
                        {pathname.includes('account') && <p className='font-semibold text-[16px] leading-[40px] mt-[10px] self-end'>{t2('buttons.logout')}</p>}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Navbar
