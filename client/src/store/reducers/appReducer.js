import {createReducer} from "@reduxjs/toolkit";

// todo: get init from localStorage
const initState = {
  showLoading:false,
};

const appReducer = createReducer(initState, {
  'app/loading': state => ({...state, showLoading: true}),
  'app/loaded': state => ({...state, showLoading: false}),
});

export { appReducer };
