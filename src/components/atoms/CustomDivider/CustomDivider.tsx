import { Divider, DividerProps } from 'antd'
import React from 'react'

const CustomDivider = ({ prefixCls , orientation='left', orientationMargin=0}:DividerProps) => {
  return (
    <Divider orientation={orientation} orientationMargin={orientationMargin} className='w-[100%] mb-[40px]'>
        <h1 className='font-bold text-2xl mr-[30px]'>{prefixCls}</h1>
    </Divider>
  )
}

export default CustomDivider