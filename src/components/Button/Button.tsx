import styled from 'styled-components';
import React from 'react';

type ButtonProps={
    num?:boolean,
    value?:string,
    onClick?:(e:any)=>void,
    children:number|string
}

export const StyledButton=styled.button<ButtonProps>`
background:${props=>props.num?'#8FBC8F':'#E9967A'};
color:${props=>props.num?'#483D8B':'white'};
font-size:24px;
padding:10px;
border:2px solid #DCDCDC;
border-radius: 2px;
`;


const Button = (props:ButtonProps):JSX.Element => {
    return (
       <StyledButton {...props}>{props.children}</StyledButton>
    );
};

export default Button;

