'use client'
import { ChangeEvent, useState } from 'react';
import { ButtonField } from '../ButtonField';
import { InputField } from '../InputField';

const BodyMassInput = ({ label, unit, button, value,width, onChange }: { label: string; unit: string; button: string; value: number; width:string, onChange: (e: ChangeEvent<HTMLInputElement>) => void; }) => {
    return (
        <div className="w-full max-w-[325px] h-[125px] flex flex-col justify-between pb-[18px] pr-[10px] pl-[19px] rounded-xl shadow-md">
            <div className="mt-3 text-xl">{label}</div>
            <div className="flex justify-between items-center">
                <InputField
                    type='number'
                    value={value}
                    onChange={onChange}
                    className={`${width} ant-reset text-4xl`}
                    suffix={<span className="bg-transparent mt-[10px] text-2xl">{unit}</span>}
                />
                <ButtonField
                    cType="red_white"
                    className='rounded-[15px] mt-[10px]'
                    onClick={() => console.log(`${button} clicked with value:`, value)}
                >
                    {button}
                </ButtonField>
            </div>
        </div>
    );
};

export default BodyMassInput