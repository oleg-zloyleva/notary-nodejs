import {createReducer} from "@reduxjs/toolkit";
import {loadState} from "../../helpers";


// todo: get init from localStorage
const state = loadState();

const initState = {
  token: state ? state?.user?.token : null,
  user: state ? state?.user?.user : null,
};

const userReducer = createReducer(initState, {
  'user/loginUser': (state, {payload}) => ({...payload}),
  'user/logoutUser': () => ({user: null, token: null}),
});

export { userReducer };
