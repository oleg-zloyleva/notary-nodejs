import React, {useState} from "react";
import styled from "styled-components";
import { FormInputComponent } from '../../components/FormInputComponent';
import { ButtonComponent } from '../../components/ButtonComponent';
import { LinkButtonComponent } from '../../components/LinkButtonComponent';
import { ConfirmRegistrationComponent } from '../../components/ConfirmRegistrationComponent';
import {CongratsActivatePhoneComponent} from "../../components/CongratsActivatePhoneComponent";

const RegisterWrapper = styled.div`
  width: 400px;
  margin: 0 auto;
`;

const H1Wrapper = styled.h1`
  margin: 32px 0;
  text-align: center;
  font-weight: normal;
  font-size: 38px;
  line-height: 45px;
`;

const DescriptionWrapper = styled.div`
  margin: 32px 0;
  text-align: center;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const RegisterComponent = () => {
  const [showConfirmRegistration, setShowConfirmRegistration] = useState(false);
  const [showCongratsActivatePhone, setShowCongratsActivatePhone] = useState(false);

  const confirmPhoneHandler = () => {
    setShowConfirmRegistration(false);
    setShowCongratsActivatePhone(true);
  };

  return (
    <RegisterWrapper>
      <H1Wrapper>Реєстрація</H1Wrapper>
      <DescriptionWrapper>Будь ласка, заповніть всі поля.</DescriptionWrapper>
      <FormInputComponent labelText="Введіть ім’я" id="name" />
      <FormInputComponent labelText="Введіть пароль" id="password" type="password" />
      <FormInputComponent labelText="Введіть номер телефону" id="phone" />

      <ButtonsWrapper>
        <ButtonComponent onClick={() => setShowConfirmRegistration(true)}>Реєстрація</ButtonComponent>
        <LinkButtonComponent to="/login" colors="secondary">Увійти</LinkButtonComponent>
      </ButtonsWrapper>

      {showConfirmRegistration && <ConfirmRegistrationComponent onClose={() => setShowConfirmRegistration(false)} onSend={confirmPhoneHandler}/>}
      {showCongratsActivatePhone && <CongratsActivatePhoneComponent onClose={() => setShowCongratsActivatePhone(false)} />}

    </RegisterWrapper>
  );
}

export { RegisterComponent };
