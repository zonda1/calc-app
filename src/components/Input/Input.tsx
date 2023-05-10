import React from 'react';
import styled from 'styled-components';

type InputProps = {
  value: string;
  type: string;
  readOnly: boolean;
};

const StyleInput = styled.input<InputProps>`
  position: relative;
  text-align: right;
  grid-area: 1/1/2/6;
  background-color: #e0d7d7;
  border: 3px solid #636161;
  border-radius: 6px;
  font-size: 30px;
  font-weight: 600;
  padding: 0 5px;
  margin-bottom: 20px;
`;

const Input = (props: InputProps) => {
  return <StyleInput {...props}></StyleInput>;
};

export default Input;
