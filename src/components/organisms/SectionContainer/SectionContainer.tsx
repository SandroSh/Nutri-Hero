import React from 'react'
export interface SectionContainerProps {
    className?: string
    innerWrapperClassName?: string
    children?: React.ReactNode
}

const SectionContainer = ({ className, children, innerWrapperClassName, ...rest }: SectionContainerProps) => {
    return (
        <div className={`w-full flex justify-center ${className}`} {...rest} >
            <div className={`max-w-[1280px] w-full ${innerWrapperClassName}`} >
                {children}
            </div>
        </div>
    )
}

export default SectionContainer