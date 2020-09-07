import React, {useState} from 'react';
import moment from 'moment';
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';
import './style.css';

import { StepWrapperComponent } from '../StepWrapperComponent';
import { FormInputComponent } from '../../FormInputComponent';

const StepSecondComponent = () => {
  const [birthDay, setBirthDay] = useState(1599384968 * 1000);
  return (
    <StepWrapperComponent>
      <h2>Дата народження</h2>
      <FormInputComponent labelText="День, місяць, рік." value={null} id="birthDay" type="text" changeValue={() => {}}>
        <DatePicker onChange={(e) => setBirthDay(e.unix().valueOf())} value={moment(birthDay)} />
      </FormInputComponent>
    </StepWrapperComponent>
  );
}

export { StepSecondComponent };
