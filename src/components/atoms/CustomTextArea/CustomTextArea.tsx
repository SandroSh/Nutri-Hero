import React from 'react'

const CustomTextArea = ({ placeholder}: { placeholder: string}) => {
    const [value, setValue] = React.useState<string>('')
    return (
        <div className="flex min-w-full justify-center items-center">
            <div className="w-full relative">
                <textarea
                    className="peer w-full min-h-[150px] p-4 pt-8 pr-4 text-black font-bold text-base bg-inherit border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed border-gray-2"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <label
                    className={`absolute text-gray-500 text-xl duration-150 transform -translate-y-3.5 top-[25px]  z-10 origin-[0] left-[19px] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75  peer-focus:mt-[13px] peer-focus:-translate-y-8
                    ${value.length > 0 ? 'scale-75  top-[25px]' : ''} `}
                >
                    {placeholder}
                </label>
            </div>
        </div>
    )
}

export default CustomTextArea