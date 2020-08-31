import React from 'react';
import styled from 'styled-components';

const ContainerWrapper = styled.div`
  margin: 0 auto;
  min-height: 80px;
  width: 100%;
  @media (min-width: 768px) {
    width: 750px;
  }
  @media (min-width: 992px) {
    width: 970px;
  }
  @media (min-width: 1200px) {
    width: 1170px;
  }
  display: flex;
  align-items: stretch;
  ${(props) => props.grow_v && 'flex: 1;'}
  ${(props) => props.justifyContent && `justify-content: ${props.justifyContent};`}
`;

const ContainerComponent = ({ children, ...rest }) => (
  <ContainerWrapper {...rest}>{children}</ContainerWrapper>
);

export { ContainerComponent };
