import React from "react";
import styled from "styled-components";

import {LoaderIconComponent} from "./LoaderIconComponent";

const ModalWindowWrapper = styled('div')`
  position: absolute;
  z-index: 9999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255,255,255, .7);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoaderComponent = () => (
  <ModalWindowWrapper>
    <LoaderIconComponent />
  </ModalWindowWrapper>
);

export { LoaderComponent };
