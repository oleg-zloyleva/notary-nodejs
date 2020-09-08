import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { theme } from '../../theme';

const FormInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  &:not(:last-child){
    margin-bottom: 24px;
  }
  ${(props) => props.mr && `margin-right: calc(var(--indent) *${props.mr});`}
  ${(props) => props.width && `width: ${props.width}px;`}
  ${(props) => props.flexGrow && `flex-grow: ${props.flexGrow};`}
`;

const LabelWrapper = styled.label`
  font-weight: 600;
  font-size: 14px;
  color: ${(props) => (props.primaryTextColor ? theme[props.primaryTextColor] : theme.primaryTextColor)};
  margin-bottom: 8px;
`;

const InputWrapper = styled.input`
  border: 1px solid #C8C8C8;
  border-radius: 10px;
  width: 100%;
  height: 48px;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  padding: 16px;
  &:focus{
    outline: none;
   }
`;

const TextareaWrapper = styled('textarea')`
  border: 1px solid #C8C8C8;
  border-radius: 10px;
  width: 100%;
  //height: 48px;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  padding: 16px;
  &:focus{
    outline: none;
  }
  resize: none;
`;

const InputContainerWrapper = styled('div')`
  position:relative;
`;

const IconWrapper = styled('div')`
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translate(0, -50%);
    cursor:pointer;
`;

const FormInputComponent = ({
  labelText, id, type, primaryTextColor, value, changeValue, children, mr, width, flexGrow, textarea,
}) => (
  <FormInputWrapper mr={mr} width={width} flexGrow={flexGrow}>
    <LabelWrapper htmlFor={id} primaryTextColor={primaryTextColor}>{labelText}</LabelWrapper>
    <InputContainerWrapper>
      {
        textarea ? (
          <TextareaWrapper id={id} onChange={(e) => changeValue(e.target.value)} rows={3}>{value}</TextareaWrapper>
        ) : (
          <InputWrapper type={type || 'text'} id={id} value={value} onChange={(e) => changeValue(e.target.value)} />
        )
      }
      <IconWrapper>
        {children}
      </IconWrapper>
    </InputContainerWrapper>
  </FormInputWrapper>
);

FormInputComponent.propTypes = {
  labelText: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  primaryTextColor: PropTypes.string,
  value: PropTypes.string.isRequired,
  changeValue: PropTypes.func.isRequired,
};

export { FormInputComponent };
