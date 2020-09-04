import React from 'react';

import { StepWrapperComponent } from '../StepWrapperComponent';
import { FormInputComponent } from '../../FormInputComponent';
import { DayPickerComponent } from '../../DayPickerComponent';

const StepSecondComponent = () => (
  <StepWrapperComponent>
    <h2>Дата народження</h2>
    <FormInputComponent labelText="День, місяць, рік." value={null} id="birthDay" type="text" changeValue={() => {}} />
    <DayPickerComponent />
  </StepWrapperComponent>
);

export { StepSecondComponent };
