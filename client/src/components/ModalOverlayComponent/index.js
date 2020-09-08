import React, { useRef } from 'react';
import styled from 'styled-components';

const ModalWindowOverlayWrapper = styled('div')`
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

const ModalOverlayComponent = ({ children, onClose }) => {
  const inputEl = useRef(null);

  const closeHandler = (e) => {
    if (e.target === inputEl.current) onClose();
  };
  return (
    <ModalWindowOverlayWrapper ref={inputEl} onClick={closeHandler}>
      {children}
    </ModalWindowOverlayWrapper>
  );
};

export { ModalOverlayComponent };
