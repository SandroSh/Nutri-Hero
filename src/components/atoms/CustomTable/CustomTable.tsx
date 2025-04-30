import { Table, TableProps } from 'antd'
import { useTranslations } from 'next-intl'
import React from 'react'

const CustomTable = ({ textAddress }: { textAddress: string }) => {
  const t = useTranslations(textAddress)

  interface DataType {
    key: string
    energy: string
    cal: string
    fat: string
    sat: string
    carbs: string
    sugar: string
    protein: string
    salt: string
  }

  const columns: TableProps<DataType>['columns'] = [
    {
      title: t('energy.title'),
      dataIndex: 'energy',
      align: 'center',
    },
    {
      title: t('cal.title'),
      dataIndex: 'cal',
      align: 'center',
    },
    {
      title: t('fat.title'),
      dataIndex: 'fat',
      align: 'center',
    },
    {
      title: t('sat.title'),
      dataIndex: 'sat',
      align: 'center',
    },
    {
      title: t('carbs.title'),
      dataIndex: 'carbs',
      align: 'center',
    },
    {
      title: t('sugar.title'),
      dataIndex: 'sugar',
      align: 'center',
    },
    {
      title: t('protein.title'),
      dataIndex: 'protein',
      align: 'center',
    },
    {
      title: t('salt.title'),
      dataIndex: 'salt',
      align: 'center',
    },
  ]

  const data: DataType[] = [
    {
      key: '1',
      energy: t('energy.value'),
      cal: t('cal.value'),
      fat: t('fat.value'),
      sat: t('sat.value'),
      carbs: t('carbs.value'),
      sugar: t('sugar.value'),
      protein: t('protein.value'),
      salt: t('salt.value'),
    },
  ]

  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[600px] md:min-w-full mx-auto">
        <Table<DataType>
          columns={columns}
          dataSource={data}
          bordered
          pagination={false}
          className="!rounded-[5px] !bg-white"
        />
      </div>
    </div>
  )
}

export default CustomTable
