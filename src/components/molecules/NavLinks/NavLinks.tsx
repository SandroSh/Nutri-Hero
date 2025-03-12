import { Navlink } from '@/components/atoms/NavLink'
import { useTranslations } from 'next-intl';
import React from 'react'



export interface NavLinksProps {
    className?: string
    children?: React.ReactNode
}

const NavLinks = ({
    className,
    children
}: NavLinksProps) => {

    return (
        <div className={`flex justify-center items-center ${className}`} >
            {children}
        </div>
    )
}

export default NavLinks