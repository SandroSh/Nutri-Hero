import { ImageField } from '@/components/atoms/ImageField';
import { ParagraphField } from '@/components/atoms/ParagraphFIeld';
import { Popover } from 'antd';
import React, { useState } from 'react'

interface GoalActivityCardType {
    imageUrl: string;
    title: string;
    onLoadNewSuggestion: () => void;
}
const GoalActivityCard: React.FC<GoalActivityCardType> = ({
    imageUrl,
    title,
    onLoadNewSuggestion,
}) => {

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

        <div className="max-w-[325px] mx-auto text- rounded-lg shadow-lg overflow-hidden"> <ImageField
            src={imageUrl}
            alt={title}
            className="object-contain"
            
            style={{
                transform: isHovered ? 'translateY(-15px) scale(1.1)' : 'translateY(0) scale(1)',
                filter: isHovered ? 'blur(1px)': '',
                transition: 'transform 0.3s ease',
            }}
        />
            <div className=' w-full flex justify-between items-center mt-[12px] px-[12px] pb-[16px]' >
                <ParagraphField title={'Tuna'} paragraph='ergewger' pClassName='text-gray-5 !mt-[0px]' />
                <div className='flex justify-center items-center gap-[12px]' onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
                    <Popover
                        content={popoverContent}
                        trigger="hover"
                        placement="top"
                        overlayStyle={{
                            backgroundColor: 'white',
                            borderRadius: '9999px',
                            padding: '8px 16px',
                            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
                        }}
                    >
                        <img
                            src={'/Refresh.svg'}
                            alt="Action 1"
                            className="w-7 h-7 object-contain"
                        />
                    </Popover>
                    <Popover
                        content={popoverContent}
                        trigger="hover"
                        placement="top"
                        overlayStyle={{
                            backgroundColor: 'red',
                            borderRadius: '9999px',
                            padding: '8px 16px',
                            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
                        }}
                        overlayInnerStyle={{
                            backgroundColor: 'red'
                        }}
                    >
                        <img
                            src={'/Complete_inactive.svg'}
                            alt="Action 2"
                            className="w-7 h-7 object-contain"
                        />
                    </Popover>
                </div>

            </div>

        </div>
    )
}

export default GoalActivityCard