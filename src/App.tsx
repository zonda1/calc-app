import { useState } from 'react';
import styled from 'styled-components';
import Input from './components/Input/Input';
import MathPanel from './components/MathPanel/MathPanel';
import NullPanel from './components/NullPanel/NullPanel';
import NumberPanel from './components/NumberPanel/NumberPanel';
import PlusMinusPanel from './components/PlusMinusPanel/PlusMinusPanel';
import GlobalStyles from './global';

const Wrapper = styled.div`
  max-width: 700px;
  margin: 40px auto;
`;

const MainPanel = styled.div`
  display: grid;
  row-gap: 5px;
  column-gap: 5px;
  justify-content: center;
  grid-template-columns: repeat(5, 100px);
  grid-template-rows: 100px repeat(4, 50px);
  background-color: #fffacd;
  border: 3px solid #000;
  padding: 15px;
`;

function App() {
  const [state, setState] = useState<string>('');
  const [mathOper, setMathOper] = useState<string>('');
  const [storedNum, setStoredNum] = useState<string>('');

  const handleNumButton = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(state + e.target.value);
  };

  const handleSetStoredValue = () => {
    setStoredNum(state);
    setState('');
  };

  //Plus-minus Panel Handlers
  const handlePlusMinusButton = () => {
    const arr = state.split(',');
    setState((state) =>
      state.startsWith('-') ? state.slice(1) : ['-', ...arr].join('')
    );
  };
  const handleEraseLastNumButton = () => {
    setState((state) => state.slice(0, -1));
  };

  //Null Panel Handlers
  const handleNullPanelButton = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    const handleNullButton = () => {
      // setState(state + 0);
      setState((state) => (state.startsWith('0') ? state + '' : state + '0'));
    };
    const handleEraseAllNumButton = () => {
      setState('');
      setStoredNum('');
      setMathOper('');
    };
    const handleDotButton = () => {
      setState((state) => (state.includes('.') ? state + '' : state + '.'));
    };

    switch (value) {
      case 'C':
        handleEraseAllNumButton();
        break;
      case '0':
        handleNullButton();
        break;
      case '.':
        handleDotButton();
        break;

      default:
        break;
    }
  };

  //Math Panel Handlers

  const handleMathPanelButton = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    const handlePlusButton = () => {
      setMathOper('plus');
      handleSetStoredValue();
    };
    const handleMinusButton = () => {
      setMathOper('minus');
      handleSetStoredValue();
    };
    const handleMultiplyButton = () => {
      setMathOper('multiply');
      handleSetStoredValue();
    };

    const handleDivideButton = () => {
      setMathOper('divide');
      handleSetStoredValue();
    };

    const handleEqualButton = () => {
      switch (mathOper) {
        case 'plus':
          setState(String(+state + +storedNum));
          break;
        case 'minus':
          setState(String(+state - +storedNum));
          break;
        case 'multiply':
          setState(String(+state * +storedNum));
          break;
        case 'divide':
          setState(String(+state / +storedNum));
          break;
        default:
          break;
      }
      setStoredNum('');
      setMathOper('');
    };
    if (state) {
      switch (value) {
        case '+':
          handlePlusButton();
          break;
        case '-':
          handleMinusButton();
          break;
        case '*':
          handleMultiplyButton();
          break;
        case '/':
          handleDivideButton();
          break;
        case '=':
          handleEqualButton();
          break;
        default:
          break;
      }
    }
  };

  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <MainPanel>
          <Input type='text' value={state} readOnly></Input>

          <NumberPanel buttonClick={handleNumButton} />

          <NullPanel nullPanelButtonClick={handleNullPanelButton} />

          <PlusMinusPanel
            plusMinusButtonClick={handlePlusMinusButton}
            eraseButtonClick={handleEraseLastNumButton}
          />

          <MathPanel mathPanelButtonClick={handleMathPanelButton} />
        </MainPanel>
      </Wrapper>
    </>
  );
}

export default App;
