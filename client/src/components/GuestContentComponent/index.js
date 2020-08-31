import React from 'react';

import { HeaderComponent } from '../HeaderComponent';
import { FooterComponent } from '../FooterComponent';
import { ContainerComponent } from '../ContainerComponent';

const GuestContentComponent = ({ children }) => (
  <>
    <HeaderComponent />
    <ContainerComponent grow_v>
      {children}
    </ContainerComponent>
    <FooterComponent />
  </>
);

export { GuestContentComponent };
