import React, { useState } from "react";
import { Carousel, Form, FormInstance, FormProps, Steps } from "antd";
import { RadioField } from "@/components/atoms/RadioField";
import { useTranslations } from "next-intl";
import { MyGoalCard } from "@/components/molecules/MyGoalCard";
import { SelectorCard } from "@/components/molecules/SelectorCard";
import { ButtonField } from "@/components/atoms/ButtonField";
import FormItem from "antd/es/form/FormItem";
import { handleImgRender } from "./stepsSwitchCard";
import { TitleField } from "@/components/atoms/TitleField";
import { InputField } from "@/components/atoms/InputField";
import { grayInputStyle } from "@/components/atoms/InputField/inputField.style";

const { Step } = Steps;

const StepSwitchCard = ({ form }: { form: FormInstance<any> }) => {
    const [currentStep, setCurrentStep] = useState(0);
    const t = useTranslations('myPlanPage.goal')
    const [_, setRender] = useState(false);

    const steps = [
        {
            content: (
                <div>
                    <Form.Item name="goal_preference"  key={1} rules={[{ required: true, message: t('card1.select1.required') }]}>
                        <SelectorCard title={t('card1.select1.title')} className="mt-[30px]">
                            {
                                [... new Array(2)].map((_, i) => (
                                    <RadioField
                                        name={`goal_card1_select1_option_${i + 1}`}
                                        value={t(`card1.select1.op${i + 1}`)}
                                        label={t(`card1.select1.op${i + 1}`)}
                                        checked={form.getFieldValue("goal_preference") == t(`card1.select1.op${i + 1}`)}
                                        onChange={(value) => handleChange('goal_preference', value)}
                                        key={i}
                                    />
                                ))
                            }
                        </SelectorCard>
                    </Form.Item>
                    <FormItem name="workout_frequency"  rules={[{ required: true, message: t('card1.select1.required') }]}>
                        <SelectorCard title={t('card1.select2.title')}>
                            {
                                [... new Array(3)].map((_, i) => (
                                    <RadioField
                                        name={`goal_card1_select2_option_${i + 1}`}
                                        value={t(`card1.select2.op${i + 1}`)}
                                        label={t(`card1.select2.op${i + 1}`)}
                                        checked={form.getFieldValue("workout_frequency") == t(`card1.select2.op${i + 1}`)}
                                        onChange={(value) => handleChange('workout_frequency', value)}
                                        key={i}
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
                <div className="card-container" >
                    <Form.Item name="focus"  rules={[{ required: true, message: t('card2.select1.required') }]}>
                        <SelectorCard title={t('card2.select1.title')} className="mt-[30px]">
                            {
                                [... new Array(2)].map((_, i) => (
                                    <RadioField
                                        name={`goal_card2_select1_option_${i + 1}`}
                                        value={t(`card2.select1.op${i + 1}`)}
                                        label={t(`card2.select1.op${i + 1}`)}
                                        checked={form.getFieldValue("focus") == t(`card2.select1.op${i + 1}`)}
                                        onChange={(value) => handleChange('focus', value)}
                                        key={i}
                                    />
                                ))
                            }
                        </SelectorCard>
                    </Form.Item>
                    <Form.Item name="focus_muscle_group"  rules={[{ required: true, message: t('card2.select1.required') }]}>
                        <SelectorCard title={t('card2.select2.title')} className="mt-[10px]">
                            {
                                [... new Array(4)].map((_, i) => (
                                    <RadioField
                                        name={`goal_card2_select2_option_${i + 1}`}
                                        value={t(`card2.select2.op${i + 1}`)}
                                        label={t(`card2.select2.op${i + 1}`)}
                                        checked={form.getFieldValue("focus_muscle_group") == t(`card2.select2.op${i + 1}`)}
                                        onChange={(value) => handleChange('focus_muscle_group', value)}
                                        key={i}
                                    />
                                ))
                            }
                        </SelectorCard>
                    </Form.Item>

                </div>
            ),

        },
        {

            content: (
                <div className="card-container2" >
                    <Form.Item name="level" rules={[{ required: true, message: t('card3.select1.required') }]}>
                        <SelectorCard title={t('card3.select1.title')} className="mt-[30px]">
                            {
                                [... new Array(3)].map((_, i) => (
                                    <RadioField
                                        name={`goal_card3_select1_option_${i + 1}`}
                                        value={t(`card3.select1.op${i + 1}`)}
                                        label={t(`card3.select1.op${i + 1}`)}
                                        checked={form.getFieldValue("level") == t(`card3.select1.op${i + 1}`)}
                                        onChange={(value) => handleChange('level', value)}
                                        key={i}
                                    />
                                ))
                            }
                        </SelectorCard>
                    </Form.Item>
                    <Form.Item name="diet_type" rules={[{ required: true, message: t('card3.select2.required') }]}>
                        <SelectorCard title={t('card3.select2.title')} className="mt-[30px]">
                            {
                                [... new Array(2)].map((_, i) => (
                                    <RadioField
                                        name={`goal_card3_select2_option_${i + 1}`}
                                        value={t(`card3.select2.op${i + 1}`)}
                                        label={t(`card3.select2.op${i + 1}`)}
                                        checked={form.getFieldValue("diet_type") == t(`card3.select2.op${i + 1}`)}
                                        onChange={(value) => handleChange('diet_type', value)}
                                        key={i}
                                    />
                                ))
                            }
                        </SelectorCard>
                    </Form.Item>

                </div>
            )

        },
        {
            content: (
                <div>
                    <Form.Item name="yoga" rules={[{ required: true, message: t('card4.select1.required') }]}>
                        <SelectorCard title={t('card4.select1.title')} className="mt-[30px]">
                            {[...new Array(2)].map((_, i) => (
                                <RadioField
                                    name={`goal_card4_select1_option_${i + 1}`}
                                    value={t(`card4.select1.op${i + 1}`)}
                                    label={t(`card4.select1.op${i + 1}`)}
                                    checked={form.getFieldValue("yoga") === t(`card4.select1.op${i + 1}`)}
                                    onChange={(value) => handleChange('yoga', value)}
                                    key={i}
                                />
                            ))}
                        </SelectorCard>
                    </Form.Item>

                    <div className={`yoga-type-container ${form.getFieldValue("yoga") === t('card4.select1.op1') ? 'visible' : ''}`}>
                        <Form.Item name="yoga_type" rules={[{ required: true, message: t('card4.select1.required') }]}>
                            <SelectorCard title={t('card4.select2.title')} className="mt-[19px]">
                                {[...new Array(2)].map((_, i) => (
                                    <RadioField
                                        name={`goal_card4_select2_option_${i + 1}`}
                                        value={t(`card4.select2.op${i + 1}`)}
                                        label={t(`card4.select2.op${i + 1}`)}
                                        checked={form.getFieldValue("yoga_type") === t(`card4.select2.op${i + 1}`)}
                                        onChange={(value) => handleChange('yoga_type', value)}
                                        key={i}
                                    />
                                ))}
                            </SelectorCard>
                        </Form.Item>
                    </div>

                    <Form.Item name="goal_name" rules={[{ required: true, message: t('card4.select1.required') }]}>
                        <div className="mt-[29px]">
                            <TitleField text={t('card4.inputTitle')} className="text-[22px]" />
                            <InputField onChange={(value) => handleChange('goal_name', value)} placeholder={t('card4.placeholder')} className={grayInputStyle} />
                        </div>
                    </Form.Item>
                </div>
            )
        }
    ];

    const handleChange = (field: any, value: any) => {
        form.setFieldValue(field,value);
        console.log(form.getFieldsValue())
        setRender((prev) => !prev);
    };

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

        <MyGoalCard imgUrl={handleImgRender(currentStep)}>

            <Steps current={currentStep}>
                {steps.map((step, index) => {

                    return <Step key={index} />
                }
                )}
            </Steps>

            <div>{steps[currentStep].content}</div>
            <div className="flex justify-end items-center mt-[75px]">
                {currentStep > 0 && (
                    <ButtonField onClick={prev} cType="gray_green" bSize="xl" className="mr-[16px]">
                        {t('prev')}
                    </ButtonField>
                )}
                {currentStep < steps.length - 1 && (
                    <ButtonField onClick={next} cType="red_white" bSize="xl">
                        {t('next')}
                    </ButtonField>
                )}
                {currentStep === steps.length - 1 && (
                    <ButtonField onClick={() => form.submit()}  cType="red_white" bSize="xl" className="ml-[16px]">
                        {t('submit')}
                    </ButtonField>
                )}
            </div>
        </MyGoalCard >

    )
}

export default StepSwitchCard