import React from "react";
import {Route, Redirect} from "react-router-dom";
import {useSelector} from "react-redux";

const PrivateRouteComponent = ({children, ...rest}) => {
  const isAuthenticated = useSelector(state => Boolean(state.user.token));
  // const isAuthenticated = true;
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};

export { PrivateRouteComponent };
