import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import svg from './close.svg';

const CloseButtonWrapper = styled('div')`
  position:absolute;
  top: 16px;
  right: 16px;
  cursor:pointer;
`;

const CloseButtonComponent = ({ onClick }) => (
  <CloseButtonWrapper onClick={onClick}>
    <img src={svg} alt="Close" />
  </CloseButtonWrapper>
);

CloseButtonComponent.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export { CloseButtonComponent };
