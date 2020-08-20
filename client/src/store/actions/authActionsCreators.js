import {appLoadedAction, appLoadingAction} from "./appActionsCreator";
import {authAjaxQuery, clearState} from "../../helpers";

const loginAction = (data) => ({
  payload: data,
  type: 'user/loginUser'
});

export const loginThunkHandler = ({password, phone}) => async (dispatch) => {
  try{
    await dispatch(appLoadingAction());
    const data = await authAjaxQuery({method:'post', url: 'auth/login', data: {
        phone,
        password,
      }});

    console.log('data',data)
    await dispatch(loginAction({
      token: data.token,
      user: data.user,
    }));
  }catch (e) {
    // todo: dispatch Error
  }finally {
    await dispatch(appLoadedAction());
  }
};

const logoutAction = () => ({
  type: 'user/logoutUser'
});

export const logoutThunkHandler = () => async (dispatch) => {
  try{
    await dispatch(appLoadingAction());
    await authAjaxQuery({method:'get', url: 'auth/logout'});
    await clearState();
  }catch (e) {
    console.log(e)
  }finally {
    await dispatch(appLoadedAction());
  }
  await dispatch(logoutAction());
};

export const sendForgotPasswordAction = (phone) => async (dispatch) => {
  try{
    await dispatch(appLoadingAction());
    await authAjaxQuery({method:'post', url: 'password/reset', data: {phone}});
  }catch (e) {
    console.log(e)
  }finally {
    await dispatch(appLoadedAction());
  }
};
