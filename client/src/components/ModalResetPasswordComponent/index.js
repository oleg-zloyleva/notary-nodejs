import React, {useState} from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';

import {FormInputComponent} from "../FormInputComponent";
import {ButtonComponent} from "../ButtonComponent";
import {ModalWindowComponent} from "../ModalWindowComponent";

const CircleWrapper = styled('div')`
  width: 80px;
  height: 80px;
  background: #C4C4C4;
  border-radius: 50%;
  margin: 0px auto 24px;
`;

const DescriptionWrapper = styled('div')`
font-weight: normal;
font-size: 14px;
line-height: 140%;
text-align: center;
color: #333333;
`;

const InputWrapper = styled('div')`
  width: 400px;
  margin: 58px auto 32px;
`;

const ButtonWrapper = styled('div')`
  margin: 32px auto 0px;
  display: flex;
  justify-content: space-between;
  width: 400px;
`;

const ModalResetPasswordComponent = ({
  onClose,
  onSend,
  onReSend,
  sms_code,
  setSMSCodeHandler,
  extraButton,
  validCode,
  password,
  setPassword,
}) => {
  const [newPassword, setNewPassword] = useState('');
  return (
    <ModalWindowComponent
      onClose={onClose}
    >
      <CircleWrapper />
      <DescriptionWrapper>
        {
          validCode ?
            (
              <p>Будь ласка вигадайте новий пароль</p>
            ) :
            (
              <>
                <p>На вказаний вами номер телефону було відправлено код.</p>
                <p>Будь ласка, введіть код у форму нищє.</p>
              </>
            )
        }
      </DescriptionWrapper>
      <InputWrapper>
        <FormInputComponent labelText="Код з СМС" id="sms_code" changeValue={setSMSCodeHandler} value={sms_code} />
        {
          validCode && (
            <>
              <FormInputComponent labelText="Введіть новий пароль" id="password" changeValue={setPassword} value={password} type="password" />
              {/*<FormInputComponent labelText="Підтвердіть новий пароль" id="new_password" changeValue={setNewPassword} value={newPassword} />*/}
            </>
          )
        }
      </InputWrapper>

      <ButtonWrapper align={!!extraButton}>
        <ButtonComponent onClick={onSend}>Відправити</ButtonComponent>
        {!validCode && <ButtonComponent onClick={onReSend} colors={'secondary'}>Отримати повторно</ButtonComponent>}
      </ButtonWrapper>
    </ModalWindowComponent>
  );
};

ModalResetPasswordComponent.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSend: PropTypes.func.isRequired,
  sms_code: PropTypes.string.isRequired,
  setSMSCodeHandler: PropTypes.func.isRequired,
};

export { ModalResetPasswordComponent };
