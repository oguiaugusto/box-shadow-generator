import styled from 'styled-components';

const Box = styled.div.attrs(props => ({
  style: {
    backgroundColor: props.bg,
    boxShadow: props.boxShadowCode,
  }
}))`
  align-items: center;
  display: flex;
  height: 200px;
  justify-content: center;
  width: 200px;


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

export { Box };
