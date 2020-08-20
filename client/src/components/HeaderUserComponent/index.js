import React from "react";
import styled from "styled-components";
import {useSelector} from "react-redux";

import { ContainerComponent } from '../ContainerComponent';
import {LogoutComponent} from "../LogoutComponent";
import {LogoLinkButton} from "../LogoLinkButton";

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

const HeaderUserComponent = () => {
  const {user} = useSelector(state => state.user);
  return (
    <HeaderWrapper>
      <ContainerComponent justifyContent='space-between'>
        <LogoLinkButton />
        <FlexWrapper>
          <UserProfile>
            <UserAvatar />
            <div>{user.name}</div>
          </UserProfile>
          <LogoutComponent/>
        </FlexWrapper>
      </ContainerComponent>
    </HeaderWrapper>
  );
}

export { HeaderUserComponent };
