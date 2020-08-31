import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { ModalWindowComponent } from '../ModalWindowComponent';

const CircleWrapper = styled('div')`
  width: 80px;
  height: 80px;
  background: #C4C4C4;
  border-radius: 50%;
  margin: 0 auto 24px;
`;

const DescriptionWrapper = styled('div')`
font-weight: normal;
font-size: 14px;
line-height: 140%;
text-align: center;
color: #333333;
`;

const CongratsActivatePhoneComponent = ({ onClose }) => (
  <ModalWindowComponent
    onClose={onClose}
  >
    <CircleWrapper />
    <DescriptionWrapper>
      <p>Вашу реєстрацію підтверджено!</p>
      <p>Вітаємо Вас у додатку Notary!</p>
    </DescriptionWrapper>
  </ModalWindowComponent>
);

CongratsActivatePhoneComponent.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export { CongratsActivatePhoneComponent };
