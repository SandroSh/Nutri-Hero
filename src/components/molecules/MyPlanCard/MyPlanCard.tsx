// import { ImageField } from '@/components/atoms/ImageField'
// import { useTranslations } from 'next-intl'
// import React from 'react'
// import { myPlanCardProps } from './myPlanCard.config'
// import { ParagraphField } from '@/components/atoms/ParagraphFIeld'
// import { Button } from '@/components/atoms/ButtonField'

// const MyPlanCard = ({ imgUrl, className, children, pTitle, pText, bText, buttonClass, functionCall }: myPlanCardProps) => {
//     return (
//         <div className={`${className}`}>
//             <div className='w-[50%] h-[100vh] '>
//                 <ImageField src={imgUrl} className='w-full h-full object-cover object-top' alt={'image'} />
//             </div>
//             <div className='w-[50%] flex flex-col items-center justify-start'>
//                 <ParagraphField title={pTitle} paragraph={pText ? pText : undefined} tClassName='text-4xl' pClassName='text-gray-4' className='max-w-[410px] w-full' />

//                 <div className='max-w-[410px] w-full flex flex-col justify-start'>
//                     {children}
//                     {bText &&
//                         <Button className={`p-[9px] bg-red-10 rounded-[5px] text-white w-full max-w-[150px]  text-center h-[40px] cursor-pointer !self-end ${buttonClass}`}
//                             onClick={functionCall} >{bText}
//                         </Button>
//                     }
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default MyPlanCard


// MyPlanCard.tsx
import React from 'react';
import { ImageField } from '@/components/atoms/ImageField';
import { ParagraphField } from '@/components/atoms/ParagraphFIeld';
import { Button } from '@/components/atoms/ButtonField';
import { myPlanCardProps } from './myPlanCard.config';

const MyPlanCard = ({ imgUrl, className, children, pTitle, pText, bText, buttonClass, functionCall }: myPlanCardProps) => {
  return (
    <div className={`flex mt-[96px] ${className}`}>
      <div className="w-[50%] h-[100vh]">
        <ImageField src={imgUrl} className="w-full h-full object-cover object-top" alt="image" />
      </div>
      <div className="w-[50%] flex flex-col items-center justify-center">
        <ParagraphField
          title={pTitle}
          paragraph={pText}
          tClassName="text-4xl"
          pClassName="text-gray-4"
          className="max-w-[410px] w-full"
        />
        <div className="max-w-[410px] w-full flex flex-col justify-start">
          {children}
          {bText && (
            <Button
              className={`p-[9px] bg-red-10 rounded-[5px] text-white w-full max-w-[150px] text-center h-[40px] cursor-pointer !self-end ${buttonClass}`}
              onClick={functionCall}
            >
              {bText}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyPlanCard;