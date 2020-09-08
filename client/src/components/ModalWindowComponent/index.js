import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { CloseButtonComponent } from '../CloseButtonComponent';
import { ModalOverlayComponent } from '../ModalOverlayComponent';

const ModalWindow = styled('div')`
  width: 480px;
  background: #FFFFFF;
  box-shadow: 0px 5px 12px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
  position:relative;
  padding: 40px;
`;

const ModalWindowComponent = ({ onClose, children }) => (
  <ModalOverlayComponent onClose={onClose}>
    <ModalWindow>
      <CloseButtonComponent onClick={onClose} />
      {children}
    </ModalWindow>
  </ModalOverlayComponent>
);

ModalWindowComponent.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export { ModalWindowComponent };
