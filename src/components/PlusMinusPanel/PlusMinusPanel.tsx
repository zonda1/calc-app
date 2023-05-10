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
      <Button
        value='minus-toggler'
        numBgColor={'#8a99d1'}
        onClick={plusMinusButtonClick}
      >
        {'+/-'}
      </Button>
      <Button value='eraser' numBgColor={'#8a99d1'} onClick={eraseButtonClick}>
        {'>'}
      </Button>
    </StylePlusMinusPanel>
  );
};

export default PlusMinusPanel;
