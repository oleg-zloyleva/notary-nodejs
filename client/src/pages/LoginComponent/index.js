import React from "react";

import {FormInputComponent} from "../../components/FormInputComponent";
import {ButtonComponent} from "../../components/ButtonComponent";
import {LinkButtonComponent} from "../../components/LinkButtonComponent";

import {ButtonsAuthWrapper} from "../../styledComonents/ButtonsAuthWrapper";
import {ColWrapper} from "../../styledComonents/ColWrapper";
import {H2Wrapper} from "../../styledComonents/H2Wrapper";
import {DescriptionWrapper} from "../../styledComonents/DescriptionWrapper";

const LoginComponent = () => {

  return (
    <ColWrapper>
      <H2Wrapper>Увійти</H2Wrapper>
      <DescriptionWrapper>Будь ласка, заповніть всі поля.</DescriptionWrapper>
      <FormInputComponent labelText="Введіть пароль" id="password" type="password" />
      <FormInputComponent labelText="Введіть номер телефону" id="phone" />
      <ButtonsAuthWrapper>
        <ButtonComponent onClick={() => console.log('LOGIN')}>Увійти</ButtonComponent>
        <LinkButtonComponent to="/login" colors="secondary">Забули пароль?</LinkButtonComponent>
      </ButtonsAuthWrapper>
    </ColWrapper>
  );
}

export { LoginComponent };
