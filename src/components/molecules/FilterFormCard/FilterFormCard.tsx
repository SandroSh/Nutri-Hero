import React from 'react'

export interface FilterFormCardType {
    label: string;
    children: React.ReactNode;
    className?:string;
}

const FilterFormCard = ({ label, children, className }: FilterFormCardType) => {
    return (
        <div className={`w-max flex flex-col  ${className}`}>
            <h1 className='font-bold mb-[10px] text-lg'>{label}</h1>
            {children}
        </div>
    )
}

export default FilterFormCard