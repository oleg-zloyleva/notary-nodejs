import React, {useState} from "react";
import {useHistory} from "react-router-dom";

import { FormInputComponent } from '../../components/FormInputComponent';
import { ButtonComponent } from '../../components/ButtonComponent';
import { LinkButtonComponent } from '../../components/LinkButtonComponent';
import { ModalSendSMSCodeComponent } from '../../components/ModalSendSMSCodeComponent';
import {CongratsActivatePhoneComponent} from "../../components/CongratsActivatePhoneComponent";

import {ColWrapper} from "../../styledComonents/ColWrapper";
import {H2Wrapper} from "../../styledComonents/H2Wrapper";
import {DescriptionWrapper} from "../../styledComonents/DescriptionWrapper"
import {ButtonsAuthWrapper} from "../../styledComonents/ButtonsAuthWrapper"
import {GuestContentComponent} from "../../components/GuestContentComponent";
import {useDispatch} from "react-redux";
import {activateUserFetchAction, registerFetchAction} from "../../store/actions/authActionsCreators";

const RegisterComponent = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const [showConfirmRegistration, setShowConfirmRegistration] = useState(false);
  const [showCongratsActivatePhone, setShowCongratsActivatePhone] = useState(false);

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [sms_code, setSMSCodeHandler] = useState('');

  const registrationHandler = async () => {
    try{
      await dispatch(registerFetchAction({name, password, phone}));
      await setShowConfirmRegistration(true);
    }
    catch (e) {
      console.log(e.data, e.status)
    }
  };

  const confirmPhoneHandler = async () => {
    await dispatch(activateUserFetchAction({sms_code}));
    await setSMSCodeHandler('');
    await setShowConfirmRegistration(false);
    await setShowCongratsActivatePhone(true);

    await setTimeout(async () => {
      console.log('setTimeout');
      await setShowCongratsActivatePhone(false);
      history.push('/profile');
    }, 1000);
  };

  const closeConfirmRegistrationWindow = async () => {
    await setSMSCodeHandler('');
    await setShowConfirmRegistration(false)
  };

  return (
    <GuestContentComponent>
      <ColWrapper>
        <H2Wrapper>Реєстрація</H2Wrapper>
        <DescriptionWrapper>Будь ласка, заповніть всі поля.</DescriptionWrapper>
        <FormInputComponent labelText="Введіть ім’я" id="name" value={name} changeValue={setName} />
        <FormInputComponent labelText="Введіть пароль" id="password" type="password" value={password} changeValue={setPassword} />
        <FormInputComponent labelText="Введіть номер телефону" id="phone" value={phone} changeValue={setPhone} />

        <ButtonsAuthWrapper>
          <ButtonComponent onClick={registrationHandler}>Реєстрація</ButtonComponent>
          <LinkButtonComponent to="/login" colors="secondary">Увійти</LinkButtonComponent>
        </ButtonsAuthWrapper>

        {showConfirmRegistration && <ModalSendSMSCodeComponent onClose={closeConfirmRegistrationWindow} onSend={confirmPhoneHandler} setSMSCodeHandler={setSMSCodeHandler} sms_code={sms_code} />}
        {showCongratsActivatePhone && <CongratsActivatePhoneComponent onClose={() => setShowCongratsActivatePhone(false)} />}
      </ColWrapper>
    </GuestContentComponent>
  );
};

export { RegisterComponent };
