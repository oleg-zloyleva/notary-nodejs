import React from 'react';

import { FormInputComponent } from '../../FormInputComponent';
import { ButtonComponent } from '../../ButtonComponent';
import { StepWrapperComponent } from '../StepWrapperComponent';
import { ButtonWrapperComponent } from '../ButtonWrapperComponent';
import img from '../../../assets/svg/arrow-right.svg';

const StepFirstComponent = () => (
  <StepWrapperComponent>
    <h2>Прізвище, ім’я, по батькові</h2>
    <FormInputComponent labelText="Прізвище" value={null} id="secondName" type="text" changeValue={() => {}} />
    <FormInputComponent labelText="Ім’я" value={null} id="firstName" type="text" changeValue={() => {}} />
    <FormInputComponent labelText="По батькові" value={null} id="patronymic" type="text" changeValue={() => {}} />
    <ButtonWrapperComponent>
      <ButtonComponent colors="secondary">
        Продовжити <img src={img} alt="" />
      </ButtonComponent>
    </ButtonWrapperComponent>
  </StepWrapperComponent>
);

export { StepFirstComponent };
