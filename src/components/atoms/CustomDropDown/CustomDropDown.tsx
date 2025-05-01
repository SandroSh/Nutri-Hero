import React from 'react'
import { dropdownContainerClass, dropdownWrapperClass, iconClass, labelActiveClass, labelBaseClass, selectClass } from './customDropDown.style';


const CustomDropDown = ({
    placeholder,
    options,
    className,
    iconSrc,
}: {
    placeholder: string;
    options: { value: string; label: string }[];
    className?: string;
    iconSrc: string;
}) => {
    const [value, setValue] = React.useState<string>('');

    return (
        <div className={`${dropdownContainerClass} ${className}`}>
            <div className={dropdownWrapperClass}>
                <select
                    className={selectClass}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                >
                    <option value="" disabled hidden>
                        {placeholder}
                    </option>
                    {options.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                            {opt.label}
                        </option>
                    ))}
                </select>
                <label
                    className={`${labelBaseClass} ${
                        value.length > 0 ? labelActiveClass : ''
                    }`}
                >
                    {placeholder}
                </label>
                <img src={iconSrc} alt="dropdown icon" className={iconClass} />
            </div>
        </div>
    );
}

export default CustomDropDown