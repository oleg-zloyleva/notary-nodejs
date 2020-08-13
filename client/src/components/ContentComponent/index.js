import React from "react";
import {
  Switch,
  Route,
} from "react-router-dom";
import styled from "styled-components";

import { ContainerComponent } from '../ContainerComponent';
import { HomeComponent } from '../../pages/HomeComponent';
import { LoginComponent } from '../../pages/LoginComponent';
import { RegisterComponent } from '../../pages/RegisterComponent';

const ContentComponentWrapper = styled('ContainerComponent')`
  flex: 1;
`;

const ContentComponent = () => (
  <ContentComponentWrapper>
    <Switch>
      <Route path="/register">
        <RegisterComponent />
      </Route>
      <Route path="/login">
        <LoginComponent />
      </Route>
      <Route path="/">
        <HomeComponent />
      </Route>
    </Switch>
  </ContentComponentWrapper>
);

export { ContentComponent };