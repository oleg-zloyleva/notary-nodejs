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

import {loginThunkHandler} from "../../store/actions/authActionsCreators";

const LoginComponent = () => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  let history = useHistory();

  const loginFetchHandler = async () => {
    // Validate

    // fire action Login
    await dispatch(loginThunkHandler({
      phone,
      password,
    }));
    history.push('/profile');
  };

  return (
    <ColWrapper>
      <H2Wrapper>Увійти</H2Wrapper>
      <DescriptionWrapper>Будь ласка, заповніть всі поля.</DescriptionWrapper>
      <FormInputComponent labelText="Введіть номер телефону" id="phone" value={phone} changeValue={setPhone}/>
      <FormInputComponent labelText="Введіть пароль" id="password" type="password" value={password}
                          changeValue={setPassword}/>
      <ButtonsAuthWrapper>
        <ButtonComponent onClick={loginFetchHandler}>Увійти</ButtonComponent>
        <LinkButtonComponent to="/login" colors="secondary">Забули пароль?</LinkButtonComponent>
      </ButtonsAuthWrapper>
    </ColWrapper>
  );
};

export {LoginComponent};
