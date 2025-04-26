'use client'
import { usePathname } from '@/i18n/navigation';
import React from 'react'
import { Footer } from '../Footer';

const ConditionalFooter = () => {
    const pathname = usePathname();

    if (pathname.includes('/account')) {
        return null;
    }
    
    return <Footer />
}

export default ConditionalFooter