import React, { useState } from 'react';
import styled from 'styled-components';
import chunk from 'lodash/chunk';

import caret from '../../../assets/svg/caret-down.svg';

const DayPickerCaptionWrapper = styled('div')`
  
`;

const SelectMonthYearWrapper = styled('div')`
  display: flex;
  align-items: center;
  cursor:pointer;
`;

const SelectMonthYearAreaWrapper = styled('div')`
  position: absolute;
  background: #fff;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
`;

const SelectYearAreaWrapper = styled('div')`
  display: flex;
  align-items: center;
  padding: 24px;  
  border-bottom: 1px solid #ccc;
`;

const SelectMonthAreaWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const RowWrapper = styled('div')`
  display: flex;
  justify-content: space-around;
  flex: 1;
`;

const MonthItemWrapper = styled('div')`
  padding: 24px;
  flex: 1;
  display: flex;
  justify-content: center;
  cursor:pointer;
  &:hover{
    background-color: #ccc;
    color: #fff;
  }
`;

const ButtonWrapper = styled('button')`
  border: none;
  background: unset;
  width: 24px;
  height: 24px;
  margin: 0;
  padding: 0;
  cursor:pointer;
`;

const YearMonthFormComponent = ({
  date, localeUtils, onChange, fromMonth, toMonth,
}) => {
  const [showMonthYearSelect, setShowMonthYearSelect] = useState(false);
  const months = localeUtils.getMonths();

  const years = [];
  for (let i = fromMonth.getFullYear(); i <= toMonth.getFullYear(); i += 1) {
    years.push(i);
  }

  return (
    <DayPickerCaptionWrapper>
      <SelectMonthYearWrapper onClick={() => setShowMonthYearSelect(true)}>
        <div>{months[date.getMonth()]}</div>
        <div>{date.getFullYear()}</div>
        <ButtonWrapper type="button">
          <img src={caret} alt="" />
        </ButtonWrapper>
      </SelectMonthYearWrapper>
      {
        showMonthYearSelect && (
          <SelectMonthYearAreaWrapper>
            <SelectYearAreaWrapper>
              <ButtonWrapper onClick={() => onChange(new Date(date.getFullYear() - 1, date.getMonth()))}>-</ButtonWrapper>
              <div>{date.getFullYear()}</div>
              <ButtonWrapper onClick={() => onChange(new Date(date.getFullYear() + 1, date.getMonth()))}>+</ButtonWrapper>
            </SelectYearAreaWrapper>
            <SelectMonthAreaWrapper>
              {
                chunk(months, 3).map((row, r) => (
                  <RowWrapper>
                    {
                      row.map((month, i) => (
                        <MonthItemWrapper key={month} value={i} onClick={() => onChange(new Date(date.getFullYear(), (r + 4) + i))}>
                          {month.slice(0, 3)}
                        </MonthItemWrapper>
                      ))
                    }
                  </RowWrapper>
                ))
              }
            </SelectMonthAreaWrapper>
          </SelectMonthYearAreaWrapper>
        )
      }
    </DayPickerCaptionWrapper>
  );
};

export { YearMonthFormComponent };i
