import { recepies } from '@/constants/dummyData';
import { Pagination } from 'antd';
import React, { useState, useTransition } from 'react'
import { GoalActivityCard } from '@/components/molecules/GoalActivityCard';
import { useTranslations } from 'next-intl';

const RecepiesList = () => {
    const t = useTranslations('library');
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 6;

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const startIndex = (currentPage - 1) * pageSize;
    const paginatedData = recepies.slice(startIndex, startIndex + pageSize);

    return (
        <div  className='mt-[150px]'>
            <div className='flex flex-wrap justify-center items-center gap-[16px]'>
                {paginatedData.map((item, index) => (
                    <GoalActivityCard data={{...item, pTitle:t(item.pTitle), pText:t(item.pText) }} key={index} className='max-w-[400px] mb-[-10px]' />
                ))}
            </div>
            <Pagination
                current={currentPage}
                pageSize={pageSize}
                total={recepies.length}
                onChange={handlePageChange}
                className='mt-[15px]'
            />
        </div>
    )
}

export default RecepiesList