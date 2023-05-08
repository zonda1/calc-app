import React from 'react';
import styled from 'styled-components';

type InputProps={
    value: string,
    type:string,
    readOnly:boolean
}

const StyleInput = styled.input<InputProps>`
  grid-area: 1/1/2/6;
`;

const Input = (props:InputProps) => {
    return (
        <StyleInput {...props}></StyleInput>
    );
};

export default Input;