import React from 'react';
import {Route, Switch} from "react-router-dom";

import {PrivateRouteComponent} from "../PrivateRouteComponent";
import {UserProfileComponent} from "../../pages/UserProfileComponent";
import {RegisterComponent} from "../../pages/RegisterComponent";
import {LoginComponent} from "../../pages/LoginComponent";
import {HomeComponent} from "../../pages/HomeComponent";
import {LoaderComponent} from "../LoaderComponent";
import {useSelector} from "react-redux";

const App = () => {
  const {showLoading} = useSelector(state => state.app);
  return (
    <>
      {showLoading && <LoaderComponent />}
      <Switch>
        <PrivateRouteComponent path="/profile">
          <UserProfileComponent />
        </PrivateRouteComponent>
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
    </>
  );
}

export { App };
