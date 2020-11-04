import React, { BaseSyntheticEvent, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import { FieldValues, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { submitLogin } from 'src/store/auth/auth.action';
import { ApplicationState } from 'src/store/reducers';

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
  const dispatch = useDispatch();
  const auth = useSelector((state: ApplicationState) => state.auth);
  const { push } = useHistory();
  const { register, errors, handleSubmit } = useForm<Inputs>({ defaultValues: { email: '', password: '' } });

  useEffect(() => {
    if (auth.status === 'success') {
      push('/dashboard');
    }
  }, [auth, push]);

  const onSubmit: OnSubmit<Inputs> = async (data, event) => {
    event?.preventDefault();

    const { email, password } = data;

    dispatch(submitLogin({ email, password }));
  };

  return (
    <Row className={'h-100 w-100 justify-content-center align-content-center'}>
      <LoginForm register={register} errors={errors} submitForm={handleSubmit(onSubmit)} />
    </Row>
  );
};
