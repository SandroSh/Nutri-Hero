import React, { useState } from 'react'
import { SectionContainer } from '../SectionContainer'
import { Form } from 'antd'
import { MyPlanCard } from '@/components/molecules/MyPlanCard'
import { useTranslations } from 'next-intl'
import { goalFormData } from '@/constants/dummyData'
import { StepSwitchCard } from '../StepsSwitchCard'



const MyGoal = () => {
    const t = useTranslations('myPlanPage.goal')
    const [stage, setStage] = useState<number>(0)
    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        sessionStorage.setItem('userGoalData', JSON.stringify(form.getFieldsValue(true)));
        
    };
  
    return (
        <SectionContainer innerWrapperClassName="!max-w-[1701px] !w-full max-mdp:px-[19px]">
            {
                stage == 0 ?
                    <div>
                        <MyPlanCard
                            imgUrl={goalFormData[0].imgUrl}
                            bigTitle={t(goalFormData[0].title)}
                            pTitle={t(goalFormData[0].pTitle)}
                            pTitleClassName='text-xl'
                            pText={t(goalFormData[0].pText)}
                            className="!h-[100vh]"
                            buttonClass="mt-[95px] max-mdp:mt-[50px]"
                            functionCall={() => setStage(1)}
                            bText={t(goalFormData[0].bText)}
                        >
                        </MyPlanCard>
                    </div>
                    :
                    <Form
                        form={form}
                        name="myPlanForm"
                        onFinish={onFinish}
                        autoComplete="off"
                        className='mt-[95px]'
                    >
                        <StepSwitchCard form={form}/>
                    </Form>
            }

        </SectionContainer>
    )
}

export default MyGoal