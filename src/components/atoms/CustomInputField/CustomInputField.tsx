import React from 'react'

const CustomInputField = ({placeholder, type}:{placeholder:string; type:string }) => {
    const [value, setValue] = React.useState<string>('')
    return (
        <div className="flex min-w-full justify-center items-center">
            <div className="w-full relative">
                <input
                    className="peer w-full h-[70px] p-4 pt-6 pr-4 text-black font-bold text-base bg-inherit border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed border-gray-2"
                    type={type}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <label
                    className={`absolute text-gray-500 text-xl duration-150 transform -translate-y-3.5 top-[50%]  z-10 origin-[0] left-[19px] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8
                    ${value.length > 0 ? 'scale-75 -translate-y-8' : ''}    
                        `}
                >
                   {placeholder}
                </label>
            </div>
        </div>
    )
}

export default CustomInputField