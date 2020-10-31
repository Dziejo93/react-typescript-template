import React, { ReactNode } from 'react';
import Container from 'react-bootstrap/cjs/Container';
import Row from 'react-bootstrap/cjs/Row';

type InnerProps = {
  children: ReactNode;
};
type Props = InnerProps;

export const DefaultLayout = ({ children }: Props) => {
  return (
    <Container fluid className={'vh-100 m-0 p-0'}>
      <Row className={'minh-100 no-gutters'}>
        <main className={'vh-100 col'}>{children}</main>
      </Row>
    </Container>
  );
};
