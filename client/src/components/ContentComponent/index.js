import React from "react";
import {
  Switch,
  Route,
} from "react-router-dom";

import { ContainerComponent } from '../ContainerComponent';
import { HomeComponent } from '../../pages/HomeComponent';
import { LoginComponent } from '../../pages/LoginComponent';
import { RegisterComponent } from '../../pages/RegisterComponent';

const ContentComponent = () => (
  <ContainerComponent grow_v>
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
  </ContainerComponent>
);

export { ContentComponent };