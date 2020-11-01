import React, { BaseSyntheticEvent } from 'react';
import Row from 'react-bootstrap/Row';
import { FieldValues, useForm } from 'react-hook-form';
import { SignUpForm } from 'src/components/forms/signup';
import axiosInstance from 'src/lib/axios';

type Inputs = {
  password: string;
  email: string;
  isSavePassword: boolean;
};
type OnSubmit<Data extends FieldValues> = (
  data: Data,
  e?: BaseSyntheticEvent<Record<string, any>, undefined, undefined> | undefined,
) => void | Promise<void>;

export const SignUp = () => {
  const { register, errors, handleSubmit } = useForm<Inputs>({});

  const onSubmit: OnSubmit<Inputs> = async (data, event) => {
    event?.preventDefault();
    const { email, password } = data;
    try {
      await axiosInstance.post('/registration', { user: { email, password } });
      alert('Success');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Row className={'h-100 w-100 justify-content-center align-content-center'}>
      <SignUpForm register={register} errors={errors} submitForm={handleSubmit(onSubmit)} />
    </Row>
  );
};
