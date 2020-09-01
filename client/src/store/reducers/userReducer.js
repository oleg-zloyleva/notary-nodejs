import { createReducer } from '@reduxjs/toolkit';

import { loadState } from '../../helpers';

// todo: get init from localStorage
const stateData = loadState();

const initState = {
  token: stateData ? stateData?.user?.token : null,
  user: stateData ? stateData?.user?.user : null,
};

const userReducer = createReducer(initState, {
  'user/loginUser': (state, { payload }) => ({ ...payload }),
  'user/logoutUser': () => ({ user: null, token: null }),
});

export { userReducer };
