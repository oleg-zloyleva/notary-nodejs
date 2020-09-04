import React from 'react';
import styled from 'styled-components';

const StepWrapper = styled('div')`
  width: 400px;
  background: #FFFFFF;
  box-shadow: 0px 5px 12px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  padding: 24px;
  margin-top: 36px;
  margin-bottom: 100px;
`;

const StepWrapperComponent = ({ children }) => (
  <StepWrapper>
    {children}
  </StepWrapper>
);

export { StepWrapperComponent };
