import React from "react";
import styled from "styled-components";

const ConfirmRegistrationWrapper = styled('div')`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255,255,255, .7);
`;

const ConfirmRegistrationComponent = () => (
  <ConfirmRegistrationWrapper>
    modal
  </ConfirmRegistrationWrapper>
);

export { ConfirmRegistrationComponent };
