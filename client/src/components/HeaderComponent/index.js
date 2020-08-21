import React from "react";
import { ContainerComponent } from '../ContainerComponent';
import styled from "styled-components";
import {LogoLinkButton} from "../LogoLinkButton";

const HeaderWrapper = styled('div')`
   height: 80px;
   background: #EDEDED;
   box-shadow: 0px 3px 9px rgba(0, 0, 0, 0.12);
`;

const HeaderComponent = () => (
  <HeaderWrapper>
    <ContainerComponent>
      <LogoLinkButton />
    </ContainerComponent>
  </HeaderWrapper>
);

export { HeaderComponent };
