import React, {useState} from "react";

import { FormInputComponent } from '../../components/FormInputComponent';
import { ButtonComponent } from '../../components/ButtonComponent';
import { LinkButtonComponent } from '../../components/LinkButtonComponent';
import { ConfirmRegistrationComponent } from '../../components/ConfirmRegistrationComponent';
import {CongratsActivatePhoneComponent} from "../../components/CongratsActivatePhoneComponent";

import {ColWrapper} from "../../styledComonents/ColWrapper";
import {H2Wrapper} from "../../styledComonents/H2Wrapper";
import {DescriptionWrapper} from "../../styledComonents/DescriptionWrapper"
import {ButtonsAuthWrapper} from "../../styledComonents/ButtonsAuthWrapper"

const RegisterComponent = () => {
  const [showConfirmRegistration, setShowConfirmRegistration] = useState(false);
  const [showCongratsActivatePhone, setShowCongratsActivatePhone] = useState(false);

  const confirmPhoneHandler = () => {
    setShowConfirmRegistration(false);
    setShowCongratsActivatePhone(true);
  };

  return (
    <ColWrapper>
      <H2Wrapper>Реєстрація</H2Wrapper>
      <DescriptionWrapper>Будь ласка, заповніть всі поля.</DescriptionWrapper>
      <FormInputComponent labelText="Введіть ім’я" id="name" />
      <FormInputComponent labelText="Введіть пароль" id="password" type="password" />
      <FormInputComponent labelText="Введіть номер телефону" id="phone" />

      <ButtonsAuthWrapper>
        <ButtonComponent onClick={() => setShowConfirmRegistration(true)}>Реєстрація</ButtonComponent>
        <LinkButtonComponent to="/login" colors="secondary">Увійти</LinkButtonComponent>
      </ButtonsAuthWrapper>

      {showConfirmRegistration && <ConfirmRegistrationComponent onClose={() => setShowConfirmRegistration(false)} onSend={confirmPhoneHandler}/>}
      {showCongratsActivatePhone && <CongratsActivatePhoneComponent onClose={() => setShowCongratsActivatePhone(false)} />}
    </ColWrapper>
  );
};

export { RegisterComponent };
