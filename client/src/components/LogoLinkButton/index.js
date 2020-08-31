import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LogoWrapper = styled('div')`
  width: 260px;
  display: flex;
  justify-content: center;
  align-items: center;
  a{
    text-decoration: none;
  }
`;

const LogoLinkButton = () => (
  <LogoWrapper>
    <Link to="/">Logo</Link>
  </LogoWrapper>
);

export { LogoLinkButton };
