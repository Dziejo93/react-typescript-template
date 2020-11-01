import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useHistory } from 'react-router-dom';
import { getColor } from 'src/assets/theme';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  width: 300px;
`;
const StyledCardBody = styled(Card.Body)`
  background-color: ${getColor('primary')};
`;

export const Dashboard = () => {
  const {
    location: { pathname },
  } = useHistory();

  return (
    <StyledCard>
      <StyledCardBody>
        <Card.Title>{pathname}</Card.Title>
        <Card.Text>320 </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </StyledCardBody>
    </StyledCard>
  );
};
