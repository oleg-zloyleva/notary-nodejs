import React from "react";
import styled from "styled-components";

import { CloseButtonComponent } from '../CloseButtonComponent';

const ConfirmRegistrationWrapper = styled('div')`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255,255,255, .7);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalWindow  = styled('div')`
  width: 480px;
  height: 417px;
  background: #FFFFFF;
  box-shadow: 0px 5px 12px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
  position:relative;
`;

const CircleWrapper = styled('div')`
  width: 80px;
  height: 80px;
  background: #C4C4C4;
  border-radius: 50%;
  margin: 40px auto 24px;
`;

const DescriptionWrapper = styled('div')`
font-weight: normal;
font-size: 14px;
line-height: 140%;
text-align: center;
color: #333333;
`;

const ConfirmRegistrationComponent = ({
  onClose
}) => (
  <ConfirmRegistrationWrapper>
    <ModalWindow>
      <CloseButtonComponent onClick={onClose} />
      <CircleWrapper />
      <DescriptionWrapper>
        <p>На вказаний вами номер телефону було відправлено код.</p>
        <p>Будь ласка, введіть код у форму нищє.</p>
      </DescriptionWrapper>
    </ModalWindow>
  </ConfirmRegistrationWrapper>
);

export { ConfirmRegistrationComponent };
