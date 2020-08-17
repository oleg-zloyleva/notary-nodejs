import axios from "axios";
import {appLoadedAction, appLoadingAction} from "./appActionsCreator";

const loginAction = (data) => ({
  payload: data,
  type: 'user/loginUser'
});

export const loginThunkHandler = ({password, phone}) => async (dispatch) => {
  try{
    dispatch(appLoadingAction());
    const {data} = await axios.post(`${process.env.REACT_APP_DOMAIN}/auth/login`, {
      phone,
      password,
    });
    console.log('data',data)
    dispatch(loginAction({
      token: data.token,
      user: data.user,
    }));
    dispatch(appLoadedAction());
  }catch (e) {
    // todo: dispatch Error
  }
};


