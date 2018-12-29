import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
  h1 {
    color: #fff;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    margin-bottom: 15px;
    text-transform: uppercase;
  }
`;

export const Form = styled.form`
  display: flex;
  max-width: 400px;
  width: 100%;
  input {
    flex: 1;
    /* utiliza todo o espaço possivel  */
    height: 55px;
    padding: 0 20px;
    background: #fff;
    border: 0;
    font-size: 18px;
    color: #444;
    border-radius: 3px;
    border: ${props => (props.withError ? '2px solid #f00' : 0)};
  }

  button {
    height: 55px;
    padding: 0 20px;
    margin-left: 10px;
    background-color: #63f5b0;
    border: 3px;
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    border-radius: 3px;
    cursor: pointer;
    &:hover {
      background-color: #52d89f;
    }
  }
`;
