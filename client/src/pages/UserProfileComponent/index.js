import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  Route, Switch, useHistory, useRouteMatch,
} from 'react-router-dom';
import styled from 'styled-components';

import { SideBarUserComponent } from '../../components/SideBarUserComponent';
import { ContainerComponent } from '../../components/ContainerComponent';
import { HeaderUserComponent } from '../../components/HeaderUserComponent';
import { FooterComponent } from '../../components/FooterComponent';
import { StepsFillingDataComponent } from '../../components/StepsFillingDataComponent';

const ContentWrapper = styled('div')`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const UserProfileComponent = () => {
  const { fillProfile } = useSelector((state) => state.user.user);
  /**
   * Redirect user if path = /profile to /profile/personal
   */
  const history = useHistory();
  const match = useRouteMatch('/profile/');
  useEffect(() => {
    if (match?.isExact) history.push('/profile/personal');
  }, []);

  return (
    <>
      <HeaderUserComponent />
      <ContainerComponent grow_v>
        <SideBarUserComponent />

        <ContentWrapper>
          {!fillProfile && <StepsFillingDataComponent />}

          {
            fillProfile && (
              <Switch>
                <Route path="/profile/personal">
                  <div>Personal</div>
                </Route>
                <Route path="/profile/contacts">
                  <div>Contacts</div>
                </Route>
                <Route path="/profile/asks">
                  <div>Asks</div>
                </Route>
                <Route path="/profile/docs">
                  <div>Docs</div>
                </Route>
                <Route path="/profile/letters">
                  <div>Letters</div>
                </Route>
                <Route path="/profile/password">
                  <div>Password</div>
                </Route>
                <Route path="/profile/notification">
                  <div>Notification</div>
                </Route>
                <Route path="/profile/services">
                  <div>Services</div>
                </Route>
              </Switch>
            )
          }
        </ContentWrapper>

      </ContainerComponent>
      <FooterComponent />
    </>
  );
};

export { UserProfileComponent };
