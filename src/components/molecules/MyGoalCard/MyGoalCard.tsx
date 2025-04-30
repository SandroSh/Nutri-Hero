import React from 'react'
import { myPlanCardProps } from '../MyPlanCard/myPlanCard.config'
import { ImageField } from '@/components/atoms/ImageField'

const MyGoalCard = (data: myPlanCardProps) => {
    return (
        <div className={`flex mt-[96px] ${data.className}`}>
            <div className="w-[50%] h-[100vh] max-mdp:absolute max-mdp:w-[100%] ">
                <ImageField src={data.imgUrl} className="w-full h-full object-cover object-top" alt="image" />
            </div>
            <div className="w-[50%] flex flex-col items-center self-start mt-[70px] justify-center max-mdp:w-full">
                <div className='w-full max-w-[410px]'>
                    {data.children}
                </div>
            </div>
        </div>
    )
}

export default MyGoalCard