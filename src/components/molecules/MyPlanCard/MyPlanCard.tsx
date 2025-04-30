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

      <div className="w-[50%] flex flex-col items-center justify-center  max-mdp:w-[50%] max-sm:w-[85%] max-mdp:h-max max-mdp:bg-white max-mdp:z-10 bg-white max-mdp:p-[25px] max-mdp:rounded-[5px] max-mdp:mt-[100px] max-mdp:absolute max-mdp:top-[50%] max-mdp:left-[50%] max-mdp:translate-x-[-50%] max-mdp:translate-y-[-50%]">
        <div className='max-w-[410px] w-full flex justify-start items-start'>
          {bigTitle && <h1 className='mb-[10px] text-5xl max-mdp:text-2xl'>{bigTitle}</h1>}
        </div>

        <ParagraphField
          title={pTitle ? pTitle : ''}
          paragraph={pText}
          tClassName={`text-4xl ${pTitleClassName} max-mdp:text-base`}
          pClassName="text-gray-4"
          className="max-w-[410px] w-full"
        />
        <div className="max-w-[410px] w-full flex flex-col justify-start max-mdp:max-w-none max-mdp:justify-center max-mdp:w-full">
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


