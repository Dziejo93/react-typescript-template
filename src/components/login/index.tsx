import React, { BaseSyntheticEvent } from 'react';
import Row from 'react-bootstrap/Row';
import { FieldValues, useForm } from 'react-hook-form';
import axiosInstance from 'src/lib/axios';

import LoginForm from '../forms/login';

type Inputs = {
  password: string;
  email: string;
  isSavePassword: boolean;
};
type OnSubmit<Data extends FieldValues> = (
  data: Data,
  e?: BaseSyntheticEvent<Record<string, any>, undefined, undefined> | undefined,
) => void | Promise<void>;

export const Login = () => {
  const { register, errors, handleSubmit } = useForm<Inputs>({ defaultValues: { email: '', password: '' } });

  const onSubmit: OnSubmit<Inputs> = async (data, event) => {
    event?.preventDefault();

    const { email, password } = data;
    try {
      await axiosInstance.post('/session', { session: { email, password } });
      alert('Success');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Row className={'h-100 w-100 justify-content-center align-content-center'}>
      <LoginForm register={register} errors={errors} submitForm={handleSubmit(onSubmit)} />
    </Row>
  );
};
