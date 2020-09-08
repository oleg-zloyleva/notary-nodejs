import React, { useState } from 'react';

import { StepWrapperComponent } from '../StepWrapperComponent';
import { FormInputComponent } from '../../FormInputComponent';
import { DayPickerComponent } from '../../DayPickerComponent';
import calendar from '../../../assets/svg/calendar.svg';
import { ModalOverlayComponent } from '../../ModalOverlayComponent';

const StepSecondComponent = () => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  return (
    <StepWrapperComponent>
      <h2>Дата народження</h2>
      <FormInputComponent
        labelText="День, місяць, рік."
        value={null}
        id="birthDay"
        type="text"
        changeValue={() => {}}
        children={(<img src={calendar} onClick={() => setShowDatePicker(true)} />)}
      />
      {showDatePicker && (
        <ModalOverlayComponent onClose={() => setShowDatePicker(false)}>
          <DayPickerComponent />
        </ModalOverlayComponent>
      )}
    </StepWrapperComponent>
  );
};

export { StepSecondComponent };
