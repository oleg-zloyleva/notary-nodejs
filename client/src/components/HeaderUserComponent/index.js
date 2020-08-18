import React from "react";
import { Link } from "react-router-dom";
import { ContainerComponent } from '../ContainerComponent';
import styled from "styled-components";

const HeaderWrapper = styled('div')`
   height: 80px;
   background: #EDEDED;
   box-shadow: 0px 3px 9px rgba(0, 0, 0, 0.12);
`;

const HeaderUserComponent = () => (
  <HeaderWrapper>
    <ContainerComponent justifyContent='space-between'>
      <Link to='/'>Logo</Link>
      <div>
        <div>User</div>
        <div>Logout</div>
      </div>
    </ContainerComponent>
  </HeaderWrapper>
);

export { HeaderUserComponent };
