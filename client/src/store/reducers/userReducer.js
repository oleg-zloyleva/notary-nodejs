import {createReducer} from "@reduxjs/toolkit";

// todo: get init from localStorage
const initState = {
  token: null,
  user: null,
};

const userReducer = createReducer(initState, {
  'user/loginUser': (state, {payload}) => ({...payload}),
});

export { userReducer };
