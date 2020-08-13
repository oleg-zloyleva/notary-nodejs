import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from '../../theme';

const LinkButtonComponentWrapper = styled(Link)`
   display: flex;
   align-items: center;
   justify-content: center;
   cursor:pointer;
   width: 180px;
   height: 48px;
   margin: 0 20px;
   background: ${props => props.backgroundColor};
   border: 1px solid ${props => props.borderColor};
   border-radius: 10px;
   text-decoration: none;
   color: ${props => props.color};
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
   let backgroundColor, border, color;

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
       backgroundColor={backgroundColor}
       borderColor={border}
       color={color}
       primaryTextColor={color}
       to={to}
     >
        {children}
     </LinkButtonComponentWrapper>
   );
}

export { LinkButtonComponent };