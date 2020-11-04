import React, { BaseSyntheticEvent } from 'react';
import Row from 'react-bootstrap/Row';
import { FieldValues, useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { SignUpForm } from 'src/components/forms/signup';
import { postRegister } from 'src/resources/register';

type Inputs = {
  password: string;
  email: string;
};
type OnSubmit<Data extends FieldValues> = (
  data: Data,
  e?: BaseSyntheticEvent<Record<string, any>, undefined, undefined> | undefined,
) => void | Promise<void>;

export const SignUp = () => {
  const { push } = useHistory();
  const { register, errors, handleSubmit } = useForm<Inputs>({ defaultValues: { email: '', password: '' } });

  const onSubmit: OnSubmit<Inputs> = async (data, event) => {
    event?.preventDefault();

    try {
      const { email, password } = data;

      await postRegister({ email, password });
      toast('wow success');
      push('/login');
    } catch (error) {
      throw error;
    }
  };

  return (
    <Row className={'h-100 w-100 justify-content-center align-content-center'}>
      <SignUpForm register={register} errors={errors} submitForm={handleSubmit(onSubmit)} />
    </Row>
  );
};
