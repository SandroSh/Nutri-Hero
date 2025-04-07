'use client';
import React, { useState } from 'react';
import { SectionContainer } from '../SectionContainer';
import { MyPlanCard } from '@/components/molecules/MyPlanCard';
import { myPlanCardData } from '@/constants/dummyData';
import { useTranslations } from 'next-intl';
import { InputField } from '@/components/atoms/InputField';
import { PersonalInfroInputCard } from '@/components/molecules/PersonalInfoInputCard';
import { useRouter } from '@/i18n/navigation';
import { Form } from 'antd';
import { grayInputStyle } from '@/components/atoms/InputField/inputField.style';

const MyPlan = () => {
  const t = useTranslations('myPlanPage.signup');
  const router = useRouter();
  const [stage, setStage] = useState<number>(0);
  const [form] = Form.useForm(); 

  const handleNextStage = () => {
    form
      .validateFields()
      .then(() => setStage(stage + 1))
      .catch((errorInfo) => console.log(errorInfo));
  };

  const handleNavigationClick = () => {
    form
      .validateFields()
      .then(() => {
        router.push('/payment');
        setStage(stage + 1);
      })
      .catch((errorInfo) => console.log(errorInfo));
  };

  const onFinish = (values: any) => {
    console.log(values);
  };

  const renderStage = () => {
    switch (stage) {
      case 0:
        return (
          <MyPlanCard
            imgUrl={myPlanCardData[0].imgUrl}
            pTitle={t(myPlanCardData[0].pTitle)}
            pText={t(myPlanCardData[0].pText)}
            bText={t(myPlanCardData[0].bText)}
            className="!h-[100vh]"
            buttonClass="mt-[150px]"
            functionCall={handleNextStage}
          >
            <Form.Item
              name="email"
              rules={[{ required: true, message: t('card0.mailRequired') }]}
            >
              <InputField
                placeholder={t('card0.mail')}
                className={`${grayInputStyle} mt-[30px]`}
              />
            </Form.Item>
          </MyPlanCard>
        );
      case 1:
        return (
          <MyPlanCard
            imgUrl={myPlanCardData[1].imgUrl}
            pTitle={t(myPlanCardData[1].pTitle)}
            pText={t(myPlanCardData[1].pText)}
            bText={t(myPlanCardData[1].bText)}
            className="!h-[100vh]"
            buttonClass="mt-[95px]"
            functionCall={handleNextStage}
          >
            <Form.Item
              name="password"
              rules={[{ required: true, message: t('card1.passwordRequired') }]}
            >
              <InputField
                placeholder={t('card1.password')}
                type="password"
                className={`${grayInputStyle} mt-[30px]`}
              />
            </Form.Item>
            <Form.Item
              name="confirmPassword"
              dependencies={['password']}
              rules={[
                { required: true, message: t('card1.password2Required') },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error(t('card1.passwordMismatch')));
                  },
                }),
              ]}
            >
              <InputField
                placeholder={t('card1.password2')}
                type="password"
                className={`${grayInputStyle} mt-[20px]`}
              />
            </Form.Item>
          </MyPlanCard>
        );
      case 2:
        return (
          <MyPlanCard
            imgUrl={myPlanCardData[2].imgUrl}
            pTitle={t(myPlanCardData[2].pTitle)}
            pText={t(myPlanCardData[2].pText)}
            className="!h-[100vh]"
            buttonClass="mt-[95px]"
            functionCall={handleNextStage}
          >
            <p
              className="font-bold text-red-10 cursor-pointer mt-[100px]"
              onClick={handleNextStage}
            >
              {t(myPlanCardData[2].bText)}
            </p>
          </MyPlanCard>
        );
      case 3:
        return (
          <MyPlanCard
            imgUrl={myPlanCardData[3].imgUrl}
            pTitle={t(myPlanCardData[3].pTitle)}
            bText={t(myPlanCardData[3].bText)}
            className="!h-[100vh]"
            buttonClass="mt-[95px]"
            functionCall={handleNextStage}
          >
            <Form.Item
              name="username"
              rules={[{ required: true, message: t('card3.usernameRequired') }]}
            >
              <InputField
                placeholder={t('card3.username')}
                className={`${grayInputStyle} mt-[30px]`}
              />
            </Form.Item>
            <Form.Item
              name="loginPassword"
              rules={[{ required: true, message: t('card3.passwordRequired') }]}
            >
              <InputField
                placeholder={t('card3.password')}
                type="password"
                className={`${grayInputStyle} mt-[20px]`}
              />
            </Form.Item>
          </MyPlanCard>
        );
      case 4:
        return (
          <MyPlanCard
            imgUrl={myPlanCardData[4].imgUrl}
            pTitle={t(myPlanCardData[4].pTitle)}
            bText={t(myPlanCardData[4].bText)}
            className="!h-[100vh]"
            buttonClass="mt-[95px]"
            functionCall={handleNavigationClick}
          >
            <PersonalInfroInputCard /> 
          </MyPlanCard>
        );
      case 5:
        return (
          <MyPlanCard
            imgUrl={myPlanCardData[5].imgUrl}
            pTitle={t(myPlanCardData[5].pTitle)}
            bText={t(myPlanCardData[5].bText)}
            className="!h-[100vh]"
            buttonClass="mt-[95px]"
            functionCall={handleNavigationClick}
          />
        );
      default:
        return
    }
  };

  return (
    <div>
      <SectionContainer innerWrapperClassName="!max-w-[1700px] !w-full" >
        <Form
          form={form}
          name="myPlanForm"
          onFinish={onFinish}
          autoComplete="off"
        >
          {renderStage()}
        </Form>
      </SectionContainer>
    </div>
  );
};

export default MyPlan;