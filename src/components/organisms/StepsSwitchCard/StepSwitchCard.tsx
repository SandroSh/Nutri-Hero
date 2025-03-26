import React, { useState } from "react";
import { Form, Steps } from "antd";
import { RadioField } from "@/components/atoms/RadioField";
import { useTranslations } from "next-intl";
import { MyGoalCard } from "@/components/molecules/MyGoalCard";
import { SelectorCard } from "@/components/molecules/SelectorCard";
import { ButtonField } from "@/components/atoms/ButtonField";


const { Step } = Steps;

const StepSwitchCard = ({ form }: { form: any }) => {
    const [currentStep, setCurrentStep] = useState(0);
    const t = useTranslations('myPlanPage.goal')
    const steps = [
        {
            content: (

                <Form.Item name="first_stage" rules={[{ required: true, message: t('card1.select1.required') }]}>
                    <SelectorCard title={t('card1.select1.title')}>
                        <RadioField
                            name="goal_card1_select1_option_1"
                            value={t('card1.select1.op1')}
                            label={t('card1.select1.op1')}
                            checked={form.getFieldValue("") === ""}
                            onChange={(value) => form.setFieldsValue({ })}
                        />
                        <RadioField
                            name="goal_card1_select1_option_2"
                            value={t('card1.select1.op2')}
                            label={t('card1.select1.op2')}
                            checked={form.getFieldValue("") === ""}
                            onChange={(value) => form.setFieldsValue({ })}
                        />
                    </SelectorCard>
                    <SelectorCard title={t('card1.select2.title')}>
                        <RadioField
                            name="goal_card1_select2_option_1"
                            value={t('card1.select2.op1')}
                            label={t('card1.select2.op1')}
                            checked={form.getFieldValue("") === ""}
                            onChange={(value) => form.setFieldsValue({})}
                        />
                        <RadioField
                            name="goal_card1_select2_option_2"
                            value={t('card1.select2.op2')}
                            label={t('card1.select2.op2')}
                            checked={form.getFieldValue("") === ""}
                            onChange={(value) => form.setFieldsValue({ })}
                        />
                        <RadioField
                            name="goal_card1_select2_option_3"
                            value={t('card1.select2.op3')}
                            label={t('card1.select2.op3')}
                            checked={form.getFieldValue("") === ""}
                            onChange={(value) => form.setFieldsValue({ })}
                        />
                    </SelectorCard>
                    
                </Form.Item>
            ),
        },
        {


        },
    ];

    const next = () => {
        form
            .validateFields()
            .then(() => {
                setCurrentStep(currentStep + 1);
            })
            .catch((error: Error) => {
                console.log("Validation failed:", error);
            });
    };

    const prev = () => {
        setCurrentStep(currentStep - 1);
    };

    return (

        <MyGoalCard imgUrl={"/Rectangle 1473 vertical.png"}>
            <Steps current={currentStep}>
                {steps.map((step, index) => (
                    <Step key={index} />
                ))}
            </Steps>
            <div>{steps[currentStep].content}</div>
            <div className="flex justify-end items-center mt-[75px]">
                {currentStep > 0 && (
                    <ButtonField style={{ marginRight: 8 }} onClick={prev} cType="red_white" bSize="md">
                        {t('prev')}
                    </ButtonField>
                )}
                {currentStep < steps.length - 1 && (
                    <ButtonField onClick={next} cType="red_white" bSize="md">
                        {t('next')}
                    </ButtonField>
                )}
                {currentStep === steps.length - 1 && (
                    <ButtonField onClick={() => form.submit()} cType="gray_green" bSize="md">
                        {t('submit')}
                    </ButtonField>
                )}
            </div>
        </MyGoalCard >

    )
}

export default StepSwitchCard