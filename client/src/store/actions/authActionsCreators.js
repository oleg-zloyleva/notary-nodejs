import {appLoadedAction, appLoadingAction} from "./appActionsCreator";
import {authAjaxQuery, clearState} from "../../helpers";
import {CustomError} from "../../Errors/CustomError";

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
    throw new CustomError({
      data: e.response.data,
      status: e.response.data,
    });
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
    throw new CustomError({
      data: e.response.data,
      status: e.response.data,
    });
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
    throw new CustomError({
      data: e.response.data,
      status: e.response.data,
    });
  }finally {
    await dispatch(appLoadedAction());
  }
};

export const registerFetchAction = (data) => async (dispatch) => {
  try{
    await dispatch(appLoadingAction());
    await authAjaxQuery({method:'post', url: 'auth/register', data});
  }catch (e) {
    throw new CustomError({
      data: e.response.data,
      status: e.response.data,
    });
  }finally {
    await dispatch(appLoadedAction());
  }
};

export const activateUserFetchAction = (data) => async (dispatch) => {
  try{
    await dispatch(appLoadingAction());
    await authAjaxQuery({method:'post', url: 'auth/activate', data});
  }catch (e) {
    throw new CustomError({
      data: e.response.data,
      status: e.response.data,
    });
  }finally {
    await dispatch(appLoadedAction());
  }
};
