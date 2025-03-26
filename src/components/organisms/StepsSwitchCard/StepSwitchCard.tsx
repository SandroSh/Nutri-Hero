import React, { useState } from "react";
import { Form, Steps } from "antd";
import { RadioField } from "@/components/atoms/RadioField";
import { useTranslations } from "next-intl";
import { MyGoalCard } from "@/components/molecules/MyGoalCard";
import { SelectorCard } from "@/components/molecules/SelectorCard";
import { ButtonField } from "@/components/atoms/ButtonField";
import FormItem from "antd/es/form/FormItem";


const { Step } = Steps;

const StepSwitchCard = ({ form }: { form: any }) => {
    const [currentStep, setCurrentStep] = useState(0);
    const t = useTranslations('myPlanPage.goal')
    const [_, setRender] = useState(false); // State to force re-render

    const handleChange = (field: string, value: any) => {
        form.setFieldsValue({ [field]: value });
        setRender((prev) => !prev);
    };

    const handleImgRender = (): string => {
        switch (currentStep) {
            case 0:
                return "/Rectangle 1473 vertical.png";
            case 1:
                return "/Rectangle 1475.png";
            case 2:
                return "/Rectangle 1476.png";
            case 3:
                return "/Rectangle 1477.png";
            default:
                return ''
        }
    }

    const steps = [
        {
            content: (
                <div>
                    <Form.Item name="goal_preference" rules={[{ required: true, message: t('card1.select1.required') }]}>
                        <SelectorCard title={t('card1.select1.title')} className="mt-[30px]">
                            {
                                [... new Array(2)].map((_, i) => (
                                    <RadioField
                                        name={`goal_card1_select1_option_${i + 1}`}
                                        value={t(`card1.select1.op${i + 1}`)}
                                        label={t(`card1.select1.op${i + 1}`)}
                                        checked={form.getFieldValue("goal_preference") == t(`card1.select1.op${i + 1}`)}
                                        onChange={(value) => handleChange('goal_preference', value)}
                                    />
                                ))
                            }
                        </SelectorCard>
                    </Form.Item>
                    <FormItem name="workout_frequency" rules={[{ required: true, message: t('card1.select1.required') }]}>
                        <SelectorCard title={t('card1.select2.title')}>
                            {
                                [... new Array(3)].map((_, i) => (
                                    <RadioField
                                        name={`goal_card1_select2_option_${i + 1}`}
                                        value={t(`card1.select2.op${i + 1}`)}
                                        label={t(`card1.select2.op${i + 1}`)}
                                        checked={form.getFieldValue("workout_frequency") == t(`card1.select2.op${i + 1}`)}
                                        onChange={(value) => handleChange('workout_frequency', value)}
                                    />
                                ))
                            }
                        </SelectorCard>
                    </FormItem>
                </div>
            ),
        },
        {
            content: (
                <div>
                    <Form.Item name="focus" rules={[{ required: true, message: t('card2.select1.required') }]}>
                        <SelectorCard title={t('card2.select1.title')} className="mt-[30px]">
                            {
                                [... new Array(2)].map((_, i) => (
                                    <RadioField
                                        name={`goal_card2_select1_option_${i + 1}`}
                                        value={t(`card2.select1.op${i + 1}`)}
                                        label={t(`card2.select1.op${i + 1}`)}
                                        checked={form.getFieldValue("focus") == t(`card2.select1.op${i + 1}`)}
                                        onChange={(value) => handleChange('focus', value)}
                                    />
                                ))
                            }
                        </SelectorCard>
                    </Form.Item>
                    <Form.Item name="focus_muscle_group" rules={[{ required: true, message: t('card2.select1.required') }]}>
                        <SelectorCard title={t('card2.select2.title')} className="mt-[10px]">
                            {
                                [... new Array(4)].map((_, i) => (
                                    <RadioField
                                        name={`goal_card2_select2_option_${i + 1}`}
                                        value={t(`card2.select2.op${i + 1}`)}
                                        label={t(`card2.select2.op${i + 1}`)}
                                        checked={form.getFieldValue("focus_muscle_group") == t(`card2.select2.op${i + 1}`)}
                                        onChange={(value) => handleChange('focus_muscle_group', value)}
                                    />
                                ))
                            }
                        </SelectorCard>
                    </Form.Item>
                   
                </div>
            ),

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

        <MyGoalCard imgUrl={handleImgRender()}>
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