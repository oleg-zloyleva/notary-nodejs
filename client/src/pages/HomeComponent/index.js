import React from "react";
import styled from "styled-components";
import { LinkButtonComponent } from '../../components/LinkButtonComponent';

const HomeWrapper = styled.div`
  width: 600px;
  margin: 0 auto;
`;

const H1Wrapper = styled.h1`
  margin: 40px 0;
  text-align: center;
  font-weight: 500;
  font-size: 48px;
  line-height: 56px;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const DescriptionWrapper = styled.div`
  margin: 40px 0;
  text-align: center;
`;

const HomeComponent = () => (
  <HomeWrapper>
    <H1Wrapper>Lorem ipsum dolor sit amet </H1Wrapper>
    <DescriptionWrapper>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a vulputate mattis consequat velit non sit eget.</DescriptionWrapper>
    <ButtonsWrapper>
      <LinkButtonComponent to='/login'>Увійти</LinkButtonComponent>
      <LinkButtonComponent to='/register'>Реєстрація</LinkButtonComponent>
    </ButtonsWrapper>
  </HomeWrapper>
);

export { HomeComponent };
