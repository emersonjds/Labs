import styled from 'styled-components';

import { Spinner } from '../Loading/styles';

export const Container = styled.aside`
  height: 100%;
  width: 200px;
  background: #121212;
  color: #b3b3b3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  /* pegar primeira div  */
  > div {
    padding: 0 25px;
  }
`;

export const Nav = styled.ul`
  list-style: none;
  margin-top: 28px;

  & :first-child {
    margin-top: 0;
  }

  li {
    display: flex;
    align-items: center;

    a {
      color: inherit;
      text-decoration: none;
      line-height: 32px;
      font-size: 13px;
      font-weight: ${props => (props.main ? 'bold' : 'normal')};
    }

    &:hover {
      color: #fff;
    }

    span {
      font-size: 11px;
      text-transform: uppercase;
      line-height: 22px;
      letter-spacing: 1.11px;
      font-weight: light;
    }

    ${Spinner} {
      height: 15px;
      margin-left: 5px;
    }
  }
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
