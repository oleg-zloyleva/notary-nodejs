import {createReducer} from "@reduxjs/toolkit";

const initState = {
  token: null,
  user: null,
};

const userReducer = createReducer(initState, {
  'user/loginUser': (state, {payload}) => ({...payload}),
});

export { userReducer };
