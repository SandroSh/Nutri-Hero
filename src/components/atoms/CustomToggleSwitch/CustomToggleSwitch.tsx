import React from 'react'
import { InputField } from '../InputField'





const CustomToggleSwitch = ({onText,offText, sm=false}:{onText:string, offText:string, sm?:boolean}) => {
    return (
        <label className={`switch ${sm ? 'switch-sm' : ''}`}>
            <InputField type="checkbox"/>
                <span className={sm ? 'slider-sm' : 'slider'}></span>
                <span className="text on">{onText}</span>
                <span className="text off">{offText}</span>
        </label>
    )
}

export default CustomToggleSwitch