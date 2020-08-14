import React from "react";
import styled from "styled-components";

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
  justify-content: center;
`;

const ConfirmRegistrationComponent = ({
  onClose,
  onSend,
}) => (
  <ModalWindowComponent
    onClose={onClose}
    onSend={onSend}
  >
    <CircleWrapper />
    <DescriptionWrapper>
      <p>На вказаний вами номер телефону було відправлено код.</p>
      <p>Будь ласка, введіть код у форму нищє.</p>
    </DescriptionWrapper>
    <InputWrapper>
      <FormInputComponent labelText="Код з СМС" id="sms_code" />
    </InputWrapper>
    <ButtonWrapper>
      <ButtonComponent onClick={onSend}>Відправити</ButtonComponent>
    </ButtonWrapper>
  </ModalWindowComponent>
);

export { ConfirmRegistrationComponent };
