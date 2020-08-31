import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { theme } from '../../theme';

const LinkButtonComponentWrapper = styled(Link)`
   display: flex;
   align-items: center;
   justify-content: center;
   cursor:pointer;
   width: 180px;
   height: 48px;
   background: ${(props) => props.background_color};
   border: 1px solid ${(props) => props.border_color};
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

const LinkButtonComponent = ({
  children,
  colors,
  to,
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
    <LinkButtonComponentWrapper
      background_color={backgroundColor}
      border_color={border}
      color={color}
      to={to}
    >
      {children}
    </LinkButtonComponentWrapper>
  );
};

LinkButtonComponent.propTypes = {
  children: PropTypes.node.isRequired,
  colors: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export { LinkButtonComponent };
