import React, {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import styled from "styled-components";
import { useRouteMatch } from "react-router-dom";

const LiWrapper = styled('li')`
  
`;

const NavLinkWrapper = styled(NavLink)`
  text-decoration: unset;
  color: #333333;
  display: flex;
  align-items: center;
  padding: 16px 8px;
  &.selected{
    background: #C4C4C4;
    color: #fff;
  }
  svg{
    margin-right: 16px;
  }
`;

const SideBarUserMenuItem = ({title, path, Icon}) => {
  const [iconColor, setIconColor] = useState('#777');
  const match = useRouteMatch(`/profile/${path}`);
  useEffect(() => setIconColor(Boolean(match)?'#fff':'#777'));

  return (
    <LiWrapper>
      <NavLinkWrapper
        to={`/profile/${path}`}
        activeClassName="selected"
      >
        <Icon color={iconColor} /> {title}
      </NavLinkWrapper>
    </LiWrapper>
  );
};

export { SideBarUserMenuItem };
