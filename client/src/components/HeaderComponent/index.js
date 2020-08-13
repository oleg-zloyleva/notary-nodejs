import React from "react";
import { Link } from "react-router-dom";
import { ContainerComponent } from '../ContainerComponent';

const HeaderComponent = () => (
  <ContainerComponent>
    <Link to='/'>Logo</Link>
  </ContainerComponent>
);

export { HeaderComponent };
