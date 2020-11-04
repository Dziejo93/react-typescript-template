import React from 'react';
import { FormEvent } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { ReactComponent as ArrowLeftIcon } from 'src/assets/icons/arrow-left.svg';
import validationOptions from 'src/components/forms/login/validations';
import styled from 'styled-components';

type Props = {
  register: ReturnType<typeof useForm>['register'];
  submitForm: (event: FormEvent<HTMLFormElement>) => void;
  errors: ReturnType<typeof useForm>['errors'];
};

const StyledArrowLeftIcon = styled(ArrowLeftIcon)`
  &:hover {
    cursor: pointer;
  }
`;

const LoginForm = ({ submitForm, register }: Props) => {
  const { push } = useHistory();

  return (
    <Form onSubmit={submitForm}>
      <StyledArrowLeftIcon onClick={() => push('/register')} /> Elo zarejestruj sie
      <h4>Login</h4>
      <Form.Group>
        <Form.Label>Email address</Form.Label>
        <Form.Control
          name="email"
          type="email"
          placeholder="Enter email"
          autoComplete="email"
          ref={register(validationOptions.email)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control
          name="password"
          type="password"
          placeholder="Dawaj hasło"
          autoComplete="current-password"
          ref={register(validationOptions.password)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default LoginForm;
