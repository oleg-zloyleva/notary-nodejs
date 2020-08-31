import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRouteComponent = ({ component: Component, ...rest }) => {
  const isAuthenticated = useSelector((state) => Boolean(state.user.token));
  return (
    <Route
      {...rest}
      render={(props) => (isAuthenticated ? (
        <Component { ...props } />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location },
          }}
        />
      ))}
    />
  );
};

export { PrivateRouteComponent };
