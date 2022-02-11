import styled from 'styled-components';

const Box = styled.div.attrs(props => ({
  style: {
    backgroundColor: props.bg,
    boxShadow: props.boxShadowCode,
  }
}))
`
  align-items: center;
  display: flex;
  height: 300px;
  justify-content: center;
  width: 300px;
  margin: 1rem 0;

  input[type=color] {
    background: none;
    border: 1px solid #eee;
    cursor: pointer;
    outline: none;
    padding: 0;
    height: 50px;
    width: 50px;
    box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.2);
    -webkit-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.2);
  }
`;

const InputRange = styled.input`
  height: 32px;
  -webkit-appearance: none;
  width: 320px;
  background: #eee;

  :focus {
    outline: none;
  }

  :active::-webkit-slider-thumb {
    background: #EEE;
  }

  ::-webkit-slider-runnable-track {
    width: 100%;
    height: 16px;
    cursor: pointer;
    animation: 0.2s;
    box-shadow: 0px 0px 0px #000000;
    background: #D9D9D9;
    border-radius: 25px;
    border: 1px solid #A6A6A6;
  }

  ::-webkit-slider-thumb {
    box-shadow: 1px 1px 1px #A3A3A3;
    border: 1px solid #A3A3A3;
    height: 24px;
    width: 35px;
    border-radius: 6px;
    background: #F7F7F7;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -5px;
  }

  :focus::-webkit-slider-runnable-track {
    background: #D9D9D9;
  }

  ::-moz-range-track {
    width: 100%;
    height: 16px;
    cursor: pointer;
    animation: 0.2s;
    box-shadow: 0px 0px 0px #000000;
    background: #D9D9D9;
    border-radius: 25px;
    border: 1px solid #A6A6A6;
  }

  ::-moz-range-thumb {
    box-shadow: 1px 1px 1px #A3A3A3;
    border: 1px solid #A3A3A3;
    height: 24px;
    width: 35px;
    border-radius: 6px;
    background: #F7F7F7;
    cursor: pointer;
  }

  ::-ms-track {
    width: 100%;
    height: 16px;
    cursor: pointer;
    animation: 0.2s;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }

  ::-ms-fill-lower {
    background: #D9D9D9;
    border: 1px solid #A6A6A6;
    border-radius: 50px;
    box-shadow: 0px 0px 0px #000000;
  }

  ::-ms-fill-upper {
    background: #D9D9D9;
    border: 1px solid #A6A6A6;
    border-radius: 50px;
    box-shadow: 0px 0px 0px #000000;
  }

  ::-ms-thumb {
    margin-top: 1px;
    box-shadow: 1px 1px 1px #A3A3A3;
    border: 1px solid #A3A3A3;
    height: 24px;
    width: 35px;
    border-radius: 6px;
    background: #F7F7F7;
    cursor: pointer;
  }

  :focus::-ms-fill-lower {
    background: #D9D9D9;
  }

  :focus::-ms-fill-upper {
    background: #D9D9D9;
  }
`;

const PropertyStyled = styled.div`
  margin: 0.8rem 0;
  width: 400px;

  .property-row {
    display: flex;
  }

  .property-input {
    display: flex;
    align-items: center;
  }

  .property-input .input-value {
    width: 40px;
    height: 20px;
    background: none;
    border: none;
    border-bottom: 1px solid #c5c5c5;
    text-align: center;
    margin: 0 0.3rem 0 1rem;
  }

  .property-input .input-value:focus {
    outline: none;
    border-bottom: 2px solid #bdbdbd;
  }
`;

const ColorPropertyStyled = styled.div`
  display: flex;
  margin-top: 10px;
  width: 400px;
  justify-content: space-between;

  input {
    width: 340px;
    border: none;
    border-radius: 1rem;
    box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.2);
    -webkit-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.2);
  }
`;

const CodeBlockStyled = styled.code`
  background-color: #353535;
  color: #eee;
  padding: 1rem;
  border-radius: 10px;
  border-top-right-radius: 0;
  font-size: 11px;
  display: flex;
  flex-flow: column nowrap;
  margin: 1rem 0 0;
  position: relative;

  button {
    position: absolute;
    background-color: #eee;
    color: #353535;
    border: 1px solid #353535;
    right: 0;
    top: -12px;
    font-size: 8px;
    cursor: pointer;
    transition-duration: 200ms;
  }

  button:hover {
    color: #eee;
    background-color: #353535;
  }

  button:active {
    color: #ebebeb;
    background-color: #353535;
  }

  .code-key {
    color: #f0b852;
  }

  .code-value {
    color: #c1f1c8;
  }
`;

export { Box, PropertyStyled, ColorPropertyStyled, CodeBlockStyled, InputRange };
