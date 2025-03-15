import React from 'react'

const ListField = ({listData}:{listData:string[]}) => {

  return (
    <div className='flex flex-col items-start justify-start gap-[12px]' >
        <ul>
            { listData.map((item, index) => (
                <li key={index} className={`text-[14px]  ${index == 0 ? 'font-bold text-black': 'font-normal text-gray-7 '} leading-[19px] mb-[10px]`}>
                    {item}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default ListField