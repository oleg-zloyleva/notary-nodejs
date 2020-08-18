import React, {useEffect} from "react";
import {SideBarUserComponent} from "../../components/SideBarUserComponent";
import {Route, Switch, useHistory, useRouteMatch} from "react-router-dom";

const UserProfileComponent = () => {
  /**
   * Redirect user if path = /profile to /profile/personal
   */
  let history = useHistory();
  const match = useRouteMatch('/profile/');
  useEffect(() => {
    if(match?.isExact) history.push('/profile/personal');
  },[]);

  return (
    <>
      <SideBarUserComponent />
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
    </>
  );
}

export { UserProfileComponent };
