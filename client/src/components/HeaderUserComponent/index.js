import React from "react";
import { Link } from "react-router-dom";
import { ContainerComponent } from '../ContainerComponent';
import styled from "styled-components";
import {LogoutComponent} from "../LogoutComponent";

const HeaderWrapper = styled('div')`
   height: 80px;
   background: #EDEDED;
   box-shadow: 0px 3px 9px rgba(0, 0, 0, 0.12);
`;

const FlexWrapper = styled('div')`
  display: flex;
`;

const UserProfile = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const UserAvatar = styled('div')`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #C4C4C4;
`;

const HeaderUserComponent = () => (
  <HeaderWrapper>
    <ContainerComponent justifyContent='space-between'>
      <Link to='/'>Logo</Link>
      <FlexWrapper>
        <UserProfile>
          <UserAvatar />
          <div>User</div>
        </UserProfile>
        <LogoutComponent/>
      </FlexWrapper>
    </ContainerComponent>
  </HeaderWrapper>
);

export { HeaderUserComponent };
