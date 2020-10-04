import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { getColor } from 'src/styles/theme';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  width: 300px;
`;
const StyledCardBody = styled(Card.Body)`
  background-color: ${getColor('primary')};
`;

export const Dashboard = () => (
  <StyledCard>
    <StyledCardBody>
      <Card.Title>Elo</Card.Title>
      <Card.Text>320 </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </StyledCardBody>
  </StyledCard>
);
