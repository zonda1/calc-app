import { useState } from 'react';
import styled from 'styled-components';
import Input from './components/Input/Input';
import MathPanel from './components/MathPanel/MathPanel';
import NullPanel from './components/NullPanel/NullPanel';
import NumberPanel from './components/NumberPanel/NumberPanel';
import PlusMinusPanel from './components/PlusMinusPanel/PlusMinusPanel';
import GlobalStyles from './global';

const Wrapper = styled.div`
  max-width: 400px;
  margin: 40px auto;
`;

const MainPanel = styled.div`
  position: relative;
  display: grid;
  row-gap: 5px;
  column-gap: 5px;
  justify-content: center;
  grid-template-columns: repeat(5, 50px);
  grid-template-rows: 100px repeat(4, 50px);
  background-color: #fffacd;
  border: 3px solid #000;
  padding: 50px 30px 30px;
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
      setState(`${(state + value).replace(/^00/, '')}`);
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
          setState(String(+storedNum - +state));
          break;
        case 'multiply':
          setState(String(+state * +storedNum));
          break;
        case 'divide':
          setState(!+state ? 'error' : String(+storedNum / +state));
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
        case '\u00D7':
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

  const Title = styled.h1`
    font-size: 35px;
    position: absolute;
    text-transform: uppercase;
    top: 5px;
    left: 25%;
    letter-spacing: 5px;
  `;

  const Strip = styled.div`
    content: '';
    position: absolute;
    background-color: #fff;
    left: 72px;
    top: 26%;
    width: 250px;
    height: 2px;
    z-index: 2;
  `;

  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <MainPanel>
          <Title>my calc</Title>
          <Strip></Strip>
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
