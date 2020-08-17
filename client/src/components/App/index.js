import React from 'react';
import { HeaderComponent } from '../HeaderComponent';
import { ContentComponent } from '../ContentComponent';
import { FooterComponent } from '../FooterComponent';

const App = () => {
  // todo: on refresh page - get data from localStorage to Redux store
  return (
    <>
      <HeaderComponent />
      <ContentComponent />
      <FooterComponent />
    </>
  );
};

export { App };
