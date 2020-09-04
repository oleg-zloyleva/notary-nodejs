import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { theme } from '../../theme';

const ButtonWrapper = styled('button')`
   display: flex;
   align-items: center;
   justify-content: center;
   cursor:pointer;
   width: 180px;
   height: 48px;
   padding: 12px 16px;
   background: ${(props) => props.backgroundColor};
   border: 1px solid ${(props) => props.borderColor};
   border-radius: 10px;
   text-decoration: none;
   color: ${(props) => props.color};
   font-weight: normal;
   font-size: 14px;
   line-height: 16px;
   &:focus{
    outline: none;
   }
`;

const ButtonComponent = ({
  children,
  colors,
  onClick,
  id,
}) => {
  let backgroundColor;
  let border;
  let color;

  switch (colors) {
    case 'primary':
      backgroundColor = theme.primaryBgColor;
      border = theme.primaryBorderColor;
      color = theme.primaryTextColor;
      break;
    case 'secondary':
      backgroundColor = theme.secondaryBgColor;
      border = theme.secondaryBorderColor;
      color = theme.secondaryTextColor;
      break;
    default:
      backgroundColor = theme.primaryBgColor;
      border = theme.primaryBorderColor;
      color = theme.primaryTextColor;
  }
  return (
    <ButtonWrapper
      backgroundColor={backgroundColor}
      borderColor={border}
      primaryTextColor={color}
      onClick={onClick}
      id={id}
    >
      {children}
    </ButtonWrapper>
  );
};

ButtonComponent.propTypes = {
  children: PropTypes.node.isRequired,
  colors: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  id: PropTypes.string,
};

export { ButtonComponent };
