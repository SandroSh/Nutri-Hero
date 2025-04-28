import React from 'react'



const JoinCard = ({children, className}:{children:React.ReactNode, className?:string}) => {

    return (
        <div className={`w-full flex justify-around items-center bg-white my-[70px] rounded-[10px] py-[40px]  ${className} max-mdp:px-[10px] max-mdp:flex-col  max-mdp:gap-[10px]`} >
           {children}
        </div>
    )
}

export default JoinCard