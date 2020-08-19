import {appLoadedAction, appLoadingAction} from "./appActionsCreator";
import {authAjaxQuery, clearState} from "../../helpers";

const loginAction = (data) => ({
  payload: data,
  type: 'user/loginUser'
});

export const loginThunkHandler = ({password, phone}) => async (dispatch) => {
  try{
    dispatch(appLoadingAction());
    const data = await authAjaxQuery({method:'post', url: 'auth/login', data: {
        phone,
        password,
      }});

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

const logoutAction = () => ({
  type: 'user/logoutUser'
});

export const logoutThunkHandler = () => async (dispatch) => {
  try{
    await authAjaxQuery({method:'get', url: 'auth/logout'});
    await clearState();
  }catch (e) {
    console.log(e)
  }
  dispatch(logoutAction());
};
