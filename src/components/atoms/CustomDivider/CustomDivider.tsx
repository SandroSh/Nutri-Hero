import { Divider, DividerProps } from 'antd'
import React from 'react'

const CustomDivider = ({ children, orientation='left', orientationMargin=0}:DividerProps) => {
  return (
    <Divider orientation={orientation} orientationMargin={orientationMargin} className='w-[100%]'>
        {children}
    </Divider>
  )
}

export default CustomDivider