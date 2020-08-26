import React, {useState} from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import {ModalWindowComponent} from "../ModalWindowComponent";
import {FormInputComponent} from "../FormInputComponent";
import {ButtonComponent} from "../ButtonComponent";

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
  margin: 40px auto 32px;
`;

const ButtonWrapper = styled('div')`
  margin: 32px auto 0px;
  display: flex;
  justify-content: center;
`;

const ModalForgotPasswordComponent = ({
  onClose,
  onSend,
}) => {
  const [phone, setPhone] = useState('');
  return (
    <ModalWindowComponent
      onClose={onClose}
    >
      <CircleWrapper />
      <DescriptionWrapper>
        <p>У поле нище треба ввести номер телефону, якай ви вказували при реєстрації.</p>
      </DescriptionWrapper>
      <InputWrapper>
        <FormInputComponent labelText="Номер телефону" id="phone" changeValue={setPhone} value={phone} />
      </InputWrapper>
      <ButtonWrapper>
        <ButtonComponent onClick={() => onSend(phone)}>Відправити</ButtonComponent>
      </ButtonWrapper>
    </ModalWindowComponent>
  );
};

ModalForgotPasswordComponent.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSend: PropTypes.func.isRequired,
};

export { ModalForgotPasswordComponent };
