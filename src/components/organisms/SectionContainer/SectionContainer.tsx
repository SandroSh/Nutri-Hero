import React from 'react'
export interface SectionContainerProps {
    className?: string
    children?: React.ReactNode
}

const SectionContainer = ({ className, children, ...rest }: SectionContainerProps) => {
    return (
        <div className={`w-full flex justify-center ${className}`} {...rest} >
            <div className='max-w-screen-xl mx-auto w-full mt-[-70px]' >
                {children}
            </div>
        </div>
    )
}

export default SectionContainer