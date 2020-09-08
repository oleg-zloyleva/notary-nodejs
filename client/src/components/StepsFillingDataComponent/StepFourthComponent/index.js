import React from 'react';
import styled from 'styled-components';

import { FormInputComponent } from '../../FormInputComponent';
import { ButtonComponent } from '../../ButtonComponent';
import { StepWrapperComponent } from '../StepWrapperComponent';
import { ButtonWrapperComponent } from '../ButtonWrapperComponent';
import img from '../../../assets/svg/arrow-right.svg';

const InputsWrapper = styled('div')`
  display: flex;
`;

const StepFourthComponent = () => (
  <StepWrapperComponent width={600}>
    <h2>Паспортні данні</h2>
    <InputsWrapper>
      <FormInputComponent labelText="Серія" value={null} id="secondName" type="text" changeValue={() => {}} mr={3} width={180} />
      <FormInputComponent labelText="Номер" value={null} id="firstName" type="text" changeValue={() => {}} flexGrow={1} />
    </InputsWrapper>
    <FormInputComponent labelText="Ким і коли виданий" value={null} id="patronymic" type="text" changeValue={() => {}} textarea />
    <ButtonWrapperComponent>
      <ButtonComponent colors="secondary">
        Продовжити <img src={img} alt="" />
      </ButtonComponent>
    </ButtonWrapperComponent>
  </StepWrapperComponent>
);

export { StepFourthComponent };
