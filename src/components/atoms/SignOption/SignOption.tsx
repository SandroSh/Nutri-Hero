import React from 'react'
import { signOption } from './signOption.onfig'
import { signOptionStyle } from './signOption.style'





const SignOption = (data:signOption) => {
  return (
    <div className={`${signOptionStyle} ${data.className}`}>
        <img src={data.imgUrl} alt="" />
        <p className='ml-[10px] '>{data.text}</p>
    </div>
  )
}

export default SignOption