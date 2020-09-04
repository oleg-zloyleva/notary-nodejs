import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled('div')`
  display: flex;
  justify-content: center;
`;

const ButtonWrapperComponent = ({ children }) => (
  <ButtonWrapper>
    {children}
  </ButtonWrapper>
);

export { ButtonWrapperComponent };
