import React from 'react';

import { FormInputComponent } from '../../FormInputComponent';
import { ButtonComponent } from '../../ButtonComponent';
import { StepWrapperComponent } from '../StepWrapperComponent';
import { ButtonWrapperComponent } from '../ButtonWrapperComponent';
import img from '../../../assets/svg/arrow-right.svg';

const StepThirdComponent = () => (
  <StepWrapperComponent>
    <h2>Ідентифікаційний код</h2>
    <FormInputComponent labelText="Код з десяти цифр" value={null} id="inn" type="text" changeValue={() => {}} />
    <ButtonWrapperComponent>
      <ButtonComponent colors="secondary">
        Продовжити <img src={img} alt="" />
      </ButtonComponent>
    </ButtonWrapperComponent>
  </StepWrapperComponent>
);

export { StepThirdComponent };
