import React, {useState} from "react";
import {useDispatch} from "react-redux";
import { useHistory } from "react-router-dom";

import {FormInputComponent} from "../../components/FormInputComponent";
import {ButtonComponent} from "../../components/ButtonComponent";
import {LinkButtonComponent} from "../../components/LinkButtonComponent";

import {ButtonsAuthWrapper} from "../../styledComonents/ButtonsAuthWrapper";
import {ColWrapper} from "../../styledComonents/ColWrapper";
import {H2Wrapper} from "../../styledComonents/H2Wrapper";
import {DescriptionWrapper} from "../../styledComonents/DescriptionWrapper";

import {
  loginThunkHandler,
  resetPasswordFetchAction,
  sendForgotPasswordAction
} from "../../store/actions/authActionsCreators";
import {GuestContentComponent} from "../../components/GuestContentComponent";
import {ModalForgotPasswordComponent} from "../../components/ModalForgotPasswordComponent";
import {ModalResetPasswordComponent} from "../../components/ModalResetPasswordComponent";

const LoginComponent = () => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showForgotPassword, setForgotPassword] = useState(false);
  const [showSendSMSCode, setShowSendSMSCod] = useState(false);

  const [sms_code, setSMSCodeHandler] = useState('');
  const [validCode, setValidCode] = useState(false);

  const dispatch = useDispatch();
  let history = useHistory();

  const loginFetchHandler = async () => {
    try{
      // Validate

      // fire action Login
      await dispatch(loginThunkHandler({
        phone,
        password,
      }));
      history.push('/profile/');
    }catch (e) {
      
    }
  };

  const sendForgotPassword = async (phone) => {
    try{
      console.log('sendForgotPassword',phone);
      // todo dispatch sendForgotPassword
      await dispatch(sendForgotPasswordAction(phone));
      // todo show modal for enter sms_code
      await setForgotPassword(false);
      await setShowSendSMSCod(true);
    }catch (e) {
      
    }
  };

  const resendHandler = async () => {
    await setForgotPassword(true);
    await setShowSendSMSCod(false);
  };

  const inputSMSCodeHandler = async (text) => {
    await setValidCode(false);
    await setSMSCodeHandler(text);
    if(/^\d{10}$/.test(text)){
      await setValidCode(true);
    }
  };

  const resetPasswordHandler = async () => {
    try{
      console.log('resetPasswordHandler');
      await dispatch(resetPasswordFetchAction({sms_code, password}));
      history.push('/profile/');
    }catch (e) {

    }
  };

  return (
    <GuestContentComponent>
      <ColWrapper>
        <H2Wrapper>Увійти</H2Wrapper>
        <DescriptionWrapper>Будь ласка, заповніть всі поля.</DescriptionWrapper>
        <FormInputComponent labelText="Введіть номер телефону" id="phone" value={phone} changeValue={setPhone}/>
        <FormInputComponent labelText="Введіть пароль" id="password" type="password" value={password}
                            changeValue={setPassword}/>
        <ButtonsAuthWrapper>
          <ButtonComponent id="login" onClick={loginFetchHandler}>Увійти</ButtonComponent>
          <ButtonComponent colors="secondary" onClick={() => setForgotPassword(true)}>Забули пароль?</ButtonComponent>
        </ButtonsAuthWrapper>
      </ColWrapper>

      {showForgotPassword && (
        <ModalForgotPasswordComponent
          onSend={sendForgotPassword}
          onClose={() => setForgotPassword(false)}
        />
        )}
      {
        showSendSMSCode && (
          <ModalResetPasswordComponent
            onReSend={resendHandler}
            onClose={() => setShowSendSMSCod(false)}
            onSend={resetPasswordHandler}
            setSMSCodeHandler={inputSMSCodeHandler}
            sms_code={sms_code}
            validCode={validCode}
            password={password}
            setPassword={setPassword}
          />
        )
      }
    </GuestContentComponent>
  );
};

export {LoginComponent};
