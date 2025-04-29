import React, { useState } from 'react'
import { SectionContainer } from '../SectionContainer'
import { RecepiesList } from '../RecepiesList'
import { useTranslations } from 'next-intl';
import { TitleField } from '@/components/atoms/TitleField';
import Image from 'next/image';
import { Dropdown, Form, MenuProps } from 'antd';
import { FilterForm } from '../FilterForm';
const items: MenuProps['items'] = [
    {
        key: '1',
        label: (
            <p>
                1st menu item
            </p>
        ),
    },
    {
        key: '2',
        label: (
            <p>
                2st menu item
            </p>
        ),
    },
]
const RecepieExplorer = () => {
    const t = useTranslations('library');
    const [isRecepiesList, setIsRecepiesList] = useState(true);
    const [isFilteringOpen, setIsFilteringOpen] = useState(false);
    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        console.log('Filter values:', values);

    };
    return (
        <div>
            <SectionContainer className='mt-[70px]' innerWrapperClassName=' max-xl:flex  max-xl:flex-col '>
                <div className='mt-[70px] mb-[19px] flex justify-between items-center  max-xl:px-[10%]  max-xl:px-[5%]  '>
                    {
                        isFilteringOpen ?
                            <TitleField text={t('libraryExplorer.resultTitle')} className='text-black   '  />
                            :
                            <div className='flex flex-wrap justify-start items-center gap-[10px]'>
                                <TitleField text={t('libraryExplorer.title')} className={`cursor-pointer ${isRecepiesList ? 'text-blue-1' : 'text-gray-5'} max-sm:text-2xl  max-esm:text-base`} onClick={() => setIsRecepiesList(true)} />
                                <span className='text-2xl text-gray-5  max-sm:text-xl max-esm:text-base'>/</span>
                                <TitleField text={t('libraryExplorer.title2')} className={`cursor-pointer ${isRecepiesList ? 'text-gray-5' : 'text-blue-1'}  max-sm:text-2xl max-esm:text-base`} onClick={() => setIsRecepiesList(false)} />
                            </div>
                    }
                    <div className='h-full flex justify-center items-baseline'>

                        <Dropdown menu={{ items }} placement="bottomRight" className='mt-[-50px]'>
                            <div className='p-[7px] rounded-[5px] bg-gray-3  cursor-pointer'>
                                <Image src={'/Sort.svg'} alt={'icon'} width={25} height={25} />
                            </div>
                        </Dropdown>
                        <div className='p-[7px] rounded-[5px] bg-gray-3 cursor-pointer mr-[5px] ml-[10px]' onClick={() => setIsFilteringOpen(!isFilteringOpen)}>
                            <Image src={isFilteringOpen ? '/filter-active.svg' : '/Filter_inactive.svg'} alt={'icon'} width={25} height={25} className={`${isFilteringOpen ? '' : ''}`} />
                        </div>
                    </div>
                </div>
                {
                    isFilteringOpen &&
                    <Form
                        form={form}
                        name="myFilterForm"
                        onFinish={onFinish}
                        autoComplete="off"
                        className='mb-[55px] mt-[19px] filter-cotnainer '>
                        <FilterForm form={form} />
                    </Form>
                }
                <RecepiesList />
            </SectionContainer>
        </div>
    )
}

export default RecepieExplorer