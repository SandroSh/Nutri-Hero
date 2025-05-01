import React from 'react'
import {
    containerClass,
    wrapperClass,
    inputClass,
    labelBaseClass,
    labelActiveClass,
} from './customInput.style'

const CustomInputField = ({ placeholder, className, type }: { placeholder: string; type: string, className?: string }) => {
    const [value, setValue] = React.useState<string>('')
    return (
        <div className={`${containerClass} ${className}`}>
            <div className={wrapperClass}>
                <input
                    className={inputClass}
                    type={type}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <label className={`${labelBaseClass} ${value.length > 0 ? labelActiveClass : ''}`}>
                    {placeholder}
                </label>
            </div>
        </div>

    )
}

export default CustomInputField