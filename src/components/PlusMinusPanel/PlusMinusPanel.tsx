import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';

const StylePlusMinusPanel = styled.div`
  grid-area: 2/4/3/6;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 5px;
`;

type PlusMinusPanelProps = {
  plusMinusButtonClick: () => void;
  eraseButtonClick: () => void;
};

const PlusMinusPanel = ({
  plusMinusButtonClick,
  eraseButtonClick,
}: PlusMinusPanelProps) => {
  return (
    <StylePlusMinusPanel>
      <Button value='minus-toggler' onClick={plusMinusButtonClick}>
        {'+/-'}
      </Button>
      <Button value='eraser' onClick={eraseButtonClick}>
        {'>'}
      </Button>
    </StylePlusMinusPanel>
  );
};

export default PlusMinusPanel;
