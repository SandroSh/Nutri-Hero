import { Logo } from '@/components/atoms/Logo'
import { AuthButtons } from '@/components/molecules/AuthButtons'
import { NavLinks } from '@/components/molecules/NavLinks'
import React from 'react'

const Navbar = () => {
    return (
        <div className='fixed w-full flex justify-center pt-[32px] pb-[32px] bg-white shadow-[0_4px_8px_rgba(0,0,0,0.1)] p-4'>
            <div className=' flex justify-between  w-full  max-w-screen-xl' >
                <Logo width={124} height={24} />
                <div className='flex justify-center items-baseline gap-[30px]' >
                    <NavLinks/>
                    <AuthButtons className='gap-[30px]' />
                </div>
            </div>
        </div>
    )
}

export default Navbar