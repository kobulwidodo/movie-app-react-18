import React from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';

const StyledButton = styled(Button)`
  padding-left: 40px;
  padding-right: 40px;
  font-size: 13px;
  font-weight: 500;
  color: #F4F4F4;
`

const ButtonPrimary = (props) => {
  return (
    <StyledButton variant={props.variant} type={props.type}>
      {props.text}
    </StyledButton>
  )
}

export default ButtonPrimary