'use client'
import { ProgressEditPlan } from '@/components/organisms/ProgressEditPlan';
import { ProgressTemplate } from '@/components/templates/Progress'
import { usePathname } from '@/i18n/navigation';
import React from 'react'





const ProgressPage = () => {
    const pathname = usePathname();
    console.log(pathname)
    const renderComponents = () => {
        switch (pathname) {
            case '/progress/home':
                return <ProgressTemplate />
            case '/progress/editplan':
                return <ProgressEditPlan />
            default:
                undefined
        }
    }
    return (
        renderComponents()
    )
}

export default ProgressPage