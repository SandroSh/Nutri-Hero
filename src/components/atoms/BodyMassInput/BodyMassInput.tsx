'use client'
import { ChangeEvent, useState } from 'react';
import { ButtonField } from '../ButtonField';
import { InputField } from '../InputField';
import { EditField } from '../EditField';

const BodyMassInput = ({ label, unit, button, className, value, width, onChange }: { label: string; unit: string; button: string;className?:string, value: number; width: string, onChange: (e: ChangeEvent<HTMLInputElement>) => void; }) => {
    const [isEditig, setIsEditing] = useState(false);
    return (
        <div className={`bg-white h-[125px] flex flex-col justify-between pb-[18px] pr-[10px] pl-[19px] rounded-[5px] shadow-md ${className}`}>
            <div className="mt-3 text-xl">{label}</div>
            <div className="flex justify-between items-center">
                <InputField
                    type='number'
                    value={value}
                    onChange={onChange}
                    className={`${width} ant-reset text-4xl`}
                    suffix={<span className="bg-transparent mt-[10px] text-2xl">{unit}</span>}
                />
                {
                    !isEditig ?

                        <EditField onClickEdit={() => setIsEditing(!isEditig)} className='mt-[19px] cursor-pointer' />
                        :
                        <ButtonField
                            cType="red_white"
                            className='rounded-[5px] mt-[15px]'
                            onClick={() => setIsEditing(!isEditig)}
                        >
                            {button}
                        </ButtonField>
                }

            </div>
        </div>
    );
};

export default BodyMassInput