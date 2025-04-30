import React from 'react';
import { ImageField } from '@/components/atoms/ImageField';
import { ParagraphField } from '@/components/atoms/ParagraphFIeld';
import { ButtonField } from '@/components/atoms/ButtonField';
import { myPlanCardProps } from './myPlanCard.config';
import { TitleField } from '@/components/atoms/TitleField';

const MyPlanCard = ({ imgUrl, className, children, pTitle, pText, bText, buttonClass, pTitleClassName, bigTitle, functionCall }: myPlanCardProps) => {
  return (
    <div className={`flex mt-[96px] ${className}  max-mdp:justify-center`}>
      <div className="w-[50%] h-[100vh] max-mdp:w-[100%] max-mdp:absolute z-1">
        <ImageField src={imgUrl} className="w-full h-full object-cover object-top" alt="image" />
      </div>
      
      <div className="w-[50%] flex flex-col items-center justify-center  max-mdp:max-w-none bg-white z">
        <div className='max-w-[410px] w-full flex justify-start items-start'>
        {bigTitle && <TitleField text={bigTitle} className='mb-[50px] text-5xl'/>}
        </div>
    
        <ParagraphField
          title={pTitle ? pTitle : ''}
          paragraph={pText}
          tClassName={`text-4xl ${pTitleClassName}`}
          pClassName="text-gray-4"
          className="max-w-[410px] w-full"
        />
        <div className="max-w-[410px] w-full flex flex-col justify-start max-mdp:max-w-none max-mdp:justify-center">
          {children}
          {bText && (
            <ButtonField
              className={`p-[9px] bg-red-10  text-white w-full max-w-[150px] text-center h-[40px] cursor-pointer !self-end ${buttonClass}`}
              onClick={functionCall}
            >
              {bText}
            </ButtonField>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyPlanCard;


