import React from 'react'
import { SectionContainer } from '../SectionContainer'
import { Form } from 'antd'



const MyGoal = () => {

    const [form] = Form.useForm();
    console.log(form)

    return (
        <SectionContainer innerWrapperClassName="!max-w-[1700px] !w-full">
            <Form
                //   form={form}
                name="myPlanForm"
                //   onFinish={onFinish}
                autoComplete="off"
            >
            </Form>
        </SectionContainer>
    )
}

export default MyGoal