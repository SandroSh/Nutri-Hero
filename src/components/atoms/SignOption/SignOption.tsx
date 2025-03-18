import React from 'react'
import { signOption } from './signOption.onfig'





const SignOption = (data:signOption) => {
  return (
    <div className='w-full flex items-center justify-start py-[19px] pl-[12px] border border-gray-300 px-3 rounded-md focus:outline-none focus:ring-4 hover:border-red-10 transition-all my-[12px] cursor-pointer  duration-300 hover:scale-105'>
        <img src={data.imgUrl} alt="" />
        <p className='ml-[10px] '>{data.text}</p>
    </div>
  )
}

export default SignOption