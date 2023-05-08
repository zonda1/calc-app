import React from 'react';
import styled from 'styled-components';
import { mathSymbols } from '../../const';
import Button from '../Button/Button';

const StyleMathPanel = styled.div`
  grid-area: 3/4/6/6;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  row-gap: 5px;
  column-gap: 5px;
`;

type MathPanelProps={
  mathPanelButtonClick:(e:React.ChangeEvent<HTMLInputElement>)=>void
}

const MathPanel = ({mathPanelButtonClick}:MathPanelProps) => {
  return (
    <StyleMathPanel>
      {mathSymbols.map((el, i) => (
        <Button onClick={mathPanelButtonClick} value={el} key={i}>{el}</Button>
      ))}
    </StyleMathPanel>
  );
};

export default MathPanel;
