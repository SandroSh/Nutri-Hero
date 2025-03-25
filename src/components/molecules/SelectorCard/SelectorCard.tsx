import React from 'react'
import { ISelectorCardTypes } from './selectorCard.config'





const SelectorCard = ({title, className, children}:ISelectorCardTypes) => {
  return (
    <div className={`w-full flex flex-col items-center justify-center ${className}`}>
        <h1>{title}</h1>
        {children}
    </div>
  )
}

export default SelectorCard