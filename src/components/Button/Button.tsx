import styled from 'styled-components';


type ButtonProps={
    numBgColor?:string,
    numColor?:boolean
    value?:string,
    onClick?:(e:any)=>void,
    children:number|string
}

export const StyledButton=styled.button<ButtonProps>`
background:${props=>props.numBgColor ||'#c3cae3'};
color:${props=>props.numColor?'#483D8B':'#fff'};
font-size:24px;
padding:5px;
border:2px solid #636161;
border-radius: 3px;
`;


const Button = (props:ButtonProps):JSX.Element => {
    return (
       <StyledButton {...props}>{props.children}</StyledButton>
    );
};

export default Button;

