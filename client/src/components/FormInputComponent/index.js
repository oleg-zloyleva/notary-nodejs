import React from "react";
import styled from "styled-components";
import { theme } from '../../theme';

const FormInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  &:not(:last-child){
    margin-bottom: 24px;
  }
`;

const LabelWrapper = styled.label`
  font-weight: 500;
  font-size: 14px;
  color: ${props => props.primaryTextColor ? theme[props.primaryTextColor] : theme.primaryTextColor};
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
  padding: 0 5px;
`;

const FormInputComponent = ({labelText, id, type, primaryTextColor}) => (
  <FormInputWrapper>
    <LabelWrapper htmlFor={id} primaryTextColor={primaryTextColor}>{labelText}</LabelWrapper>
    <InputWrapper type={type?type:"text"} id={id} />
  </FormInputWrapper>
);

export { FormInputComponent };
