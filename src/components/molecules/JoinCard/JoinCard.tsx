import React from 'react'



const JoinCard = ({children, className}:{children:React.ReactNode, className?:string}) => {

    return (
        <div className={`w-full flex justify-around items-center bg-white my-[70px] rounded-[10px] py-[40px] px-[80px] ${className} `} >
           {children}
        </div>
    )
}

export default JoinCard