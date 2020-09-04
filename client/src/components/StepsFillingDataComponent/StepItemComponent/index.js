import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StepItemWrapper = styled('li')`
  display: flex;
  align-items: center;
`;

const StepItemNumber = styled('div')`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor:pointer;
  
  border: 1px solid ${(props) => (props.active ? '#777777' : props.filled ? '#333333' : '#E1E0E0')};
  color: ${(props) => (props.active ? '#777777' : props.filled ? '#fff' : '#E1E0E0')};
  background: ${(props) => (props.filled ? '#333333' : props.active ? 'none' : 'none')};
`;

const DividerWrapper = styled('div')`
  background: ${(props) => (props.filled ? '#333333' : '#E1E0E0')};
  width: 40px;
  height: 2px;
  margin: 0 8px;
`;

const StepItemComponent = ({
  el,
  filled = false,
  active = false,
  last = false,
  setActiveStep,
}) => (
  <StepItemWrapper onClick={() => setActiveStep(el)}>
    <StepItemNumber filled={filled} active={active}>
      {el.id}
    </StepItemNumber>
    {!last && <DividerWrapper filled={filled} />}
  </StepItemWrapper>
);

StepItemComponent.propTypes = {
  el: PropTypes.object.isRequired,
  filled: PropTypes.bool,
  active: PropTypes.bool,
  last: PropTypes.bool,
  setActiveStep: PropTypes.func.isRequired,
};

export { StepItemComponent };
