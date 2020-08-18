import {createReducer} from "@reduxjs/toolkit";
import {loadState} from "../../helpers";


// todo: get init from localStorage
const state = loadState();

const initState = {
  token: state ? state?.user?.token : null,
  user: null,
};

const userReducer = createReducer(initState, {
  'user/loginUser': (state, {payload}) => ({...payload}),
});

export { userReducer };
