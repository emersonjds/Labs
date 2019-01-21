import styled from 'styled-components';

export const Container = styled.div`
  height: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #282828;
  padding: 12px;
`;

export const Current = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 48px;
    width: 48px;
  }

  div {
    margin-left: 12px;
    display: flex;
    flex-direction: column;

    span {
      font-size: 13px;
      color: #fff;
    }

    small {
      font-size: 11px;
      color: #b3b3b3;
      margin-top: 5px;
    }
  }
`;

export const Progress = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;

  button {
    margin: 0 15px;
    background: transparent;
    border: 0;
  }
`;

export const Volume = styled.div`
  display: flex;
  margin-right: 20px;
  width: 100px;
  align-items: center;

  img {
    margin-right: 5px;
  }
`;
