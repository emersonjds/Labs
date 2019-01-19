import styled from 'styled-components';

export const Container = styled.aside`
  height: 100%;
  width: 200px;
  background: #121212;
  color: #b3b3b3;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const NewPlaylist = styled.button`
  background: transparent;
  border: 0;
  border-top: 1px solid #282828;
  font-size: 13px;
  color: #b3b3b3;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  cursor: pointer;
  &:hover {
    color: #fff;
  }

  img {
    margin-right: 10px;
  }
`;
