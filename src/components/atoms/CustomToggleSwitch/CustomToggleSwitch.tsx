import React from 'react'
import { InputField } from '../InputField'





const CustomToggleSwitch = ({onText,offText}:{onText:string, offText:string}) => {
    return (
        <label className="switch">
            <InputField type="checkbox"/>
                <span className="slider"></span>
                <span className="text on">{onText}</span>
                <span className="text off">{offText}</span>
        </label>
    )
}

export default CustomToggleSwitch