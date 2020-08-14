import React from "react";
import styled from "styled-components";
import {CloseButtonComponent} from "../CloseButtonComponent";

const ModalWindowWrapper = styled('div')`
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
  background: #FFFFFF;
  box-shadow: 0px 5px 12px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
  position:relative;
  padding: 40px;
`;

const ModalWindowComponent = ({onClose, children}) => (
  <ModalWindowWrapper>
    <ModalWindow>
      <CloseButtonComponent onClick={onClose} />
      {children}
    </ModalWindow>
  </ModalWindowWrapper>
);

export { ModalWindowComponent };
