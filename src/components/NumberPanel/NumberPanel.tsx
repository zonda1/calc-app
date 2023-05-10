import styled from 'styled-components';

import React from 'react';
import { makeNums } from '../../utils/utils';
import Button from '../Button/Button';


const StyleNumberPanel = styled.div`
  grid-area: 2/1/5/4;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  row-gap: 5px;
  column-gap: 5px;
`;
type NumberPanelProps={
    buttonClick:(e:React.ChangeEvent<HTMLInputElement>)=>void
}

const NumberPanel = ({buttonClick}:NumberPanelProps):JSX.Element => {
    const nums = makeNums();
    return (
       <StyleNumberPanel>
              {nums.map((el, i) => (
              <Button onClick={buttonClick} numColor key={i} value={String(el)}>
                {el}
              </Button>
            ))}
       </StyleNumberPanel>
    );
};

export default NumberPanel;