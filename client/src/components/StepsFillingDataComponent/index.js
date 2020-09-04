import React, { useState } from 'react';
import styled from 'styled-components';

import { StepItemComponent } from './StepItemComponent';
import { StepFirstComponent } from './StepFirstComponent';
import { StepSecondComponent } from './StepSecondComponent';
import { StepThirdComponent } from './StepThirdComponent';
import { StepFourthComponent } from './StepFourthComponent';
import { StepFifthComponent } from './StepFifthComponent';

const StepsFillingDataWrapper = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 1;
  position:relative;
`;

const StepCounterWrapper = styled('ul')`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
`;

const StepsFillingDataComponent = () => {
  const [steps, setStepsStatus] = useState([
    {
      id: 1, filled: true, active: false, component: (<StepFirstComponent />),
    },
    {
      id: 2, filled: true, active: true, component: (<StepSecondComponent />),
    },
    {
      id: 3, filled: false, active: false, component: (<StepThirdComponent />),
    },
    {
      id: 4, filled: false, active: false, component: (<StepFourthComponent />),
    },
    {
      id: 5, filled: false, active: false, component: (<StepFifthComponent />),
    },
  ]);

  const setActiveStep = async (item) => {
    console.log('setActiveStep', item);
    await setStepsStatus(steps.map((el) => (el.id === item.id ? ({ ...el, active: true }) : ({ ...el, active: false }))));
  };

  return (
    <StepsFillingDataWrapper>

      <h1>Етапи заповнення даних</h1>
      <p>Будь ласка, заповніть наступні поля.</p>

      <StepCounterWrapper>
        {
          steps.map((el, i) => (
            <StepItemComponent
              key={el.id}
              el={el}
              filled={el.filled}
              active={el.active}
              last={steps.length - 1 === i}
              setActiveStep={setActiveStep}
            />
          ))
        }
      </StepCounterWrapper>
      {
        steps.filter((el) => el.active)[0]?.component || (<div>Wrong data</div>)
      }

    </StepsFillingDataWrapper>
  );
};

export { StepsFillingDataComponent };
