import React, { useState } from 'react';
import DayPicker from 'react-day-picker';
// import 'react-day-picker/lib/style.css';
import './style.scss';
import styled from 'styled-components';

import { YearMonthFormComponent } from './YearMonthFormComponent';

const YearNavigationWrapper = styled('div')`
  position:absolute;
  background-color: #fff;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.15);
  border-radius: 12px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 24px;
  overflow: hidden;
`;

const currentYear = new Date().getFullYear();
const currentMonth = new Date(currentYear, new Date().getMonth());
const fromMonth = new Date(currentYear - 100, 0);
const toMonth = new Date(currentYear, 11);

const DayPickerComponent = () => {
  const [month, setMonth] = useState(currentMonth);
  const [selectedDay, handleDayClick] = useState(null);

  return (
    <YearNavigationWrapper>
      <DayPicker
        month={month}
        fromMonth={fromMonth}
        toMonth={toMonth}

        onDayClick={handleDayClick}
        selectedDays={selectedDay}
        captionElement={({ date, localeUtils }) => (
          <YearMonthFormComponent
            date={date}
            localeUtils={localeUtils}
            onChange={setMonth}
            fromMonth={fromMonth}
            toMonth={toMonth}
          />
        )}
      />
    </YearNavigationWrapper>
  );
};

export { DayPickerComponent };
