import { ImageField } from '@/components/atoms/ImageField';
import { ParagraphField } from '@/components/atoms/ParagraphFIeld';
import { Popover } from 'antd';
import React, { useState } from 'react'
import { recepieCardDataType, RecepieTabItem, TabItem } from '../Tabs/Tab.config';
import { Link } from '@/i18n/navigation';
import { recepieType } from '@/constants/dummyData';

const GoalActivityCard = ({ data, className, innerClassName }:{ data: recepieCardDataType | recepieType, className?:string, innerClassName?:string }) => {

    const popoverContent = (
        <div className="flex items-center text-white bg-red-10 rounded-[4px] max-w-[165px] text-center ">
            <p>
                Click here to mark a suggestion as complete
            </p>
        </div>
    );

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <Link href={`/my_plan/goal-home/${data.key}`} className={`w-full reset-link ${className}`}>
            <div className={`w-full ${innerClassName} mx-auto rounded-lg shadow-lg overflow-hidden mb-[15px] hover-card `}> <ImageField
                src={data.imageUrl}
                alt={data.pTitle}
                className="object-contain"

            // style={{
            //     transform: isHovered ? 'translateY(-15px) scale(1.1)' : 'translateY(0) scale(1)',
            //     filter: isHovered ? 'brightness(0.9)': '',
            //     transition: 'all transform 0.5s ',
            // }}
            />
                <div className=' w-full flex justify-between items-center mt-[12px] px-[12px] pb-[16px]' >
                    <ParagraphField title={data.pTitle} paragraph={data.pText} pClassName='text-gray-5 !mt-[0px]' />
                    <div className='flex justify-center items-center gap-[12px]' onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}>
                        <Popover
                            content={popoverContent}
                            trigger="hover"
                            placement="top"
                        >
                            <img
                                src={'/Refresh.svg'}
                                alt="Action 1"
                                className="w-7 h-7 object-contain cursor-pointer"
                            />
                        </Popover>
                        <Popover
                            content={popoverContent}
                            trigger="hover"
                            placement="top"
                            overlayInnerStyle={{
                                backgroundColor: 'red'
                            }}
                        >
                            <img
                                src={'/Complete_inactive.svg'}
                                alt="Action 2"
                                className="w-7 h-7 object-contain cursor-pointer"
                            />
                        </Popover>
                    </div>

                </div>

            </div>
        </Link>
    )
}

export default GoalActivityCard