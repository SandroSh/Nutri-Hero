import React from 'react'
import { myPlanCardProps } from '../MyPlanCard/myPlanCard.config'
import { ImageField } from '@/components/atoms/ImageField'

const MyGoalCard = (data: myPlanCardProps) => {
    return (
        <div className={`flex mt-[96px] ${data.className}`}>
            <div className="w-[50%] h-[100vh]">
                <ImageField src={data.imgUrl} className="w-full h-full object-cover object-top" alt="image" />
            </div>
            <div className="w-[50%] flex flex-col items-center justify-center">
                <div className='w-full max-w-[410px]'>
                    {data.children}

                </div>
            </div>
        </div>
    )
}

export default MyGoalCard