import React from 'react';
import styled from 'styled-components';
import { nullArr } from '../../const';
import Button from '../Button/Button';

const StyleNullPanel = styled.div`
  grid-area: 5/1/6/4;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 5px;
`;

type NullPanelProps = {
  nullPanelButtonClick: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const NullPanel = ({ nullPanelButtonClick }: NullPanelProps): JSX.Element => {
  return (
    <StyleNullPanel>
      {nullArr.map((el, i) => (
        <Button value={el} key={i} numColor={el==='C'?false:true} numBgColor={el==='C'?'#fa0718':''} onClick={nullPanelButtonClick}>
          {el}
        </Button>
      ))}
    </StyleNullPanel>
  );
};

export default NullPanel;
