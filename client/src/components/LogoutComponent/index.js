import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { logoutThunkHandler } from '../../store/actions/authActionsCreators';

import logout from './logout.svg';

const LogoutWrapper = styled('div')`
  display: flex;
  align-items: center;
  margin: 16px;
  cursor:pointer;
`;

const LogoutComponent = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const logoutHandler = async () => {
    await dispatch(logoutThunkHandler());
    history.push('/');
  };

  return (
    <LogoutWrapper onClick={() => logoutHandler()}>
      <img src={logout} alt="" />
    </LogoutWrapper>
  );
};

export { LogoutComponent };
